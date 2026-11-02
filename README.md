# Global Family Policy, Grant & Tax-Saver Engine

> A privacy-conscious, open-source policy discovery tool that helps households find family benefits, grants, and tax-saving opportunities in **India, the United States, Switzerland, and Australia**—then turn the results into a practical action plan.

[![License: MIT](https://img.shields.io/badge/License-MIT-0b5fff.svg)](LICENSE)
[![Static site](https://img.shields.io/badge/deployment-GitHub%20Pages-0b3b60.svg)](#deploy-to-github-pages)

## Why this exists

Benefits systems are difficult to navigate: rules differ by country, state or canton, household income, family composition, tax regime, housing, employment, and deadlines. Families should not need specialist knowledge to identify programmes worth investigating.

This project provides a transparent, browser-first starting point. It is designed to:

- surface relevant **public benefits, grants, credits, deductions, and rebates**;
- explain *why* a programme may match a household;
- provide an **estimated annual value** where a defensible estimate is available;
- collect claim steps and common supporting documents into a personal action plan; and
- link users back to official authorities for final eligibility confirmation and application.

It is deliberately not a tax filing service, legal adviser, financial adviser, or government portal.

## Supported jurisdictions

| Country | Coverage layers | Local unit |
| --- | --- | --- |
| India | Central schemes and state/UT schemes | State / Union Territory |
| United States | Federal programmes and state programmes | State |
| Switzerland | Federal benefits and cantonal rules | Canton |
| Australia | Commonwealth programmes and state/territory programmes | State / Territory |

Country data is kept in separate, reviewable files so contributors can update a programme without changing matching or interface code.

## Product experience

The application is a static website, intended to run entirely on GitHub Pages. Its core interface includes:

1. **Country tabs** for India, USA, Switzerland, and Australia.
2. A detailed **Family Profile Simulator** for location, annual household income, filing status/regime, child and dependant age bands, senior household members, housing, and employment.
3. A natural-language **Smart Family Situation Box** for optional context such as caring responsibilities, rental housing, or self-employment.
4. Live summary KPIs for policy matches, estimated annual value, and deductions/credits to investigate.
5. Search, category filters, and sorting by value, claim effort, deadline, or name.
6. A persistent **My Family Action Plan & Document Checklist** that is stored locally in the browser.

### Privacy principles

- No user account is required.
- Family-profile calculations run in the browser.
- The project must not send personal profile text or answers to a third party by default.
- The natural-language box must warn users not to enter names, tax IDs, account numbers, medical records, or other sensitive identifiers.
- Saved action-plan data belongs in `localStorage` only and must be removable from the interface.

## Repository structure

The project uses the following modular layout. Script ordering is intentional: shared configuration loads first, country policy data loads next, then the matching engines and the UI bootstrap.

```text
.
├── index.html
├── style.css
├── js/
│   ├── config.js
│   ├── eligibilityEngine.js
│   ├── actionPlan.js
│   ├── smartMatcher.js
│   └── app.js
└── data/
    ├── india_central.js
    ├── india_states.js
    ├── usa_federal.js
    ├── usa_states.js
    ├── switzerland_federal.js
    ├── switzerland_cantons.js
    ├── australia_federal.js
    └── australia_states.js
```

### Responsibilities

| File | Responsibility |
| --- | --- |
| `index.html` | Accessible semantic application shell, controls, persistent action-plan drawer, and dependency-ordered scripts. |
| `style.css` | Responsive visual system, country tabs, cards, controls, print rules, and reduced-motion support. |
| `js/config.js` | Shared application constants, currency/locale settings, category metadata, feature flags, and official-source domains. |
| `data/*` | Versioned policy records for a single country layer. No UI code or DOM mutation belongs here. |
| `js/eligibilityEngine.js` | Normalises profiles, evaluates explicit policy rules, produces match reasons, and calculates carefully bounded value estimates. |
| `js/actionPlan.js` | Adds/removes saved policies, deduplicates document requirements, persists a versioned local plan, and prepares print output. |
| `js/smartMatcher.js` | Safely maps optional natural-language keywords to profile hints and categories without treating unstructured text as authoritative fact. |
| `js/app.js` | Boots the UI, switches jurisdictions, renders filters/cards/KPIs, wires events, and coordinates the other modules. |

## Architecture and data contract

### Policy records

Every policy record should be a plain, auditable object. Policy data must use an official title and source, state exactly when it was verified, and avoid silently inventing monetary estimates. A record should contain at least:

```js
{
  id: "in-central-example-benefit",
  country: "india",
  level: "central",                 // central | federal | state | canton | territory
  regions: ["all"],                  // "all" or normalized region identifiers
  category: "cash-benefit",          // see configured categories
  title: "Official programme title",
  summary: "Clear, plain-language summary of the support.",
  officialUrl: "https://official-authority.example/programme",
  sourceAuthority: "Responsible public authority",
  lastVerified: "2026-11-02",
  eligibility: {
    rules: []                         // declarative rules consumed by eligibilityEngine.js
  },
  value: {
    kind: "annual-estimate",         // annual-estimate | one-time | deduction | variable | non-monetary
    currency: "INR",
    maxAnnualAmount: null,
    estimateNote: "Explain assumptions and limits."
  },
  claim: {
    difficulty: "medium",            // easy | medium | advanced
    deadline: "Check official portal",
    steps: [],
    documents: []
  },
  searchTerms: [],
  tags: []
}
```

Use normalized identifiers (for example, `rajasthan`, `new-south-wales`, or `zurich`) rather than display names in conditions. Store display labels in configuration or record metadata. Amounts must be numbers in the smallest sensible whole unit; formatting belongs in the UI.

### Eligibility rules

The eligibility engine should be deterministic, explainable, and conservative:

- Separate **confirmed match**, **possible match**, and **not enough information** states.
- Treat unknown income, filing status, or regional requirements as unknown—not as a pass.
- Return a human-readable reason for each included or excluded record.
- Never present a calculated estimate as a guaranteed entitlement.
- Keep tax deductions distinct from refundable/non-refundable credits and cash payments in both labels and calculations.
- Include source dates and route users to an official page before they act.

The smart matcher is an optional helper. It may suggest filters from phrases such as “we rent”, “newborn”, “elderly parent”, or “self-employed”; it must never override a deliberate form input without showing the user what changed.

## Run locally

The app is static HTML, CSS, and JavaScript. No build chain is required.

```bash
# from the repository root
python3 -m http.server 8000
```

Open [http://localhost:8000](http://localhost:8000). A local server is preferable to opening the HTML file directly because it mirrors GitHub Pages asset loading.

## Deploy to GitHub Pages

1. Push the repository to GitHub.
2. In the repository, open **Settings → Pages**.
3. Under **Build and deployment**, choose **Deploy from a branch**.
4. Select the branch containing this project and the `/ (root)` folder.
5. Save. GitHub Pages serves `index.html` from the root.

All runtime asset paths are relative so the site works under both a custom domain and the standard project Pages URL. Keep the site static: do not put secrets, API keys, or private documents in this repository.

## Quality bar

Before merging policy or interface changes, verify:

- **Official sources:** every record has a stable official URL, a responsible authority, and a current `lastVerified` date.
- **Regional scope:** country, state/canton/territory, and filing-regime limits are correctly represented.
- **Money:** currency, period, caps, phase-outs, and whether an amount is a payment, credit, or deduction are unambiguous.
- **Accessibility:** keyboard operation, visible focus, labelled fields, logical heading order, status announcements, sufficient contrast, and reduced-motion behavior.
- **Responsive layout:** the policy grid and action-plan drawer work from narrow mobile screens to desktop.
- **Privacy:** no analytics, remote profiling, or profile-data transmission is introduced without a documented, opt-in design decision.
- **Regression safety:** profile changes, country switching, filtering, action-plan persistence, document deduplication, reset, and printing are tested.

### Testing guidance

As the JavaScript modules are added, keep pure matching logic independent of the DOM and cover it with unit tests. Maintain manual test fixtures for at least:

- a renter with young children;
- a homeowner using deductions/credits;
- a multigenerational household with a person aged 60+ and 70+;
- a self-employed household;
- blank or partial profiles; and
- every supported country and local jurisdiction layer.

Test the interface with keyboard-only navigation and a screen reader before release. Use a real device or browser emulator for mobile and print the action plan to PDF to validate the print stylesheet.

## Contributing policy data

Policy data affects real decisions. Contributions must be conservative and reviewable.

1. Search existing records to avoid duplicate programmes.
2. Use the programme’s official government or statutory-authority source—not a commercial summary—as the canonical URL.
3. Record the source authority and the date you verified the policy.
4. Quote monetary amounts accurately, including frequency, caps, income thresholds, and the tax year or benefit period.
5. Model exclusions and uncertainty. If a rule cannot be expressed safely, label the result as requiring confirmation instead of claiming eligibility.
6. Add or update tests for the policy’s decisive rules.
7. In the pull request, explain the source, jurisdiction, effective date, and any assumptions made.

### Data maintenance policy

Benefits and tax thresholds change frequently. Maintainers should prefer a smaller set of current, well-sourced records over a broad but stale catalogue. Expired programmes should be marked inactive with a reason or removed in the same change that introduces their replacement. Never retain an outdated payment amount merely to keep an estimate visible.

## Accessibility and inclusive language

The product targets WCAG 2.2 AA where practical. Avoid assumptions about family composition, marriage, gender, citizenship, disability, or caregiving arrangements. Use terms such as “household”, “dependant”, and “parent/carer” where the official programme allows them, while preserving official eligibility language when it is legally material.

## Security and responsible use

This repository contains public information and client-side code only. Do not submit personal tax information, identity documents, banking details, or medical information through the app. If you identify a vulnerability, do not publish sensitive exploit details in an issue; contact the repository maintainer privately through GitHub first.

## License

Released under the [MIT License](LICENSE).

---

**Final reminder:** this engine helps users prepare better questions and next steps. Eligibility, tax treatment, payment amounts, deadlines, and application outcomes are determined only by the relevant official authority.
