import ProductsList from '../../components/ProductsList'
import Game from '../../models/Game'

import resident from '../../assets/images/resident.png'
import diablo from '../../assets/images/diablo.png'
import zelda from '../../assets/images/zelda.png'
import starWars from '../../assets/images/star_wars.png'

const promocoes: Game[] = [
  {
    id: 1,
    category: 'ação',
    description: 'testetstestets',
    title: 'Resident Evil 4',
    system: 'Windows',
    infos: ['10%', 'R$ 250,00'],
    image: resident
  },
  {
    id: 2,
    category: 'ação',
    description: 'testetstestets',
    title: 'Resident Evil 4',
    system: 'PS5',
    infos: ['5%', 'R$ 290,00'],
    image: diablo
  },
  {
    id: 3,
    category: 'ação',
    description: 'testetstestets',
    title: 'Resident Evil 4',
    system: 'Windows',
    infos: ['5%', 'R$ 270,00'],
    image: zelda
  },
  {
    id: 4,
    category: 'ação',
    description: 'testetstestets',
    title: 'Resident Evil 4',
    system: 'Nitendo',
    infos: ['15%', 'R$ 220,00'],
    image: starWars
  }
]

const emBreve: Game[] = [
  {
    id: 5,
    category: 'RPG',
    description: 'taattatdatdatdta',
    title: 'Diablo 4',
    system: 'Windows',
    infos: ['17/05'],
    image: diablo
  },
  {
    id: 5,
    category: 'RPG',
    description: 'taattatdatdatdta',
    title: 'Diablo 4',
    system: 'Windows',
    infos: ['17/05'],
    image: diablo
  },
  {
    id: 5,
    category: 'RPG',
    description: 'taattatdatdatdta',
    title: 'Diablo 4',
    system: 'Windows',
    infos: ['17/05'],
    image: diablo
  },
  {
    id: 5,
    category: 'RPG',
    description: 'taattatdatdatdta',
    title: 'Diablo 4',
    system: 'Windows',
    infos: ['17/05'],
    image: diablo
  }
]

const Categories = () => (
  <>
    <ProductsList title="RPG" background="gray" games={promocoes} />
    <ProductsList title="Ação" background="black" games={emBreve} />
    <ProductsList title="Aventura" background="gray" games={promocoes} />
    <ProductsList title="FPS" background="black" games={emBreve} />
  </>
)

export default Categories
