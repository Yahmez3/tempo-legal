---
title: Tempo — Privacy Policy
---

# Privacy Policy

**Last updated: 21 September 2026**

Tempo is made by James O'Brien ("we", "us"), based in Australia. This policy explains what the Tempo app for iPhone and iPad uses, where that data goes, and what we don't do with it. If anything is unclear, email us at the address at the bottom.

Tempo for Mac is not on the App Store yet. We will update this policy to cover it before it is released.

## The short version

- Tempo has no accounts. It doesn't ask for your name or email address.
- Your events stay in your calendars. Your tasks are reminders in Apple's Reminders app. Until you give Tempo access to Reminders, Tempo keeps your tasks in its own storage on your device instead.
- No analytics, no ads, no tracking, and we never sell data.
- Tempo's server keeps two things: a count of AI requests for each install, kept under a random ID, and anonymous crash reports. Neither carries your name or any account, and you can turn crash reports off.
- Ask Tempo and Quick Add's AI help are part of Tempo+. They send some of your information to Anthropic, the company that makes Claude. Nothing goes to Anthropic until you tap **Allow**.
- Cancelling Tempo+ never deletes your data.

## What Tempo asks permission for

iOS asks you before Tempo can use any of these. You can change your answer any time in the iOS Settings app → Tempo. If you say no, the rest of Tempo keeps working. The feature that needs it switches off, except for tasks (see Reminders below).

