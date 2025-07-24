// Mudar de titulo de acordo com a hora
const hour = new Date().getHours();
document.title = hour >= 22 || hour < 6 ?
"static room - you're turned in" : "static room - you're too early";

// Mudar o texto a cada vez que a página é carregada
const messages = [
  "You tuned in too late, or maybe too early.",
  "Some signals were never meant to be decoded.",
  "Static is just silence in disguise.",
  "This room hums with forgotten thoughts.",
  "You are not alone here, but you might feel like it.",
  "The broadcast ended long ago, but echoes remain.",
  "Reality flickered, and you landed here.",
  "This room doesn’t change — you do.",
  "Every pixel remembers something you’ve forgotten.",
  "You weren't supposed to find this.",
  "Even silence can scream.",
  "This space waits for no one.",
  "You are watching a memory decompose.",
  "Nothing lives here. Not even the static.",
  "The transmission failed, but the signal persists.",
  "There’s comfort in loops.",
  "This place exists between blinks.",
  "Glitches are just truths too raw to render.",
  "You’re inside a frozen signal.",
  "Once you tune in, it never lets go.",
  "They left this message here for someone else.",
  "You're just another ghost in the wires.",
  "No updates. No changes. Just noise.",
  "The room noticed you.",
  "You’re now part of the static.",
  "There used to be a door here.",
  "We don't broadcast anymore.",
  "This isn't the first time you've been here.",
  "Nothing to see. Everything to feel.",
  "The silence here is deafening.",
  "The room forgets, but never forgives.",
  "Did you come here looking for meaning?",
  "The static is listening.",
  "Some rooms were never meant to be found.",
  "The walls remember your last visit.",
  "You're out of sync with the real world.",
  "The loop starts again.",
  "Not all who wander are found.",
  "You've tuned in to something irreversible.",
  "This moment is already gone."
];
const randomMessage = messages[Math.floor(Math.random() * messages.length)];
document.getElementById("phrase").innerText = randomMessage;
document.getElementById("phrase").setAttribute("data-text", randomMessage);