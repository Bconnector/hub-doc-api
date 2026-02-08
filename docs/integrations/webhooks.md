# Webhooks e Integrações

O Hub BConnector é fortemente baseado em eventos. Webhooks são utilizados para garantir que o estoque e os pedidos estejam sempre sincronizados entre ERPs e Marketplaces.

## 1. Webhooks de Entrada (Inbound)
O Hub expõe endpoints para receber notificações de sistemas externos:
- **ERP (ex: Bling)**: Atualizações de saldo de estoque.
- **Marketplaces (ex: Mercado Livre)**: Novas vendas, cancelamentos, atualizações de status de entrega.

## 2. Webhooks de Saída (Outbound)
O Hub pode notificar sistemas de terceiros (White Labels ou Fornecedores) sobre eventos processados:
- **Evento: `stock.updated`**: Notifica que o estoque de um produto foi alterado no hub.
- **Evento: `order.created`**: Notifica uma nova venda canonizada pronta para faturamento.

## 3. Estrutura Canônica
Independente da origem, os eventos são transformados em um formato canônico antes de serem processados pela lógica de negócio do Hub.

---
[Ver Configuração de Webhooks na API](/api/openapi.yaml)
