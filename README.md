# Hub BConnector Integration Platform

## Overview
Modular, multi-tenant integration platform.

## Architecture
- `src/core`: Agnostic logic, domain models, interfaces, and event bus.
- `src/connectors`: Marketplace-specific implementations (e.g., Mercado Livre).
- `src/infrastructure`: Database, TokenManager, and external services.

## Domain Models
- `WhiteLabelTenant`
- `MarketplaceApp`
- `SellerAccount`
- `MarketplaceToken`

## Setup
1. `npm install`
2. Configure Supabase credentials.
3. Apply migrations.
