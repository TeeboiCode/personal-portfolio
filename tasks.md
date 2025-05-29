# Resume Page Layout Breakdown

This document outlines the structure and style needed to implement the **Resume** page as seen in the provided design.

---

## 🔧 GENERAL LAYOUT

- **Two-column layout (responsive)**:
  - **Left Column**: Education Section
  - **Right Column**: Work History Section
- **Dark background theme**
- **Cards**: Each resume entry is displayed inside a card with subtle borders and shadows.
- **Vertical timeline dots**: Connect each card vertically for visual continuity.
- **Typography**: Modern, clean font style with bold, italic, and small-text combinations.
- **Highlight links** (e.g., “DIPLOME”, “RECOMMENDATION”) in yellow with arrow icon.

---

## 📘 LEFT COLUMN — EDUCATION

Each education card includes:
- **Title**: Institution or Course name (bold)
- **Role/Status**: Always shown as `Student` (italic)
- **Date Range**: Top-right corner badge (e.g., `jan 2018 – may 2020`)
- **Description**: Short summary or course highlights
- **Action Link**: Yellow-highlighted link (e.g., `DIPLOME >`, `LICENCE >`)

### Sample Entries:

1. **University of Toronto**
   - Student
   - Date: `jan 2018 – may 2020`
   - Description: Bachelor's Degree in Computer Science, ABC Technical Institute, Jefferson, Missouri
   - Action: DIPLOME >

2. **Programming Course**
   - Student
   - Date: `jan 2016 – apr 2017`
   - Description: Git, WordPress, JavaScript, iOS, Android

3. **Web Developer Courses**
   - Student
   - Date: `aug 2014 – oct 2015`
   - Description: Converted Photoshop layouts to HTML, CSS, and JavaScript
   - Action: LICENCE >

---

## 💼 RIGHT COLUMN — WORK HISTORY

Each work card includes:
- **Title**: Company name (bold)
- **Role/Title**: Job title (italic)
- **Date Range**: Top-right corner badge (e.g., `jan 2018 – may 2020`)
- **Description**: Summary of responsibilities or contributions
- **Action Link**: Yellow-highlighted link (e.g., `RECOMMENDATION >`)

### Sample Entries:

1. **Envato**
   - Template Author
   - Date: `jan 2018 – may 2020`
   - Description: Created professional WordPress themes and templates

2. **ABC Studio**
   - Front-End Developer
   - Date: `apr 2018 – aug 2019`
   - Description: Collaborated with creative and development teams
   - Action: RECOMMENDATION >

3. **Digital Web Studio**
   - Senior Developer
   - Date: `jan 2017 – may 2018`
   - Description: Optimized website and app performance
   - Action: RECOMMENDATION >

---

## 🧩 STYLING DETAILS

- **Card Styling**:
  - Background: Dark gray/black
  - Rounded corners, padding, and shadows
- **Date Badge**:
  - Rounded pill-style with smaller font
  - Positioned in the upper right of the card
- **Highlight Links**:
  - Yellow text with `>` arrow
- **Timeline Dots**:
  - Yellow dots centered between columns
  - Used to visually connect the resume items

---

## ✅ RESPONSIVE BEHAVIOR

- On tablet and mobile devices:
  - Education and Work sections stack vertically
  - Timeline dots removed or repositioned
  - Margins and padding adjusted for smaller screens

---

## 📌 TECHNICAL SUGGESTIONS

- Use flex/grid for layout
- Use custom CSS classes for card layout and date badges
- Optionally add scroll animations or timeline lines for visual polish

---

