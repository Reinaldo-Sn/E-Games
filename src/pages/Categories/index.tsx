import { useEffect, useState } from 'react'
import ProductsList from '../../components/ProductsList'

import { Game } from '../Home'

import {
  useGetActionGameQuery,
  useGetSportGamesQuery,
  useGetSimulationGamesQuery,
  useGetFightGamesQuery,
  useGetRpgGamesQuery
} from '../../services/api'

const Categories = () => {
  const { data: actionGames } = useGetActionGameQuery()
  const { data: sportGames } = useGetSportGamesQuery()
  const { data: simulationGames } = useGetSimulationGamesQuery()
  const { data: fightGames } = useGetFightGamesQuery()
  const { data: rpgGames } = useGetRpgGamesQuery()

  if (actionGames && sportGames && simulationGames && fightGames && rpgGames) {
    return (
      <>
        <ProductsList title="Ação" background="black" games={actionGames} />
        <ProductsList title="Esportes" background="gray" games={sportGames} />
        <ProductsList
          title="Simulação"
          background="black"
          games={simulationGames}
        />
        <ProductsList title="Luta" background="gray" games={fightGames} />
        <ProductsList title="RPG" background="black" games={rpgGames} />
      </>
    )
  }

  return <h4>Carregando...</h4>
}

export default Categories
