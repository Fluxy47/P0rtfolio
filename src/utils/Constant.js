export const ProjectArr = [
  {
    Title: "SenCity",
    img: "https://ik.imagekit.io/fluxy/Asad%20Folder/Images/2.png?tr=w-800",
    Description:
      "In Sen City, a battle rages between cops and mafia. Players choose sides, navigating moral dilemmas. The Chief leads cops to eradicate the mafia, while the Kingpin seeks control. The city's fate hangs in the balance.",
  },
  {
    Title: "Scary Teacher Stone Age",
    img: "https://ik.imagekit.io/fluxy/Asad%20Folder/Images/image_2022_04_18T10_54_30_850Z.png?tr=w-800",
    Description:
      "As lead designer and developer, I created Scary Teacher StoneAge, the sequel to Scary Teacher 3D. I oversaw every aspect of the game, from design to sound. With enhanced graphics and new content, the game achieved 5 million downloads. This success solidified my reputation in game development.",
  },

  {
    Title: "Jam Master",
    img: "https://ik.imagekit.io/fluxy/Asad%20Folder/Images/Dino%20Rescue%20(2).png?tr=w-800",
    Description:
      "Jam Master is a game about farming fruits and making jam. Players plant, harvest, and sell jam to build a thriving empire. I designed the mechanics and levels to keep players engaged and strategic.",
  },

  {
    Title: "Dino Rescue",
    img: "https://ik.imagekit.io/fluxy/Asad%20Folder/Images/3d.png?tr=w-800",
    Description:
      "In this project, Players drive a truck to capture dinosaurs and earn money to upgrade their equipment. I helped design levels that balanced excitement and strategy, contributing to the game's success.",
  },

  {
    Title: "Scary Teacher 3D",
    img: "https://ik.imagekit.io/fluxy/Asad%20Folder/Images/sen%20city.jpg?tr=w-800",
    Description:
      "My first professional game was Scary Teacher 3D. I contributed new levels and mechanics to the game. The game reached 100 million downloads, solidifying my passion for game design",
  },
];

export const container2 = {
  initial: {},
  animate: {
    transition: {
      staggerChildren: 0.1, // Stagger delay between children
    },
  },
  exit: {},
};

export const navAnimation = {
  initial: {
    opacity: 0,
    y: 10,
  },
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      delay: 1.2,
    },
  },
  exit: {
    opacity: 0,
    y: 10,
  },
};