- **Calendars.** Tempo shows your events and saves the ones you add, move or delete. Events stay in the account they belong to (iCloud, Google, Exchange and so on). Tempo never sees the passwords for those accounts.
- **Reminders.** Your Tempo tasks are reminders in a list called "Tempo" in Apple's Reminders app. Tempo only works with that list. The reminders sync the way your Reminders already sync, usually through your iCloud account. If you don't allow Reminders, your tasks still work: Tempo keeps them in its own storage on your device instead.
- **Contacts (optional).** If you turn on birthdays in Tempo's Settings, Tempo reads each contact's name (or nickname or company name, if there's no name) and birthday so birthdays appear on your calendar. This happens on your device. Tempo doesn't save a copy of your contacts and never sends what it reads from Contacts anywhere. iOS's own Birthdays calendar is a different thing: Tempo treats it like your other calendars (see "Ask Tempo" below).
- **Location, while using the app (Tempo+, iPhone and iPad).** Travel time, "time to leave" alerts and the leave-by countdown on your Lock Screen use your current location. Tempo also uses it to notice when you've arrived in a new time zone, so it can offer to add that zone to your calendar. Tempo asks Apple Maps for travel times and asks Apple which time zone you're in, so your location and the event's address go to Apple, under Apple's privacy policy. Your location never goes to Tempo's server or to Anthropic, and Tempo doesn't store it. If you tap **I'm leaving now** on an event, Tempo notes how early or late that was compared with its suggestion. It keeps the last 10 of these for each address, only on your device, so future estimates fit you better.
- **Microphone.** You can record voice memos and attach them to events. The recordings are saved in Tempo's storage on your device. Tempo never uploads them, and they aren't part of iCloud Sync. Like the rest of Tempo's data, they're included in your iPhone or iPad backup if you back up to iCloud or a computer. Deleting an event doesn't delete its memos, so delete them from the event first if you want them gone. Deleting Tempo removes them all. You can also dictate to Ask Tempo.
- **Speech recognition.** When you dictate, Apple's speech recognition turns your voice into text. Apple may do this on its servers. The audio goes to Apple, never to Tempo's server or to Anthropic. If you use Siri with Tempo ("What's next in Tempo", "Add event to Tempo"), Siri handles what you say under Apple's privacy policy.
- **Notifications.** Tempo uses these for leave-by alerts, heads-ups before events you've set travel alerts for, check-ins on high-priority tasks that have been waiting a while, and the end-of-day and weekly summaries if you turn them on. Tempo creates every notification on your device. None come from a server.

## Data Tempo keeps on your device

Apart from your calendars and Reminders, Tempo stores these in its own storage on your iPhone or iPad:

- your tasks, if you haven't given Tempo access to Reminders, or otherwise a copy of them that the home-screen widget reads
- extra task details that Reminders has no place for, such as time estimates, energy level and project settings
- times Tempo has suggested for your tasks, and whether you accepted or declined them
- notes you write for a day
- busy times (sleep, work hours, the gym and so on), scheduling preferences and your theme
- which of your calendars Tempo shows
- travel settings for your events (Tempo+): which events have leave-by alerts, how you're getting there, extra buffer time, travel times you typed in, and recent leave-by times for the widget
- the leave-by record described above
- voice memos
- the random ID for the request counter, and any crash reports waiting to be sent
- a phrase you gave Siri to add an event, until Tempo opens
- your choices for "Share crash reports" and "Sharing with Anthropic", and small counters that decide when to ask you for an App Store rating

Tempo also adds the titles, times, places and calendar names of events from the calendars it shows to iOS search (Spotlight) on your device, so you can find them from the Home Screen. Everything in the list above, except crash reports waiting to be sent, is included in your iPhone or iPad backup if you back up to iCloud or a computer.

**iCloud Sync is off until you turn it on.** To turn it on, open Tempo's Settings and, under iCloud Sync, turn on **Sync via iCloud**. When it's on, your tasks, extra task details, day notes, busy times, preferences and theme sync between your devices through your own iCloud account, using Apple's iCloud key-value storage. Apple runs that sync. We can't read it.

## What reaches Tempo's server

Tempo runs one small server on Cloudflare, a hosting company. Tempo sends it only two kinds of request: AI requests, which carry a request counter, and crash reports. Like any server, it also sees your device's IP address and basic connection details, such as the app and iOS version, when Tempo connects. Our server's code doesn't read or store them. Cloudflare handles them to run the service (see "Other companies involved" below).

**1. AI requests (Tempo+).** When you use Ask Tempo or Quick Add's AI help, the request passes through our server on its way to Anthropic, and the reply comes back the same way. The server checks the request and forwards it. It doesn't save or log what you asked or what came back. Anthropic receives the request from our server, not from your device, and our server adds nothing that identifies you or your device.

**2. A request counter.** The first time Tempo sends an AI request, it creates a random ID on your device. The ID isn't based on your Apple Account, your device or anything else about you. It goes with each AI request, and the server uses it to count requests, up to about 120 a day and 1,500 a month for each install. That keeps costs fair and stops abuse. The server stores only the ID, the day or month, and the count. The daily count expires at the end of the day and the monthly count at the end of the month, both in UTC. The ID is kept only in Tempo's own storage on your device. It isn't synced by iCloud Sync, but like other app data it's included in your device backups. If you delete Tempo, the ID is deleted too, and a fresh install creates a new one. Restoring a device backup brings the old one back.

**3. Anonymous crash and performance reports.** When Tempo crashes, freezes, is slow to open, or uses too much processing power or disk, Apple's MetricKit writes a technical report about it. Tempo sends that report to our server so we can find and fix the problem. A report contains:

- what went wrong, and where in Tempo's code it happened
- Tempo's version and build number, whether it's a TestFlight test build, and whether it came from an iPhone/iPad or a Mac
- the device model (such as "iPhone16,1"), its processor type, the operating system version, whether Low Power Mode was on, and your device's region format (a country code such as "AU")
- a process number that changes every time Tempo opens
- the date and time our server received it

Reports are made by Apple and hold technical details about Tempo's code, not your events, tasks, notes, contacts or location. The only parts of Apple's format that can hold free text are two fields for an error message, and our server deletes both before it stores the report. Reports are sent without the request-counter ID or any other identifier. The server doesn't record your IP address with them, so we can't connect a report to a person or a device.

Reports are stored in a Cloudflare database. Reports older than 90 days are deleted automatically, but the clean-up only runs now and then, when new reports arrive. If few reports come in, an old report can stay well past 90 days. Cloudflare also keeps a restore history of the database for up to 30 days, so a deleted report can stay there a little longer. The server also stops storing new reports once it has 500 in one day (UTC), counting everyone's reports together. If the server turns a report away because the daily limit has been reached, Tempo keeps it on your device and tries again later. Reports that arrive just as the limit is reached can be dropped.

**Crash reports are on by default.** To turn them off, open Tempo's Settings and, under Privacy, turn off **Share crash reports**. Turning it off deletes any reports still waiting on your device and stops sending new ones.

Separately, if you've chosen in iOS Settings to share analytics with app developers, Apple may give us crash logs under Apple's own privacy policy.

## What goes to Anthropic (Tempo+ only)

Two Tempo+ features use Claude, an AI model made by Anthropic: **Ask Tempo** and **Quick Add's AI help**. Without Tempo+, neither sends anything anywhere.

### Nothing goes until you allow it

The first time either feature would send something, Tempo explains what is sent and to whom, and asks you to tap **Allow** or **Not now**. If you tap **Not now**, nothing is sent: Ask Tempo stays off and Quick Add keeps working on your device. If you close the question without answering, nothing is sent and Tempo asks again next time. You can change your answer any time in Tempo's Settings: under Ask Tempo, tap **Sharing with Anthropic**. If what Tempo sends changes in a future version, Tempo will ask you again.

### Ask Tempo

When you send a message, Tempo sends:

- your message, whether typed or dictated, and everything earlier in that conversation, including what the assistant looked up
- today's date and the current time, your time zone's offset from UTC (such as "+10:00"), and the day of the week
- up to 15 of your open tasks: their titles, due dates, whether each is a project, and an internal ID so the assistant can refer to a task

To answer you, the assistant can look up more. Tempo sends only what it looks up, plus a short result for each change it makes (such as a new item's ID or an error message):

- **events** in the dates it asks about, from every calendar Tempo shows: title, start and end time, whether the event is all-day, location, and an internal ID
- **tasks**: all your open tasks, each with its title, priority, time estimate, due date, whether it's done, whether it's a project and its project settings, the task's notes, and an internal ID
- **busy times** on the day it asks about: label, type (rest, work or other), times, how often they repeat, and an internal ID
- **latest start**: the latest time you can start a task and still finish it by its due date

Tempo does **not** send event notes, attendees, your day notes, your voice memos, your current location, your name or your Apple Account. Ask Tempo doesn't read your Contacts. But if Tempo shows iOS's Birthdays calendar, the assistant can see those events' titles (such as "Sam Lee's Birthday") like any other event. You can hide that calendar in Tempo's Settings.

Claude's reply can ask Tempo to add tasks, projects and events, to change, complete or delete tasks, to delete events, to add busy times, to switch your theme or to re-plan your schedule. Tempo makes those changes on your device straight away, just as if you had made them yourself. It can delete at most 3 things per message. It can't delete events that someone else organised, events on a calendar you can't edit, or events on a calendar you've hidden in Tempo.

### Quick Add

Quick Add first reads your sentence on your device. It only asks Claude when all of these are true: you have Tempo+, you're online, you've allowed sharing, and Tempo's on-device rules aren't sure what you meant. Then it sends:

- what you've typed so far, each time you pause for about half a second while Tempo is still unsure, cut to 500 characters at most
- today's date and time, your time zone, and your language and region setting

No tasks, events, notes or earlier messages are sent. Claude sends back a suggestion, such as a title, date and duration. Nothing is saved until you tap to add it. An event opens in the editor first, so you can change anything. A task is saved from the preview card, which shows its title, due date, time estimate and priority. Any note Claude suggests is saved with the task too, and you can edit or delete it afterwards. Claude can't change anything in Tempo from Quick Add.

### What Anthropic does with it

We checked Anthropic's terms and policies on 21 September 2026. Tempo uses Anthropic's commercial API, and under those terms:

- **No training.** Anthropic's Commercial Terms of Service say: "Anthropic may not train models on Customer Content from Services." ([anthropic.com/legal/commercial-terms](https://www.anthropic.com/legal/commercial-terms))
- **Retention.** Anthropic automatically deletes API inputs and outputs within 30 days of receiving or producing them. The exceptions: if a request is flagged for breaking Anthropic's Usage Policy, Anthropic may keep the inputs and outputs for up to 2 years, and its safety classification scores for up to 7 years. It may also keep data longer where the law requires. ([Anthropic's data retention policy](https://privacy.claude.com/en/articles/7996866-how-long-do-you-store-my-organization-s-data))
- **Anthropic works for us here.** It handles what Tempo sends as our service provider, under its Commercial Terms and its [Data Processing Addendum](https://www.anthropic.com/legal/data-processing-addendum). Anthropic's own [privacy policy](https://www.anthropic.com/legal/privacy) covers people who use Claude directly. It doesn't cover data Anthropic handles for businesses like us.

## Subscriptions and the free trial

Tempo is free to download. Tempo+ is an auto-renewing monthly or yearly subscription sold through the App Store. It adds:

- the full auto-scheduler, including planning the sessions for your projects (without Tempo+, you can still set up projects and see their forecast, and the auto-scheduler suggests one session at a time)
- the procrastination calculator: a task's latest possible start, and its Reality check
- Ask Tempo and Quick Add's AI help
- travel: travel time on your calendar, "time to leave" alerts, and leave-by times on the "Where am I going?" widget
- the Lock Screen countdown to your next event
- extra time zones when you travel, the hotel-stay template, and "Add from flight" in the Day view's + menu
- meeting prep and the weekly review
- suggestions while you edit: a new time when an event clashes with another, and, based on the title, a length for a new event and an energy level for a new task

The current price is shown in the app and on the App Store.

Eligible new subscribers may get a 7-day free trial. The trial is Apple's introductory offer. Apple runs it and decides who's eligible.

Apple processes every payment, and we never see your payment details. Apple gives us summary figures about sales, refunds and cancellations. These aren't linked to you, and we use them only to understand how Tempo is doing.

To cancel, open the iOS Settings app → your name → Subscriptions, or use **Manage Subscription** in Tempo's Settings. Cancelling Tempo+ never deletes your events, tasks or notes.

## What we don't do

- no analytics tools of any kind (no Firebase, Mixpanel, Amplitude or similar)
- no ads, and no advertising identifier
- no tracking across other companies' apps or websites
- no selling, renting or sharing your data for marketing
- no accounts, so there's no profile of you on any server
- no device fingerprinting

## Tempo in Apple's privacy-label terms

Here is what Tempo collects, in the categories Apple uses for App Store privacy labels. None of it is used to track you. All of it is used only to run Tempo and keep it working, which Apple calls App Functionality. The request counter is kept under an ID, even though it's a random one, so we count it as linked to you in Apple's terms.

- **Other User Content:** what Ask Tempo and Quick Add send to Anthropic, after you allow it. Not linked to you.
- **Device ID:** the random ID used by the request counter. Linked to that random ID only, not to your name or any account.
- **Product Interaction:** how many AI requests each install made that day and that month. Linked to the same random ID only.
- **Crash Data:** anonymous crash reports. Not linked to you.
- **Performance Data:** anonymous reports about freezes, slow launches and heavy CPU or disk use. Not linked to you.

## Other companies involved

- **Apple** provides Calendar, Reminders, iCloud, Apple Maps, speech recognition, Siri, MetricKit and the App Store. When you type a place into an event's location, Tempo asks Apple Maps for matching places as you type, so what you type goes to Apple. Apple's privacy policy covers what Apple handles: [apple.com/legal/privacy](https://www.apple.com/legal/privacy/).
- **Anthropic** writes the AI replies, as described above.
- **Cloudflare** hosts Tempo's server and its crash-report database: [cloudflare.com/privacypolicy](https://www.cloudflare.com/privacypolicy/).

Anthropic and Cloudflare work for us as service providers. Their data processing terms limit how they may use your data and require them to keep it secure. They may process it outside Australia, including in the United States. For people in the EU and UK, their terms include the European Commission's Standard Contractual Clauses to protect those transfers.

## Keeping and deleting your data

- **On your device:** deleting Tempo deletes everything it stores in the app, including voice memos, the request-counter ID and any crash reports not yet sent. Copies in your device backups stay until those backups are replaced or deleted.
- **Calendar and Reminders:** events and reminders you made with Tempo are yours. They stay in Calendar and Reminders after you delete Tempo, and you can delete them there like any others.
- **iCloud:** if you turned on iCloud Sync, a copy of what it synced stays in your iCloud account after you turn it off or delete Tempo. Apple manages that copy, and we can't read or delete it.
- **Tempo's server:** request counts expire within a month. Crash reports older than 90 days are deleted automatically, though the clean-up only runs when new reports arrive, so a report can stay longer.
- **Anthropic:** as described above.

## Children

Tempo isn't aimed at children under 13, and we don't knowingly collect data from them. Tempo is rated 4+ on the App Store because of its content, but as with any productivity app, parents should supervise young children who use it.

## Your rights

Wherever you live, you can ask what data we hold about you and ask us to delete it. We have no accounts, and nothing on our server carries your name. The app doesn't show you its random ID, so in practice we can't pick out "your" records. The request-counter ID is kept in the app and, next to its counts, on our server. The counts, and the server's copy of the ID with them, expire within a month. Crash reports carry no identifier. We keep them for 90 days, and some can stay longer until the next clean-up runs.

- **EU and UK (GDPR):** you can ask for access, correction, deletion or a copy of your data, and you can object to processing. We rely on your consent to send data to Anthropic, on our legitimate interest in keeping the AI features affordable and stopping abuse (the request counter), and on our legitimate interest in fixing crashes (which you can turn off). We will reply within one month.
- **California (CCPA/CPRA):** you have the right to know, delete and correct, and to opt out of the sale or sharing of your data. We don't sell or share data for advertising, so there is nothing to opt out of.
- **Australia (Privacy Act 1988):** you can ask to access and correct personal information we hold about you.

## Changes to this policy

If we change what Tempo collects or where it goes, we'll update this page and the date at the top. If a change affects what Tempo sends to Anthropic, Tempo will ask for your permission again before sending anything.

## Contact

Questions, requests or complaints? Email us at:

**[tempo.studios@proton.me](mailto:tempo.studios@proton.me)**

If you're in the EU or UK and you're not satisfied with our response, you can complain to your local data protection authority. In Australia, you can complain to the Office of the Australian Information Commissioner at [oaic.gov.au](https://www.oaic.gov.au).
