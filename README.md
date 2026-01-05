# Vite + React + TypeScript + Tailwind CSS Project

A modern React application built with Vite, TypeScript, and Tailwind CSS v4.

## Features

- ⚡ **Vite** - Fast development and building
- ⚛️ **React 19** - Latest React features
- 📘 **TypeScript** - Type safety and better developer experience
- 🎨 **Tailwind CSS v4** - Utility-first CSS framework
- 🔧 **PostCSS** - CSS processing with autoprefixer
- 📱 **Responsive Design** - Mobile-first approach
- 🎭 **Modern Styling** - Gradient backgrounds, animations, and shadows

## Getting Started

### Prerequisites

- Node.js 18+ and npm

### Installation

1. Clone the repository
2. Install dependencies:

```bash
npm install
```

### Development

Start the development server:

```bash
npm run dev
```

The application will be available at `http://localhost:5173`

### Building for Production

Create a production build:

```bash
npm run build
```

Preview the production build:

```bash
npm run preview
```

## Project Structure

```
impala/
├── src/
│   ├── assets/          # Static assets (images, icons)
│   ├── App.tsx         # Main application component
│   ├── main.tsx        # Application entry point
│   └── index.css       # Tailwind CSS directives
├── public/             # Public assets
├── index.html          # HTML template
├── package.json        # Dependencies and scripts
├── vite.config.ts      # Vite configuration
├── tsconfig.json       # TypeScript configuration
├── tailwind.config.js  # Tailwind CSS configuration
└── postcss.config.js   # PostCSS configuration
```

## Key Technologies

### Vite
- Fast cold server start
- Instant Hot Module Replacement (HMR)
- Optimized build with Rollup

### React 19
- Latest React features and improvements
- Concurrent features
- Improved performance

### TypeScript
- Static type checking
- Better IDE support
- Enhanced code quality

### Tailwind CSS v4
- Utility-first CSS framework
- JIT compiler for faster builds
- Customizable design system
- Dark mode support
- Responsive design utilities

## Customization

### Tailwind Configuration
Edit `tailwind.config.js` to customize:
- Colors, fonts, and spacing
- Breakpoints and container sizes
- Plugins and variants

### Adding Pages
Create new React components in the `src/` directory and import them into `App.tsx` or set up routing.

### Styling
Use Tailwind CSS utility classes directly in your JSX/TSX components. For custom styles, add them to `src/index.css`.

## Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

## Learn More

- [Vite Documentation](https://vite.dev/guide/)
- [React Documentation](https://react.dev/learn)
- [TypeScript Documentation](https://www.typescriptlang.org/docs/)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)

## License

This project is open source and available under the MIT License.