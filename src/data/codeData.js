import AutseraImg from "../assets/img/portfolio/Code/Autsera.png";
import FYFImg from "../assets/img/portfolio/Code/FleeYourFollowers.png";
import SaVaGeImg from "../assets/img/portfolio/Code/Savage.png";
import MeetMeImg from "../assets/img/portfolio/Code/MeetMe.png";
import CalculatorImg from "../assets/img/portfolio/Code/Calculator.png";
import PearlsImg from "../assets/img/portfolio/Code/PearlsOfWisdom.png";
import NewsImg from "../assets/img/portfolio/Code/WorldNews.png";
import FACImg from "../assets/img/portfolio/Code/FACsite.png";

const codeData = [
  {
    name: "Autsera",
    description: "Progressive Web App",
    category: "team",
    tech: ["./assets/React.svg"],
    link: "https://github.com/LaLeonie/Autsera",
    alt: "Image of Autsera App",
    image: AutseraImg
  },
  {
    name: "Flee Your Followers",
    description: "React Game",
    category: "team",
    tech: ["./assets/React.svg"],
    link: "https://github.com/LaLeonie/leonie-jan-app",
    alt: "Image of Flee Your Followers App",
    image: FYFImg
  },
  {
    name: "SaVaGe Artwork Creator",
    description: "App to create SVGs",
    category: "team",
    tech: ["./assets/PostgreSQL.svg", "./assets/Node.svg"],
    link: "https://github.com/LaLeonie/SaVaGe-Artwork-Creator",
    alt: "Image of SaVaGe Artwork Creator",
    image: SaVaGeImg
  },
  {
    name: "Meet Me In The Middle",
    description: "Mobile app to find meeting spots",
    category: "team",
    tech: [
      "./assets/Handlebars.svg",
      "./assets/PostgreSQL.svg",
      "./assets/express.svg"
    ],
    link: "https://github.com/LaLeonie/Meet-Me-In-the-Middle",
    alt: "Screenshot of app",
    image: MeetMeImg
  },
  {
    name: "JS Calculator",
    description: "Vanilla JS calculator",
    category: "solo",
    tech: ["./assets/Javascript.svg"],
    link: "https://laleonie.github.io/Calculator/",
    alt: "Image of Vanilla JS Calculator",
    image: CalculatorImg
  },
  {
    name: "Pearls of Wisdom",
    description: "Quote Collection App",
    category: "team",
    tech: [
      "./assets/Handlebars.svg",
      "./assets/express.svg",
      "./assets/PostgreSQL.svg"
    ],
    link: "https://github.com/LaLeonie/Pearls-Of-Wisdom",
    alt: "Screenshot of app",
    image: PearlsImg
  },
  {
    name: "News Around The World",
    description: "International News App",
    category: "team",
    tech: ["./assets/Node.svg", "./assets/PostgreSQL.svg"],
    link: "https://github.com/LaLeonie/World-News-App",
    alt: "Image of App Logo",
    image: NewsImg
  },
  {
    name: "FAC Application Website",
    description: "Website for my FAC application",
    link: "https://laleonie.github.io/My-FAC-website/",
    category: "solo",
    tech: ["./assets/Javascript.svg"],
    alt: "Screenshot of ikigai",
    image: FACImg
  }
];

export default codeData;
