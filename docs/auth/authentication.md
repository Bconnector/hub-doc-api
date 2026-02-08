# Autenticação e Segurança

O Hub BConnector utiliza dois métodos principais de autenticação: API Keys para operações internas e OAuth 2.0 para integração com o Mercado Livre.

## 1. API Keys (X-API-KEY)
Utilizadas para comunicações servidor-para-servidor.
- **Uso**: Deve ser enviada no header `X-API-KEY`.
- **Escopo**: Define se o acesso é de **Operador** ou **Fornecedor**.

## 2. OAuth Mercado Livre (Sellers)
Para que o Hub opere em nome de um Seller no Mercado Livre, é necessário realizar o fluxo OAuth.

### Fluxo de Autorização
1. O administrador (White Label) acessa a URL de autorização configurada no Hub.
2. O Mercado Livre redireciona para o callback do Hub com um `code`.
3. O Hub troca o `code` pelo `access_token` e `refresh_token`.
4. Os tokens são armazenados com segurança e renovados automaticamente.

> [!IMPORTANT]
> A integração com o Mercado Livre no Hub BConnector é otimizada para múltiplos sellers (multi-account) dentro de um único White Label.

---
[Ver Endpoints de Autenticação na API](../api/openapi.yaml#L33)
