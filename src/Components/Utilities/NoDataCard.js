import { Grid } from "@mui/material";
const NoDataCard = ({ currentItems }) => {
  return (
    <Grid container spacing={2} sx={{ mt: 2 }}>
      <p>No Data Found!</p>
    </Grid>
  );
};
export default NoDataCard;
