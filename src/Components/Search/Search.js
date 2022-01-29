import {
  Container,
  Divider,
  IconButton,
  InputBase,
  Paper,
} from "@mui/material";

import SearchIcon from "@mui/icons-material/Search";
import { useState } from "react";
import { resetAutofetch } from "../../store/actions/gifsAction";
import { connect } from "react-redux";
const Search = ({ searchHandler, autoFetchHandler }) => {
  const [query, setQuery] = useState("");
  return (
    <Container fixed>
      <Paper
        component="form"
        sx={{ p: "2px 4px", display: "flex", alignItems: "center" }}
      >
        <InputBase
          sx={{ ml: 1, flex: 1 }}
          placeholder="Search Giphy"
          inputProps={{ "aria-label": "Search Giphy" }}
          onChange={(e) => setQuery(e.target.value)}
          onKeyPress={(e) => {
            autoFetchHandler();
            if (e.key == "Enter") {
              e.preventDefault();
              searchHandler(query);
            }
          }}
        />
        <Divider sx={{ height: 28, m: 0.5 }} orientation="vertical" />
        <IconButton
          onClick={(e) => {
            e.preventDefault();
            searchHandler(query);
          }}
          sx={{ p: "10px" }}
          aria-label="search"
        >
          <SearchIcon />
        </IconButton>
      </Paper>
    </Container>
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
    autoFetchHandler: () => dispatch(resetAutofetch()),
  };
};
export default connect(0, mapDispatchToProps)(Search);
