const getRandomVotes = () => Math.floor(Math.random() * 50) + 1;

export const PoolsConst = {
  pools: [
    {
      name: "Agended Sevenfod",
      questions: [
        {
          question: "What's your all-time favorite song by Avenged Sevenfold? What about it resonates with you?",
          order: 1,
          answers: [
            { name: "Bat Country", votes: getRandomVotes() },
            { name: "Nightmare", votes: getRandomVotes() },
            { name: "A Little Piece of Heaven", votes: getRandomVotes() },
            { name: "Afterlife", votes: getRandomVotes() },
          ],
        },
        {
          question: "Have you ever seen Avenged Sevenfold perform live? If so, what was your most memorable moment from the concert?",
          order: 2,
          answers: [
            { name: "Yes, I saw them at Download Festival.", votes: getRandomVotes() },
            { name: "No, I haven't had the chance yet.", votes: getRandomVotes() },
            { name: "I saw them on their Nightmare tour.", votes: getRandomVotes() },
          ],
        },
        {
          question: "Among Avenged Sevenfold's albums, which one do you consider their masterpiece, and why?",
          order: 3,
          answers: [
            { name: "City of Evil - The guitar work is phenomenal.", votes: getRandomVotes() },
            { name: "Waking the Fallen - It's their most raw and intense album.", votes: getRandomVotes() },
            { name: "The Stage - I love the concept and progressive elements.", votes: getRandomVotes() },
          ],
        },
        {
          question: "Among Avenged Sevenfold's members, which one do you consider composes better?",
          order: 4,
          answers: [
            { name: "Synyster Gates", votes: getRandomVotes() },
            { name: "Matt Shadows", votes: getRandomVotes() },
            { name: "The Rev Sullivan", votes: getRandomVotes() },
            { name: "Jonhy Christ", votes: getRandomVotes() },
            { name: "Zacky Vengance", votes: getRandomVotes() },
          ],
        },
        {
          question: "Avenged Sevenfold has experimented with various music styles over the years. Do you prefer their earlier sound or their more recent music? Why?",
          order: 5,
          answers: [
            { name: "I prefer their earlier metalcore sound.", votes: getRandomVotes() },
            { name: "I like their transition into hard rock.", votes: getRandomVotes() },
            { name: "I enjoy their recent progressive direction.", votes: getRandomVotes() },
          ],
        },
        {
          question: "Do you own any Avenged Sevenfold memorabilia or merchandise, like posters, vinyl records, or concert T-shirts? What's your most cherished item, and what's the story behind it?",
          order: 6,
          answers: [
            { name: "Yes, I have a signed poster from a meet-and-greet.", votes: getRandomVotes() },
            { name: "I collect their vinyl records, and my favorite is the limited edition City of Evil.", votes: getRandomVotes() },
            { name: "I have a concert T-shirt from their Hail to the King tour.", votes: getRandomVotes() },
          ],
        },
      ],
      daysAgo: 6,
      totalVotes: 120,
      active: 4,
      creator: 'Rufus',
      hashtags: ['music', 'talent'],
    },
    {
      name: "Travel Preferences",
      questions: [
        {
          question: "What's your favorite travel destination? What makes it special?",
          order: 1,
          answers: [
            { name: "Paris, France - The romantic atmosphere.", votes: getRandomVotes() },
            { name: "Bali, Indonesia - The stunning beaches.", votes: getRandomVotes() },
            { name: "Kyoto, Japan - Rich cultural heritage.", votes: getRandomVotes() },
          ],
        },
      ],
      daysAgo: 10,
      totalVotes: 250,
      active: 1,
      creator: 'Sarah',
      hashtags: ['travel', 'adventure'],
    },
    {
      name: "Movie Preferences",
      questions: [
        {
          question: "What's your all-time favorite movie? What do you love about it?",
          order: 1,
          answers: [
            { name: "The Shawshank Redemption - It's a timeless classic.", votes: getRandomVotes() },
            { name: "Inception - Mind-bending plot.", votes: getRandomVotes() },
            { name: "The Lord of the Rings - Epic fantasy adventure.", votes: getRandomVotes() },
          ],
        },
        {
          question: "Do you prefer watching movies in theaters or at home? Why?",
          order: 2,
          answers: [
            { name: "I love the theater experience.", votes: getRandomVotes() },
            { name: "At home for comfort and control.", votes: getRandomVotes() },
            { name: "Depends on the movie and mood.", votes: getRandomVotes() },
          ],
        },
        {
          question: "What's your favorite movie genre, and why does it appeal to you?",
          order: 1,
          answers: [
            { name: "Action - Thrilling and adrenaline-pumping.", votes: getRandomVotes() },
            { name: "Comedy - Laughter is the best medicine.", votes: getRandomVotes() },
            { name: "Drama - Deep emotional storytelling.", votes: getRandomVotes() },
          ],
        },
      ],
      daysAgo: 15,
      totalVotes: 180,
      active: 1,
      creator: 'Mia',
      hashtags: ['movies', 'entertainment'],
    },
    {
      name: "Food Preferences",
      questions: [
        {
          question: "What's your favorite cuisine? What dish do you recommend?",
          order: 1,
          answers: [
            { name: "Italian - Try the lasagna.", votes: getRandomVotes() },
            { name: "Japanese - Sushi is a must.", votes: getRandomVotes() },
            { name: "Mexican - Tacos are delicious.", votes: getRandomVotes() },
          ],
        },
        {
          question: "Do you enjoy cooking at home or dining out more? Why?",
          order: 2,
          answers: [
            { name: "I love cooking for the creativity.", votes: getRandomVotes() },
            { name: "Dining out for convenience and variety.", votes: getRandomVotes() },
            { name: "Depends on my mood and time.", votes: getRandomVotes() },
          ],
        },
        {
          question: "Sweet or savory? What's your go-to snack or dessert?",
          order: 3,
          answers: [
            { name: "Savory - Potato chips are irresistible.", votes: getRandomVotes() },
            { name: "Sweet - Chocolate is my weakness.", votes: getRandomVotes() },
            { name: "I love a mix of both.", votes: getRandomVotes() },
          ],
        },
      ],
      daysAgo: 8,
      totalVotes: 150,
      active: 3,
      creator: 'Alex',
      hashtags: ['food', 'culinary'],
    },
    {
      name: "Sci-Fi Movies",
      questions: [
        {
          question: "What's your favorite sci-fi movie of all time? Why?",
          order: 1,
          answers: [
            { name: "Blade Runner - Its dystopian world and themes are captivating.", votes: getRandomVotes() },
            { name: "The Matrix - A mind-bending exploration of reality.", votes: getRandomVotes() },
            { name: "Star Wars - Epic space battles and a rich universe.", votes: getRandomVotes() },
          ],
        },
        {
          question: "Do you believe in the possibility of extraterrestrial life?",
          order: 2,
          answers: [
            { name: "Absolutely, the universe is vast.", votes: getRandomVotes() },
            { name: "I'm not sure, but it's intriguing to think about.", votes: getRandomVotes() },
            { name: "No, I think we're alone in the universe.", votes: getRandomVotes() },
          ],
        },
      ],
      daysAgo: 12,
      totalVotes: 180,
      active: 2,
      creator: 'Ethan',
      hashtags: ['movies', 'scifi', 'space'],
    },
    {
      name: "Foodie Adventures",
      questions: [
        {
          question: "What's your favorite type of cuisine to explore while traveling?",
          order: 3,
          answers: [
            { name: "Thai - The perfect blend of sweet, sour, and spicy.", votes: getRandomVotes() },
            { name: "Indian - The rich flavors and aromatic spices.", votes: getRandomVotes() },
            { name: "Greek - Fresh Mediterranean dishes with olive oil and feta cheese.", votes: getRandomVotes() },
          ],
        },
        {
          question: "Share a memorable food experience from your travels.",
          order: 4,
          answers: [
            { name: "Trying street food in Bangkok, Thailand.", votes: getRandomVotes() },
            { name: "Enjoying a traditional Italian feast in Rome.", votes: getRandomVotes() },
          ],
        },
      ],
      daysAgo: 10,
      totalVotes: 150,
      active: 2,
      creator: 'Ava',
      hashtags: ['food', 'travel', 'adventure'],
    },
    {
      name: "Bookworms",
      questions: [
        {
          question: "What's your all-time favorite book? What makes it special?",
          order: 5,
          answers: [
            { name: "The Great Gatsby - A timeless exploration of the American Dream.", votes: getRandomVotes() },
            { name: "Pride and Prejudice - Classic romance and social commentary.", votes: getRandomVotes() },
            { name: "Dune - Epic science fiction with intricate world-building.", votes: getRandomVotes() },
          ],
        },
        {
          question: "E-books or physical books? What's your preference and why?",
          order: 6,
          answers: [
            { name: "I prefer physical books for the tactile experience.", votes: getRandomVotes() },
            { name: "E-books for the convenience of carrying a library in my pocket.", votes: getRandomVotes() },
          ],
        },
      ],
      daysAgo: 15,
      totalVotes: 220,
      active: 2,
      creator: 'Liam',
      hashtags: ['books', 'reading', 'literature'],
    },
    {
      name: "Tech Enthusiasts",
      questions: [
        {
          question: "What emerging technology excites you the most?",
          order: 1,
          answers: [
            { name: "Artificial Intelligence (AI) - The potential for automation and smart systems.", votes: getRandomVotes() },
            { name: "Virtual Reality (VR) - Immersive experiences and virtual worlds.", votes: getRandomVotes() },
            { name: "Blockchain technology - Decentralized and secure digital transactions.", votes: getRandomVotes() },
          ],
        },
        {
          question: "iOS or Android? What's your preferred mobile operating system?",
          order: 2,
          answers: [
            { name: "iOS - Smooth user experience and ecosystem.", votes: getRandomVotes() },
            { name: "Android - Customization and flexibility.", votes: getRandomVotes() },
            { name: "I use both for different purposes.", votes: getRandomVotes() },
          ],
        },
      ],
      daysAgo: 18,
      totalVotes: 190,
      active: 2,
      creator: 'Oliver',
      hashtags: ['technology', 'gadgets', 'innovation'],
    },
    {
      name: "Gaming Preferences",
      questions: [
        {
          question: "What's your favorite video game of all time? Why?",
          order: 1,
          answers: [
            { name: "The Legend of Zelda: Breath of the Wild - Open-world exploration and freedom.", votes: getRandomVotes() },
            { name: "The Witcher 3: Wild Hunt - Rich storytelling and complex characters.", votes: getRandomVotes() },
            { name: "Dark Souls - Challenging gameplay and atmospheric world.", votes: getRandomVotes() },
          ],
        },
        {
          question: "PC, console, or mobile gaming? What's your platform of choice?",
          order: 2,
          answers: [
            { name: "PC - Graphics, modding, and versatility.", votes: getRandomVotes() },
            { name: "Console - Plug and play simplicity.", votes: getRandomVotes() },
            { name: "Mobile - Gaming on the go.", votes: getRandomVotes() },
          ],
        },
      ],
      daysAgo: 20,
      totalVotes: 180,
      active: 2,
      creator: 'Lucas',
      hashtags: ['gaming', 'videogames', 'entertainment'],
    },
    {
      name: "Artistic Creations",
      questions: [
        {
          question: "What's your favorite form of artistic expression? Why?",
          order: 1,
          answers: [
            { name: "Painting - Colors and visual storytelling.", votes: getRandomVotes() },
            { name: "Sculpture - Three-dimensional artistry.", votes: getRandomVotes() },
            { name: "Photography - Capturing moments and emotions.", votes: getRandomVotes() },
          ],
        },
        {
          question: "Do you create art yourself, or do you primarily appreciate others' work?",
          order: 2,
          answers: [
            { name: "I'm an artist - I create and share my own art.", votes: getRandomVotes() },
            { name: "I'm an art enthusiast - I appreciate and collect art.", votes: getRandomVotes() },
          ],
        },
      ],
      daysAgo: 12,
      totalVotes: 150,
      active: 2,
      creator: 'Sophie',
      hashtags: ['art', 'creativity', 'inspiration'],
    },
    {
      name: "Environmental Activists",
      questions: [
        {
          question: "What environmental issue concerns you the most? Why?",
          order: 1,
          answers: [
            { name: "Climate change - Global impact and long-term consequences.", votes: getRandomVotes() },
            { name: "Deforestation - Loss of biodiversity and vital ecosystems.", votes: getRandomVotes() },
            { name: "Plastic pollution - Threats to marine life and ecosystems.", votes: getRandomVotes() },
          ],
        },
        {
          question: "What steps do you take in your daily life to reduce your environmental footprint?",
          order: 2,
          answers: [
            { name: "I reduce, reuse, and recycle.", votes: getRandomVotes() },
            { name: "I use public transportation or carpool.", votes: getRandomVotes() },
            { name: "I support eco-friendly products and initiatives.", votes: getRandomVotes() },
          ],
        },
      ],
      daysAgo: 15,
      totalVotes: 220,
      active: 2,
      creator: 'Noah',
      hashtags: ['environment', 'activism', 'sustainability'],
    },
    {
      name: "History Buffs",
      questions: [
        {
          question: "What historical period or event fascinates you the most? Why?",
          order: 1,
          answers: [
            { name: "Ancient Egypt - Mysteries of pyramids and pharaohs.", votes: getRandomVotes() },
            { name: "World War II - A pivotal moment in modern history.", votes: getRandomVotes() },
            { name: "Renaissance - Cultural rebirth and artistic achievements.", votes: getRandomVotes() },
          ],
        },
        {
          question: "If you could time travel to any historical era, where and when would you go?",
          order: 2,
          answers: [
            { name: "Ancient Greece - Philosophical discussions and Olympic games.", votes: getRandomVotes() },
            { name: "Medieval Europe - Knights, castles, and epic quests.", votes: getRandomVotes() },
            { name: "The Roaring Twenties - Jazz, flappers, and social change.", votes: getRandomVotes() },
          ],
        },
      ],
      daysAgo: 18,
      totalVotes: 190,
      active: 2,
      creator: 'Emma',
      hashtags: ['history', 'knowledge', 'past'],
    },
  ],
};

