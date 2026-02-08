---
layout: page
title: Referência da API
---

# Referência da API

Consulte abaixo todos os endpoints, parâmetros e modelos de dados do Hub BConnector. Esta documentação é gerada automaticamente a partir do nosso contrato Swagger 2.0.

<div id="redoc-container"></div>

<script>
  if (typeof window !== 'undefined') {
    const checkRedoc = setInterval(() => {
      if (typeof Redoc !== 'undefined') {
        clearInterval(checkRedoc);
        Redoc.init(
          '/api/openapi.yaml', 
          {
            scrollYOffset: 60,
            hideDownloadButton: false,
            theme: {
              colors: {
                primary: {
                  main: '#3eaf7c'
                }
              }
            }
          }, 
          document.getElementById('redoc-container')
        );
      }
    }, 100);
  }
</script>

<style>
  #redoc-container {
    margin-top: 20px;
    border: 1px solid #eee;
    border-radius: 8px;
    overflow: hidden;
    background: white;
  }
</style>
