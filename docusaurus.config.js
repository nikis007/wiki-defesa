module.exports = {
  title: 'Wiki de Defesa',
  tagline: 'Enciclopédia militar de acesso público',
  url: 'https://nikis007.github.io',
  baseUrl: '/wiki-defesa/',
  organizationName: 'nikis007',
  projectName: 'wiki-defesa',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  i18n: {
    defaultLocale: 'pt-BR',
    locales: ['pt-BR', 'en'],
  },
  themeConfig: {
    navbar: {
      title: 'Wiki de Defesa',
      logo: { alt: 'Logo', src: 'img/logo.svg' },
      items: [
        { type: 'doc', docId: 'intro', position: 'left', label: 'Início' },
        { type: 'docSidebar', sidebarId: 'docsSidebar', position: 'left', label: 'Categorias' },
        { href: 'https://github.com/nikis007/wiki-defesa', label: 'GitHub', position: 'right' },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Categorias',
          items: [
            { label: 'Blindados', to: '/docs/blindados' },
            { label: 'Aviação', to: '/docs/aviacao' },
            { label: 'Marinha', to: '/docs/marinha' }
            { label: 'Mísseis', to: '/docs/misseis' },
          ],
        },
        {
          title: 'Mais',
          items: [
            { label: 'Drones', to: '/docs/drones' },
            { label: 'Radares', to: '/docs/radares' },
            { label: 'Espaço', to: '/docs/espaco' },
          ],
        },
      ],
    },
    prism: {
      theme: require('prism-react-renderer/themes/github'),
      darkTheme: require('prism-react-renderer/themes/dracula'),
    },
    colorMode: { defaultMode: 'dark', respectPrefersColorScheme: false },
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          routeBasePath: '/',
        },
        blog: false,
        theme: { customCss: require.resolve('./src/css/custom.css') },
      },
    ],
  ],
};
