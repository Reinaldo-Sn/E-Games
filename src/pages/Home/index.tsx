import Banner from '../../components/Banner'
import ProductsList from '../../components/ProductsList'

import { useGetOnSaleQuery, useGetSoonQuery } from '../../services/api'

const Home = () => {
  const { data: onSaleGames, isLoading: isLoadingOnSale } = useGetOnSaleQuery()
  const { data: soonGames, isLoading: isLoadingSoon } = useGetSoonQuery()

  return (
    <>
      <Banner />
      <ProductsList
        title="Promoções"
        $background="gray"
        games={onSaleGames ?? []}
        id="on-sale"
        isLoading={isLoadingOnSale}
      />
      <ProductsList
        title="Em Breve"
        $background="black"
        games={soonGames ?? []}
        id="coming-soon"
        isLoading={isLoadingSoon}
      />
    </>
  )
}

export default Home
