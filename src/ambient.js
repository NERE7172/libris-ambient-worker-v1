export function createAmbientState() {
  return {
    service: "libris-ambient-ear-v1",
    mode: "standby",
    audio_input: "not_connected",
    gateway: "not_connected",
    last_event_at: null
  };
}

export function getAmbientStatus(state) {
  return {
    ok: true,
    service: state.service,
    mode: state.mode,
    audio_input: state.audio_input,
    gateway: state.gateway,
    last_event_at: state.last_event_at
  };
}

export function recordAmbientEvent(state, event = {}) {
  state.last_event_at = new Date().toISOString();

  return {
    ...state,
    last_event: {
      type: String(event.type || "unknown"),
      received_at: state.last_event_at
    }
  };
}
