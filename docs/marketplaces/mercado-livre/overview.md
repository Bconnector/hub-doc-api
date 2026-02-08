# Integração Mercado Livre

O Mercado Livre é o marketplace primário do Hub BConnector. A integração é projetada para ser automatizada e escalável.

## 1. Produtos
- **Categorização**: O Hub gerencia a árvore de categorias do ML.
- **Atributos**: Suporte a atributos técnicos obrigatórios e opcionais.
- **Catálogo**: O Hub identifica automaticamente oportunidades de publicação em anúncios de "Catálogo".

## 2. Logística e Faturamento
- **Mercado Envios**: A logística é gerida exclusivamente via Mercado Envios (Coleta/Full).
- **Faturamento**: O faturamento é realizado via Mercado Livre (Faturamento via ML). O Hub consome a nota fiscal emitida no marketplace para atualizar o ERP.

## 3. Fluxo de Pedidos
1. **Notificação**: Webhook do ML notifica o Hub sobre uma nova venda.
2. **Sincronização**: O Hub busca os dados do pedido e envia para o ERP canônico.
3. **Etiquetas**: As etiquetas são geradas no ML e disponibilizadas no Hub para o Fornecedor/Operador.

---
[Ver Endpoints de Pedidos na API](/api/openapi.yaml)
