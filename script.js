const pages = [
  {
    kicker: "Before you read",
    title: "A small thing I owe you",
    titleEmoji: "🤍",
    pageEmoji: "🌿",
    mood: "mood-letter",
    art: "✧",
    lines: [
      "Hi. You never really got to know why I left two years ago. Honestly, I didn't fully understand it myself then.",
      "I want to tell you now. Please take a quiet moment and read this whenever it feels right.",
      "You don't owe me an answer. I just wanted to be honest with you."
    ]
  },
  {
    kicker: "Chapter one",
    title: "The year everything changed",
    titleEmoji: "🕊️",
    pageEmoji: "🌧️",
    mood: "mood-home",
    art: "☾",
    lines: [
      "You know my father passed away, and so much responsibility fell on me. My brother was separated from the family, and I felt I had to carry everything.",
      "There was debt on top of it all. It was a very hard time, and I felt lost. I was trying to work out where I stood and what I could manage."
    ]
  },
  {
    kicker: "Chapter two",
    title: "Why I let you go",
    titleEmoji: "🥀",
    pageEmoji: "🪶",
    mood: "mood-night",
    art: "♡",
    lines: [
      "I started to believe I wasn't the right person for you then. I thought that if you stayed with me, you would end up struggling alongside me.",
      "I made that decision for both of us without giving you the explanation you deserved. I can see now how unfair that was."
    ]
  },
  {
    kicker: "What I truly felt · I",
    title: "The wrong moment",
    titleEmoji: "💭",
    pageEmoji: "⏳",
    mood: "mood-rose",
    art: "❧",
    quote: true,
    quoteEmoji: "✨",
    lines: ["You were everything I needed, but we met in a moment that didn't belong to us."]
  },
  {
    kicker: "What I truly felt · II",
    title: "Nothing was wrong with you",
    titleEmoji: "💭",
    pageEmoji: "🫧",
    mood: "mood-letter",
    art: "✿",
    quote: true,
    quoteEmoji: "🌙",
    lines: ["Nothing in you was wrong. I met you at a time when I couldn't hold on to something so real, and that is the part that hurts me most."]
  },
  {
    kicker: "What I truly felt · III",
    title: "What I thought love meant",
    titleEmoji: "💭",
    pageEmoji: "💔",
    mood: "mood-night",
    art: "♡",
    quote: true,
    quoteEmoji: "🌹",
    lines: ["I told myself letting you go was my final act of love, even when I needed you most."]
  },
  {
    kicker: "What I truly felt · IV",
    title: "A wish for you",
    titleEmoji: "💭",
    pageEmoji: "🌠",
    mood: "mood-sky",
    art: "✧",
    quote: true,
    quoteEmoji: "💫",
    lines: ["With me or without me, I hope life takes care of you. I thought you would find the right person, someone who could give you a happy, secure life. loves you so much."]
  },
  {
    kicker: "Chapter three",
    title: "My apology",
    titleEmoji: "🙏",
    pageEmoji: "🕯️",
    mood: "mood-letter",
    art: "❧",
    lines: [
      "I said hurtful things when I left. I know that hurt us both, and I'm truly sorry.",
      "I listened to my mind instead of my heart. I should have talked to you honestly instead of leaving you with those words and questions."
    ]
  },
  {
    kicker: "Chapter four",
    title: "Where we are now",
    titleEmoji: "🌅",
    pageEmoji: "🌤️",
    mood: "mood-sky",
    art: "☾",
    lines: [
      "Things have settled a little, and we've both changed. When we spoke recently, I felt some distance between us, and it hurt more than I expected.",
      "I've kept asking myself whether I made the wrong decision, and where I went wrong.",
      "I'm not asking you to love me. That wouldn't be fair, and I know we can't simply feel what we once felt."
    ]
  },
  {
    kicker: "What I still carry · I",
    title: "A little happiness",
    titleEmoji: "💭",
    pageEmoji: "🎧",
    mood: "mood-rose",
    art: "♡",
    quote: true,
    quoteEmoji: "❤️",
    lines: ["People say happiness lasts only a little while. For me, it happens when I'm on a call with you."],
    note: "Our calls were some of my happiest moments."
  },
  {
    kicker: "What I still carry · II",
    title: "The most precious",
    titleEmoji: "💭",
    pageEmoji: "💎",
    mood: "mood-sky",
    art: "✧",
    quote: true,
    quoteEmoji: "🌙",
    lines: ["Of all the things beyond my reach, you are the most precious."]
  },
  {
    kicker: "What I still carry · III",
    title: "Seeing you",
    titleEmoji: "💭",
    pageEmoji: "👀",
    mood: "mood-garden",
    art: "✿",
    quote: true,
    quoteEmoji: "🌹",
    lines: ["Seeing you is enough for me."]
  },
  {
    kicker: "What I still carry · IV",
    title: "Even when I have nothing to say",
    titleEmoji: "💭",
    pageEmoji: "🎶",
    mood: "mood-letter",
    art: "❧",
    quote: true,
    quoteEmoji: "✨",
    lines: ["I love talking to you, even when I have nothing to say."]
  },
  {
    kicker: "Chapter five",
    title: "My favourite chapter",
    titleEmoji: "📚💗",
    pageEmoji: "🪷",
    mood: "mood-garden",
    art: "✿",
    lines: [
      "You will always be my favourite chapter.",
      "Even if we can't be together in the end, I'm glad you were part of my story. I'm grateful for what we shared, and for the person you were to me."
    ]
  },
  {
    kicker: "One small question",
    title: "Could we begin here?",
    titleEmoji: "🤝",
    pageEmoji: "🫂",
    mood: "mood-question",
    art: "♡",
    lines: [
      "I want to ask you one thing: why don't we become good, best friends, share everything, and take care of each other until you marry the lucky person?",
      "Would you be open to that?"
    ]
  },
  {
    kicker: "One last thing",
    title: "Whatever you decide",
    titleEmoji: "📞💛",
    pageEmoji: "🕊️",
    mood: "mood-question",
    art: "♡",
    lines: [
      "If your answer is yes or no, please call me on my mobile and tell me everything you want to say. I'll be available for you all the time. :)",
      "If you'd rather not call, I understand. I'll give you space and won't keep asking."
    ],
    closingQuote: "Whatever happens next, I'm glad I got to know you.",
    final: true
  }
];

