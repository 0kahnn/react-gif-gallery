import { Grid } from "@mui/material";
import GifCard from "../Cards/GifCard";
const Items = ({ currentItems }) => {
  return (
    <Grid container spacing={2} sx={{ mt: 2 }}>
      {currentItems?.map((el, i) => {
        return (
          <Grid item xs={12} md={6} lg={4} key={i}>
            <GifCard title={el.title} url={el.images.preview_gif.url} />
          </Grid>
        );
      })}
    </Grid>
  );
};
export default Items;
