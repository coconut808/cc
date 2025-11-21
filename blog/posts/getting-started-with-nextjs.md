---
title: "Getting Started with Next.js 15"
date: "2025-11-20"
excerpt: "A comprehensive guide to getting started with Next.js 15, covering the App Router, Server Components, and more."
author: "Blog Author"
tags: ["nextjs", "react", "tutorial", "web-development"]
---

# Getting Started with Next.js 15

Next.js has become one of the most popular React frameworks, and for good reason. It provides everything you need to build production-ready web applications.

## Why Next.js?

Next.js offers several compelling features:

- **Server-Side Rendering (SSR)** - Better SEO and initial load performance
- **Static Site Generation (SSG)** - Pre-render pages at build time
- **API Routes** - Build your backend alongside your frontend
- **File-based Routing** - Intuitive routing based on your file structure
- **Image Optimization** - Automatic image optimization out of the box

## Installation

Getting started is simple:

```bash
npx create-next-app@latest my-app
cd my-app
npm run dev
```

## App Router vs Pages Router

Next.js 15 recommends using the App Router, which introduces:

- **Server Components** by default
- **Layouts** for shared UI
- **Loading states** and error handling
- **Parallel routes** and intercepting routes

### Example: A Simple Page

```typescript
// app/page.tsx
export default function Home() {
  return (
    <main>
      <h1>Welcome to Next.js!</h1>
      <p>This is a server component by default.</p>
    </main>
  );
}
```

## Server vs Client Components

One of the biggest changes in Next.js 15 is the distinction between Server and Client Components:

### Server Components (Default)

- Rendered on the server
- Can access backend resources directly
- Zero JavaScript sent to the client
- Better performance

### Client Components

- Rendered in the browser
- Can use hooks and interactivity
- Use the `'use client'` directive

```typescript
'use client';

import { useState } from 'react';

export default function Counter() {
  const [count, setCount] = useState(0);

  return (
    <button onClick={() => setCount(count + 1)}>
      Count: {count}
    </button>
  );
}
```

## Data Fetching

Next.js 15 simplifies data fetching with async Server Components:

```typescript
async function getData() {
  const res = await fetch('https://api.example.com/data');
  return res.json();
}

export default async function Page() {
  const data = await getData();
  return <div>{/* Render data */}</div>;
}
```

## Conclusion

Next.js 15 is a powerful framework that makes building React applications easier and more efficient. Whether you're building a simple blog or a complex web application, Next.js has the tools you need.

Happy coding!
