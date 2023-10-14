import getCurrentUser from "../actions/getCurrentUser"
import getFavoriteListing from "../actions/getFavoriteListing"
import EmptyState from "../components/EmptyState"
import FavoritesClient from "./FavoritesClient"


const FavoritsPage = async () => {
  const listings = await getFavoriteListing()
  const currentUser = await getCurrentUser()

  if(listings.length === 0) {
    return (
      <EmptyState
        title="No favorites found"
        subtitle="Looks like you have no favorites listings."
      />
    )
  }

  return (
    <FavoritesClient
      listings={listings}
      currentUser={currentUser}
    />
  )
  
}

export default FavoritsPage