# My Capital One

A modern personal finance management application built with Next.js, TypeScript, and shadcn/ui.

## Features

- 📊 **Dashboard Overview** - View your financial summary at a glance
- 💳 **Transaction Management** - Track income and expenses
- 📈 **Analytics** - Visualize your financial data
- ⚙️ **Settings** - Customize your experience
- 🎨 **Beautiful UI** - Built with Tailwind CSS and shadcn/ui components
- 📱 **Responsive Design** - Works seamlessly on desktop and mobile

## Tech Stack

- **Framework**: Next.js 15.0.0 with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **UI Components**: shadcn/ui design system
- **Icons**: Lucide React

## Project Structure

```
myCapitalOne/
├── src/
│   ├── app/
│   │   ├── layout.tsx          # Root layout
│   │   ├── page.tsx            # Home page (Dashboard)
│   │   └── globals.css         # Global styles
│   ├── components/
│   │   └── layout/
│   │       ├── MainLayout.tsx  # Main layout wrapper
│   │       ├── Header.tsx      # Top navigation header
│   │       └── Sidebar.tsx     # Side navigation menu
│   └── lib/
│       └── utils.ts            # Utility functions
├── public/                     # Static assets
└── package.json
```

## Getting Started

### Prerequisites

- Node.js 18.x or higher
- npm, yarn, or pnpm

### Installation

1. Install dependencies:

```bash
npm install
```

### Development

Run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to see the application.

### Building for Production

Build the application:

```bash
npm run build
```

Start the production server:

```bash
npm start
```

### Linting

Run ESLint:

```bash
npm run lint
```

## Layout Components

### MainLayout

The main layout wrapper that includes the header and sidebar navigation. It manages the mobile sidebar state.

### Header

The top navigation bar featuring:

- Mobile menu toggle
- App logo and branding
- Notifications bell
- User profile menu

### Sidebar

The side navigation menu with:

- Dashboard link
- Transactions link
- Analytics link
- Settings link
- Responsive behavior (slide-out on mobile)

## Customization

### Colors

The color scheme is defined using CSS variables in `src/app/globals.css`. The theme supports both light and dark modes.

### Components

UI components follow the shadcn/ui design system. You can add more components from [shadcn/ui](https://ui.shadcn.com/) as needed.

## Future Enhancements

- Add authentication
- Implement real transaction data
- Create analytics charts and graphs
- Add budget tracking features
- Integrate with banking APIs
- Export data functionality

## License

This project is for educational purposes.

## Contributing

Feel free to submit issues and enhancement requests!
