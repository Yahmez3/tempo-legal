"use client";

import { useEffect, useState } from "react";
import { detectOS, isMobile, type OS } from "@/lib/detectOS";

const APP_STORE_URL = "https://apps.apple.com/app/id0000000000"; // TODO: replace with real ID
const ANDROID_NOTIFY_URL = "mailto:tempo.studios@proton.me?subject=Notify%20me%20about%20Tempo%20for%20Android";

export function DownloadCTA() {
  const [os, setOS] = useState<OS>("unknown");
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setOS(detectOS(navigator.userAgent));
    setMounted(true);
  }, []);

  if (!mounted) {
    return <PrimaryButton href={APP_STORE_URL}>Download for iPhone</PrimaryButton>;
  }

  if (os === "ios") {
    return (
      <div className="flex flex-col items-center gap-3">
        <PrimaryButton href={APP_STORE_URL}>Open in App Store</PrimaryButton>
        <p className="text-sm text-[color:var(--muted)]">
          Detected iOS — tap to install.
        </p>
      </div>
    );
  }

  if (os === "android") {
    return (
      <div className="flex flex-col items-center gap-3">
        <PrimaryButton href={ANDROID_NOTIFY_URL} variant="muted">
          Notify me when Android is ready
        </PrimaryButton>
        <p className="text-sm text-[color:var(--muted)]">
          Tempo is iOS only for now. We'll email you when Android lands.
        </p>
      </div>
    );
  }

  // Desktop fallback: show App Store link + "scan with phone" hint.
  return (
    <div className="flex flex-col items-center gap-4">
      <PrimaryButton href={APP_STORE_URL}>Download on the App Store</PrimaryButton>
      <DesktopHandoff os={os} />
    </div>
  );
}

function DesktopHandoff({ os }: { os: OS }) {
  const platformLabel =
    os === "macos" ? "Mac" : os === "windows" ? "Windows" : os === "linux" ? "Linux" : "computer";

  return (
    <div className="flex items-center gap-3 rounded-xl border border-[color:var(--rule)] bg-[color:var(--card)] px-4 py-3">
      <PhoneIcon />
      <p className="text-sm text-[color:var(--muted)]">
        On a {platformLabel}? Open this page on your iPhone, or text yourself the link.
      </p>
    </div>
  );
}

function PrimaryButton({
  href,
  children,
  variant = "primary",
}: {
  href: string;
  children: React.ReactNode;
  variant?: "primary" | "muted";
}) {
  const base =
    "inline-flex items-center justify-center gap-2 rounded-full px-7 py-3.5 text-base font-medium transition-all active:scale-[0.98]";
  const styles =
    variant === "muted"
      ? "border border-[color:var(--rule)] text-[color:var(--fg)] hover:bg-[color:var(--card)]"
      : "bg-ink text-white hover:bg-ink-soft dark:bg-white dark:text-ink dark:hover:bg-white/90";

  return (
    <a href={href} className={`${base} ${styles}`}>
      {children}
    </a>
  );
}

function PhoneIcon() {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="text-[color:var(--muted)]"
    >
      <rect x="7" y="2" width="10" height="20" rx="2" />
      <line x1="11" y1="18" x2="13" y2="18" />
    </svg>
  );
}
