import { Container, Grid, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import { getNewsByCategory } from "../../api";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import CircularProgress from "@mui/material/CircularProgress";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

export default function News() {
  const [data, setData] = useState([]);
  const [category, setCategory] = useState("world");
  const [loading, setLoading] = useState(false);

  useEffect(async () => {
    setLoading(true);

    const obj = await getNewsByCategory(category);
    if (obj.success) setData(obj.data.data);
    else console.log("xatolik");

    setLoading(false);
  }, []);

  return (
    <Container maxWidth="md" sx={{ py: 3 }}>
      <Typography component={"h1"} variant="h3">
        News
      </Typography>

      {loading ? (
        <CircularProgress />
      ) : (
        <Grid container spacing={2}>
          {data.map((obj, index) => (
            <Grid key={obj.url} item xs={12} sm={6} lg={4}>
              <Paper sx={{ p: 2 }} elevation={10}>
                <img
                  src={obj.imageUrl}
                  alt=""
                  style={{ width: "100%", height: "300px", objectFit: "cover" }}
                  loading="lazy"
                />
                <Typography component={"p"} variant="body1">
                  {obj.title}
                </Typography>
              </Paper>
            </Grid>
          ))}
        </Grid>
      )}
    </Container>
  );
}
