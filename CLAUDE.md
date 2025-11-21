# CLAUDE.md - AI Assistant Guide

## Project Overview

**Repository**: Claude Code Experiments (cc)
**Purpose**: Experimental repository for testing Claude Code capabilities and workflows
**Tech Stack**: Next.js, React, TypeScript (intended, not yet initialized)
**Current State**: Initial setup phase - minimal project structure

## Repository Structure

```
cc/
├── .git/                 # Git version control
├── .gitignore           # Git ignore rules (Next.js/React/TypeScript configured)
├── README.md            # Project readme
└── CLAUDE.md            # This file - AI assistant guide
```

### Expected Structure (Once Initialized)

```
cc/
├── src/                 # Source code directory
│   ├── app/            # Next.js app directory (App Router)
│   ├── components/     # React components
│   ├── lib/            # Utility functions and libraries
│   └── types/          # TypeScript type definitions
├── public/             # Static assets
├── tests/              # Test files
├── package.json        # Node.js dependencies
├── tsconfig.json       # TypeScript configuration
├── next.config.js      # Next.js configuration
└── .env.local          # Local environment variables (gitignored)
```

## Development Workflow

### Initial Project Setup

If the project hasn't been initialized yet, use:

```bash
# Initialize Next.js with TypeScript
npx create-next-app@latest . --typescript --tailwind --app --src-dir

# Or initialize manually
npm init -y
npm install next react react-dom
npm install -D typescript @types/react @types/node
```

### Git Workflow

1. **Branch Naming**: All development branches must follow the pattern `claude/claude-md-*`
2. **Commits**: Use clear, descriptive commit messages
   - Format: `<type>: <description>`
   - Types: `feat`, `fix`, `docs`, `refactor`, `test`, `chore`
3. **Pushing**: Always use `git push -u origin <branch-name>`
4. **Network Resilience**: Retry failed push/pull operations up to 4 times with exponential backoff

### Development Branch

Currently working on: `claude/claude-md-mi9dtr1quuly7awc-01TMc7iKzbPa78yaP9kLFX3v`

## Key Conventions for AI Assistants

### Code Style

1. **TypeScript**: Use strict mode, explicit types for all functions
2. **React**: Functional components with hooks, avoid class components
3. **Next.js**: Use App Router (not Pages Router)
4. **File Naming**:
   - Components: PascalCase (e.g., `Button.tsx`)
   - Utilities: camelCase (e.g., `formatDate.ts`)
   - Types: PascalCase (e.g., `UserTypes.ts`)

### Security Practices

- **Never commit secrets** to the repository
- Use `.env.local` for sensitive configuration (already gitignored)
- Validate all user inputs
- Follow OWASP Top 10 guidelines
- Avoid: SQL injection, XSS, command injection, insecure dependencies

### File Operations

1. **Prefer editing over creating**: Always edit existing files when possible
2. **Use specialized tools**: Read, Edit, Write (not bash cat/sed/echo)
3. **Check before creating**: Verify parent directories exist
4. **Minimize file creation**: Only create files when absolutely necessary

### Task Management

1. **Use TodoWrite**: For multi-step tasks (3+ steps)
2. **Mark progress**: Update todo status in real-time
3. **One task in progress**: Limit to ONE in_progress task at a time
4. **Complete immediately**: Mark todos completed as soon as finished

### Testing Philosophy

1. Write tests for all new features
2. Run tests before committing
3. Aim for >80% code coverage
4. Use Jest for unit tests, Playwright/Cypress for E2E

### Documentation

1. **Code comments**: Explain "why", not "what"
2. **JSDoc**: Use for all exported functions
3. **README updates**: Keep README.md current with features
4. **API documentation**: Document all API routes and endpoints

## Common Commands

### Development
```bash
npm run dev          # Start development server (port 3000)
npm run build        # Build for production
npm run start        # Start production server
npm run lint         # Run ESLint
npm run type-check   # Run TypeScript compiler check
```

### Testing
```bash
npm test             # Run all tests
npm run test:watch   # Run tests in watch mode
npm run test:coverage # Generate coverage report
```

### Git Operations
```bash
git status           # Check working tree status
git add .            # Stage all changes
git commit -m "msg"  # Commit with message
git push -u origin <branch>  # Push to remote branch
```

## Project-Specific Guidelines

### Experimentation Focus

This is an **experimental repository** for Claude Code. When working here:

1. **Try new approaches**: Test different coding patterns and workflows
2. **Document learnings**: Add notes about what works well
3. **Be bold**: This is a safe space for experimentation
4. **Track experiments**: Document experiments in commit messages

### AI Assistant Behavior

1. **Be concise**: Short, focused responses
2. **Use tools efficiently**: Parallel tool calls when possible
3. **Verify before acting**: Read files before editing/writing
4. **Professional tone**: Objective, factual, no excessive praise
5. **No unsolicited files**: Only create markdown/docs when requested

## Environment Information

- **Platform**: Linux
- **OS**: Linux 4.4.0
- **Working Directory**: `/home/user/cc`
- **Git Repository**: Yes
- **Date Format**: YYYY-MM-DD

## Getting Help

- **Claude Code Help**: Use `/help` command
- **Feedback/Issues**: https://github.com/anthropics/claude-code/issues
- **Documentation**: https://docs.claude.com/en/docs/claude-code/

## Changelog

### 2025-11-21
- Initial CLAUDE.md creation
- Repository structure documented
- Development workflows established
- AI assistant conventions defined

---

**Last Updated**: 2025-11-21
**Maintained By**: Claude AI Assistants
**Version**: 1.0.0
