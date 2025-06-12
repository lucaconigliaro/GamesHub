import type { Game } from "../Types/Game"

export const gamesData: Game[] = [
  {
    id: 1,
    title: "The Witcher 3: Wild Hunt",
    category: "RPG",
    coverImage: "/CoverImage/the_witcher3.jpeg",
    details: {
      platform: ["PC", "PS4", "Xbox One", "Switch"],
      releaseYear: 2015,
      rating: 9,
      developer: "CD Projekt Red",
      price: 40,
      players: ["Single-player"],
      ageRating: "PEGI 18",
      regionAvailability: ["NA", "EU"],
      description:
        "Un gioco di ruolo open-world ambientato in un universo fantasy oscuro, in cui il protagonista Geralt di Rivia, un cacciatore di mostri, deve affrontare pericoli e misteri per salvare la sua figlia adottiva."
    }
  },
  {
    id: 2,
    title: "Fortnite",
    category: "Battle Royale",
    coverImage: "/CoverImage/Fortnite.jpg",
    details: {
      platform: ["PC", "PS4", "Xbox One", "Switch", "Mobile"],
      releaseYear: 2017,
      rating: 8,
      developer: "Epic Games",
      price: 0,
      players: ["Multiplayer"],
      ageRating: "PEGI 12",
      regionAvailability: ["NA", "EU"],
      description:
        "Un popolare gioco battle royale dove i giocatori combattono fino a che non ne resta uno solo. I giocatori possono costruire strutture per difendersi o sopraffare gli avversari."
    }
  },
  {
    id: 3,
    title: "Minecraft",
    category: "Sandbox",
    coverImage: "/CoverImage/minecraft.jpeg",
    details: {
      platform: ["PC", "PS4", "Xbox One", "Switch", "Mobile"],
      releaseYear: 2011,
      rating: 10,
      developer: "Mojang Studios",
      price: 20,
      players: ["Single-player", "Multiplayer"],
      ageRating: "PEGI 7",
      regionAvailability: ["NA", "EU", "ASIA"],
      description:
        "Un gioco sandbox dove i giocatori possono costruire, esplorare e sopravvivere in un mondo di blocchi, raccogliendo risorse e affrontando creature pericolose."
    }
  },
  {
    id: 4,
    title: "The Last of Us Part II",
    category: "Action-Adventure",
    coverImage: "/CoverImage/tlou2.jpeg",
    details: {
      platform: ["PS4"],
      releaseYear: 2020,
      rating: 9,
      developer: "Naughty Dog",
      price: 60,
      players: ["Single-player"],
      ageRating: "PEGI 18",
      regionAvailability: ["NA", "EU"],
      description: "Un gioco d'azione-avventura che segue Ellie, un'adolescente che deve affrontare la violenza, la vendetta e la perdita in un mondo post-apocalittico."
    }
  },
  {
    id: 6,
    title: "Red Dead Redemption 2",
    category: "Action-Adventure",
    coverImage: "https://upload.wikimedia.org/wikipedia/en/4/44/Red_Dead_Redemption_II.jpg",
    details: {
      platform: ["PC", "PS4", "Xbox One"],
      releaseYear: 2018,
      rating: 9,
      developer: "Rockstar Games",
      price: 60,
      players: ["Single-player", "Multiplayer"],
      ageRating: "PEGI 18",
      regionAvailability: ["NA", "EU"],
      description: "Un gioco d'azione-avventura open-world che segue la vita di un fuorilegge nell'America selvaggia, esplorando tematiche di moralità e sopravvivenza."
    }
  },
  {
    id: 8,
    title: "Assassin's Creed Valhalla",
    category: "Action-Adventure",
    coverImage: "/CoverImage/ac.jpeg",
    details: {
      platform: ["PC", "PS4", "Xbox One", "PS5", "Xbox Series"],
      releaseYear: 2020,
      rating: 8,
      developer: "Ubisoft",
      price: 60,
      players: ["Single-player"],
      ageRating: "PEGI 18",
      regionAvailability: ["NA", "EU"],
      description: "Un gioco open-world d'azione-avventura ambientato nell'era vichinga. I giocatori vestono i panni di Eivor, un guerriero vichingo, in un'epoca di conquista e esplorazione."
    }
  },
  {
    id: 9,
    title: "League of Legends",
    category: "MOBA",
    coverImage: "/CoverImage/lol.jpeg",
    details: {
      platform: ["PC"],
      releaseYear: 2009,
      rating: 9,
      developer: "Riot Games",
      price: 0,
      players: ["Multiplayer"],
      ageRating: "PEGI 12",
      regionAvailability: ["NA", "EU", "ASIA"],
      description: "Un gioco multiplayer online competitivo dove due squadre di giocatori combattono per distruggere il Nexus avversario, utilizzando eroi con abilità uniche."
    }
  },
  {
    id: 11,
    title: "God of War",
    category: "Action-Adventure",
    coverImage: "https://upload.wikimedia.org/wikipedia/en/a/a7/God_of_War_4_cover.jpg",
    details: {
      platform: ["PS4"],
      releaseYear: 2018,
      rating: 10,
      developer: "Santa Monica Studio",
      price: 50,
      players: ["Single-player"],
      ageRating: "PEGI 18",
      regionAvailability: ["NA", "EU"],
      description: "Un'avventura epica che segue Kratos e suo figlio Atreus in un viaggio nel mondo della mitologia norrena."
    }
  },
  {
    id: 12,
    title: "Hades",
    category: "Roguelike",
    coverImage: "/CoverImage/hades.jpeg",
    details: {
      platform: ["PC", "Switch"],
      releaseYear: 2020,
      rating: 9,
      developer: "Supergiant Games",
      price: 25,
      players: ["Single-player"],
      ageRating: "PEGI 16",
      regionAvailability: ["NA", "EU"],
      description: "Un gioco roguelike dove interpreti Zagreus, il figlio di Ade, mentre cerca di fuggire dagli Inferi."
    }
  },
  {
    id: 13,
    title: "Overwatch",
    category: "FPS",
    coverImage: "https://upload.wikimedia.org/wikipedia/en/5/51/Overwatch_cover_art.jpg",
    details: {
      platform: ["PC", "PS4", "Xbox One", "Switch"],
      releaseYear: 2016,
      rating: 8,
      developer: "Blizzard Entertainment",
      price: 40,
      players: ["Multiplayer"],
      ageRating: "PEGI 12",
      regionAvailability: ["NA", "EU"],
      description: "Un gioco FPS a squadre con eroi unici e abilità speciali in un mondo futuristico."
    }
  },
  {
    id: 14,
    title: "Dark Souls III",
    category: "Roguelike",
    coverImage: "/CoverImage/dark.jpeg",
    details: {
      platform: ["PC", "PS4", "Xbox One"],
      releaseYear: 2016,
      rating: 9,
      developer: "FromSoftware",
      price: 40,
      players: ["Single-player", "Multiplayer"],
      ageRating: "PEGI 16",
      regionAvailability: ["NA", "EU"],
      description: "Un gioco action RPG noto per la sua difficoltà e atmosfera oscura."
    }
  },
  {
    id: 15,
    title: "Animal Crossing: New Horizons",
    category: "Simulation",
    coverImage: "/CoverImage/Animal_Crossing.webp",
    details: {
      platform: ["Switch"],
      releaseYear: 2020,
      rating: 9,
      developer: "Nintendo",
      price: 50,
      players: ["Single-player", "Multiplayer"],
      ageRating: "PEGI 3",
      regionAvailability: ["NA", "EU", "ASIA"],
      description: "Un simulatore di vita dove i giocatori possono costruire e decorare la propria isola e interagire con abitanti animali."
    }
  },
  {
    id: 16,
    title: "Ghost of Tsushima",
    category: "Action-Adventure",
    coverImage: "/CoverImage/ghost.jpeg",
    details: {
      platform: ["PS4", "PS5"],
      releaseYear: 2020,
      rating: 9,
      developer: "Sucker Punch Productions",
      price: 60,
      players: ["Single-player"],
      ageRating: "PEGI 18",
      regionAvailability: ["NA", "EU"],
      description: "Un'avventura open-world ambientata nel Giappone feudale, con combattimenti samurai e una trama emozionante."
    }
  },
  {
    id: 17,
    title: "FIFA 23",
    category: "Sports",
    coverImage: "/CoverImage/fifa.jpeg",
    details: {
      platform: ["PC", "PS4", "PS5", "Xbox One", "Xbox Series"],
      releaseYear: 2022,
      rating: 7,
      developer: "EA Sports",
      price: 60,
      players: ["Multiplayer", "Single-player"],
      ageRating: "PEGI 3",
      regionAvailability: ["NA", "EU", "ASIA"],
      description: "L'ultima edizione della famosa simulazione calcistica con squadre e giocatori aggiornati."
    }
  },
  {
    id: 18,
    title: "Apex Legends",
    category: "Battle Royale",
    coverImage: "/CoverImage/apex.jpeg",
    details: {
      platform: ["PC", "PS4", "PS5", "Xbox One", "Xbox Series", "Switch"],
      releaseYear: 2019,
      rating: 8,
      developer: "Respawn Entertainment",
      price: 0,
      players: ["Multiplayer"],
      ageRating: "PEGI 16",
      regionAvailability: ["NA", "EU", "ASIA"],
      description: "Un battle royale a squadre con eroi dotati di abilità uniche e strategiche."
    }
  },
  {
    id: 19,
    title: "Super Mario Odyssey",
    category: "Platform",
    coverImage: "https://upload.wikimedia.org/wikipedia/en/8/8d/Super_Mario_Odyssey.jpg",
    details: {
      platform: ["Switch"],
      releaseYear: 2017,
      rating: 10,
      developer: "Nintendo",
      price: 50,
      players: ["Single-player"],
      ageRating: "PEGI 3",
      regionAvailability: ["NA", "EU", "ASIA"],
      description: "Un platform 3D con Mario che esplora mondi vari e colleziona lune per salvare la principessa Peach."
    }
  },
  {
    id: 20,
    title: "Valorant",
    category: "FPS",
    coverImage: "/CoverImage/valorant.jpeg",
    details: {
      platform: ["PC"],
      releaseYear: 2020,
      rating: 8,
      developer: "Riot Games",
      price: 0,
      players: ["Multiplayer"],
      ageRating: "PEGI 16",
      regionAvailability: ["NA", "EU", "ASIA"],
      description: "Uno sparatutto tattico a squadre con agenti dotati di abilità speciali."
    }
  },
  {
    id: 21,
    title: "Resident Evil Village",
    category: "Survival Horror",
    coverImage: "/CoverImage/re.jpeg",
    details: {
      platform: ["PC", "PS4", "PS5", "Xbox One", "Xbox Series"],
      releaseYear: 2021,
      rating: 9,
      developer: "Capcom",
      price: 60,
      players: ["Single-player"],
      ageRating: "PEGI 18",
      regionAvailability: ["NA", "EU", "ASIA"],
      description: "Un survival horror in prima persona ambientato in un villaggio pieno di orrori e misteri."
    }
  },
  {
    id: 22,
    title: "Stardew Valley",
    category: "Simulation",
    coverImage: "/CoverImage/stardew.jpeg",
    details: {
      platform: ["PC", "PS4", "Xbox One", "Switch", "Mobile"],
      releaseYear: 2016,
      rating: 9,
      developer: "ConcernedApe",
      price: 15,
      players: ["Single-player", "Multiplayer"],
      ageRating: "PEGI 3",
      regionAvailability: ["NA", "EU", "ASIA"],
      description: "Un simulatore di fattoria dove i giocatori coltivano, allevano animali e interagiscono con la comunità."
    }
  },
  {
    id: 23,
    title: "Fall Guys: Ultimate Knockout",
    category: "Party",
    coverImage: "/CoverImage/fallguys.jpeg",
    details: {
      platform: ["PC", "PS4", "PS5", "Xbox One", "Xbox Series", "Switch"],
      releaseYear: 2020,
      rating: 7,
      developer: "Mediatonic",
      price: 20,
      players: ["Multiplayer"],
      ageRating: "PEGI 3",
      regionAvailability: ["NA", "EU"],
      description: "Un party game con gare folli e ostacoli divertenti fino a che non resta un vincitore."
    }
  },
  {
    id: 24,
    title: "Hollow Knight",
    category: "Metroidvania",
    coverImage: "/CoverImage/hollow.jpeg",
    details: {
      platform: ["PC", "PS4", "Xbox One", "Switch"],
      releaseYear: 2017,
      rating: 9,
      developer: "Team Cherry",
      price: 15,
      players: ["Single-player"],
      ageRating: "PEGI 12",
      regionAvailability: ["NA", "EU"],
      description: "Un gioco Metroidvania con esplorazione, combattimenti e una storia profonda in un mondo oscuro."
    }
  },
  {
    id: 25,
    title: "Splatoon 3",
    category: "Shooter",
    coverImage: "/CoverImage/splatoon.jpeg",
    details: {
      platform: ["Switch"],
      releaseYear: 2022,
      rating: 8,
      developer: "Nintendo",
      price: 50,
      players: ["Multiplayer"],
      ageRating: "PEGI 7",
      regionAvailability: ["NA", "EU", "ASIA"],
      description: "Uno sparatutto colorato e frenetico con squadre di inchiostro in lotta per il controllo della mappa."
    }
  },
  {
    id: 26,
    title: "Monster Hunter: World",
    category: "RPG",
    coverImage: "/CoverImage/monster.jpeg",
    details: {
      platform: ["PC", "PS4", "Xbox One"],
      releaseYear: 2018,
      rating: 9,
      developer: "Capcom",
      price: 40,
      players: ["Single-player", "Multiplayer"],
      ageRating: "PEGI 16",
      regionAvailability: ["NA", "EU", "ASIA"],
      description: "Un action RPG dove i giocatori cacciano mostri giganteschi in ambientazioni mozzafiato."
    }
  },
  {
    id: 27,
    title: "Doom Eternal",
    category: "FPS",
    coverImage: "/CoverImage/doom.jpeg",
    details: {
      platform: ["PC", "PS4", "Xbox One", "Switch"],
      releaseYear: 2020,
      rating: 9,
      developer: "id Software",
      price: 40,
      players: ["Single-player"],
      ageRating: "PEGI 18",
      regionAvailability: ["NA", "EU"],
      description: "Uno sparatutto frenetico in prima persona contro demoni infernali."
    }
  },
  {
    id: 28,
    title: "Sea of Thieves",
    category: "Action-Adventure",
    coverImage: "/CoverImage/sea.jpeg",
    details: {
      platform: ["PC", "Xbox One", "Xbox Series"],
      releaseYear: 2018,
      rating: 7,
      developer: "Rare",
      price: 40,
      players: ["Multiplayer"],
      ageRating: "PEGI 12",
      regionAvailability: ["NA", "EU"],
      description: "Un gioco multiplayer open-world di pirati con esplorazione, battaglie navali e tesori."
    }
  },
  {
    id: 29,
    title: "The Sims 4",
    category: "Simulation",
    coverImage: "/CoverImage/thesims.jpeg",
    details: {
      platform: ["PC", "PS4", "Xbox One"],
      releaseYear: 2014,
      rating: 8,
      developer: "Maxis",
      price: 40,
      players: ["Single-player"],
      ageRating: "PEGI 12",
      regionAvailability: ["NA", "EU", "ASIA"],
      description: "Un simulatore di vita dove si gestiscono personaggi e le loro relazioni sociali."
    }
  },
  {
    id: 30,
    title: "Metroid Dread",
    category: "Action-Adventure",
    coverImage: "/CoverImage/metroid.jpeg",
    details: {
      platform: ["Switch"],
      releaseYear: 2021,
      rating: 9,
      developer: "Nintendo",
      price: 50,
      players: ["Single-player"],
      ageRating: "PEGI 12",
      regionAvailability: ["NA", "EU", "ASIA"],
      description: "Un gioco action-adventure in 2D con esplorazione e combattimenti contro alieni pericolosi."
    }
  },
  {
    id: 31,
    title: "Cyberpunk 2077",
    category: "RPG",
    coverImage: "https://upload.wikimedia.org/wikipedia/en/9/9f/Cyberpunk_2077_box_art.jpg",
    details: {
      platform: ["PC", "PS4", "PS5", "Xbox One", "Xbox Series"],
      releaseYear: 2020,
      rating: 7,
      developer: "CD Projekt Red",
      price: 50,
      players: ["Single-player"],
      ageRating: "PEGI 18",
      regionAvailability: ["NA", "EU", "ASIA"],
      description: "Un RPG open-world ambientato in una futuristica Night City, piena di azione e scelte morali."
    }
  },
  {
    id: 33,
    title: "Genshin Impact",
    category: "RPG",
    coverImage: "/CoverImage/genshin.jpeg",
    details: {
      platform: ["PC", "PS4", "PS5", "Mobile"],
      releaseYear: 2020,
      rating: 8,
      developer: "miHoYo",
      price: 0,
      players: ["Single-player", "Multiplayer"],
      ageRating: "PEGI 12",
      regionAvailability: ["NA", "EU", "ASIA"],
      description: "Un action RPG open-world con combattimenti elementali e una vasta mappa da esplorare."
    }
  },
  {
    id: 36,
    title: "The Legend of Zelda: Breath of the Wild",
    category: "Action-Adventure",
    coverImage: "/CoverImage/zelda.jpeg",
    details: {
      platform: ["Switch"],
      releaseYear: 2017,
      rating: 10,
      developer: "Nintendo",
      price: 60,
      players: ["Single-player"],
      ageRating: "PEGI 12",
      regionAvailability: ["NA", "EU", "ASIA"],
      description: "Un open world epico con esplorazione libera e puzzle ambientali."
    }
  },
  {
    id: 37,
    title: "Rocket League",
    category: "Sports",
    coverImage: "/CoverImage/rocket.jpeg",
    details: {
      platform: ["PC", "PS4", "PS5", "Xbox One", "Xbox Series", "Switch"],
      releaseYear: 2015,
      rating: 8,
      developer: "Psyonix",
      price: 0,
      players: ["Multiplayer"],
      ageRating: "PEGI 3",
      regionAvailability: ["NA", "EU"],
      description: "Un gioco sportivo dove si guidano auto per giocare a calcio in arene futuristiche."
    }
  },
  {
    id: 39,
    title: "Terraria",
    category: "Sandbox",
    coverImage: "/CoverImage/terraria.jpeg",
    details: {
      platform: ["PC", "PS4", "Xbox One", "Switch", "Mobile"],
      releaseYear: 2011,
      rating: 9,
      developer: "Re-Logic",
      price: 10,
      players: ["Single-player", "Multiplayer"],
      ageRating: "PEGI 12",
      regionAvailability: ["NA", "EU", "ASIA"],
      description: "Un sandbox 2D con costruzioni, esplorazione e combattimenti contro mostri."
    }
  },
  {
    id: 42,
    title: "Final Fantasy VII Remake",
    category: "RPG",
    coverImage: "/CoverImage/ff.jpeg",
    details: {
      platform: ["PS4", "PS5", "PC"],
      releaseYear: 2020,
      rating: 9,
      developer: "Square Enix",
      price: 60,
      players: ["Single-player"],
      ageRating: "PEGI 16",
      regionAvailability: ["NA", "EU", "ASIA"],
      description: "Un remake del celebre JRPG con grafica moderna e sistema di combattimento aggiornato."
    }
  },
  {
    id: 43,
    title: "Death Stranding",
    category: "Action-Adventure",
    coverImage: "/CoverImage/death.jpeg",
    details: {
      platform: ["PC", "PS4", "PS5"],
      releaseYear: 2019,
      rating: 8,
      developer: "Kojima Productions",
      price: 60,
      players: ["Single-player"],
      ageRating: "PEGI 18",
      regionAvailability: ["NA", "EU", "ASIA"],
      description: "Un'avventura unica che combina esplorazione e narrazione in un mondo post-apocalittico."
    }
  },
  {
    id: 44,
    title: "Minecraft Dungeons",
    category: "RPG",
    coverImage: "/CoverImage/md.jpeg",
    details: {
      platform: ["PC", "PS4", "Xbox One", "Switch"],
      releaseYear: 2020,
      rating: 7,
      developer: "Mojang Studios",
      price: 20,
      players: ["Single-player", "Multiplayer"],
      ageRating: "PEGI 7",
      regionAvailability: ["NA", "EU"],
      description: "Un dungeon crawler ambientato nell'universo di Minecraft."
    }
  },
  {
    id: 46,
    title: "Among Trees",
    category: "Survival",
    coverImage: "/CoverImage/Among_Trees.jpeg",
    details: {
      platform: ["PC"],
      releaseYear: 2020,
      rating: 7,
      developer: "FJRD Interactive",
      price: 15,
      players: ["Single-player"],
      ageRating: "PEGI 3",
      regionAvailability: ["NA", "EU"],
      description: "Un gioco di sopravvivenza rilassante in una foresta vibrante e colorata."
    }
  },
  {
    id: 47,
    title: "Celeste",
    category: "Platform",
    coverImage: "/CoverImage/celeste.jpeg",
    details: {
      platform: ["PC", "PS4", "Xbox One", "Switch"],
      releaseYear: 2018,
      rating: 9,
      developer: "Matt Makes Games",
      price: 20,
      players: ["Single-player"],
      ageRating: "PEGI 7",
      regionAvailability: ["NA", "EU"],
      description: "Un platform indie con una storia emozionante e livelli impegnativi."
    }
  },
  {
    id: 49,
    title: "It Takes Two",
    category: "Co-op",
    coverImage: "/CoverImage/it.jpeg",
    details: {
      platform: ["PC", "PS4", "PS5", "Xbox One", "Xbox Series"],
      releaseYear: 2021,
      rating: 9,
      developer: "Hazelight Studios",
      price: 40,
      players: ["Co-op"],
      ageRating: "PEGI 12",
      regionAvailability: ["NA", "EU"],
      description: "Un gioco cooperativo con puzzle e avventure basato sulla collaborazione."
    }
  },
  {
    id: 50,
    title: "Subnautica",
    category: "Survival",
    coverImage: "/CoverImage/sub.jpeg",
    details: {
      platform: ["PC", "PS4", "PS5", "Xbox One", "Xbox Series"],
      releaseYear: 2018,
      rating: 9,
      developer: "Unknown Worlds Entertainment",
      price: 30,
      players: ["Single-player"],
      ageRating: "PEGI 12",
      regionAvailability: ["NA", "EU", "ASIA"],
      description: "Un gioco di sopravvivenza sottomarina con esplorazione e costruzioni."
    }
  }
];