let games = [
  {
    name: 'Portero Baldomero',
    price: "12'50€",
    seller: 'Zacatrus',
    players: [3, 4, 5, 6, 7, 8],
    playingTime: 15,
    image:
      'https://media.zacatrus.com/catalog/product/cache/ede91dc607ff58d6ff51aded48a7a72e/e/l/el_portero_baldomero_1.jpg'
  },

  {
    name: 'Tholos',
    price: "12'50€",
    seller: 'Zacatrus',
    players: [2],
    playingTime: 15,
    image:
      'https://media.zacatrus.com/catalog/product/cache/ede91dc607ff58d6ff51aded48a7a72e/t/h/tholos_2.jpg'
  },

  {
    name: 'Zenith',
    price: "33'00€",
    seller: 'Zacatrus',
    players: [2, 4],
    playingTime: 30,
    image:
      'https://media.zacatrus.com/catalog/product/cache/ede91dc607ff58d6ff51aded48a7a72e/z/e/zenith-render_resultado.jpg'
  },

  {
    name: 'Mala Suerte',
    price: "13'95€",
    seller: 'Zacatrus',
    players: [2, 3, 4, 5, 6],
    playingTime: 20,
    image:
      'https://media.zacatrus.com/catalog/product/cache/ede91dc607ff58d6ff51aded48a7a72e/m/a/mala-suerte-juego.png'
  },

  {
    name: 'Cathood: Family and Friends',
    price: "9'95€",
    seller: 'Zacatrus',
    players: [1, 2, 3, 4, 5],
    playingTime: 45,
    image:
      'https://media.zacatrus.com/catalog/product/cache/ede91dc607ff58d6ff51aded48a7a72e/c/a/cathood-family-and-friends.png'
  },

  {
    name: '24h',
    price: "12'50€",
    seller: 'Zacatrus',
    players: [2, 3, 4],
    playingTime: 20,
    image:
      'https://media.zacatrus.com/catalog/product/cache/ede91dc607ff58d6ff51aded48a7a72e/2/4/24_horas-min.png'
  },

  {
    name: "Jus'Fight",
    price: "13'49€",
    seller: 'Zacatrus',
    players: [2, 3, 4, 5, 6, 7, 8],
    playingTime: 15,
    image:
      'https://media.zacatrus.com/catalog/product/cache/ede91dc607ff58d6ff51aded48a7a72e/j/u/jusfight_resultado.jpg'
  },

  {
    name: 'Cochinilla Porteerilla',
    price: "17'99€",
    seller: 'Zacatrus',
    players: [2, 3, 4, 5, 6],
    playingTime: 10,
    image:
      'https://media.zacatrus.com/catalog/product/cache/ede91dc607ff58d6ff51aded48a7a72e/c/o/cochinillaporterilla_resultado.jpg'
  },

  {
    name: 'Fake News',
    price: "13'49€",
    seller: 'Zacatrus',
    players: [2, 3, 4, 5, 6, 7, 8],
    playingTime: 30,
    image:
      'https://media.zacatrus.com/catalog/product/cache/ede91dc607ff58d6ff51aded48a7a72e/f/a/fakenews_resultado.jpg'
  },

  {
    name: 'Cathood',
    price: "27'95€",
    seller: 'Zacatrus',
    players: [2, 3, 4],
    playingTime: 60,
    image:
      'https://media.zacatrus.com/catalog/product/cache/ede91dc607ff58d6ff51aded48a7a72e/c/a/cathood.jpg'
  },

  {
    name: 'MONSTArgh!',
    price: "6'75€",
    seller: 'Zacatrus',
    players: [2, 3, 4, 5, 6],
    playingTime: 15,
    image:
      'https://media.zacatrus.com/catalog/product/cache/ede91dc607ff58d6ff51aded48a7a72e/m/o/monstargh_2.jpg'
  },

  {
    name: 'Anachrony: Futuro Imperfecto',
    price: "14'41€",
    seller: 'Zacatrus',
    players: [2, 3, 4],
    playingTime: 120,
    image:
      'https://media.zacatrus.com/catalog/product/cache/ede91dc607ff58d6ff51aded48a7a72e/a/n/anachrony-futuro-imperfecto.jpg'
  }
]

// Header
let header = document.createElement('header')

let logo = document.createElement('img')
logo.src =
  'https://static.zacatrus.com/version1752420449/frontend/zaca/z2025/es_ES/images/logo.svg'
logo.classList.add('logo')
header.appendChild(logo)

let finder = document.createElement('input')
finder.placeholder = '¡Busca directamente y no te pierdas nada!'
header.appendChild(finder)

document.body.appendChild(header)

// Main
let main = document.createElement('main')

