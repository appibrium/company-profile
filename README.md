<img width="639" height="237" alt="Green and White Health Facebook Cover" src="https://github.com/user-attachments/assets/e70ddecd-2efe-4fd9-a1d2-d67e474308a1" />

# Appibrium — Organization Profile & Brand Assets

> **apps. elevated.**
>
> Appibrium is a modern software development studio shaping the future of apps across platforms. We craft high-performance solutions—from mobile to desktop, web to enterprise systems—using technologies like Flutter, .NET, and more.

---

## 1. Directory Structure & Asset Directory Map

This repository serves as the official organization profile and brand asset repository for **Appibrium**. Below is the directory map of the assets:

*   📂 **[logos/](file:///r:/Startup/Appibrium/company-profile/logos)** — Official corporate logotypes & branding marks
    *   📁 **[icon/](file:///r:/Startup/Appibrium/company-profile/logos/icon)** — Standalone brand mark variants (SVG vector & PNG format ranging from 64px to 1024px)
    *   📁 **[lockup/](file:///r:/Startup/Appibrium/company-profile/logos/lockup)** — Corporate horizontal logo signatures (standard & W4 Editorial styles)
    *   📁 **[stacked/](file:///r:/Startup/Appibrium/company-profile/logos/stacked)** — Centered square layout logotypes, optimized for avatars/profiles
    *   📁 **[wordmark/](file:///r:/Startup/Appibrium/company-profile/logos/wordmark)** — Typography-only brand signatures
    *   📁 **[legacy/](file:///r:/Startup/Appibrium/company-profile/logos/legacy)** — Miscellaneous and pre-redesign assets (such as `twx_wh.png`, `txt_b.png`, and `appibrium_fav.png`)
    *   📁 **[generator/](file:///r:/Startup/Appibrium/company-profile/logos/generator)** — Code-based SVG and PNG brand asset exporter tools (Puppeteer & HTML source code)
*   📂 **[guidelines/](file:///r:/Startup/Appibrium/company-profile/guidelines)** — In-depth branding specifications
    *   📄 **[brand_guidelines.md](file:///r:/Startup/Appibrium/company-profile/guidelines/brand_guidelines.md)** — Core design principles, font scales, color usage, and compliance rules
*   📂 **[portal/](file:///r:/Startup/Appibrium/company-profile/portal)** — Brand Assets Portal
    *   📄 **[index.html](file:///r:/Startup/Appibrium/company-profile/portal/index.html)** — Interactive showcase dashboard of all colors and assets, including direct download links
    *   📁 **[mockups/](file:///r:/Startup/Appibrium/company-profile/portal/mockups)** — Renders demonstrating the brand identity in action (Stationery, Mobile app UI)
*   📂 **[appibrium_originals/](file:///r:/Startup/Appibrium/company-profile/appibrium_originals)** — Original high-resolution portfolio images & banners (Datayon, Dokanmate, Gorusheba, Porichoy)
*   📂 **[content/](file:///r:/Startup/Appibrium/company-profile/content)** — Centralized website content files
    *   📄 **[Appibrium Website Content.md](file:///r:/Startup/Appibrium/company-profile/content/Appibrium%20Website%20Content.md)** — Official copy deck for the Appibrium public website

---

## 2. Interactive Brand Portal

An interactive showcase is provided for easy browsing, color copying, and single-click downloads of logo assets.

To open the portal:
1. Double-click the file [portal/index.html](file:///r:/Startup/Appibrium/company-profile/portal/index.html) to open it in your default web browser (Edge, Chrome, Safari, etc.).
2. Use the tabs to browse the Typography Scale, Do's & Don'ts, and systematic layout standards.

---

## 3. Brand Identity Highlights

### Visual Concept
Appibrium contrasts the mysterious, structured depth of **Forest Depth** (representing stable foundations, organic growth, and balance) with an energetic, glowing **Electric Mint** (representing innovation, technology, and future direction).

### Color Palette Reference

| Color Name | Hex Code | Purpose | Recommended Usage |
| :--- | :--- | :--- | :--- |
| **Night** | `#0A1A10` | Primary Dark | Base background for dark mode, dark icons. |
| **Deep** | `#0D2317` | Secondary Dark | Alternate backgrounds, cards, elevations. |
| **Forest** | `#152B1C` | Accent Dark | Borders, subtle highlights, deep green accents. |
| **Mint** | `#00E090` | Primary Accent | Main brand color, glow elements, highlights, links. |
| **Deep Mint** | `#00B872` | Secondary Accent | Active states, hover states, filled buttons. |
| **Snow** | `#F2FFF9` | Light Surface | Light theme background, clear high-contrast cards. |
| **White** | `#FAFCFA` | Primary Text | Clean text contrast on dark backgrounds. |

### Typography Scale
*   **Primary Typeface**: **Jost** (Google Fonts) — Geometric, clean, and forward-looking. Used for display headlines and logo typography.
*   **Secondary Typeface**: **Plus Jakarta Sans** (Google Fonts) — Humanist-geometric hybrid, highly legible. Used for body text, taglines, and UI labels.

---

## 4. Logo Generation Tool

For creative team members looking to regenerate the asset kit in custom sizes or vector styles:

1. Navigate to the generator folder: [logos/generator/](file:///r:/Startup/Appibrium/company-profile/logos/generator).
2. Install dependencies:
   ```bash
   npm install
   ```
3. Run the generator script:
   ```bash
   npm run generate
   ```
This will automatically launch Microsoft Edge in headless mode, render the logo components via the HTML templates, and write updated SVGs and PNGs directly into the respective folders (`logos/icon`, `logos/lockup`, `logos/stacked`, `logos/wordmark`).
