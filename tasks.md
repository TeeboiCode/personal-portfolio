
# Task: Portfolio Card Component Development

## Objective

Create a reusable **Card component** for the portfolio section based on the provided design.

---

## 🧱 Component Structure

- Develop a **Card.vue** component and place it in the `components/` folder.
- If `views/portfolio.vue` does not exist, create it.
- This Card component will be imported and used in `portfolio.vue`.

---

## 🎨 Design Guidelines

- Follow the layout and style shown in the provided design screenshot.
- **Default State**: Only the **image** is visible.
- **On Hover**: A **smooth slide-up** effect reveals the **title** and a **"Read More"** button overlaying the image.

---

## 💡 Interaction

- Ensure the hover **slide-up animation** is smooth.
- Use CSS transitions for effects.
- Hover effect must work across screen sizes responsively.

---

## 📱 Responsive Design (Using Bootstrap)

| Device Width       | Bootstrap Column Class | Cards per Row |
|--------------------|-------------------------|----------------|
| Mobile (≤ 576px)   | `col-12`                | 1 card         |
| Tablet (≥ 768px)   | `col-6`                 | 2 cards        |
| Large (≥ 992px)    | `col-4`                 | 3 cards        |

---

## 🖼️ Images

- Use the same or similar images as shown in the provided screenshot for placeholder/demo purposes.
- Ensure image scaling and cropping are responsive and do not distort the layout.

