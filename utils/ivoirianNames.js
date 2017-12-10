const femininFirstnames = [
  'adjoua',
  'affoue',
  'ahou',
  'akissi',
  'amenan',
  'aminata',
  'amoin',
  'awa',
  'aya',
  'djeneba',
  'fanta',
  'fatoumata',
  'karidja',
  'maimouna',
  'mariam',
  'mariame',
  'minata',
  'naminata',
  'salimata',
  'sita',
]

const masculinFirstnames = [
  'abdoulaye',
  'adama',
  'bakary',
  'brahima',
  'daouda',
  'drissa',
  'koffi',
  'konan',
  'kouadio',
  'kouakou',
  'kouame',
  'kouassi',
  'mamadou',
  'moussa',
  'seydou',
  'siaka',
  'souleymane',
  'yacouba',
  'yao',
  'yaya',
]

const lastnames = [
  'bakayoko',
  'bamba',
  'camara',
  'cissé',
  'coulibaly',
  'dao',
  'diabaté',
  'fofana',
  'kanaté',
  'keita',
  'konaté',
  'koné',
  'ouattara',
  'touré',
  'traoré',
]

const firstnames = [ ...masculinFirstnames, ...femininFirstnames ]

const randomIndex = len => Math.floor(Math.random() * len)
const randomElem = arr => arr[randomIndex(arr.length)]

const randomName = (f = firstnames, l = lastnames) =>
  `${randomElem(f)} ${randomElem(l)}`

const randomNames = n => Array(n).fill(0).map(_ => randomName())
