# Blog Site

A modern blog built with Next.js 15, TypeScript, and Tailwind CSS that supports writing posts in Markdown format.

## Features

- 📝 Write blog posts in Markdown
- 🎨 Beautiful, responsive design with Tailwind CSS
- 🌙 Dark mode support
- 🎯 Syntax highlighting for code blocks
- 🏷️ Tag support for organizing posts
- ⚡ Fast static site generation
- 📱 Mobile-friendly
- 🔍 SEO optimized

## Getting Started

### Development

1. Install dependencies:
```bash
npm install
```

2. Run the development server:
```bash
npm run dev
```

3. Open [http://localhost:3000](http://localhost:3000) in your browser

### Building for Production

```bash
npm run build
npm start
```

## Writing Blog Posts

### Creating a New Post

1. Create a new `.md` file in the `posts/` directory
2. Add frontmatter at the top of the file with metadata:

```markdown
---
title: "Your Post Title"
date: "2025-11-21"
excerpt: "A brief description of your post"
author: "Your Name"
tags: ["tag1", "tag2", "tag3"]
---

# Your Post Content

Write your blog post content here using Markdown...
```

### Frontmatter Fields

- `title` (required): The title of your blog post
- `date` (required): Publication date in YYYY-MM-DD format
- `excerpt` (optional): A short description shown on the listing page
- `author` (optional): Author name
- `tags` (optional): Array of tags for categorization

### Markdown Features

This blog supports:

- **Headers** (H1-H6)
- **Bold**, *italic*, and ~~strikethrough~~ text
- Lists (ordered and unordered)
- Links and images
- Code blocks with syntax highlighting
- Tables
- Blockquotes
- Task lists
- GitHub Flavored Markdown (GFM)

### Code Syntax Highlighting

Use triple backticks with a language identifier:

````markdown
```typescript
const greeting = (name: string) => {
  console.log(`Hello, ${name}!`);
};
```
````

## Project Structure

```
blog/
├── src/
│   ├── app/                 # Next.js App Router pages
│   │   ├── layout.tsx      # Root layout
│   │   ├── page.tsx        # Home page (blog list)
│   │   ├── posts/
│   │   │   └── [slug]/
│   │   │       └── page.tsx # Individual blog post page
│   │   └── globals.css     # Global styles
│   ├── components/          # React components
│   │   ├── PostCard.tsx    # Blog post card component
│   │   └── MarkdownContent.tsx # Markdown renderer
│   └── lib/                 # Utility functions
│       └── posts.ts        # Post reading/parsing functions
├── posts/                   # Markdown blog posts
│   ├── hello-world.md
│   ├── getting-started-with-nextjs.md
│   └── markdown-tips.md
└── public/                  # Static assets

```

## Tech Stack

- **Next.js 15** - React framework with App Router
- **TypeScript** - Type safety
- **Tailwind CSS v4** - Utility-first CSS framework
- **React Markdown** - Markdown rendering
- **gray-matter** - Frontmatter parsing
- **remark-gfm** - GitHub Flavored Markdown support
- **rehype-highlight** - Syntax highlighting
- **@tailwindcss/typography** - Beautiful typography styles

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm start` - Start production server
- `npm run lint` - Run ESLint

## Customization

### Styling

Edit `src/app/globals.css` to customize colors, fonts, and other styles.

### Layout

Modify `src/app/layout.tsx` to change the header, footer, or overall page structure.

### Components

Update components in `src/components/` to customize the appearance of post cards and markdown rendering.

## License

ISC

---

Built with ❤️ using Next.js and Markdown
