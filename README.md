# Sistema de Enquete em Tempo Real

> *Repositório oficial do Versus Codecon: crie um sistema de enquete onde os resultados atualizam ao vivo para todos os usuários conectados — sem recarregar a página.*

## Sobre o Desafio

O desafio é construir um sistema de enquete funcional com atualização em tempo real. O usuário entra na página, vê a enquete, vota, e o resultado aparece na tela de todo mundo ao mesmo tempo — sem nenhum refresh.

A restrição: sem IA, sem bibliotecas que abstraiam a comunicação em tempo real, e com um tempo limite apertado. Você precisa entender o que está implementando — WebSocket, polling, SSE — e escolher conscientemente.

## Regras do Desafio

### Limitações
- ⏱️ **2 horas** para desenvolvimento
- 🚫 **Sem IA** (código na raça!)
- 🔄 Foco em **tempo real de verdade**
- 🛠️ Qualquer stack de desenvolvimento
- 📚 Sem bibliotecas que abstraiam a comunicação em tempo real

### Requisitos Técnicos
- Sistema de enquete funcional com criação de perguntas e opções de voto
- Atualização dos resultados em tempo real para todos os clientes conectados
- Sem necessidade de recarregar a página para ver novos votos

## 📁 Estrutura do Repositório

```
/
├── seu-nome-aqui/        # 👈 Sua contribuição!
│   ├── src/
│   │   └── ...
│   ├── package.json
│   └── README.md
└── README.md
```

## Participe Você Também!

**Acha que consegue fazer melhor?** Mostre suas habilidades!

### Como Contribuir

1. **Fork** este repositório
2. Crie uma pasta com seu nome/username
3. Desenvolva seu sistema de enquete em tempo real
4. Documente seu processo no README
5. Abra um **Pull Request**

### Template de Documentação

Seu README deve incluir:
- **Stack**: Tecnologias utilizadas
- **Abordagem de Tempo Real**: WebSocket, polling, SSE? Por quê?
- **Resultado**: Screenshots ou demo
- **Aprendizados**: O que funcionou? O que mudaria?

## Conceitos-Chave

### WebSocket vs. Polling — qual a diferença real?

- **WebSocket**: Conexão persistente e bidirecional entre cliente e servidor. O servidor envia dados ao cliente assim que algo acontece, sem o cliente precisar pedir.
- **Short Polling**: O cliente pergunta ao servidor a cada N segundos: "tem novidade?". Funciona, mas gera requisições desnecessárias e delay perceptível.
- **Long Polling**: O cliente faz uma requisição e o servidor segura a resposta até ter uma novidade. Reduz o delay, mas ainda não é uma conexão persistente.
- **Server-Sent Events (SSE)**: Canal unidirecional do servidor para o cliente. Mais simples que WebSocket quando você só precisa receber dados.

### Quando cada um faz sentido?
- **WebSocket**: Chats, jogos, dashboards com alta frequência de atualizações, enquetes ao vivo
- **Polling**: Notificações de baixa frequência, quando WebSocket é infraestrutura demais pro problema
- **SSE**: Feeds de dados, resultados de eleições, qualquer coisa que flua só do servidor pro cliente

### Armadilhas Comuns
- Chamar de "tempo real" o que é polling com intervalo de 2 segundos
- Não lidar com reconexão quando o WebSocket cai
- Não pensar em escala: e se mil pessoas votarem ao mesmo tempo?
- Esquecer de fechar conexões no lado do servidor

## Dicas de Desenvolvimento

### Com apenas 2 horas
1. **Defina o escopo mínimo**: Uma enquete, múltiplas opções, resultado ao vivo
2. **Escolha a stack que você domina**: Não é hora de aprender tecnologia nova
3. **Resolva o tempo real primeiro**: É o requisito mais difícil, não deixe pro final
4. **Teste com dois navegadores abertos**: É a única forma de validar se o tempo real funciona de verdade

## 🤝 Apoie a Codecon

Gostou do desafio? Apoie a criação de mais conteúdos como este!

### Codecon PRO - Apenas R$ 15/mês
- 🎫 Crachá especial na Codecon Summit
- 💬 Acesso ao grupo secreto no WhatsApp/Discord
- 🎬 Acompanhe os bastidores dos eventos
- 📧 Newsletter semanal exclusiva
- 🎨 Tema da Codecon para VSCode

[Assine agora em codecon.dev/pro](https://codecon.dev/pro)

## 📱 Siga a Codecon

- [Instagram](https://instagram.com/codecondev) - @codecondev
- [YouTube](https://youtube.com/codecondev) - Vídeos toda semana
- [Site Oficial](https://codecon.dev) - Todos os eventos

## 📜 Licença

Este projeto está sob licença MIT. Sinta-se livre para explorar, aprender e compartilhar!

---

*Feito com ⌨️ e muita raça pela comunidade Codecon*

**#Versus #WebSocket #Polling #TempoReal #Codecon #SeniorVsJunior**
