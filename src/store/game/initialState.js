export default {
  loading: false,
  title: 'Trivia',
  publisher: 'Editora do Brasil',
  hasCover: true,
  hasAvatar: true,
  showQuestion: false,
  showEndGame: false,
  currentAvatar: {
    "id": 1,
    "title": "White",
    "image": "avatar1.png"
  },
  helpers: {
    hints: 0,
    skips: 1
  },
  cover: {
    title: 'Introdução',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi condimentum diam sit amet mattis vestibulum. Sed eros felis, cursus vel turpis ac, porttitor laoreet ligula. Maecenas posuere turpis sit amet gravida egestas. Nullam tempor molestie dolor, at mattis lectus pharetra in. Proin at nulla odio. Proin et suscipit urna'
  },
  "feedback": {
    "visible": false,
    "correct": false,
    "type": "negative",
    "types": {
      "true": "positive",
      "false": "negative",
      "skipped": "skipped",
      "timeout": "timeout",
      "notselected": "notselected"
    },
    "messages": {
      "positive": "Parabéns, você acertou!",
      "negative": "Que pena, você errou...",
      "skipped": "Próxima pergunta...",
      "timeout": "Que pena, você esgotou o seu tempo!!",
      "notselected": "Selecione ao menos uma alternativa para continuar."
    }
  },
  "avatars": [
    {
      "id": 1,
      "title": "White",
      "image": "avatar1.png"
    },
    {
      "id": 2,
      "title": "Yellow",
      "image": "avatar2.png"
    },
    {
      "id": 3,
      "title": "Red",
      "image": "avatar3.png"
    }
  ],
  "levels": [
    {
      "id": 1,
      "title": "Mercúrio",
      "image": "level-1.svg",
      "done": false,
      "correct": null,
      "question": {
        "id": 1,
        "title": "É o menor planeta e o mais próximo do Sol. Assim como o planeta Vênus, não possui satélite natural.",
        "options": [
          {
            "id": 1,
            "correct": false,
            "text": "Terra"
          },
          {
            "id": 2,
            "correct": true,
            "text": "Mercúrio"
          },
          {
            "id": 3,
            "correct": false,
            "text": "Marte"
          }
        ]
      }
    },
    {
      "id": 2,
      "title": "Vênus",
      "image": "level-2.svg",
      "done": false,
      "correct": null,
      "question": {
        "id": 2,
        "title": "A atmosfera do planeta Vênus é formada por:",
        "options": [
          {
            "id": 1,
            "correct": false,
            "text": "Nitrogênio e oxigênio."
          },
          {
            "id": 2,
            "correct": false,
            "text": "Vapor de água e ozônio."
          },
          {
            "id": 3,
            "correct": true,
            "text": "Gás carbônico (96%) e nuvens de ácido sulfúrico."
          }
        ]
      }
    },
    {
      "id": 3,
      "title": "Terra",
      "image": "level-3.svg",
      "done": false,
      "correct": null,
      "question": {
        "id": 3,
        "title": "Qual é o único satélite natural da Terra?",
        "options": [
          {
            "id": 1,
            "correct": true,
            "text": "A Lua"
          },
          {
            "id": 2,
            "correct": false,
            "text": "O Sol"
          },
          {
            "id": 3,
            "correct": false,
            "text": "Os asteroides."
          }
        ]
      }
    },
    {
      "id": 4,
      "title": "Marte",
      "image": "level-4.svg",
      "done": false,
      "correct": null,
      "question": {
        "id": 4,
        "title": "Tem características parecidas com as da Terra, também conhecido como “planeta vermelho”.",
        "options": [
          {
            "id": 1,
            "correct": false,
            "text": "Mercúrio"
          },
          {
            "id": 2,
            "correct": true,
            "text": "Marte"
          },
          {
            "id": 3,
            "correct": false,
            "text": "Vênus"
          }
        ]
      }
    },
    {
      "id": 5,
      "title": "Júpiter",
      "image": "level-5.svg",
      "done": false,
      "correct": null,
      "question": {
        "id": 5,
        "title": "Qual é o maior planeta do Sistema Solar?",
        "options": [
          {
            "id": 1,
            "correct": false,
            "text": "Saturno"
          },
          {
            "id": 2,
            "correct": false,
            "text": "Vênus"
          },
          {
            "id": 3,
            "correct": true,
            "text": "Júpiter"
          }
        ]
      }
    },
    {
      "id": 6,
      "title": "Saturno",
      "image": "level-6.svg",
      "done": false,
      "correct": null,
      "question": {
        "id": 6,
        "title": "O planeta Saturno é formado principalmente por gases, sendo o mais abundante o:",
        "options": [
          {
            "id": 1,
            "correct": true,
            "text": "hidrogênio"
          },
          {
            "id": 2,
            "correct": false,
            "text": "hélio"
          },
          {
            "id": 3,
            "correct": false,
            "text": "oxigênio"
          }
        ]
      }
    },
    {
      "id": 7,
      "title": "Urano",
      "image": "level-7.svg",
      "done": false,
      "correct": null,
      "question": {
        "id": 7,
        "title": "É o terceiro maior planeta do Sistema Solar e o sétimo em ordem de afastamento do Sol.",
        "options": [
          {
            "id": 1,
            "correct": false,
            "text": "Netuno"
          },
          {
            "id": 2,
            "correct": false,
            "text": "Saturno"
          },
          {
            "id": 3,
            "correct": true,
            "text": "Urano"
          }
        ]
      }
    },
    {
      "id": 8,
      "title": "Netuno",
      "image": "level-8.svg",
      "done": false,
      "correct": null,
      "question": {
        "id": 8,
        "title": "É o planeta mais afastado do Sol, o que faz com sua temperatura chegue a até 200 °C negativos.",
        "options": [
          {
            "id": 1,
            "correct": false,
            "text": "Júpiter"
          },
          {
            "id": 2,
            "correct": true,
            "text": "Netuno"
          },
          {
            "id": 3,
            "correct": true,
            "text": "Urano"
          }
        ]
      }
    }
  ]
};
