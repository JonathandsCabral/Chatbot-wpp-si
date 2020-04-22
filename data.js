const data = {
  root: {
    type: "menu",
    messages: [
      { type: "text", data: "Olá, me chamo Luna, sou a assistente do curso de sistemas de informação! 😄" },
      {
        type: "text",
        data: "Em que posso te ajudar? 🤔"
      }
    ],
    childrens: {
      1: {
        type: "submenu",
        title: "Vamos falar sobre S.I? 😊",
        messages: [
          { type: "text", data: "Vamos nessa! 🤓" }
        ],
        childrens: {
          a: {
            type: "data",
            title: "O que é sistemas de informação? 🖥",
            messages: [
              {
                type: "text",
                data:
                  "Sistemas de Informação é a expressão utilizada para descrever um Sistema seja ele automatizado, seja manual, que abrange pessoas, máquinas e/ou métodos organizados para coletar, armazenar, processar, transmitir e disseminar dados que representam informação para o usuário e/ou cliente."
              }
            ]
          },
          b: {
            type: "data",
            title: "O que se estuda em sistema de informação? 📚",
            messages: [
              {
                type: "text",
                data:
                  "O objetivo do curso é formar profissionais capazes de atuar na área de Tecnologia da Informação, criando soluções tecnológicas para determinar o fluxo de informações. O foco do curso está no desenvolvimento de software e no gerenciamento de sistemas informatizados."
              }
            ]
          },
          c: {
            type: "data",
            title: "Como se chama o profissional de S.I? 👩‍🎓",
            messages: [
              {
                type: "text",
                data:
                  "O aluno que se forma no curso de Sistemas da Informação, recebe o título de Analista de Sistemas."
              }
            ]
          }
        }
      },
      2: {
        type: "submenu",
        title: "Salarios! 🤑",
        messages: [
          {
            type: "text",
            data: "Quanto ganhamos? 💰"
          }
        ],
        childrens: {
          a: {
            type: "data",
            title: "Grande Empresa. 🏦",
            messages: [
              {
                type: "text",
                data:
                  "Trainee: R$ 3.237,01 - Master: R$ 7.902,85"
              }
            ]
          },
          b: {
            type: "data",
            title: "Média Empresa. 🏢",
            messages: [
              {
                type: "text",
                data:
                  "Trainee: R$ 2.490,00 - Master: R$ 6.079,11"
              }
            ]
          },
          c: {
            type: "data",
            title: "Pequena Empresa. 🏪",
            messages: [
              {
                type: "text",
                data:
                  "Trainee: R$ 1.915,38 - Master: R$ 4.676,24"
              }
            ]
          }
        }
      },
      3: {
        type: "submenu",
        title: "Linguagens de programação. 🔡",
        messages: [
          {
            type: "text",
            data: "As 7 linguagens de programação que você deve aprender em 2020. 😉"
          }
        ],
        childrens: {
          a: {
            type: "data",
            title: "Veja quais são!",
            messages: [
              {
                type: "text",
                data:
                  "1. Python 🐍, 2. Kotlin 🔢, 3. Java ☕, 4. JavaScript 🈁, 5. TypeScript 🔣, 6. Go 🔜, 7. Swift 🐦."
              }
            ]
          }
        }
      },
      4: {
        type: "submenu",
        title: "Conteúdo adicional. 👩‍💻",
        messages: [
          {
            type: "text",
            data: "Se liga nessas dicas! 💁‍♀️"
          }
        ],
        childrens: {
          a: {
            type: "data",
            title: "Dicas para os alunos. 👨‍💼👩‍💼",
            messages: [
              {
                type: "text",
                data:
                  "1. Enquanto estiver na faculdade, estude! 2. Não existe essa de... essa matéria não irei precisar e nem sei porquê tem no curso! 3. Crie uma base sólida em programação! 4. O mundo fala inglês, e você? Aprenda inglês! 5. Ah, eu não gosto de Linux. Linux é essencial!"
              }
            ]
          },
          b: {
            type: "data",
            title: "4 coisas que você precisa saber sobre o curso de sistemas de informação. 📖",
            messages: [
              {
                type: "text",
                data:
                  "1. O curso de sistemas de informação lida com dados. 📊 2. A profissão envolve versatilidade e criatividade. 🙋‍♀️ 3. O mercado de trabalho é vasto. 💼 4. Há características ideais para o profissional. 🤝"
              }
            ]
          }
        }
      }
    }
  }
};

module.exports = data;
