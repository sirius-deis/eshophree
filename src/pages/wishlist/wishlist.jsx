import CustomTable from "../../components/customTable/customTable";
import InfoBox from "../../components/infoBox/infoBox";
import Spinner from "../../components/spinner/spinner";
import useFetch from "../../hooks/useFetch";

const Wishlist = () => {
  const [data, isLoading, error] = useFetch("wishlist");

  if (isLoading) {
    return <Spinner />
  }
  if (error) {
    <InfoBox error={error} type="error" />
  }
  return <div>
    <h2>Wishlist</h2>
    <CustomTable columnsName={["Product", "Unit Price", "Stock Status"]} data={data} />
  </div>
}

export default Wishlist;