import { defineConfig } from 'vitepress'

export default defineConfig({
  title: 'SumoData Toolbox',
  description: 'AI-powered tools for Data Engineers, Analysts, and ML Engineers',
  base: '/sumodata-toolbox-docs/',
  head: [
    ['link', { rel: 'icon', href: '/sumodata-toolbox-docs/favicon.ico' }]
  ],
  
  themeConfig: {
    logo: '/logo.svg',
    
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Guide', link: '/guide/getting-started' },
      { text: 'Features', link: '/features/overview' },
      { text: 'API', link: '/api/configuration' }
    ],

    sidebar: {
      '/guide/': [
        {
          text: 'Getting Started',
          items: [
            { text: 'Introduction', link: '/guide/introduction' },
            { text: 'Installation', link: '/guide/installation' },
            { text: 'Quick Start', link: '/guide/getting-started' },
            { text: 'Configuration', link: '/guide/configuration' }
          ]
        },
        {
          text: 'Usage',
          items: [
            { text: 'Basic Usage', link: '/guide/basic-usage' },
            { text: 'Advanced Tips', link: '/guide/advanced-tips' },
            { text: 'Troubleshooting', link: '/guide/troubleshooting' }
          ]
        }
      ],
      '/features/': [
        {
          text: 'Features',
          items: [
            { text: 'Overview', link: '/features/overview' },
            { text: 'Sumo Pipes (Data Engineering)', link: '/features/sumo-pipes' },
            { text: 'Sumo Lens (Data Analysis)', link: '/features/sumo-lens' },
            { text: 'Sumo Core (DS/ML)', link: '/features/sumo-core' }
          ]
        }
      ],
      '/api/': [
        {
          text: 'API Reference',
          items: [
            { text: 'Configuration', link: '/api/configuration' },
            { text: 'Commands', link: '/api/commands' },
            { text: 'Models', link: '/api/models' }
          ]
        }
      ]
    },

    socialLinks: [
      { icon: 'github', link: 'https://github.com/otaruram/sumodata-toolbox-docs' }
    ],

    footer: {
      message: 'Unofficial community project. Not affiliated with Sumopod.',
      copyright: 'MIT Licensed | Made with ❤️ by the community'
    },

    search: {
      provider: 'local'
    }
  }
})
