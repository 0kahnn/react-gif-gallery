import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";

const GifCard = ({ url, title }) => {
  return (
    <Card sx={{ maxWidth: 345, height: 280 }}>
      <CardMedia component="img" height="140" image={url} alt={title} />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {title}
        </Typography>
      </CardContent>
      <CardActions></CardActions>
    </Card>
  );
};

export default GifCard;
