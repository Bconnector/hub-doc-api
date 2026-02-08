import { defineConfig } from 'vitepress'

export default defineConfig({
    title: "Hub BConnector",
    description: "API & Documentation Foundation",
    head: [
        ['script', { src: 'https://cdn.redoc.ly/redoc/latest/bundles/redoc.standalone.js' }]
    ],
    themeConfig: {
        logo: '/logo.png', // Opcional: Adicionar um logo depois
        nav: [
            { text: 'Home', link: '/' },
            { text: 'Guia', link: '/docs/getting-started/overview' },
            { text: 'Referência API', link: '/docs/api/reference' },
            { text: 'SwaggerHub', link: 'https://app.swaggerhub.com/apis/BCONNECTORBR/hub-bconnector' }
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
                text: 'API Reference',
                items: [
                    { text: 'Documentação Interativa', link: '/docs/api/reference' }
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
