import ProductsList from '../../components/ProductsList'

import {
  useGetActionGameQuery,
  useGetSportGamesQuery,
  useGetSimulationGamesQuery,
  useGetFightGamesQuery,
  useGetRpgGamesQuery
} from '../../services/api'

const Categories = () => {
  const { data: actionGames, isLoading: isLoadingAction } =
    useGetActionGameQuery()
  const { data: sportGames, isLoading: isLoadingGames } =
    useGetSportGamesQuery()
  const { data: simulationGames, isLoading: isLoadingSimulation } =
    useGetSimulationGamesQuery()
  const { data: fightGames, isLoading: isLoadingFight } =
    useGetFightGamesQuery()
  const { data: rpgGames, isLoading: isLoadingRPG } = useGetRpgGamesQuery()

  return (
    <>
      <ProductsList
        title="Ação"
        $background="black"
        games={actionGames}
        id="action"
        isLoading={isLoadingAction}
      />
      <ProductsList
        title="Esportes"
        $background="gray"
        games={sportGames}
        id="sports"
        isLoading={isLoadingGames}
      />
      <ProductsList
        title="Simulação"
        $background="black"
        games={simulationGames}
        id="simulation"
        isLoading={isLoadingSimulation}
      />
      <ProductsList
        title="Luta"
        $background="gray"
        games={fightGames}
        id="fight"
        isLoading={isLoadingFight}
      />
      <ProductsList
        title="RPG"
        $background="black"
        games={rpgGames}
        id="rpg"
        isLoading={isLoadingRPG}
      />
    </>
  )
}

export default Categories
