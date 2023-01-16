import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getShowsById, ShowDetailType } from "../Api";
import {
  Button,
  Card,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";
import { Interweave } from "interweave";

const DetailPage = () => {
  const { showId } = useParams();
  const [showDetail, setShowDetail] = useState<ShowDetailType | null>(null);

  useEffect(() => {
    if (!!showId) {
      try {
        const showIdNum = parseInt(showId);
        getShowsById(showIdNum).then((show) => {
          setShowDetail(show);
        });
      } catch (err) {
        console.error("NaN");
      }
    }
  }, [showId]);
  return (
    <>
      {!!showDetail ? (
        <Card
          sx={{
            maxWidth: '400px',
            justifyContent: "center",
            alignItem: "center",
            margin: "2em",
          }}
        >
          <CardMedia
            component="img"
            height="100%"
            image={showDetail?.image}
            alt={showDetail?.title}
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {showDetail?.title}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              <Interweave content={showDetail?.summary} />
            </Typography>
            <Typography>Genres: {showDetail?.genres}</Typography>
            <Typography>Rating: {showDetail?.avgRating}</Typography>
            <Typography>
              Start date: {showDetail?.startDate} End:{" "}
              {!showDetail?.endDate ? showDetail?.endDate : "Not finished"}
            </Typography>
          </CardContent>
        </Card>
      ) : (
        "Loading.."
      )}

      <Button variant="contained" href="/"
        sx={{ marginLeft: '2em' }}
      >
        Go back
      </Button>
    </>
  );
};

export default DetailPage;
