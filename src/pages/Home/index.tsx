import { useEffect, useState } from 'react'

import Banner from '../../components/Banner'
import ProductsList from '../../components/ProductsList'

import { useGetOnSaleQuery, useGetSoonQuery } from '../../services/api'

export interface GalleryItem {
  type: 'image' | 'video'
  url: string
}

export type Game = {
  id: number
  name: string
  description: string
  release_date?: string
  prices: {
    discount?: string
    old?: number
    current?: number
  }
  details: {
    category: string
    system: string
    developer: string
    publisher: string
    languages: string[]
  }
  media: {
    thumbnail: string
    cover: string
    gallery: GalleryItem[]
  }
}

const Home = () => {
  const {
    data: onSaleGames,
    isError: isErroOnSale,
    isLoading: isLoadingOnSale
  } = useGetOnSaleQuery()
  const {
    data: soonGames,
    isError: isErroSoon,
    isLoading: isLoadingSoon
  } = useGetSoonQuery()

  if (isLoadingOnSale || isLoadingSoon) {
    return <h4>Carregando</h4>
  }

  if (isErroOnSale || isErroSoon) {
    return <h4>Erro ao carregar os jogos</h4>
  }

  return (
    <>
      <Banner />
      <ProductsList
        title="Promoções"
        background="gray"
        games={onSaleGames ?? []}
      />
      <ProductsList
        title="Em Breve"
        background="black"
        games={soonGames ?? []}
      />
    </>
  )
}

export default Home
