# Papéis e Permissões

O Hub BConnector utiliza um sistema de permissões baseado em papéis (Role-Based Access Control) para garantir a segurança e a separação de dados entre diferentes entidades.

## 1. Perfil: Operador (Admin / White Label)
Representa o dono da operação ou do White Label.
- **Acesso**: Total à sua estrutura.
- **Responsabilidades**:
  - Configuração de novos Fornecedores e Sellers.
  - Definição de estratégias globais de estoque.
  - Acesso a logs detalhados e ferramentas de reprocessamento.
  - Monitoramento de webhooks e falhas de integração.

## 2. Perfil: Fornecedor (Operacional)
Representa o parceiro que fornece os produtos e estoque.
- **Acesso**: Limitado aos seus próprios dados.
- **Responsabilidades**:
  - Cadastro e manutenção de produtos próprios.
  - Atualização de saldos de estoque (via API ou Interface).
  - Consulta de status de sincronização de seus itens.
- **Restrições**: Não visualiza configurações globais, dados de outros fornecedores ou payloads internos de outros marketplaces.

---
[Ver detalhes de Produtos e Fornecedores na API](../api/openapi.yaml#L36)
