# Oxira — Air Quality Landing Page

[![Deployed on Vercel](https://img.shields.io/badge/Deployed%20on-Vercel-black?style=for-the-badge&logo=vercel)](https://vercel.com/georgui716371s-projects/air-quality-landing)

Landing page and interactive demo for an air quality monitoring system that integrates satellite (TEMPO) data with ground measurements. Provides real-time visualizations, smart forecasts, push notifications , and alerts via SMS/WhatsApp.

## Quick summary

- Technology: Next.js 15 (App Router), React 19, Tailwind CSS, TypeScript
- Simulated integration for alerts (SMS/WhatsApp) and notification services

## Key features

- Real-time TEMPO satellite data combined with ground stations
- Demo dashboard with charts, maps and environmental metrics
- AI-driven air quality forecasts
- Configurable alerts via SMS, WhatsApp and email (simulated)
- Responsive and accessible UI: reusable components and smooth animations
- Configurable thresholds and notification intervals from the UI

## Preview / Demo

The main page shows a Hero with a dashboard preview, a demo section with real-time metrics, and a gallery of professional dashboard screenshots. The demo simulates periodic updates and notification deliveries for UI/UX purposes.

## Scripts (package.json)

Project scripts (use with pnpm):

- pnpm dev — Run the app in development mode (Next.js)
- pnpm build — Build the app for production
- pnpm start — Serve the built app
- pnpm lint — Run the linter

Example (Windows PowerShell):

```powershell
pnpm install
pnpm dev
```

## Requirements

- Node.js (recommended >= 18)
- pnpm (the project was created with pnpm)

Note: the exact Node version is not pinned in the repository; if you run into native module issues, try Node 18 or 20.

## Environment variables & external services

The project includes simulated notification services. To integrate real services add environment variables and adapt `lib/alert-service.ts` and `lib/notification-service.ts`:

- TWILIO_SID, TWILIO_AUTH_TOKEN, TWILIO_PHONE
- WHATSAPP_API_KEY (or the credentials for your chosen API)
- SENDGRID_API_KEY (or another email provider)
- VERCEL_TOKEN (optional, for automated deployment scripts)

In the current version many calls are simulated with `console.log()` and timeouts — check comments in `lib/alert-service.ts` for integration points.

## Project structure (summary)

- app/ — Next.js routes and layout (App Router)
  - page.tsx — main landing page
- components/ — reusable React components (Hero, Features, Demo, Header, Footer, etc.)
  - alerts/ — UI to configure alerts
  - dashboard/ — dashboard widgets (map, charts, metrics)
- lib/ — client-side services (alert-service, notification-service, utilities)
- hooks/ — custom hooks (e.g. use-in-view)
- public/ — static images and assets (icons, dashboard images)
- styles/ — global styles (Tailwind CSS)

Key files:


- `components/air-quality-demo.tsx` — real-time monitoring demo
- `components/alerts/alerts-configuration.tsx` — UI to configure alert channels

## Development notes

- PWA: `NotificationService` registers the service worker and manages notifications; logic lives in `lib/notification-service.ts`.
- Alerts: `lib/alert-service.ts` contains threshold logic and rate limiting; by default sending is simulated.
- UI: components use Tailwind + Radix/Headless patterns and libraries like `lucide-react` and `recharts` for charts.

## Deployment

Recommended: Vercel (default configuration when exporting from v0.app). Connect this repository to Vercel for automatic deployments on push.

## Contributing

- Open issues for bugs or feature requests.
- Create pull requests with small, focused changes and descriptive messages.
- Keep TypeScript and style conventions (e.g. run lint before opening PRs).

## Credits & references

- Satellite data: TEMPO (mentioned as an example data source)
- Design and UI patterns inspired by modern dashboard templates and reusable component systems.

## License

This repository does not include an explicit license. Add a `LICENSE` file if you plan to publish under a specific license.
