# Tanisha Verma Portfolio — Design Ideas

## Three Stylistic Approaches

### 1. Enchanted Garden Watercolor
**Theme Name:** Enchanted Garden Watercolor
**Brief:** A soft, dreamy aesthetic inspired by botanical watercolor illustrations — delicate petals, trailing vines, and pressed-flower textures on cream parchment. Feels like flipping through a beautifully illustrated nature journal.
**Probability:** 0.07

### 2. Neon Greenhouse
**Theme Name:** Neon Greenhouse
**Brief:** Dark glass-pane backgrounds with electric botanical accents — glowing leaves, neon-outlined flowers on a near-black base. High contrast, futuristic garden.
**Probability:** 0.02

### 3. Cottagecore Meadow
**Theme Name:** Cottagecore Meadow
**Brief:** Warm, rustic, hand-drawn feel with wildflower motifs, linen textures, and earthy pastels. Like a countryside picnic blanket spread across the screen.
**Probability:** 0.04

---

## ✅ Chosen Approach: Enchanted Garden Watercolor

### Design Movement
Botanical Watercolor Illustration — inspired by 19th-century nature journals and pressed-flower art, translated into a modern digital interface.

### Core Principles
1. **Softness over sharpness** — rounded corners, gentle gradients, no hard edges
2. **Organic asymmetry** — layouts breathe and flow like a garden, not a grid
3. **Layered depth** — petals, leaves, and floating elements create a sense of dimension
4. **Pastel harmony** — every color feels like it belongs in a wildflower meadow

### Color Philosophy
The palette is drawn from a morning garden in soft light — not saturated, never harsh. Colors evoke calm, creativity, and warmth.
- **Background:** Cream `#FAF7F2` / off-white `#F9F6EF`
- **Lilac:** `#C9B8E8` — dreamy, thoughtful (primary accent)
- **Baby Blue:** `#B8D4E8` — calm, technical (secondary accent)
- **Soft Pink:** `#F2C4CE` — warm, welcoming (highlight)
- **Butter Yellow:** `#F5E6A3` — sunny, optimistic (tags, badges)
- **Peach/Coral:** `#F5C5A3` — energetic, creative (hover states)
- **Periwinkle:** `#A3B4E8` — focused, professional (links)
- **Mint Green:** `#B8E8D4` — fresh, growth (success states, timeline)

### Layout Paradigm
Pinterest-style masonry card grid for projects. Asymmetric hero section with floating botanical SVG elements. Navigation as a delicate top bar with leaf/petal motifs. Sections separated by organic wave dividers.

### Signature Elements
1. **Floating botanical SVGs** — small illustrated flowers, leaves, and petals that drift and sway in the background
2. **Watercolor card backgrounds** — each project card has a unique pastel wash that shifts on hover
3. **Vine timeline** — the project journey is displayed as a growing vine with flowers blooming at each milestone

### Interaction Philosophy
Every interaction should feel like touching a petal — gentle, responsive, and slightly surprising. Cards bloom upward on hover. Buttons have a soft press feel. Page transitions feel like turning a page in a nature journal.

### Animation
- **Entrance:** Elements float up from below with `opacity 0→1` and `translateY 20px→0` over 400ms ease-out
- **Cards:** `translateY -8px` + subtle `box-shadow` deepening on hover (200ms ease-out)
- **Floating elements:** Continuous gentle drift using CSS keyframes (`@keyframes float`) — 3–6s loops, different phases
- **Timeline vine:** Draws itself on scroll using SVG stroke-dashoffset animation
- **Page transitions:** Fade in/out with a 300ms ease
- **Stagger:** Cards entrance staggered by 60ms per item

### Typography System
- **Display/Headings:** `Playfair Display` — elegant serif, botanical-journal feel
- **Body:** `Lato` — clean, readable, modern
- **Accent/Labels:** `Dancing Script` — handwritten feel for section labels and decorative text
- **Scale:** 4xl for hero, 2xl for section heads, base for body, sm for metadata

### Brand Essence
*A garden where code blooms* — for curious engineers who build with intention. Elegant, warm, precise.
**Personality:** Thoughtful · Creative · Grounded

### Brand Voice
Headlines sound like an invitation: *"Where every project takes root."*
CTAs feel personal: *"Let's grow something together."*
No generic filler. Every word earns its place.

### Wordmark & Logo
A stylized botanical monogram — the letter "T" formed by intertwining stems and a small blooming flower, in lilac on cream.

### Signature Brand Color
Lilac `#C9B8E8` — the unmistakable color of this garden.

## Style Decisions
- Cards use masonry layout (Pinterest-style) with variable heights
- Each project card gets a unique pastel accent color from the palette
- Timeline uses a vertical vine motif with milestone flowers
- Navigation uses Playfair Display for the name/logo, Lato for nav items
- All interactive elements have a 200ms ease-out transition
- Floating botanical SVGs are purely decorative and respect prefers-reduced-motion
