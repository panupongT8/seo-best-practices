"use client";

import React, { useState } from "react";
import {
  Container,
  TextField,
  Button,
  Typography,
  Paper,
  Box,
  Stack,
} from "@mui/material";
import { useRouter } from "next/navigation";

export default function AddMoviePage() {
  const router = useRouter();
  const [form, setForm] = useState({
    title: "",
    posterUrl: "",
    bgUrl: "",
    description: "",
  });

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    const res = await fetch("/api/movies", {
      method: "POST",
      body: JSON.stringify(form),
      headers: { "Content-Type": "application/json" },
    });

    if (res.ok) {
      alert("เพิ่มหนังสำเร็จ!");
      router.push("/"); // เพิ่มเสร็จแล้วเด้งกลับหน้าแรก
    }
  };

  return (
    <Container maxWidth="sm" sx={{ py: 8 }}>
      <Paper elevation={3} sx={{ p: 4, borderRadius: 4 }}>
        <Typography variant="h4" mb={3} fontWeight="bold">
          🎬 Add New Movie
        </Typography>
        <form onSubmit={handleSubmit}>
          <Stack spacing={3}>
            <TextField
              label="Movie Title"
              fullWidth
              required
              onChange={(e) => setForm({ ...form, title: e.target.value })}
            />
            <TextField
              label="Poster URL (Vertical)"
              fullWidth
              required
              onChange={(e) => setForm({ ...form, posterUrl: e.target.value })}
            />
            <TextField
              label="Background URL (Horizontal)"
              fullWidth
              onChange={(e) => setForm({ ...form, bgUrl: e.target.value })}
            />
            <TextField
              label="Description"
              multiline
              rows={4}
              fullWidth
              required
              onChange={(e) =>
                setForm({ ...form, description: e.target.value })
              }
            />
            <Button
              variant="contained"
              size="large"
              type="submit"
              sx={{ py: 1.5, fontWeight: "bold" }}
            >
              Save Movie
            </Button>
            <Button color="inherit" onClick={() => router.back()}>
              Cancel
            </Button>
          </Stack>
        </form>
      </Paper>
    </Container>
  );
}
