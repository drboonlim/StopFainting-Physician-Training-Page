# StopFainting — POTS Physician Training Page

**The definitive physician training resource for Postural Orthostatic Tachycardia Syndrome (POTS).**
Built by Dr Boon Lim, Consultant Cardiologist & Electrophysiologist, Imperial College Healthcare NHS Trust.

🌐 **Live site:** [stopfainting.com](https://www.stopfainting.com) | Partner resource: [potsuk.org](https://www.potsuk.org)

---

## Pages

| Page | Description |
|------|-------------|
| `/` | Home — hero, stats, training previews, testimonials |
| `/about-pots` | Definition, epidemiology, subtypes, symptoms, misdiagnoses |
| `/diagnosis` | Active stand test protocol, diagnostic criteria, investigations |
| `/management` | Stepwise treatment, Levine Protocol, pharmacology table |
| `/training` | 6-module curriculum, clinical cases, referral criteria |
| `/tools` | Hub for all interactive clinical tools |
| `/tools/active-stand-test` | Interactive HR/BP calculator → POTS diagnosis + interpretation |
| `/tools/quick-reference` | Printable one-page clinical summary card |
| `/tools/medication-guide` | Filterable drug guide by subtype and treatment line |
| `/resources` | POTS UK links, 13-module educational programme, references |
| `/contact` | Online patient referral form |

## Design

- **Oxford Blue** `#002147` + **Cambridge Turquoise** `#00B2A9`
- Built with **Next.js 14** + **TypeScript** + **Tailwind CSS**
- Mobile-responsive, print-optimised quick reference card
- All interactive tools run client-side (no data transmitted)

## Deploy to Vercel (one click)

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https%3A%2F%2Fgithub.com%2Fdrboonlim%2FStopFainting-Physician-Training-Page)

Or manually:
1. Go to [vercel.com](https://vercel.com) → **Add New Project**
2. Import from GitHub → select `drboonlim/StopFainting-Physician-Training-Page`
3. Vercel detects Next.js automatically — click **Deploy**
4. Done. Every push to `main` auto-deploys.

## Local Development

```bash
# Install dependencies
npm install

# Start dev server
npm run dev
# Open http://localhost:3000

# Production build
npm run build
```

## Content Sources

Clinical content is sourced from:
- **[stopfainting.com](https://www.stopfainting.com)** — Dr Boon Lim's Imperial Syncope Unit website
- **[potsuk.org](https://www.potsuk.org)** — POTS UK patient charity (Reg. No. 1159813)
- Published clinical guidelines (Heart Rhythm Society 2015, Raj SR Circulation 2013, Fu & Levine 2011)

## Clinical Disclaimer

This resource is for healthcare professional education only.
Clinical decisions must be based on individual patient assessment.
No patient data is collected or stored by this website.

---

*Built with [Claude Code](https://claude.ai/claude-code) · Imperial Health Charity supported*
