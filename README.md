# 📚 Book List App

A modern, accessible, and reusable **React + TypeScript** application that displays a list of books using modular components and mock in-memory data. Users can toggle book descriptions and dynamically add new books.

---

## 🚀 Features

### ✔ Reusable Components
- **BookItem** – Displays a book title, optional image, and a toggleable description.
- **BookList** – Renders a list of `BookItem` components and provides an “Add new book” button.

### ✔ Accessibility (WCAG Compliant)
- Proper ARIA attributes (`aria-expanded`, `aria-controls`)
- Keyboard-friendly interaction via semantic HTML buttons
- Alt text and fallback behavior for images
- Focus-visible maintained
- Screen reader–friendly labels

### ✔ State Management
- Internal component state handles:
  - Description visibility
  - Dynamically growing book list

### ✔ Error Handling
- Invalid image URLs automatically fall back to a placeholder
- Missing descriptions are handled gracefully

### ✔ Testing
- Built with **Vitest** + **React Testing Library**
- Tests cover:
  - Rendering
  - Toggling description
  - Rendering image or placeholder
  - Adding new books

---

## 🛠 Tech Stack

- **React 18**
- **TypeScript**
- **Vite**
- **React Testing Library**
- **Vitest**
- **Prettier**
- **ESLint**

---

## 📦 Installation

Clone the repository:

```sh
git clone https://github.com/dsoporan/book-list
cd book-list
