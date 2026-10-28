import { Reveal } from "@/components/motion/reveal";
import {
  anonymousClient,
  namesCleared,
  namesWithheldNote,
  sixClients,
} from "@/lib/bf-content";

/**
 * The client stories, as cards.
 *
 * Whatever sixClients holds, which is 1 row now rather than 6, with the
 * growth figure as the result and no dollars anywhere. See the note there.
 */
export function ProofClients() {
  return (
    <>
      <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {sixClients.map((c, i) => (
          <li key={`${c.market}-${c.result}`} className="h-full">
            <Reveal delay={Math.min(i * 0.05, 0.25)} className="h-full">
              <div className="flex h-full flex-col gap-2 rounded-lg border border-border bg-card p-6">
                <span className="label-mono text-ink-faint">{c.market}</span>
                <span className="display text-2xl">
                  {namesCleared ? c.client : anonymousClient}
                </span>
                <span className="mt-1 text-3xl font-bold text-brand">{c.result}</span>
              </div>
            </Reveal>
          </li>
        ))}
      </ul>

      {!namesCleared && (
        <Reveal>
          <p className="mt-5 text-sm text-ink-faint">{namesWithheldNote}</p>
        </Reveal>
      )}
    </>
  );
}