const paper = document.querySelector("#paper");
const book = document.querySelector("#book");
const coverContent = document.querySelector("#coverContent");
const pageContent = document.querySelector("#pageContent");
const bookControls = document.querySelector("#bookControls");
const quietNote = document.querySelector("#quietNote");
const pageCount = document.querySelector("#pageCount");
const storyProgress = document.querySelector("#storyProgress");
const previousButton = document.querySelector("#previousPage");
const nextButton = document.querySelector("#nextPage");
const announcement = document.querySelector("#announcement");
const song = document.querySelector("#song");
const soundButton = document.querySelector("#soundButton");
const soundLabel = soundButton.querySelector(".sound-label");
const audioStatus = document.querySelector("#audioStatus");
let currentPage = -1;
let isTurning = false;
let pointerStart = null;
let resumeOnReturn = false;

function setMusicState() {
  const isAudible = !song.paused && !song.muted && song.volume > 0;
  soundButton.setAttribute("aria-label", isAudible ? "Pause background music" : "Play background music");
  soundButton.title = isAudible ? "Pause background music" : "Play background music";
  soundButton.querySelector(".sound-icon").textContent = isAudible ? "🔊" : "🔇";
  soundLabel.textContent = isAudible ? "Music on" : "Music off";
}

function showAudioStatus(message) {
  audioStatus.textContent = message;
  audioStatus.hidden = false;
}

function hideAudioStatus() {
  audioStatus.hidden = true;
  audioStatus.textContent = "";
}

function handlePlayAttempt(playAttempt) {
  playAttempt.then(() => {
    hideAudioStatus();
    setMusicState();
  }).catch(() => {
    setMusicState();
    showAudioStatus("The music couldn't start. Tap the sound button to try again.");
  });
}

