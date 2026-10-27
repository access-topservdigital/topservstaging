"use client";

import Link from "next/link";
import { Fragment, useEffect, useState } from "react";
import { ArrowRight } from "lucide-react";
import {
  AnimatePresence,
  motion,
  type Variants,
} from "motion/react";
import { Button } from "@/components/ui/button";
import { EcosystemOrbit } from "@/components/sections/ecosystem-orbit";
import { cn } from "@/lib/utils";

const EASE_OUT = [0.22, 1, 0.36, 1] as const;

/**
 * The one line from the build spec, tokenized for word-by-word animation.
 * Tokens keep punctuation attached so nothing wraps orphaned; accent words
 * carry the light-sweep animation with sheenDelay timing the glint to travel
 * in reading order, starting after the entrance cascade lands.
 */
type Part = { t: string; accent?: boolean; sheenDelay?: number };
const HEADLINE: Part[][] = [
  [{ t: "Stop" }],
  [{ t: "chasing" }],
  [{ t: "leads", accent: true, sheenDelay: 1.2 }, { t: "." }],
  [{ t: "Start" }],
  [{ t: "building" }],
  [{ t: "a" }],
  [{ t: "brand", accent: true, sheenDelay: 1.7 }],
  [{ t: "customers" }],
  [{ t: "choose", accent: true, sheenDelay: 2.1 }, { t: "." }],
];

const TRADES = [
  "HVAC",
  "plumbing",
  "roofing",
  "electrical",
  "garage doors",
  "pest control",
] as const;

const container: Variants = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.05, delayChildren: 0.15 },
  },
};

const wordReveal: Variants = {
  hidden: { opacity: 0, y: "115%" },
  show: {
    opacity: 1,
    y: "0%",
    transition: { duration: 0.65, ease: EASE_OUT },
  },
};

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 24 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: EASE_OUT },
  },
};

/** Rotating trade word (design-lab C4), housed in the eyebrow line. */
function TradeRotor() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const id = setInterval(() => {
      // Hidden tabs freeze exit animations; advancing anyway would pile up
      // un-exited spans in the DOM until the tab is foregrounded.
      if (document.hidden) return;
      setIndex((v) => (v + 1) % TRADES.length);
    }, 2200);
    return () => clearInterval(id);
  }, []);

  return (
    <span className="relative inline-flex overflow-hidden">
      <AnimatePresence mode="popLayout" initial={false}>
        <motion.span
          key={TRADES[index]}
          initial={{ y: "105%", opacity: 0 }}
          animate={{ y: "0%", opacity: 1 }}
          exit={{ y: "-105%", opacity: 0 }}
          transition={{ duration: 0.45, ease: EASE_OUT }}
          className="inline-block whitespace-nowrap"
        >
          {TRADES[index]}
        </motion.span>
      </AnimatePresence>
    </span>
  );
}


/**
 * Count-up stat. Final value is server-rendered (crawlers and no-JS visitors
 * always see the real number); the count-up runs client-side in view, and is
 * skipped for reduced motion. Timing is tuned to the stats row's fade-up:
 * counting begins as the row becomes visible (not at page load), staggered
 * per stat so the four numbers roll in sequence.
 */
/**
 * The stats band is off for launch.
 *
 * It carried 200+ home service clients, $89M+ client revenue generated, 50+
 * certified professionals and years in the trades. The first 3 have no
 * source behind them yet and came off first; the band itself came off with
 * them rather than running as a single number under a full width rule.
 *
 * To bring it back, git show checkpoint/2026-10-28-stats-withheld has the
 * whole thing: the STATS list, the markup, and the StatValue count-up that
 * animated each number into view.
 */
export function Hero() {
  return (
    <section className="relative overflow-hidden border-b border-border">
      {/* Ambient spotlight drifting slowly across the hero */}
      <motion.div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_55%_50%_at_50%_-10%,rgba(14,125,193,0.22),transparent)]"
        animate={{ x: [-90, 90, -90] }}
        transition={{ duration: 22, repeat: Infinity, ease: "easeInOut" }}
      />

      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="mx-auto max-w-6xl px-5 pb-20 pt-24 md:pb-28 md:pt-32"
      >
        <div className="lg:grid lg:grid-cols-[1.05fr_0.95fr] lg:items-center lg:gap-8">
        <div>
        <motion.p
          variants={fadeUp}
          className="display flex flex-wrap items-baseline gap-x-3 text-2xl text-muted-foreground md:text-3xl"
        >
          <span>The home of BrandFormance for</span>
          <span className="text-brand">
            <TradeRotor />
            <span aria-hidden>.</span>
          </span>
        </motion.p>

        <h1 className="display mt-6 max-w-4xl text-5xl leading-[0.97] sm:text-6xl md:text-7xl lg:text-5xl xl:text-6xl">
          {HEADLINE.map((word, i) => (
            <Fragment key={i}>
              <span className="-mb-[0.16em] inline-block overflow-hidden pb-[0.16em] align-top">
                <motion.span variants={wordReveal} className="inline-block">
                  {word.map((part, j) => (
                    <span
                      key={j}
                      className={cn(part.accent && "kw-sheen")}
                      style={
                        part.accent
                          ? { animationDelay: `${part.sheenDelay ?? 0}s` }
                          : undefined
                      }
                    >
                      {part.t}
                    </span>
                  ))}
                </motion.span>
              </span>
              {i < HEADLINE.length - 1 && " "}
            </Fragment>
          ))}
        </h1>

        <motion.p
          variants={fadeUp}
          className="mt-6 max-w-2xl text-lg leading-relaxed text-muted-foreground"
        >
          TopServ Digital is the home of BrandFormance, combining brand
          building with performance marketing to help home service companies
          become the obvious choice in their markets.
        </motion.p>

        <motion.div variants={fadeUp} className="mt-9 flex flex-wrap items-center gap-4">
          <Button asChild size="lg" className="text-base">
            <Link href="/brandformance">
              Discover BrandFormance
              <ArrowRight className="size-4" aria-hidden />
            </Link>
          </Button>
          <Button asChild size="lg" variant="outline" className="text-base">
            <Link href="/brand-assessment">Get My Brand Grade</Link>
          </Button>
        </motion.div>
        </div>

        <motion.div variants={fadeUp} className="hidden lg:block">
          <div className="origin-center scale-90 xl:scale-100">
            <EcosystemOrbit />
          </div>
        </motion.div>
        </div>

      </motion.div>
    </section>
  );
}
