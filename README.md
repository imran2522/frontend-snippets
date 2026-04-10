# frontend-snippets

A collection of vanilla JavaScript projects demonstrating modern web development patterns and best practices. All examples use **plain HTML, CSS, and JavaScript** with no frameworks or dependencies.

## About This Repository

This repository contains interactive web components and UI patterns built from scratch to practice and showcase vanilla JavaScript skills. Each project focuses on semantic HTML, accessible markup, and clean, maintainable code.

## Projects

### 1. **Responsive Navigation** (`Res-nav.html`)

A fully responsive navigation bar with a hamburger menu toggle for mobile devices.

**Features:**
- Sticky navbar that stays at the top while scrolling
- CSS-only mobile menu toggle using a hidden checkbox
- Hamburger icon that animates to an "X" when menu is open
- Accessible ARIA labels and roles
- Responsive design: desktop flexbox layout, mobile stacked menu

**Technologies:**
- HTML5 with semantic structure
- CSS Grid & Flexbox
- CSS transitions and transforms
- No JavaScript required (CSS-only toggle)

**View:** [Responsive Navigation](./Res-nav.html)

---

### 2. **Dynamic Tabs** (`dynamic-tabs.html`)

An interactive tabbed interface that displays different content panels based on the selected tab.

**Features:**
- Click any tab to instantly swap the content panel
- Keyboard navigation with arrow keys (Left, Right), Home, and End
- Full ARIA accessibility support (`role="tab"`, `role="tabpanel"`, `aria-selected`)
- Smooth fade-up animation when panels switch
- Roving tabindex pattern for keyboard focus management
- Responsive single-column layout on mobile

**Technologies:**
- HTML5 with ARIA roles
- CSS Grid, Flexbox, and animations
- Vanilla JavaScript with event listeners
- Data attributes for clean DOM coupling

**View:** [Dynamic Tabs](./dynamic-tabs.html)

---

### 3. **Age Calculator** (`age-calculator/index.html`)

An interactive age calculator that computes exact age from date of birth and an optional target date.

**Features:**
- Exact age breakdown in years, months, and days
- Optional "calculate age on" date input (defaults to today)
- Instant validation for invalid date ranges
- Extra insights: total days lived and days until next birthday
- Responsive layout with accessible labels and live result updates

**Technologies:**
- HTML5 form controls and semantic sections
- CSS custom properties, gradients, and responsive grid
- Vanilla JavaScript date arithmetic
- ARIA live regions for dynamic feedback

**View:** [Age Calculator](./age-calculator/index.html)

---

## Getting Started

### Option 1: Local Development
1. Clone or download this repository
2. Open `index.html` in your web browser to see the project listing
3. Click on any project card to view the component

### Option 2: Direct Access
Open any `.html` file directly in your browser:
- `index.html` — Project index/landing page
- `Res-nav.html` — Responsive navbar demo
- `dynamic-tabs.html` — Tabbed interface demo
- `age-calculator/index.html` — Age calculator demo

## File Structure

```
frontend-snippets/
├── index.html              # Project landing page with links to all demos
├── Res-nav.html           # Responsive navigation bar component
├── dynamic-tabs.html      # Dynamic tabbed interface component
├── age-calculator/         # Age calculator project folder
│   ├── index.html          # Age calculator page
│   ├── style.css           # Styling for age calculator
│   └── script.js           # Date parsing and age calculation logic
└── README.md              # This file
```

## Key Principles

### Accessibility
- Semantic HTML elements (`<header>`, `<nav>`, `<main>`, `<section>`)
- ARIA roles and attributes only where necessary
- Keyboard navigation support
- Focus management and visual indicators

### Performance
- Minimal DOM manipulation
- CSS-based animations instead of JavaScript where possible
- No external dependencies or framework overhead
- Fast, lightweight pages that load instantly

### Maintainability
- Clear, descriptive code with comments
- Data attributes for clean JavaScript coupling
- Organized CSS with logical grouping
- Reusable patterns and components

## Browser Support

All projects use modern CSS and JavaScript features and work on:
- Chrome/Edge 88+
- Firefox 87+
- Safari 14+
- Mobile browsers (iOS Safari, Chrome Mobile)

## Learning Resources

Each file includes:
- **Semantic HTML structure** — Shows proper use of heading hierarchy and semantic tags
- **Organized CSS** — Demonstrates CSS custom properties, Grid, Flexbox, and responsive design
- **Commented JavaScript** — Explains what each function does and why

## Future Projects

Potential additions to expand the practice repository:
- Form validation with custom error messages
- Dropdown menu with click-outside detection
- Modal dialog with focus trap
- Infinite scroll or lazy loading
- Search filter functionality
- Theme switcher (dark/light mode)

## License

Free to use, modify, and learn from. No license restrictions.

---

**Created:** April 2026  
**Repository:** frontend-snippets  
**Language:** HTML, CSS, JavaScript (Vanilla)  
**Status:** Active and ongoing
