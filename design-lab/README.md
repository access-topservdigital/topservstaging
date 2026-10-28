# Design lab

`design-lab.html` is the single-file design audition that the home page
sections were chosen from. Section comments across `src/components/sections`
cite it by cell reference (C4, F3, M4, P1 and so on), so it stays in the repo
as the reference those comments point at.

It used to sit in `public/`, which meant Vercel served it at
`/design-lab.html` on every deploy. It carried the 3 withheld figures and the
former clients' names, so it would have gone live on topservdigital.com with
copy that is deliberately off the site. Moved here on 29 October 2026: out of
`public/`, still in git.

To look at it, copy it back into `public/` and open `/design-lab.html` on the
dev server. Its images are absolute paths (`/images/lab-o/...`,
`/images/process/...`), so opening the file straight off disk shows no
pictures. Delete the copy afterwards.
