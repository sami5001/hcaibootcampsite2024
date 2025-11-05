# Human-Centered Medical AI Design Bootcamp 2024

This is the official website for the Oxford University Human-Centered AI (HcAI) Design Bootcamp 2024, a comprehensive educational program focused on medical AI design with human-centered principles.

## About the Bootcamp

The HcAI Design Bootcamp brings together experts in medical AI, design thinking, ethics, and healthcare innovation. This 5-day intensive program features keynote speakers, hands-on workshops, and collaborative activities designed to equip participants with the skills to create ethical, effective, and human-centered medical AI solutions.

## Technology Stack

This website is built with:

- **Framework:** [Next.js 14](https://nextjs.org/) with React 18
- **Language:** TypeScript 5.3
- **Styling:** Tailwind CSS 3.4 with Typography plugin
- **Content:** Markdown files with YAML frontmatter
- **Deployment:** Vercel

## Prerequisites

- Node.js 18.17 or higher
- npm, yarn, pnpm, or bun

## Getting Started

1. **Clone the repository:**
   ```bash
   git clone <repository-url>
   cd hcaibootcampsite2024
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Run the development server:**
   ```bash
   npm run dev
   ```

4. **Open your browser:**
   Navigate to [http://localhost:3000](http://localhost:3000) to see the website.

## Project Structure

```
/app
├── /components/        # Reusable React components
├── /content/          # Markdown content files
│   ├── /speakers/     # Speaker profiles
│   ├── /trainers/     # Trainer profiles
│   ├── /lectures/     # Lecture descriptions
│   ├── /sponsors/     # Sponsor information
│   └── /agenda/       # Event schedule
├── /speakers/         # Speakers pages
├── /trainers/         # Trainers pages
├── /lectures/         # Lectures pages
├── /sponsors/         # Sponsors pages
├── /activities/       # Activities page
├── /agenda/           # Agenda page
└── page.tsx           # Home page

/lib
├── content.ts         # Content loading utilities
└── tagUtils.ts        # Tag styling utilities

/public
└── /images/          # Static images and logos
```

## Features

- **Markdown-based Content Management:** All content is stored in markdown files with YAML frontmatter for easy editing
- **Dark Mode:** Full dark mode support with system preference detection and localStorage persistence
- **Responsive Design:** Mobile-first design that works seamlessly across all devices
- **Dynamic Routing:** Automatic page generation for speakers, trainers, lectures, and sponsors
- **Type-safe:** Built with TypeScript for enhanced developer experience and reliability

## Adding Content

To add or modify content, edit the markdown files in the `/app/content/` directory. See [CONTRIBUTING.md](./CONTRIBUTING.md) for detailed guidelines on content formatting.

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

## Deployment

The site is configured for deployment on [Vercel](https://vercel.com). Any push to the main branch will trigger an automatic deployment.

## Contributing

Contributions are welcome! Please read [CONTRIBUTING.md](./CONTRIBUTING.md) for details on how to add or modify content.

## License

This project is maintained by the University of Oxford Human-Centered AI initiative.
