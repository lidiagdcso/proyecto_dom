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
let priceFilter = document.createElement('section')
let priceFilterTitle = document.createElement('h4')
let priceFilterTitleText = document.createTextNode('Filtra por precio')

priceFilterTitle.appendChild(priceFilterTitleText)
priceFilter.appendChild(priceFilterTitle)
article.appendChild(priceFilter)

let playersFilter = document.createElement('section')
let playersFilterTitle = document.createElement('h4')
let playersFilterTitleText = document.createTextNode(
  'Filtra por número de jugadores'
)

playersFilterTitle.appendChild(playersFilterTitleText)
playersFilter.appendChild(playersFilterTitle)
article.appendChild(playersFilter)

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
  let title = document.createTextNode(game.name)
  cardTitle.appendChild(title)
  card.appendChild(cardTitle)

  let cardPrice = document.createElement('p')
  cardPrice.classList.add('gamePrice')
  let price = document.createTextNode(game.price)
  cardPrice.appendChild(price)
  card.appendChild(cardPrice)

  let button = document.createElement('button')
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
