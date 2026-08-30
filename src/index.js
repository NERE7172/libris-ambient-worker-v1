import express from "express";

const app = express();

const PORT = Number(process.env.PORT || 3000);

app.get("/", (_req, res) => {
  res.json({
    service: "libris-ambient-worker-v1",
    status: "online",
    role: "ambient-ear-worker",
    mode: "scaffold"
  });
});

app.get("/health", (_req, res) => {
  res.json({
    ok: true,
    service: "libris-ambient-worker-v1"
  });
});

app.listen(PORT, "0.0.0.0", () => {
  console.log(
    `[Libris Ambient Worker] listening on port ${PORT}`
  );
});
