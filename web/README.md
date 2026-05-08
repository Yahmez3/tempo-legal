# Tempo — release & download site (demo)

Marketing/download landing page for the Tempo iOS app. Next.js 15 (App Router) + Tailwind.

## Run locally

```bash
cd web
npm install
npm run dev
```

Open http://localhost:3000.

## What it does

- **Hero** with product tagline and release/version chip.
- **OS-aware download CTA** (`components/DownloadCTA.tsx`):
  - iOS → "Open in App Store"
  - Android → "Notify me" (mailto stub — wire up to a waitlist later)
  - Desktop → App Store link + handoff hint
- **Features grid** mirroring the iOS app's positioning.
- **Footer** linking the existing privacy / terms / support pages.

## Wiring for real release

- Replace `APP_STORE_URL` in `components/DownloadCTA.tsx` with the real App Store URL.
- Replace `ANDROID_NOTIFY_URL` with a waitlist endpoint when one exists.
- Update the version string in `app/page.tsx` (`ReleaseMeta`) — or fetch from a small JSON manifest if you want it auto-updated per release.

## Notes

- The existing static legal/support pages (`PRIVACY_POLICY.html`, `TERMS_OF_USE.html`, `index.html`) at the repo root are untouched. The footer links to them at root paths assuming both are served from the same domain. If the Next.js app replaces the root site, copy those HTMLs into `web/public/`.
