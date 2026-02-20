"use client";
import React, { useEffect, useState } from "react";
import {
  Container,
  TextField,
  Button,
  Typography,
  Paper,
  Stack,
} from "@mui/material";
import { useRouter, useParams } from "next/navigation";

export default function EditMoviePage() {
  const router = useRouter();
  const { id } = useParams();
  const [form, setForm] = useState({
    title: "",
    posterUrl: "",
    bgUrl: "",
    description: "",
  });

  // ดึงข้อมูลเก่ามาโชว์
  useEffect(() => {
    fetch(`/api/movies/${id}`)
      .then((res) => res.json())
      .then((data) => setForm(data));
  }, [id]);

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    const res = await fetch(`/api/movies/${id}`, {
      method: "PUT",
      body: JSON.stringify(form),
      headers: { "Content-Type": "application/json" },
    });

    if (res.ok) {
      alert("แก้ไขข้อมูลสำเร็จ!");
      router.push("/");
    }
  };

  return (
    <Container maxWidth="sm" sx={{ py: 8 }}>
      <Paper elevation={3} sx={{ p: 4, borderRadius: 4 }}>
        <Typography variant="h4" mb={3} fontWeight="bold">
          ✏️ Edit Movie
        </Typography>
        <form onSubmit={handleSubmit}>
          <Stack spacing={3}>
            <TextField
              label="Movie Title"
              fullWidth
              required
              value={form.title}
              // slotProps={{ label: { shrink: true } }} // ให้ Label ไม่ทับข้อความที่ดึงมา
              InputLabelProps={{ shrink: true }}
              onChange={(e) => setForm({ ...form, title: e.target.value })}
            />
            <TextField
              label="Poster URL"
              fullWidth
              required
              value={form.posterUrl}
              // slotProps={{ label: { shrink: true } }}
              InputLabelProps={{ shrink: true }}
              onChange={(e) => setForm({ ...form, posterUrl: e.target.value })}
            />
            <TextField
              label="Description"
              multiline
              rows={4}
              fullWidth
              required
              value={form.description}
              // slotProps={{ label: { shrink: true } }
              InputLabelProps={{ shrink: true }}
              onChange={(e: any) =>
                setForm({ ...form, description: e.target.value })
              }
            />
            <Button variant="contained" size="large" type="submit">
              Update Movie
            </Button>
            <Button color="inherit" onClick={() => router.back()}>
              Back
            </Button>
          </Stack>
        </form>
      </Paper>
    </Container>
  );
}
