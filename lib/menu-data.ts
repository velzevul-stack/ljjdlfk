export type Burger = {
  name: string
  price: string
  ingredients: string
  weight: string
  image: string
  hit?: boolean
}

export type Shawarma = {
  name: string
  m: string
  l: string
  ingredients: string
  image: string
  hit?: boolean
}

export type HotDish = {
  name: string
  price: string
  ingredients: string
  weight: string
  image: string
}

export type Snack = {
  name: string
  image: string
  sizes: [string, string, string]
}

export type HotDog = {
  name: string
  price: string
  ingredients: string
  image: string
  hit?: boolean
}

export type Combo = {
  name: string
  items: string
  price: string
  save: string
  image: string
  featured?: boolean
}

export const burgers: Burger[] = [
  {
    name: 'Бистро Бургер',
    price: '9',
    ingredients:
      'Свиная котлета, чеддер, айсберг, помидор, маринованный огурец, фиолетовый лук, фирменный соус',
    weight: '290 г',
    image: '/food/bistro-burger.png',
    hit: true,
  },
  {
    name: 'Дабл Чиз',
    price: '14',
    ingredients:
      'Две свиные котлеты, двойной чеддер, айсберг, помидор, лук, фирменный соус',
    weight: '380 г',
    image: '/food/double-cheese.png',
  },
  {
    name: 'Бекон Бургер',
    price: '11',
    ingredients:
      'Свиная котлета, бекон, чеддер, айсберг, маринованный огурец, жареный лук, сладкий чили, фирменный соус',
    weight: '290 г',
    image: '/food/bacon-burger.png',
  },
  {
    name: 'Куриный Бургер',
    price: '9',
    ingredients:
      'Куриное филе в панировке, айсберг, сыр, помидор, фирменный соус',
    weight: '280 г',
    image: '/food/chicken-burger.png',
  },
]

export const shawarmas: Shawarma[] = [
  {
    name: 'Классическая',
    m: '10',
    l: '12',
    ingredients:
      'Лаваш, курица, капуста, огурец, помидор, морковь по-корейски, фирменный соус',
    image: '/food/shawarma-classic.png',
    hit: true,
  },
  {
    name: 'Сырная',
    m: '12',
    l: '14',
    ingredients:
      'Лаваш, курица, сыр, помидор, огурец, капуста, морковь по-корейски, сырный соус',
    image: '/food/shawarma-cheese.png',
  },
  {
    name: 'Острая',
    m: '12',
    l: '14',
    ingredients:
      'Лаваш, курица, лук, капуста, морковь по-корейски, халапеньо, острый соус',
    image: '/food/shawarma-spicy.png',
  },
]

export const hotDishes: HotDish[] = [
  {
    name: 'Блин из лаваша',
    price: '7',
    ingredients:
      'Лаваш, капуста, морковь по-корейски, ветчина, сыр, кетчуп, майонез',
    weight: '380 г',
    image: '/food/lavash-pancake.png',
  },
  {
    name: 'Сэндвич',
    price: '5',
    ingredients: 'Тостовый хлеб, ветчина, чеддер, кетчуп, майонез, айсберг',
    weight: '150 г',
    image: '/food/sandwich.png',
  },
]

export const snacks: Snack[] = [
  {
    name: 'Наггетсы',
    image: '/food/nuggets.png',
    sizes: ['6 шт · 3,50', '8 шт · 4,50', '12 шт · 5,00'],
  },
  {
    name: 'Картофель фри',
    image: '/food/fries.png',
    sizes: ['120 г · 3,50', '180 г · 4,50', '—'],
  },
  {
    name: 'Луковые кольца',
    image: '/food/onion-rings.png',
    sizes: ['6,00', '—', '—'],
  },
]

export const hotDogs: HotDog[] = [
  {
    name: 'Хот-дог',
    price: '3',
    ingredients: 'Булка, сосиска, кетчуп, майонез, горчица',
    image: '/food/hotdog.png',
  },
  {
    name: 'Хот-дог с добавками',
    price: '4',
    ingredients:
      'Булка, сосиска, капуста, морковь по-корейски, огурец, кетчуп, майонез',
    image: '/food/hotdog-loaded.png',
  },
  {
    name: 'Французский хот-дог',
    price: '4',
    ingredients: 'Булка, колбаски (кабанос), кетчуп, майонез, горчица',
    image: '/food/french-hotdog.png',
  },
  {
    name: 'Датский хот-дог',
    price: '4',
    ingredients: 'Булка, колбаски (кабанос), кетчуп, майонез, горчица',
    image: '/food/danish-hotdog.png',
  },
  {
    name: 'Датский с добавками',
    price: '4,50',
    ingredients:
      'Булка, колбаски (кабанос), капуста, морковь по-корейски, карамелизированный лук, кетчуп, майонез, горчица',
    image: '/food/danish-loaded.png',
  },
]

export const combos: Combo[] = [
  {
    name: 'Бургер Делюкс-комбо',
    items: 'Любой бургер + фри 120 г / наггетсы 6 шт + авторский коктейль',
    price: '19,50',
    save: 'до 3 BYN',
    image: '/food/bistro-burger.png',
    featured: true,
  },
  {
    name: 'Большое комбо',
    items: 'Дабл Чиз + Бекон бургер + наггетсы 8 шт + луковые кольца + 2 коктейля',
    price: '37,50',
    save: 'до 6 BYN',
    image: '/food/double-cheese.png',
    featured: true,
  },
  {
    name: 'Комбо на двоих',
    items: '2 бургера Бистро / Куриный + 2 фри 120 г + 2 напитка 0,5 л',
    price: '27,00',
    save: 'до 4 BYN',
    image: '/food/bacon-burger.png',
    featured: true,
  },
  {
    name: 'Бургер-комбо',
    items: 'Бистро или Куриный + фри 120 г + напиток 0,5 л',
    price: '13,50',
    save: 'до 2 BYN',
    image: '/food/chicken-burger.png',
  },
  {
    name: 'Бургер + закуска + коктейль',
    items: 'Куриный бургер + фри 120 г / наггетсы 6 шт + авторский коктейль',
    price: '15,00',
    save: 'до 3 BYN',
    image: '/food/cocktail.png',
  },
  {
    name: 'Шаурма Премиум-комбо',
    items: 'Шаурма M на выбор + фри 120 г + авторский коктейль',
    price: '19,50',
    save: 'до 3 BYN',
    image: '/food/shawarma-cheese.png',
  },
  {
    name: 'Шаурма-комбо',
    items: 'Шаурма M на выбор + фри 120 г + напиток 0,5 л',
    price: '16,50',
    save: 'до 2 BYN',
    image: '/food/shawarma-classic.png',
  },
  {
    name: 'XL Шаурма-комбо',
    items: 'Шаурма L на выбор + авторский коктейль',
    price: '17,00',
    save: 'до 2 BYN',
    image: '/food/shawarma-spicy.png',
  },
  {
    name: 'Хот-дог Премиум-комбо',
    items: 'Хот-дог / Датский с добавками + фри 120 г + авторский коктейль',
    price: '11,50',
    save: 'до 2 BYN',
    image: '/food/hotdog-loaded.png',
  },
  {
    name: 'Хот-дог-комбо',
    items: 'Хот-дог / Французский / Датский + фри 120 г + напиток 0,5 л',
    price: '9,00',
    save: 'до 1,5 BYN',
    image: '/food/hotdog.png',
  },
]
