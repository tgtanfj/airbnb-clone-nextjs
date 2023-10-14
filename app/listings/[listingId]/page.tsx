
import getCurrentUser from "@/app/actions/getCurrentUser";
import getListingById from "@/app/actions/getListingById";
import EmptyState from "@/app/components/EmptyState";
import ListingClient from "./ListingClient";
import getReservations from "@/app/actions/getReservations";

interface IParmas {
  listingId?: string;
}

const ListingPage = async ({ params }: { params: IParmas }) => {
  const listing = await getListingById(params);
  const currentUser = await getCurrentUser()
  const reservations = await getReservations(params)

  if(!listing) {
    return (
      <EmptyState/>
    )
  }

  return <div>
    <ListingClient
      listing={listing}
      currentUser={currentUser}
      reservations={reservations}
    />
  </div>;
};

export default ListingPage;
