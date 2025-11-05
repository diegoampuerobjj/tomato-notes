"use client";
import { useEffect, useState } from "react";
import api from "../lib/api";

export default function Home() {
  const [notes, setNotes] = useState([]);
  const [form, setForm] = useState({ title: "", content: "", tags: "" });

  const fetchNotes = async () => {
    const res = await api.get("/notes/");
    setNotes(res.data);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await api.post("/notes/", form);
    setForm({ title: "", content: "", tags: "" });
    fetchNotes();
  };

  useEffect(() => {
    fetchNotes();
  }, []);

  return (
    <main style={{ padding: "2rem", fontFamily: "sans-serif" }}>
      <h1>Tomato Notes 🍅</h1>
      <form onSubmit={handleSubmit} style={{ marginBottom: "1rem" }}>
        <input
          placeholder="Title"
          value={form.title}
          onChange={(e) => setForm({ ...form, title: e.target.value })}
        />
        <input
          placeholder="Content"
          value={form.content}
          onChange={(e) => setForm({ ...form, content: e.target.value })}
        />
        <input
          placeholder="Tags (comma separated)"
          value={form.tags}
          onChange={(e) => setForm({ ...form, tags: e.target.value })}
        />
        <button type="submit">Add Note</button>
      </form>
      <ul>
        {notes.map((n) => (
          <li key={n.id}>
            <strong>{n.title}</strong> — {n.content} [{n.tags}]
          </li>
        ))}
      </ul>
    </main>
  );
}

