# Lotto Generator Blueprint

## Overview
A modern, visually appealing Lotto number generator that provides 5 sets of unique lucky numbers (1-45). The application focuses on a clean user experience with vibrant animations and responsive design.

## Project Outline
- **Features**:
  - 5 sets of random Lotto number generation.
  - **Dark Mode / Light Mode toggle.**
  - **"+" button to append additional single sets.**
  - Interactive "Generate" button.
  - Modern, color-coded Lotto balls.
  - Fully responsive layout.

## Current Implementation Plan
1. **HTML Structure (`index.html`)**:
   - Add a theme toggle button in the header.
   - Add an "Add Set" (+) button in the actions section.
2. **Styling (`style.css`)**:
   - Implement CSS variables for light and dark themes.
   - Add styles for the theme toggle and new action button.
   - Use `:has()` or class-based switching for the theme.
3. **Logic (`main.js`)**:
   - Implement theme switching logic with `localStorage` persistence.
   - Refactor generation logic to allow appending single sets.
   - Add event listeners for the new buttons.
