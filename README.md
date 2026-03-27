# SumoData Toolbox Documentation

Professional documentation site built with VitePress.

## Development

```bash
# Install dependencies
npm install

# Start dev server
npm run docs:dev

# Build for production
npm run docs:build

# Preview production build
npm run docs:preview
```

## Deployment

### GitHub Pages (Automatic)

1. Push to `main` branch
2. GitHub Actions will automatically build and deploy
3. Site will be available at: `https://yourusername.github.io/sumodata-toolbox/`

### Custom Domain

1. Add `CNAME` file to `docs/public/` with your domain
2. Configure DNS:
   - Type: CNAME
   - Name: docs (or @)
   - Value: yourusername.github.io

## Structure

```
docs/
├── .vitepress/
│   ├── config.ts          # VitePress configuration
│   └── theme/
│       └── custom.css     # Custom styling
├── guide/
│   ├── getting-started.md
│   ├── installation.md
│   └── ...
├── features/
│   ├── sumo-pipes.md
│   ├── sumo-lens.md
│   └── sumo-core.md
├── api/
│   ├── configuration.md
│   ├── commands.md
│   └── models.md
└── index.md               # Homepage
```

## Contributing

1. Edit markdown files in respective folders
2. Test locally with `npm run docs:dev`
3. Submit pull request

## License

MIT
