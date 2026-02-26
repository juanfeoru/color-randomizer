# 🎨 Color Randomizer

A modern, fast, and elegant web application for generating random colors, exploring different formats, and managing color history. Built with performance and user experience in mind.

## ✨ Features

- **Random Color Generation**: Instantly generate vibrant colors with a single click.
- **Multiple Color Formats**: Support for HEX, RGB, and HSL formats.
- **Color History**: Keep track of previously generated colors with timestamps.
- **Color Statistics**: View detailed color properties and statistics.
- **One-Click Copy**: Easily copy color codes to your clipboard.
- **Responsive Design**: Fully optimized for mobile, tablet, and desktop screens.
- **Modern UI**: Sleek interface with dark mode and smooth animations.

## 🚀 Tech Stack

- **Core**: [React 19](https://react.dev/)
- **Build Tool**: [Vite 7](https://vitejs.dev/)
- **Language**: [TypeScript](https://www.typescriptlang.org/)
- **Styling**: [Tailwind CSS 4](https://tailwindcss.com/) (using `@tailwindcss/vite`)
- **Icons**: Custom SVG icons

## 🛠️ Project Structure

```text
src/
├── components/     # UI components (Layout, Color sections, etc.)
├── constants/      # App constants
├── hooks/          # Custom React hooks (useColor)
├── logic/          # Business logic (Storage management)
├── types/          # TypeScript definitions
└── utils/          # Utility functions (Color conversion, Clipboard)
```

## 📦 Installation & Setup

1. **Clone the repository**:

   ```bash
   git clone <repository-url>
   cd color-randomizer
   ```

2. **Install dependencies**:

   ```bash
   npm install
   ```

3. **Start the development server**:

   ```bash
   npm run dev
   ```

4. **Build for production**:
   ```bash
   npm run build
   ```

## 📝 License

This project is open-source and available under the MIT License.
