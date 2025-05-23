// Game Types and Categories

// Taboo Word Generator
export const tabooData = [
  { word: "Birthday", tabooWords: ["Cake", "Celebrate", "Presents", "Party", "Candles"] },
  { word: "Movie", tabooWords: ["Watch", "Film", "Cinema", "Popcorn", "Actor"] },
  { word: "Soccer", tabooWords: ["Ball", "Goal", "Kick", "Field", "Team"] },
  { word: "Computer", tabooWords: ["Keyboard", "Screen", "Mouse", "Internet", "Type"] },
  { word: "Beach", tabooWords: ["Sand", "Ocean", "Swim", "Sun", "Shore"] },
  { word: "Pizza", tabooWords: ["Cheese", "Tomato", "Delivery", "Slice", "Toppings"] },
  { word: "Wedding", tabooWords: ["Marriage", "Bride", "Groom", "Ceremony", "Ring"] },
  { word: "Fireworks", tabooWords: ["Explosion", "Sky", "Colors", "July", "Sparkle"] },
  { word: "Sandwich", tabooWords: ["Bread", "Filling", "Lunch", "Ham", "Cheese"] },
  { word: "Airplane", tabooWords: ["Fly", "Sky", "Airport", "Pilot", "Wings"] },
  { word: "Christmas", tabooWords: ["December", "Santa", "Presents", "Tree", "Holiday"] },
  { word: "Coffee", tabooWords: ["Drink", "Caffeine", "Morning", "Cup", "Starbucks"] },
  { word: "Chocolate", tabooWords: ["Sweet", "Candy", "Brown", "Cocoa", "Dessert"] },
  { word: "Camera", tabooWords: ["Photo", "Picture", "Flash", "Lens", "Memory"] },
  { word: "Restaurant", tabooWords: ["Food", "Waiter", "Menu", "Eat", "Chef"] }
];

// Truth or Dare
export const truthOrDareData = {
  truth: {
    mild: [
      "What's your most embarrassing childhood memory?",
      "What's the worst gift you've ever received?",
      "What's a silly fear you have?",
      "What's the weirdest dream you've ever had?",
      "What's your guilty pleasure song?",
      "What was your worst fashion mistake?"
    ],
    medium: [
      "What's the most rebellious thing you've done?",
      "What's a lie you've told that got out of control?",
      "What's your most embarrassing moment?",
      "What's one thing you'd change about yourself?",
      "What's the longest you've gone without showering?"
    ],
    spicy: [
      "What's your biggest regret?",
      "What's the biggest mistake you've made?",
      "What's the most trouble you've been in?",
      "What's a secret you've never told anyone in this room?",
      "What's the most embarrassing thing in your search history?"
    ]
  },
  dare: {
    mild: [
      "Do your best impression of someone in the room.",
      "Speak in an accent for the next three rounds.",
      "Take a silly selfie and post it to your social media.",
      "Exchange an item of clothing with someone.",
      "Let someone give you a new hairstyle."
    ],
    medium: [
      "Eat a spoonful of hot sauce or something spicy.",
      "Let someone send a text from your phone.",
      "Call a friend and sing them a song.",
      "Do 20 jumping jacks.",
      "Let someone draw on your face."
    ],
    spicy: [
      "Reveal your screen time for today.",
      "Show your camera roll to the group.",
      "Let the group look through your social media for 1 minute.",
      "Show the last five people you texted and what the messages said.",
      "Let the group pick your profile picture for a week."
    ]
  }
};

// Never Have I Ever - Adding many more options
export const neverHaveIData = {
  mild: [
    "Never have I ever fallen asleep in class.",
    "Never have I ever broken a bone.",
    "Never have I ever traveled to another country.",
    "Never have I ever failed an exam.",
    "Never have I ever gotten a speeding ticket.",
    "Never have I ever gone camping.",
    "Never have I ever eaten an entire pizza by myself.",
    "Never have I ever forgotten someone's name while introducing them.",
    "Never have I ever sang karaoke in public.",
    "Never have I ever lost my phone.",
    "Never have I ever accidentally sent a text to the wrong person.",
    "Never have I ever taken a sick day when I wasn't actually sick.",
    "Never have I ever pretended to know a celebrity.",
    "Never have I ever watched an entire TV series in one sitting.",
    "Never have I ever slept through my alarm for work or school.",
    "Never have I ever saved an animal.",
    "Never have I ever tried to cut my own hair and regretted it.",
    "Never have I ever pulled an all-nighter to finish an assignment."
  ],
  medium: [
    "Never have I ever lied to my best friend.",
    "Never have I ever been fired from a job.",
    "Never have I ever crashed a car.",
    "Never have I ever gone skinny dipping.",
    "Never have I ever pulled an all-nighter.",
    "Never have I ever stolen something.",
    "Never have I ever tried to impress someone and failed miserably.",
    "Never have I ever had a wardrobe malfunction in public.",
    "Never have I ever lied about my age to get into somewhere.",
    "Never have I ever pretended to be sick to avoid an event.",
    "Never have I ever crashed a party I wasn't invited to.",
    "Never have I ever accidentally broken something at someone else's house.",
    "Never have I ever stalked an ex on social media.",
    "Never have I ever fallen in public in front of a crowd.",
    "Never have I ever made up an excuse to get out of plans."
  ],
  spicy: [
    "Never have I ever been kicked out of a bar or club.",
    "Never have I ever dated two people at once.",
    "Never have I ever gotten a tattoo I regret.",
    "Never have I ever been caught sneaking out.",
    "Never have I ever sent a message to the wrong person with embarrassing results.",
    "Never have I ever had a crush on a coworker or classmate.",
    "Never have I ever done something illegal.",
    "Never have I ever been in a physical fight.",
    "Never have I ever had a one-night stand.",
    "Never have I ever ghosted someone I was dating.",
    "Never have I ever snooped through someone's phone without permission.",
    "Never have I ever had a secret relationship.",
    "Never have I ever kissed my best friend's crush.",
    "Never have I ever had a friends with benefits situation.",
    "Never have I ever forgotten an important anniversary or birthday."
  ]
};

