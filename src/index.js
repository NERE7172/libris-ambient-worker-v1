import express from "express";
import {
  createAmbientState,
  getAmbientStatus,
  recordAmbientEvent
} from "./ambient.js";

const app = express();

const PORT = Number(process.env.PORT || 3000);

app.use(express.json({ limit: "256kb" }));

const ambientState = createAmbientState();

app.get("/", (_req, res) => {
  res.json({
    service: "libris-ambient-ear-v1",
    status: "online",
    role: "ambient-ear-worker",
    mode: ambientState.mode
  });
});

app.get("/health", (_req, res) => {
  res.json({
    ok: true,
    service: "libris-ambient-ear-v1",
    worker: "online"
  });
});

app.get("/ambient/status", (_req, res) => {
  res.json(getAmbientStatus(ambientState));
});

app.post("/ambient/event", (req, res) => {
  const event = req.body ?? {};

  const updated = recordAmbientEvent(ambientState, event);

  Object.assign(ambientState, updated);

  res.status(202).json({
    accepted: true,
    event: updated.last_event
  });
});

app.listen(PORT, "0.0.0.0", () => {
  console.log(
    `[Libris Ambient Ear] listening on port ${PORT}`
  );
});
