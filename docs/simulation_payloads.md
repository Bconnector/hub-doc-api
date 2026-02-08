# Testes de Simulação: Validação de Blueprints Mercado Livre

Use os payloads abaixo no Postman ou via Terminal (cURL) para validar o motor de criação de produtos.

**Endpoint**: `POST https://hub-product-api.contato-614.workers.dev/api/marketplaces/mercadolivre/products/prepare`
**Headers**:
- `Content-Type`: `application/json`
- `X-API-KEY`: `hub_live_160be16ad7ec787c3649987bd2f2960c`

---

## 1. Produto Simples (Tecnologia - Smartphone)
**Objetivo**: Testar criação de Ficha Técnica completa e detecção de Catálogo.
**Cenário**: iPhone 14, rico em atributos.

```json
{
  "supplier_id": "00000000-0000-0000-0000-000000000001",
  "product": {
    "external_id": "TEST-IPHONE-001",
    "title": "Apple iPhone 14 (128 GB) - Meia-noite",
    "description": "Tela Super Retina XDR de 6,1 polegadas. Sistema de câmera avançado para fotos melhores em qualquer luz. Modo Cinema, agora em 4K Dolby Vision até 30 qps. Modo Ação para vídeos em movimento com mais estabilidade. Tecnologia de segurança vital—Detecção de Acidente1 liga para a emergência se você não puder.",
    "brand": "Apple",
    "model": "iPhone 14",
    "price": 4599.00,
    "quantity": 10,
    "gtin": "194253408168",
    "images": [
      "https://http2.mlstatic.com/D_NQ_NP_609772-MLA51369324647_092022-O.webp"
    ],
    "attributes": {
      "Memória interna": "128 GB",
      "Memória RAM": "6 GB",
      "Cor principal": "Preto",
      "Nome do sistema operacional": "iOS",
      "Versão do sistema operacional": "16",
      "Modelo do processador": "Apple A15 Bionic"
    },
    "variations": []
  },
  "preferred_category": {
    "category_id": "MLB1055"
  }
}
```

---

## 2. Produto com Variações (Moda - Camiseta)
**Objetivo**: Testar estrutura de Grades (Cor/Tamanho), mapeamento de atributos obrigatórios de moda e herança de fotos.
**Cenário**: Camiseta com 2 cores e tamanhos variados.

```json
{
  "supplier_id": "00000000-0000-0000-0000-000000000001",
  "product": {
    "external_id": "TEST-SHIRT-VAR-002",
    "title": "Camiseta Básica Algodão Premium Unissex",
    "description": "Camiseta 100% algodão penteado fio 30.1. Ideal para dia a dia e personalização. Costura reforçada ombro a ombro.",
    "brand": "Hering",
    "model": "Básica World",
    "price": 49.90,
    "images": [
      "https://http2.mlstatic.com/D_NQ_NP_918967-MLB51838618731_102022-O.webp"
    ],
    "attributes": {
      "Gênero": "Sem gênero",
      "Material principal": "Algodão",
      "Tipo de manga": "Curta",
      "Tipo de gola": "Gola Redonda"
    },
    "variations": [
      {
        "attributes": { "Cor": "Preto", "Tamanho": "P" },
        "quantity": 20,
        "price": 49.90
      },
      {
        "attributes": { "Cor": "Preto", "Tamanho": "M" },
        "quantity": 15,
        "price": 49.90
      },
      {
        "attributes": { "Cor": "Branco", "Tamanho": "G" },
        "quantity": 10,
        "price": 49.90,
        "images": ["https://http2.mlstatic.com/D_NQ_NP_705973-MLB51838645564_102022-O.webp"]
      }
    ]
  },
  "preferred_category": {
    "category_id": "MLB438816"
  }
}
```

---

## 3. Produto Técnico (Autopeças - Pneu)
**Objetivo**: Testar validação rigorosa de atributos técnicos (Medidas, Índice de carga) e Ficha Técnica.
**Cenário**: Pneu Michelin Aro 16.

```json
{
  "supplier_id": "00000000-0000-0000-0000-000000000001",
  "product": {
    "external_id": "TEST-TIRE-003",
    "title": "Pneu Michelin Primacy 4 205/55 R16 91V",
    "description": "O pneu MICHELIN Primacy 4+ foi desenvolvido para oferecer segurança e performance feitas para durar. N.º 1 em durabilidade. Excelente frenagem em piso molhado.",
    "brand": "Michelin",
    "model": "Primacy 4",
    "price": 650.00,
    "quantity": 4,
    "images": [
      "https://http2.mlstatic.com/D_NQ_NP_967831-MLA46617056636_072021-O.webp"
    ],
    "attributes": {
      "Largura de secção": "205 mm",
      "Relação de aspecto": "55",
      "Diâmetro da roda": "16 \"",
      "Índice de carga": "91",
      "Índice de velocidade": "V",
      "Tipo de veículo": "Carro"
    },
    "variations": []
  },
  "preferred_category": {
    "category_id": "MLB2233"
  }
}
```

---

## 4. Produto Incompleto (Teste da IA "Self-Healing")
**Objetivo**: Forçar o sistema a usar a IA para descobrir atributos obrigatórios (Voltagem, Potência, Marca) apenas lendo a descrição.
**Cenário**: Furadeira sem atributos estruturados no JSON.

```json
{
  "supplier_id": "00000000-0000-0000-0000-000000000001",
  "product": {
    "external_id": "TEST-AI-DRILL-004",
    "title": "Furadeira Parafusadeira Impacto Bosch GSB 18V-50",
    "description": "A Furadeira Parafusadeira de Impacto a Bateria de 18V com Motor Brushless (sem escovas de carvão). Potência de 50Nm. Voltagem da bateria: 18V. Cor: Azul. Mandril de metal robusto.",
    "price": 899.90,
    "quantity": 5,
    "images": [
      "https://http2.mlstatic.com/D_NQ_NP_864273-MLA45343467474_032021-O.webp"
    ],
    "attributes": {
      // NOTE: Intencionalmente vazio para testar a IA descobrindo:
      // - Voltagem (18V)
      // - Potência/Torque (50 nm)
      // - Cor (Azul)
      // - Marca (Bosch)
    },
    "variations": []
  },
  "preferred_category": {
    "category_id": "MLB456969" 
  }
}
``` 
