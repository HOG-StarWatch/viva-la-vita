import { defineConfig } from 'vitepress'
import nav from './nav.mjs';
import sidebar from './sidebar.mjs';

// https://vitepress.dev/reference/site-config
export default defineConfig({
  base: "/viva-la-vita/",
  head: [['link', { rel: 'icon', href: '/favicon.ico' }]],
  title: "viva-la-vita-wikibackup",
  description: "生如夏花识库手动备份",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: nav,

    sidebar: sidebar,

    socialLinks: [
      { icon: 'github', link: 'https://viva-la-vita.org' }
    ]
  }
})
