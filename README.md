# React Alert Component 🚨

A modern, customizable alert component built with React, TypeScript, and SCSS. Perfect for displaying notifications, warnings, success messages, and error alerts in your React applications.

## ✨ Features

- 🎨 **4 Alert Types**: Info, Warning, Success, and Error
- 🔧 **TypeScript Support**: Fully typed for better development experience
- 💅 **SCSS Styling**: Modular and customizable styles
- 📱 **Responsive Design**: Works on all screen sizes
- ⚡ **Auto-dismiss**: Configurable timeout functionality
- 🎯 **Zero Dependencies**: Only uses React Icons for the notification icon

## 🚀 Quick Start

### Installation

```bash
# Clone the repository
git clone <your-repo-url>
cd AlertComponent

# Install dependencies
npm install

# Start development server
npm run dev
```

### Usage

```tsx
import Alert from './components/Alert';

function App() {
  return (
    <Alert 
      type="success" 
      message="Operation completed successfully!" 
    />
  );
}
```

## 📋 API Reference

### Alert Component Props

| Prop | Type | Description | Required |
|------|------|-------------|---------|
| `type` | `'info' \| 'warning' \| 'success' \| 'error'` | Alert type | ✅ |
| `message` | `string` | Message to display in the alert | ✅ |
| `duration` | `number` | Auto-dismiss duration in milliseconds (optional) | ❌ |

## 🎨 Alert Types

### Info Alert
```tsx
<Alert type="info" message="This is an informational message" />
```

### Warning Alert
```tsx
<Alert type="warning" message="This is a warning message" />
```

### Success Alert
```tsx
<Alert type="success" message="Operation completed successfully" />
```

### Error Alert
```tsx
<Alert type="error" message="An error occurred" />
```

## 🛠️ Customization

### Colors
Customize alert colors by modifying the SCSS variables in `src/styles/_Vars.scss`:

```scss
$success: #4caf50;  // Green
$error: #f44336;    // Red
$warning: #ff9800;  // Orange
$info: #2196f3;     // Blue
```

### Styling
The component uses modular SCSS. Main styles are in:
- `src/styles/_Alert.scss` - Alert component styles
- `src/styles/_Vars.scss` - Color and theme variables
- `src/styles/main.scss` - Global styles

## 🏗️ Project Structure

```
src/
├── components/
│   └── Alert.tsx          # Main Alert component
├── styles/
│   ├── _Alert.scss        # Alert-specific styles
│   ├── _Vars.scss         # SCSS variables
│   └── main.scss          # Global styles
├── App.tsx                # Demo application
└── main.tsx               # Entry point
```

## 🧪 Demo

The project includes a demo page that showcases all alert types. Run `npm run dev` to see it in action!

## 📦 Built With

- **React 19** - UI Library
- **TypeScript** - Type Safety
- **Vite** - Build Tool
- **SCSS** - Styling
- **React Icons** - Icon Library

## 🚀 Available Scripts

```bash
npm run dev      # Start development server
npm run build    # Build for production
npm run lint     # Run ESLint
npm run preview  # Preview production build
```

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🐛 Issues & Support

If you encounter any issues or have questions, please [open an issue](../../issues) on GitHub.

---

⭐ **Star this repository if you found it helpful!**
