import {
  Container,
  Grid,
  Typography,
  Box,
  Skeleton,
  Button,
} from "@mui/material";
import { useEffect, useState } from "react";
import { getNewsByCategory } from "../../api";
import Paper from "@mui/material/Paper";
import CircularProgress from "@mui/material/CircularProgress";

import dataCategories from "./categories";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import PublicIcon from "@mui/icons-material/Public";
import {
  setCategory,
  setNewsByCategory,
} from "../../redux/actions/newsActions";
import { useSelector } from "react-redux";
import { useLocation, useNavigate, useParams } from "react-router-dom";

export default function NewsRedux() {
  const navigate = useNavigate();
  const params = useParams();
  const location = useLocation();

  const { category } = params;

  const { news, loading, error } = useSelector((state) => state.news);

  useEffect(() => {
    setNewsByCategory(category);
  }, [category]);

  const changeCategory = (categoryName) => {
    // setCategory(categoryName);
    navigate(`/category/${categoryName}`);
  };

  return (
    <Container maxWidth="xl" sx={{ py: 3 }}>
      <Typography component={"h1"} variant="h3">
        News | {category}
      </Typography>

      <Box display={"flex"} alignItems="start">
        <Box sx={{ width: 220, overflow: "hidden", mr: 2 }}>
          <List>
            {dataCategories.map((item) => (
              <ListItem key={item} disablePadding>
                <ListItemButton
                  onClick={() => changeCategory(item.toLowerCase())}
                >
                  <ListItemIcon>
                    <PublicIcon />
                  </ListItemIcon>
                  <ListItemText primary={item} />
                </ListItemButton>
              </ListItem>
            ))}
          </List>
        </Box>
        <Box sx={{ my: 4, flex: 1 }}>
          {error ? (
            <Typography color="error.main">Something went wrong</Typography>
          ) : (
            <Grid container spacing={2}>
              {loading
                ? dataCategories.map((item, index) => (
                    <Grid key={index} item xs={12} sm={6} lg={4}>
                      <Skeleton
                        variant="rectangular"
                        width={"100%"}
                        height={300}
                        sx={{ borderRadius: 2 }}
                      />
                      <Skeleton
                        variant="text"
                        height={60}
                        sx={{ borderRadius: 2 }}
                      />
                    </Grid>
                  ))
                : news.map((obj, index) => (
                    <Grid
                      key={obj.url}
                      item
                      xs={12}
                      sm={6}
                      lg={4}
                      sx={{ display: "flex", flexDirection: "column" }}
                    >
                      <Paper
                        sx={{
                          p: 2,
                          flex: 1,
                        }}
                        elevation={10}
                      >
                        <img
                          src={obj.imageUrl}
                          alt=""
                          style={{
                            width: "100%",
                            height: "300px",
                            objectFit: "cover",
                          }}
                          loading="lazy"
                        />
                        <Typography component={"p"} variant="body1">
                          {obj.title}
                        </Typography>
                        <Button>Read continue</Button>
                      </Paper>
                    </Grid>
                  ))}
            </Grid>
          )}
        </Box>
      </Box>
    </Container>
  );
}
