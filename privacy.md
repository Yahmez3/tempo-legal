# Privacy Policy

**Last updated: May 2026**

Tempo is built and operated by James O'Brien ("we", "us"), based in Australia. This policy explains what data the Tempo iOS app collects, where it goes, and what we don't do with it. We've tried to write it in plain English. If anything's unclear, contact us at the address at the bottom.

## The short version

- Tempo stores almost everything **on your phone**, not on our servers.
- The app talks to your iOS calendar, your iOS location services, and (for Tempo+ subscribers) Anthropic's API via a small server we run.
- We don't collect analytics, we don't run ads, we don't sell your data, and your prompts to the AI assistant are not used to train any model.
- Cancelling your Tempo+ subscription never deletes your data.
- You can delete everything Tempo knows about you by deleting the app.

## What Tempo accesses on your device

Tempo asks iOS for permission to access:

- **Your calendar** (via Apple's EventKit framework). When you grant access, Tempo can read and write events in your existing iOS calendars. Tempo never copies your calendar data off your device.
- **Your location** (only when in use, plus background-while-using if you opt in). Used for the live "time to leave" travel-time alerts so Tempo knows where you are when computing your ETA. Location data is never sent to our servers and is never stored beyond the brief computation of one alert.
- **Your notifications**. So Tempo can remind you to leave for an event or flag a stale high-priority task. Notification content is composed on your device.

You can revoke any of these permissions at any time in iOS Settings → Tempo. Tempo will degrade gracefully — relevant features turn off, but nothing breaks.

## What Tempo stores on your device

The following data lives only on your iPhone, in the app's sandbox:

- Tasks you create and their settings (titles, durations, deadlines, priorities, project structure, completion state).
- Busy windows you've defined (sleep schedule, office hours, gym, etc).
- Your scheduling preferences (workday hours, default block size, drag snap).
- Your selected theme.
- Your calendar selection (which of your iOS calendars Tempo currently shows).
- A first-launch date used solely to compute your 7-day Tempo+ trial window.

This data syncs across your devices via your iCloud account if iCloud-Drive sync is enabled for the app's container. Apple manages that sync; we don't see the contents.

## What goes to Anthropic (Tempo+ only)

The "Ask Tempo" feature is part of the Tempo+ subscription. When you use it, your typed message — together with a system prompt that includes the current date and a summary of your pending tasks — is sent to Anthropic's Claude API via a Cloudflare proxy we operate. Claude generates a response which may invoke Tempo's tools to add or modify items in the app, and the response is returned to your device.

Specifically:

- The prompt and the conversation history within a single chat are transmitted.
- The system prompt includes today's date, day of the week, and a list of your pending task titles + UUIDs (so Claude can reference and modify them).
- Calendar event details are NOT proactively included in the system prompt; they're only fetched when Claude calls the `list_events_in_range` tool in response to your request.
- Anthropic's Privacy Policy applies to any data they receive: https://www.anthropic.com/legal/privacy
- Per Anthropic's policy as of this writing, API requests are not used to train Anthropic's models.
- Our Cloudflare proxy does not log prompts or responses. It validates a shared authentication token, forwards the request, and returns the result.

If you don't want to use the AI features, simply don't send messages in the Ask Tempo screen. The rest of Tempo works without it.

## Subscription handling

The Tempo+ subscription ($9.99/month, $59.99/year, or $149.99 one-time for lifetime access — all with a 7-day free trial) is processed by Apple's App Store. We never see your payment information. Apple shares aggregated, anonymised statistics with us about purchases, refunds, and subscription churn. We use these to understand the business; we don't combine them with anything personal.

To manage or cancel your Tempo+ subscription, use iOS Settings → [Your Name] → Subscriptions, or the "Manage Subscription" button in Tempo's Settings → Tempo+ section. Apple handles cancellation; we receive an entitlement update from Apple and adjust the in-app state accordingly.

## What we don't do

- We don't run third-party analytics (no Firebase, no Mixpanel, no Amplitude, etc).
- We don't run ads.
- We don't sell or rent your data to anyone.
- We don't share data with marketing networks.
- We don't fingerprint your device.
- Your prompts to the AI assistant are not used to train Anthropic's models (per Anthropic's API terms).

## Children's privacy

Tempo isn't directed at children under 13. We don't knowingly collect any data from children. Apple's age rating for Tempo is 4+ on grounds of content alone — but as with any productivity app, parents should supervise its use by young children.

## Your rights

Wherever you live, you have the right to know what data we hold about you and to have it deleted. In Tempo's case the answer is straightforward: we don't hold data about you on our servers, only Anthropic does (transiently, for the duration of an API call, per their retention policy).

To exercise specific regional rights:

- **EU/UK (GDPR):** Contact us at the address below to request access, correction, deletion, or portability. We will respond within 30 days.
- **California (CCPA/CPRA):** You have the right to know, delete, correct, and opt out of "sale" of your data. We do not sell data, so the opt-out is effectively automatic. Contact us to exercise the others.
- **Australia (Privacy Act 1988):** You have the right to access and correct personal information we hold about you. Same address below.

## Changes to this policy

If we materially change what data Tempo collects or where it goes, we'll update this policy and bump the "Last updated" date at the top. For significant changes, we'll show a notice in the app the next time you open it.

## Contact

Questions, requests, or complaints? Email us at:

**tempo.studios@proton.me**

If you're in the EU and aren't satisfied with our response, you have the right to lodge a complaint with your local data protection authority. In Australia, complaints can be made to the Office of the Australian Information Commissioner at https://www.oaic.gov.au.