// Would You Rather
export const wouldYouRatherData = [
  { option1: "Be able to fly", option2: "Be invisible" },
  { option1: "Always be 10 minutes late", option2: "Always be 20 minutes early" },
  { option1: "Have unlimited money", option2: "Have unlimited time" },
  { option1: "Know how you will die", option2: "Know when you will die" },
  { option1: "Be famous", option2: "Be wealthy but unknown" },
  { option1: "Never be able to use a smartphone again", option2: "Never be able to use a computer again" },
  { option1: "Lose all your memories", option2: "Never be able to make new memories" },
  { option1: "Live in the mountains", option2: "Live by the beach" },
  { option1: "Be able to talk to animals", option2: "Be able to speak all human languages" },
  { option1: "Have one real-life reset button", option2: "Have one real-life pause button" }
];

// Spin the Bottle Actions
export const spinBottleActions = {
  mild: [
    "Tell a joke to the person to your left.",
    "Give a compliment to the person opposite you.",
    "Share an interesting fact about yourself.",
    "Show everyone your best dance move.",
    "Do an impression of a celebrity."
  ],
  medium: [
    "Tell an embarrassing story about yourself.",
    "Let someone go through your phone for 30 seconds.",
    "Switch clothes with someone for one round.",
    "Take a silly selfie with someone else in the group.",
    "Do 15 push-ups right now."
  ],
  spicy: [
    "Answer truthfully: What's your biggest pet peeve about someone in this room?",
    "Re-enact your first kiss.",
    "Show everyone the last text conversation you had.",
    "Call your crush or ex on speakerphone.",
    "Let someone post anything they want on your social media."
  ]
};

// Charades Categories
export const charadesData = [
  { phrase: "Riding a bicycle", category: "Actions", difficulty: "mild" },
  { phrase: "Making a sandwich", category: "Actions", difficulty: "mild" },
  { phrase: "Titanic (movie)", category: "Movies", difficulty: "mild" },
  { phrase: "Spider-Man", category: "Characters", difficulty: "mild" },
  { phrase: "Playing the piano", category: "Actions", difficulty: "medium" },
  { phrase: "The Lion King", category: "Movies", difficulty: "medium" },
  { phrase: "Global warming", category: "Concepts", difficulty: "medium" },
  { phrase: "Skateboarding", category: "Sports", difficulty: "medium" },
  { phrase: "The theory of relativity", category: "Concepts", difficulty: "spicy" },
  { phrase: "Social media addiction", category: "Concepts", difficulty: "spicy" },
  { phrase: "Virtual reality", category: "Technology", difficulty: "spicy" },
  { phrase: "The Mona Lisa", category: "Art", difficulty: "spicy" }
];

// Helper Functions
export const getRandomItem = (array) => {
  return array[Math.floor(Math.random() * array.length)];
};

export const getRandomTabooCard = () => {
  return getRandomItem(tabooData);
};

export const getRandomTruthOrDare = (type, level) => {
  return getRandomItem(truthOrDareData[type][level]);
};

export const getRandomNeverHaveI = (level, usedPrompts = []) => {
  const availablePrompts = neverHaveIData[level].filter(prompt => !usedPrompts.includes(prompt));
  
  // If we've used all prompts, reset and use all again
  if (availablePrompts.length === 0) {
    return getRandomItem(neverHaveIData[level]);
  }
  
  return getRandomItem(availablePrompts);
};

export const getRandomWouldYouRather = () => {
  return getRandomItem(wouldYouRatherData);
};

export const getRandomSpinBottleAction = (level) => {
  return getRandomItem(spinBottleActions[level]);
};

export const getRandomCharades = () => {
  return getRandomItem(charadesData);
};

// Custom Game Storage
export const saveCustomGame = (gameSet) => {
  const customGames = getCustomGames();
  customGames.push(gameSet);
  localStorage.setItem('party-play-custom-games', JSON.stringify(customGames));
};

export const getCustomGames = () => {
  const gamesString = localStorage.getItem('party-play-custom-games');
  return gamesString ? JSON.parse(gamesString) : [];
};

export const deleteCustomGame = (id) => {
  const customGames = getCustomGames();
  const updatedGames = customGames.filter(game => game.id !== id);
  localStorage.setItem('party-play-custom-games', JSON.stringify(updatedGames));
};

// Players management
export const getDefaultPlayerCount = () => {
  const stored = localStorage.getItem('party-play-player-count');
  return stored ? parseInt(stored) : 4;
};

export const savePlayerCount = (count) => {
  localStorage.setItem('party-play-player-count', count.toString());
};
