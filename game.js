// Create or load player ID
let playerId = localStorage.getItem("playerId");

if (!playerId) {
  playerId = crypto.randomUUID();
  localStorage.setItem("playerId", playerId);
}
