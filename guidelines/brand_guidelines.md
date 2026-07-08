# Appibrium — Brand Identity & Guidelines

Welcome to the official brand guidelines for **Appibrium** ("Engineering the Future"). This document outlines the core principles, visual system, assets, and rules for representing the Appibrium brand consistently.

---

## 1. Brand Essence & Concept

Appibrium sits at the intersection of deep tech, engineering precision, and organic growth. The name fuses "app" (technology, engineering) and "equilibrium" (balance, growth, natural stability).

The visual language contrasts a mysterious, structured **Forest Depth** (representing stable foundations, organic growth) with an energetic, glowing **Electric Mint** (representing innovation, technology, future direction).

---

## 2. Color Palette

Our colors define the mood of Appibrium. The palette consists of primary dark shades, energetic tech accents, and clean light-mode surfaces.

| Color Name | Hex Code | Purpose | Recommended Usage |
| :--- | :--- | :--- | :--- |
| **Night** | `#0A1A10` | Primary Dark | Base background for dark mode, dark icons. |
| **Deep** | `#0D2317` | Secondary Dark | Alternate backgrounds, cards, elevations. |
| **Forest** | `#152B1C` | Accent Dark | Borders, subtle highlights, deep green accents. |
| **Mint** | `#00E090` | Primary Accent | Main brand color, glow elements, highlights, links. |
| **Deep Mint** | `#00B872` | Secondary Accent | Active states, hover states, filled buttons. |
| **Snow** | `#F2FFF9` | Light Surface | Light theme background, clear high-contrast cards. |
| **White** | `#FAFCFA` | Primary Text | Clean text contrast on dark backgrounds. |

---

## 3. Typography

Consistency in text representation reinforces brand authority. We use two main typefaces, available from Google Fonts:

### Primary Typeface: Jost
*   **Weights**: 800 (Bold / Extra Bold)
*   **Usage**: Headlines, titles, and logo typography.
*   **Personality**: Geometric, clean, and forward-looking.

### Secondary Typeface: Plus Jakarta Sans
*   **Weights**: 400 (Regular), 600 (Semi-Bold), 700 (Bold)
*   **Usage**: UI elements, subheadings, body copy, and taglines.
*   **Personality**: Fresh, highly legible, modern humanist-geometric blend.

---

## 4. Logo Assets & Variations

The logo kit consists of four layouts, each available in PNG and SVG formats.

### 4.1 Standalone Icon
A rounded square containing the geometric letter "a" and the trademark dot.
-   **Primary (Mint BG)**: Dark green `#0A1A10` text/dot inside a mint `#00E090` square. Use on dark backgrounds.
-   **Night Variant (Night BG)**: Mint `#00E090` text/dot inside a dark green `#0A1A10` square. Use on light/mint backgrounds.
-   **Outline Variant**: A transparent icon with a mint border. Use for secondary placements or subtle branding.

### 4.2 Wordmark
The wordmark "appibrium" with the tagline "Engineering the Future".
-   **Light Mode**: Dark text and tagline, with deep mint accent on the "a". Used on `#F2FFF9` (Snow) or `#00E090` (Mint).
-   **Dark Mode**: White text, mint tagline, and mint accent on the "a". Used on `#0A1A10` (Night) backgrounds.

### 4.3 Horizontal Lockup (Icon + Wordmark)
Our primary corporate signature. Combines the standalone icon and wordmark side-by-side.
-   **Light Lockup**: Dark green icon with dark green text and tagline.
-   **Dark Lockup**: Mint icon with white text and mint tagline.

### 4.4 Stacked Logo (Square Layout)
A vertically centered layout of the icon, name, and "TECHNOLOGY CO." sub-tag. Perfect for social media avatars, profile pics, and app store icons.

---

## 5. Logo Usage Rules & Best Practices

To maintain visual integrity, adhere to these simple rules:

> [!IMPORTANT]
> **Rule 1: Clear Space**
> Ensure the logo has a padding buffer equal to at least 25% of the logo's height on all sides. Do not let text or images crowd this area.

> [!WARNING]
> **Rule 2: No Distortion**
> Never stretch, warp, or rotate the logos. Always scale proportionally.

> [!CAUTION]
> **Rule 3: Contrast Rules**
> Never place the white logo on a white/light surface, or the dark logo on a dark surface.
> Use the **Light Lockup** on Snow/Mint surfaces, and the **Dark Lockup** on Night/Deep/Forest surfaces.

---

## 6. Repository Directory Structure
All brand assets are organized within the root of the **company-profile** repository:
```
company-profile/ (Root)
├── logos/
│   ├── icon/          # standalone PNGs (64px to 1024px) & vector SVGs
│   ├── wordmark/      # typography PNGs (small/medium/large) & vector SVGs
│   ├── lockup/        # horizontal logos & vector SVGs
│   ├── stacked/       # square/profile-ready logos
│   ├── legacy/        # pre-redesign/miscellaneous assets (twx_wh.png, txt_b.png, appibrium_fav.png)
│   └── generator/     # code-based logo rendering tools (exporter.js, HTML source templates)
├── guidelines/
│   └── brand_guidelines.md  # this document
├── portal/
│   ├── index.html     # interactive brand asset portal
│   └── mockups/       # brand mockups (mobile app, stationery)
└── appibrium_originals/  # original portfolio assets (datayon.png, dokanmate.png, etc.)
```