function renderPage(index) {
  const page = pages[index];
  const paragraphMarkup = page.lines.map((line, lineIndex) => {
    const classes = page.quote ? " class=\"quote-line\"" : "";
    const quoteEmoji = page.quote ? ` <span class="line-emoji" aria-hidden="true">${page.quoteEmoji}</span>` : "";
    return `<p${classes} style="--delay:${lineIndex * 0.17}s">${line}${quoteEmoji}</p>`;
  }).join("");
  const lovePosition = ["flex-start", "center", "flex-end"][Math.floor(Math.random() * 3)];
  const loveDriftValue = Math.floor(Math.random() * 31) - 15;
  const loveDrift = `${loveDriftValue}px`;
  const loveDriftBack = `${Math.round(loveDriftValue * -0.65)}px`;
  const loveDelay = `${-Math.floor(Math.random() * 6)}s`;
  const pageLoveEmoji = `<p class="page-love-emoji" style="align-self:${lovePosition};--love-drift:${loveDrift};--love-drift-back:${loveDriftBack};--love-delay:${loveDelay}" aria-hidden="true">${page.pageEmoji}</p>`;
  const noteMarkup = page.note ? `<p class="personal-note">${page.note}</p>` : "";
  const closingQuoteMarkup = page.closingQuote ? `<p class="closing-quote">${page.closingQuote}</p>` : "";
  const finalMarkup = page.final ? `
    <div class="choice-area">
      <button class="bloom-button" id="bloomButton" type="button" aria-label="Tap to let the rose bloom">
        <span class="bloom-rose" aria-hidden="true"><span class="bloom-head"><i></i><i></i><i></i><i></i></span><span class="bloom-stem"></span><span class="bloom-leaf"></span></span>
      </button>
      <span class="bloom-caption">With care, Hemanth 🌹</span>
    </div>` : "";

  pageContent.className = `page-content ${page.mood}${page.final ? " final-page" : ""}`;
  book.classList.add("book-tall");
  pageContent.innerHTML = `<p class="page-kicker">${page.kicker}</p><h2>${page.title} <span class="title-emoji">${page.titleEmoji}</span></h2><div class="page-lines">${paragraphMarkup}${pageLoveEmoji}</div>${noteMarkup}${closingQuoteMarkup}${finalMarkup}<span class="page-art" aria-hidden="true">${page.art}</span>`;
  pageContent.classList.remove("page-arrive");
  void pageContent.offsetWidth;
  pageContent.classList.add("page-arrive");
  coverContent.hidden = true;
  pageContent.hidden = false;
  bookControls.hidden = false;
  quietNote.hidden = false;
  currentPage = index;
  pageCount.textContent = `${String(index + 1).padStart(2, "0")} / ${String(pages.length).padStart(2, "0")}`;
  storyProgress.value = index + 1;
  previousButton.disabled = index === 0;
  nextButton.disabled = index === pages.length - 1;
  announcement.textContent = `${page.kicker}: ${page.title}`;
}

function turnPage(direction) {
  if (isTurning) return;
  const destination = currentPage + direction;
  if (destination < 0 || destination >= pages.length) return;
  isTurning = true;
  paper.classList.add(direction > 0 ? "turn-next" : "turn-previous");
  window.setTimeout(() => {
    paper.classList.remove("turn-next", "turn-previous");
    renderPage(destination);
    isTurning = false;
  }, 680);
}

document.querySelector("#openStory").addEventListener("click", () => {
  document.querySelector("#book").classList.add("is-open");
  song.volume = 0.75;
  const playAttempt = song.play();
  handlePlayAttempt(playAttempt);
  renderPage(0);
});

previousButton.addEventListener("click", () => turnPage(-1));
nextButton.addEventListener("click", () => turnPage(1));

soundButton.addEventListener("click", () => {
  if (song.paused) {
    const playAttempt = song.play();
    handlePlayAttempt(playAttempt);
  } else {
    song.pause();
  }
});

song.addEventListener("play", setMusicState);
song.addEventListener("pause", setMusicState);
song.addEventListener("volumechange", setMusicState);
song.addEventListener("error", () => {
  setMusicState();
  showAudioStatus("The music file couldn't load, but the story is still here for you.");
});
song.addEventListener("loadeddata", hideAudioStatus);

document.addEventListener("visibilitychange", () => {
  if (document.hidden) {
    resumeOnReturn = !song.paused;
    if (resumeOnReturn) song.pause();
    return;
  }

  if (resumeOnReturn) {
    resumeOnReturn = false;
    const playAttempt = song.play();
    handlePlayAttempt(playAttempt);
  }
});

paper.addEventListener("click", (event) => {
  if (event.target.closest("button")) return;
  const bounds = paper.getBoundingClientRect();
  const localX = event.clientX - bounds.left;
  if (localX < bounds.width * .18) turnPage(-1);
  if (localX > bounds.width * .82) turnPage(1);
});

paper.addEventListener("pointerdown", (event) => {
  pointerStart = { x: event.clientX, y: event.clientY };
});

paper.addEventListener("pointerup", (event) => {
  if (!pointerStart) return;
  const deltaX = event.clientX - pointerStart.x;
  const deltaY = event.clientY - pointerStart.y;
  pointerStart = null;
  if (Math.abs(deltaX) > 48 && Math.abs(deltaX) > Math.abs(deltaY) * 1.25) {
    turnPage(deltaX < 0 ? 1 : -1);
  }
});

document.addEventListener("keydown", (event) => {
  if (currentPage < 0 || event.altKey || event.ctrlKey || event.metaKey) return;
  if (event.key === "ArrowRight") turnPage(1);
  if (event.key === "ArrowLeft") turnPage(-1);
});

pageContent.addEventListener("click", (event) => {
  if (event.target.closest("#bloomButton")) {
    const bloomButton = pageContent.querySelector("#bloomButton");
    bloomButton.classList.add("bloomed");
    bloomButton.setAttribute("aria-label", "The rose has bloomed");
  }
});

song.volume = 0.75;
setMusicState();