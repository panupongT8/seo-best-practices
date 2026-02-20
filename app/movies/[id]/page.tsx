"use client";
import React, { useEffect, useState } from "react";
import { useParams, useRouter } from "next/navigation";
import {
  Container,
  Typography,
  Box,
  Button,
  CircularProgress,
  Paper,
} from "@mui/material";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";

export default function MovieDetailPage() {
  const { id } = useParams();
  const router = useRouter();
  const [movie, setMovie] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(`/api/movies/${id}`)
      .then((res) => res.json())
      .then((data) => {
        setMovie(data);
        setLoading(false);
      });
  }, [id]);

  if (loading)
    return (
      <Box display="flex" justifyContent="center" mt={10}>
        <CircularProgress />
      </Box>
    );
  if (!movie)
    return (
      <Typography variant="h5" textAlign="center" mt={10}>
        Movie not found.
      </Typography>
    );

  return (
    <Container maxWidth="md" sx={{ py: 8 }}>
      <Button
        startIcon={<ArrowBackIcon />}
        onClick={() => router.back()}
        sx={{ mb: 4 }}
      >
        Back to List
      </Button>

      <Paper
        elevation={0}
        sx={{
          overflow: "hidden",
          borderRadius: 4,
          bgcolor: "background.default",
        }}
      >
        <Box
          component="img"
          src={movie.bgUrl || movie.posterUrl}
          sx={{
            width: "100%",
            maxHeight: 400,
            objectFit: "cover",
            borderRadius: 4,
          }}
        />
        <Box sx={{ mt: -10, px: 4, pb: 4 }}>
          <Box
            component="img"
            src={movie.posterUrl}
            sx={{ width: 200, borderRadius: 2, boxShadow: 3, mb: 2 }}
          />
          <Typography variant="h3" fontWeight="bold">
            {movie.title}
          </Typography>
          <Typography variant="h6" color="primary" gutterBottom>
            Rating: {movie.rating}/10
          </Typography>
          <Typography
            variant="body1"
            sx={{ mt: 2, color: "text.secondary", lineHeight: 1.8 }}
          >
            {movie.description}
          </Typography>
        </Box>
      </Paper>
    </Container>
  );
}
