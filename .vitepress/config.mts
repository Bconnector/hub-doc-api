import { defineConfig } from 'vitepress'

export default defineConfig({
    title: "Hub BConnector",
    description: "API & Documentation Foundation",
    themeConfig: {
        logo: '/logo.png', // Opcional: Adicionar um logo depois
        nav: [
            { text: 'Home', link: '/' },
            { text: 'Guia', link: '/docs/getting-started/overview' },
            { text: 'API Swagger', link: 'https://app.swaggerhub.com/apis/BCONNECTORBR/hub-bconnector' }
        ],
        sidebar: [
            {
                text: 'Começando',
                items: [
                    { text: 'Visão Geral', link: '/docs/getting-started/overview' },
                    { text: 'Autenticação', link: '/docs/auth/authentication' },
                    { text: 'Papéis e Permissões', link: '/docs/core/roles-permissions' }
                ]
            },
            {
                text: 'Marketplaces',
                items: [
                    { text: 'Mercado Livre', link: '/docs/marketplaces/mercado-livre/overview' }
                ]
            },
            {
                text: 'Integrações',
                items: [
                    { text: 'Webhooks', link: '/docs/integrations/webhooks' }
                ]
            }
        ],
        socialLinks: [
            { icon: 'github', link: 'https://github.com/Bconnector/hub-doc-api' }
        ],
        footer: {
            message: 'Hub BConnector | Integração Inteligente',
            copyright: 'Copyright © 2026'
        }
    }
})
