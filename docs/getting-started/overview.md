# Introdução ao Hub BConnector

O **Hub BConnector** é uma solução multi-tenant e white label projetada para unificar a integração entre ERPs e Marketplaces. Ele atua como uma camada de canonização, permitindo que diferentes sistemas falem a mesma língua.

## Funcionalidades Principais
- **Canonização de Dados**: Transforma payloads proprietários de ERPs em um formato padrão (Hub-Core).
- **Multi-tenancy**: Suporte a múltiplos White Labels, cada um com seus próprios Sellers e Fornecedores.
- **Sincronização em Tempo Real**: Processamento de estoque e pedidos via Webhooks.
- **Arquitetura Desacoplada**: Suporte modular para novos marketplaces e ERPs.

## Por onde começar?
1. [Autenticação](../auth/authentication.md): Entenda como as chaves de API e o OAuth do Mercado Livre funcionam.
2. [Papéis e Permissões](../core/roles-permissions.md): Conheça os perfis de acesso (Operador vs Fornecedor).
3. [Produtos](../api/openapi.yaml): Veja como criar produtos canônicos via API.

---
[Ver Contratos da API (Swagger)](/api/openapi.yaml) | [Repositório Git](https://github.com/Bconnector/hub-doc-api)
