import { Container } from "@mui/material";
import Search from "../../Components/Search/Search";
import { searchGifs } from "../../store/actions/gifsAction";
import { connect } from "react-redux";
import PaginatedItems from "../../Components/Utilities/Pagination";
import SkeletonLoading from "../../Components/Utilities/SkeletonLoading";
import NoDataCard from "../../Components/Utilities/NoDataCard";
const Index = ({ gifsData, searchGifsHandler }) => {
  return (
    <Container fixed sx={{ mt: 2 }}>
      <Search searchHandler={(query) => searchGifsHandler(query)} />
      {gifsData.isLoading ? (
        <SkeletonLoading />
      ) : gifsData.gifsData.length ? (
        <PaginatedItems gifsData={gifsData.gifsData} itemsPerPage={12} />
      ) : (
        <NoDataCard />
      )}
    </Container>
  );
};

const mapStateToProps = (state) => {
  return {
    gifsData: state.gifs,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    searchGifsHandler: (data) => dispatch(searchGifs(data)),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Index);