//article
let article = document.createElement('article')

// filtro jugadores
let players = [
  {
    name: '1 jugador',
    quantity: 1
  },
  {
    name: '2 jugadores',
    quantity: 2
  },
  {
    name: '3 jugadores',
    quantity: 3
  },
  {
    name: '4 jugadores',
    quantity: 4
  },
  {
    name: '5 jugadores',
    quantity: 5
  },
  {
    name: '6 jugadores',
    quantity: 6
  },
  {
    name: '7 jugadores',
    quantity: 7
  },
  {
    name: '8 jugadores',
    quantity: 8
  }
]
let playersFilter = document.createElement('section')
let playersFilterTitle = document.createElement('h4')
let playersFilterTitleText = document.createTextNode(
  'Filtra por número de jugadores'
)
playersFilterTitle.appendChild(playersFilterTitleText)
playersFilter.appendChild(playersFilterTitle)

for (const player of players) {
  let playerButton = document.createElement('button')
  playerButton.classList.add('playerButton', 'filterButton')
  playerButton.id = `${player.quantity}`
  let buttonText = document.createTextNode(player.name)
  playerButton.appendChild(buttonText)
  playersFilter.appendChild(playerButton)
}

article.appendChild(playersFilter)

// filtro por tiempo de juego

let minutes = [
  { name: '≤ 15 minutos', id: 15 },
  {
    name: '15-30 minutos',
    id: 30
  },
  { name: ' ≥ 40 minutos', id: 40 }
]
let timeFilter = document.createElement('section')
let timeFilterTitle = document.createElement('h4')
let timeFilterTitleText = document.createTextNode('Filtra por tiempo de juego')

timeFilterTitle.appendChild(timeFilterTitleText)
timeFilter.appendChild(timeFilterTitle)

for (const minute of minutes) {
  let timeButton = document.createElement('button')
  timeButton.classList.add('timeButton', 'filterButton')

  timeButton.id = `${minute.id}`
  let buttonText = document.createTextNode(minute.name)
  timeButton.appendChild(buttonText)
  timeFilter.appendChild(timeButton)
}
article.appendChild(timeFilter)

main.appendChild(article)

//section
let section = document.createElement('section')
section.classList.add('container')
let titleSection = document.createElement('h2')
let textTitle = document.createTextNode('Los juegos más populares')
titleSection.appendChild(textTitle)
section.appendChild(titleSection)

let ul = document.createElement('ul')
section.appendChild(ul)

for (const game of games) {
  let card = document.createElement('li')
  card.classList.add('card')

  let cardImage = document.createElement('img')
  cardImage.src = game.image
  card.appendChild(cardImage)

  let cardTitle = document.createElement('h3')
  cardTitle.textContent = game.name
  card.appendChild(cardTitle)

  let cardPrice = document.createElement('p')
  cardPrice.classList.add('gamePrice')
  let price = document.createTextNode(game.price)
  cardPrice.appendChild(price)
  card.appendChild(cardPrice)

  let button = document.createElement('button')
  button.classList.add('cardButton')
  let buttonText = document.createTextNode('Añadir al carrito')
  button.appendChild(buttonText)
  card.appendChild(button)

  ul.appendChild(card)
}

main.appendChild(section)

document.body.appendChild(main)

//Footer
let footerSections = [
  {
    name: 'Condiciones generales',
    url: 'https://zacatrus.es/condiciones-generales.html'
  },
  {
    name: 'Política de Privacidad y Aviso Legal',
    url: 'https://zacatrus.es/privacy-policy-cookie-restriction-mode/'
  },
  {
    name: 'Política de Cookies',
    url: 'https://zacatrus.es/politica-cookies.html'
  }
]

let footer = document.createElement('footer')

let ulFooter = document.createElement('ul')
for (const section of footerSections) {
  let li = document.createElement('li')
  let link = document.createElement('a')
  link.href = section.url
  link.textContent = section.name
  link.classList.add('links')
  li.appendChild(link)
  ulFooter.appendChild(li)
}

footer.appendChild(ulFooter)
document.body.appendChild(footer)

// Funciones - Eventos
// Selecciono los botones y les aplico un eventlistener que ejecute la función de filtrado:
let timeButtons = document.querySelectorAll('.timeButton') // me hace un array

for (const btn of timeButtons) {
  btn.addEventListener('click', timeFilteredGames)
}

// function timeFilteredGames() {
//   for (const game of games) {
//     if (game.playingTime <= 15) {
//       console.log('dura 15 min')
//     } else if (game.playingTime > 15 && game.playingTime <= 30) {
//       console.log('dura 30 min')
//     } else if (game.playingTime >= 40) {
//       console.log('dura 40 min')
//     }
//   }
// }
