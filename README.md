# Ousama Askri - Personal CV Website

A modern, professional CV website built with Angular 18, TypeScript, and Tailwind CSS. This project follows clean code principles and implements separation of concerns through a well-structured architecture.

## 🚀 Features

- **Modern Design**: Clean, professional UI with smooth animations
- **Responsive**: Fully responsive design for all device sizes
- **Performance**: Optimized for fast loading and smooth interactions
- **Accessibility**: Semantic HTML and ARIA attributes
- **Clean Architecture**: Separation of concerns with models, services, and components

## 📁 Project Structure

```
src/
├── app/
│   ├── components/          # UI Components
│   │   ├── header/          # Navigation header
│   │   ├── hero/            # Hero section
│   │   ├── about/           # About section
│   │   ├── experience/      # Work experience timeline
│   │   ├── education/       # Education section
│   │   ├── skills/          # Skills display
│   │   ├── contact/         # Contact section
│   │   └── footer/          # Footer
│   ├── models/              # TypeScript interfaces & types
│   │   ├── personal-info.model.ts
│   │   ├── experience.model.ts
│   │   ├── education.model.ts
│   │   └── skill.model.ts
│   ├── services/            # Data services
│   │   └── cv-data.service.ts
│   └── app.component.ts     # Root component
├── assets/                  # Static assets
├── environments/            # Environment configs
├── index.html              # Main HTML file
├── main.ts                 # Application bootstrap
└── styles.scss             # Global styles
```

## 🛠️ Technologies

- **Angular 18** - Modern web framework with standalone components
- **TypeScript** - Type-safe JavaScript
- **Tailwind CSS** - Utility-first CSS framework
- **Angular Signals** - Reactive state management

## 🏗️ Architecture

### Models
Type definitions for data structures, ensuring type safety throughout the application.

### Services
`CvDataService` centralizes all CV data and provides computed values using Angular Signals.

### Components
Each component is standalone and responsible for a specific section:
- Uses dependency injection for services
- Implements single responsibility principle
- Follows Angular best practices

## 📄 License

This project is for personal use. Feel free to use it as a template for your own CV website.
