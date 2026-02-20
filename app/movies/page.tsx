"use client";
import React, { useEffect, useState } from "react";
import {
  Container,
  Grid,
  Card,
  CardMedia,
  CardContent,
  Typography,
  Button,
  Box,
  CircularProgress,
} from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import Link from "next/link";

export default function MovieListPage() {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("/api/movies")
      .then((res) => res.json())
      .then((data) => {
        setMovies(data);
        setLoading(false);
      });
  }, []);

  if (loading)
    return (
      <Box display="flex" justifyContent="center" mt={10}>
        <CircularProgress />
      </Box>
    );

  return (
    <Container maxWidth="lg" sx={{ py: 8 }}>
      <Box
        display="flex"
        justifyContent="space-between"
        alignItems="center"
        mb={4}
      >
        <Typography variant="h3" fontWeight="bold">
          My Movies
        </Typography>
        <Button
          variant="contained"
          startIcon={<AddIcon />}
          component={Link}
          href="/movies/add"
        >
          Add Movie
        </Button>
      </Box>

      <Grid container spacing={4}>
        {movies.map((movie: any) => (
          <Grid key={movie.id} size={{ xs: 12, sm: 6, md: 4 }}>
            <Link
              href={`/movies/${movie.id}`}
              style={{ textDecoration: "none" }}
            >
              <Card
                sx={{
                  height: "100%",
                  display: "flex",
                  flexDirection: "column",
                  borderRadius: 4,
                  transition: "0.3s",
                  "&:hover": { transform: "scale(1.02)" },
                }}
              >
                <CardMedia
                  component="img"
                  image={movie.posterUrl}
                  alt={movie.title}
                  sx={{ height: 400 }}
                />
                <CardContent sx={{ flexGrow: 1 }}>
                  <Typography
                    gutterBottom
                    variant="h5"
                    component="h2"
                    fontWeight="bold"
                  >
                    {movie.title}
                  </Typography>
                  <Typography variant="body2" color="text.secondary" noWrap>
                    {movie.description}
                  </Typography>
                </CardContent>
              </Card>
            </Link>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}
