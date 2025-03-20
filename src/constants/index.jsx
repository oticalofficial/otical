import { BotMessageSquare } from "lucide-react";
import { BatteryCharging } from "lucide-react";
import { Fingerprint } from "lucide-react";
import { ShieldHalf } from "lucide-react";
import { PlugZap } from "lucide-react";
import { GlobeLock } from "lucide-react";

//imported user images for testimonials
import user1 from "../assets/profile-pictures/user1.jpg";
import user2 from "../assets/profile-pictures/user2.jpg";
import user3 from "../assets/profile-pictures/user3.jpg";
import user4 from "../assets/profile-pictures/user4.jpg";
import user5 from "../assets/profile-pictures/user5.jpg";
import user6 from "../assets/profile-pictures/user6.jpg";

// client logos for project page
import BlackBirdLogo from "../assets/clientLogo/BlackBird.png";
import DekhoToLogo from "../assets/clientLogo/DekhoTo.png";
import ErDRLogo from "../assets/clientLogo/ErDR.png";
import ErweiternLogo from "../assets/clientLogo/Erweitern.png";
import EuNextLogo from "../assets/clientLogo/EuNext.png";
import GangwarErDrLogo from "../assets/clientLogo/GangwarErDr.png";
import GrowthFreakLogo from "../assets/clientLogo/GrowthFreak.png";
import GuruphoriaLogo from "../assets/clientLogo/Guruphoria.png";
import InventenoLogo from "../assets/clientLogo/Inventeno.png";
import KasayaSpicesLogo from "../assets/clientLogo/KasayaSpices.png";
import MindPickLogo from "../assets/clientLogo/MindPick.png";
import MMPLogo from "../assets/clientLogo/MMP.png";
import MohakLogo from "../assets/clientLogo/Mohak.png";
import PetCrossLogo from "../assets/clientLogo/PetCross.png";
import PSPowerLogo from "../assets/clientLogo/PSPower.png";
import RanakEnergyLogo from "../assets/clientLogo/RanakEnergy.png";
import RenereLogo from "../assets/clientLogo/Renere.png";
import SahajSahyogLogo from "../assets/clientLogo/SahajSahyogLogo.png";
import SiddharthaEarthMoversLogo from "../assets/clientLogo/SiddharthaEarthMovers.png";
import UdaratvaLogoLogo from "../assets/clientLogo/UdaratvaLogo.png";
import VertexLogo from "../assets/clientLogo/Vertex.png";
import VraggerLogo from "../assets/clientLogo/Vragger.png";
import BookDesignerLogo from '../assets/clientLogo/BookDesigner.png'
import RecClothLogo from '../assets/clientLogo/RecCloth.png'

//here imported website screenshots
import sahajSahyog from "../assets/portfolio-pictures/sahajsahyog.jpeg";
import erweitern from "../assets/portfolio-pictures/erweitern.jpeg";
import QuestionCommunity from "../assets/portfolio-pictures/QuestionCommunity.jpeg";
import udaratva from "../assets/portfolio-pictures/udaratva.png";

export const navItems = [
  { label: "Home", href: "" },
  { label: "About", href: "about" },
  { label: "Projects", href: "projects" },
  { label: "Services", href: "services" },
  { label: "Contact", href: "contact" },
];

export const testimonials = [
  {
    user: "Pankaj Sharma",
    company: "Udartva Technologies",
    image: user1,
    text: "I am extremely satisfied with the services provided. The team was responsive, professional, and delivered results beyond my expectations.",
  },
  {
    user: "Riya Shukla",
    company: "Blue Horizon Technologies",
    image: user2,
    text: "I couldn't be happier with the outcome of our project. The team's creativity and problem-solving skills were instrumental in bringing our vision to life.",
  },
  {
    user: "Pranjal Singh",
    company: "Quantum Innovations",
    image: user3,
    text: "Working with this company was a pleasure. Their attention to detail and commitment to excellence are commendable.",
  },
  {
    user: "Rohit Kumar",
    company: "Fusion Dynamics",
    image: user4,
    text: "Working with the team at XYZ Company was a game-changer for our project. Their attention to detail and innovative solutions helped us achieve our goals faster than we thought possible.",
  },
  {
    user: "Rakesh Chauhan",
    company: "Visionary Creations",
    image: user5,
    text: "I am amazed by the level of professionalism and dedication shown by the team. They were able to exceed our expectations and deliver outstanding results.",
  },
  {
    user: "Sushila Mishra",
    company: "Ranak Energy",
    image: user6,
    text: "The team went above and beyond to ensure our project was a success. Their expertise and dedication are unmatched. I look forward to working with them again in the future.",
  },
];

export const features = [
  {
    icon: <BotMessageSquare />,
    text: "Web Development",
    description:
      "Easily design and arrange your VR environments with a user-friendly drag-and-drop interface.",
  },
  {
    icon: <Fingerprint />,
    text: "Multi-Platform Compatibility",
    description:
      "Build VR applications that run seamlessly across multiple platforms, including mobile, desktop, and VR headsets.",
  },
  {
    icon: <ShieldHalf />,
    text: "Built-in Templates",
    description:
      "Jumpstart your VR projects with a variety of built-in templates for different types of applications and environments.",
  },
  {
    icon: <BatteryCharging />,
    text: "Real-Time Preview",
    description:
      "Preview your VR application in real-time as you make changes, allowing for quick iterations and adjustments.",
  },
  {
    icon: <PlugZap />,
    text: "Collaboration Tools",
    description:
      "Work together with your team in real-time on VR projects, enabling seamless collaboration and idea sharing.",
  },
  {
    icon: <GlobeLock />,
    text: "Analytics Dashboard",
    description:
      "Gain valuable insights into user interactions and behavior within your VR applications with an integrated analytics dashboard.",
  },
];

export const checklistItems = [
  {
    title: "Code merge made easy",
    description:
      "Track the performance of your VR apps and gain insights into user behavior.",
  },
  {
    title: "Review code without worry",
    description:
      "Track the performance of your VR apps and gain insights into user behavior.",
  },
  {
    title: "AI Assistance to reduce time",
    description:
      "Track the performance of your VR apps and gain insights into user behavior.",
  },
  {
    title: "Share work in minutes",
    description:
      "Track the performance of your VR apps and gain insights into user behavior.",
  },
];

export const pricingOptions = [
  {
    title: "Free",
    price: "$0",
    features: [
      "Private board sharing",
      "5 Gb Storage",
      "Web Analytics",
      "Private Mode",
    ],
  },
  {
    title: "Pro",
    price: "$10",
    features: [
      "Private board sharing",
      "10 Gb Storage",
      "Web Analytics (Advance)",
      "Private Mode",
    ],
  },
  {
    title: "Enterprise",
    price: "$200",
    features: [
      "Private board sharing",
      "Unlimited Storage",
      "High Performance Network",
      "Private Mode",
    ],
  },
];

export const resourcesLinks = [
  { href: "#", text: "Getting Started" },
  { href: "#", text: "Documentation" },
  { href: "#", text: "Tutorials" },
  { href: "#", text: "API Reference" },
  { href: "#", text: "Community Forums" },
];

export const platformLinks = [
  { href: "#", text: "Features" },
  { href: "#", text: "Supported Devices" },
  { href: "#", text: "System Requirements" },
  { href: "#", text: "Downloads" },
  { href: "#", text: "Release Notes" },
];

export const communityLinks = [
  { href: "#", text: "Events" },
  { href: "#", text: "Meetups" },
  { href: "#", text: "Conferences" },
  { href: "#", text: "Hackathons" },
  { href: "#", text: "Jobs" },
];

export const services = [
  {
    icon: <BotMessageSquare />,
    text: "Web Development",
    description:
      "Easily design and arrange your VR environments with a user-friendly drag-and-drop interface.",
  },
  {
    icon: <Fingerprint />,
    text: "AR VR Applications",
    description:
      "Build VR applications that run seamlessly across multiple platforms, including mobile, desktop, and VR headsets.",
  },
  {
    icon: <ShieldHalf />,
    text: "Security System",
    description:
      "Jumpstart your VR projects with a variety of built-in templates for different types of applications and environments.",
  },
  {
    icon: <BatteryCharging />,
    text: "AI/ML Real-Time Preview",
    description:
      "Preview your VR application in real-time as you make changes, allowing for quick iterations and adjustments.",
  },
  {
    icon: <PlugZap />,
    text: "UI UX Designing",
    description:
      "Work together with your team in real-time on VR projects, enabling seamless collaboration and idea sharing.",
  },
  {
    icon: <GlobeLock />,
    text: "Analytics Dashboard",
    description:
      "Gain valuable insights into user interactions and behavior within your VR applications with an integrated analytics dashboard.",
  },
];

export const contactListItems = [
  {
    title: "Call for help",
    description: "Phone : +91 8545083648",
  },
  {
    title: "Office address",
    description: "Lucknow, Uttar Pradesh, India",
  },
  {
    title: "Email",
    description: "OticalMail@gmail.com",
  },
  {
    title: "Social Media",
    description: "@OticalOfficial",
  },
  {
    title: "Website",
    description: "otical.in",
  },
  {
    title: "YouTube",
    description: "@OticalOfficial",
  },
];

export const recentProjects = [
  {
    image: udaratva,
    title: "Udaratva",
    category: "Energy Solutions",
    features: [
      "Private board sharing",
      "5 Gb Storage",
      "Web Analytics",
      "Private Mode",
    ],
  },
  {
    image: sahajSahyog,
    title: "Ranak Energy",
    category: "Solar Power Company",
    features: [
      "Private board sharing",
      "10 Gb Storage",
      "Web Analytics (Advance)",
      "Private Mode",
    ],
  },
  {
    image: sahajSahyog,
    title: "Sahaj Sahyog",
    category: "Mining Consultants",
    features: [
      "Private board sharing",
      "Unlimited Storage",
      "High Performance Network",
      "Private Mode",
    ],
  },
  {
    image: user4,
    title: "Kasaya Spices",
    category: "Spice Company",
    features: [
      "Private board sharing",
      "Unlimited Storage",
      "High Performance Network",
      "Private Mode",
    ],
  },
  {
    image: erweitern,
    title: "Erweitern",
    category: "Tech Company",
    features: [
      "Private board sharing",
      "Unlimited Storage",
      "High Performance Network",
      "Private Mode",
    ],
  },
  {
    image: QuestionCommunity,
    title: "QuestionCommunity",
    category: "Social Forum",
    features: [
      "Private board sharing",
      "Unlimited Storage",
      "High Performance Network",
      "Private Mode",
    ],
  },
];

export const ourClients = [
  {
    logo: UdaratvaLogoLogo,
    title: "Udaratva",
    category: "Energy Solutions",
  },
  {
    logo: DekhoToLogo,
    title: "DekhoTo",
    category: "News Agency",
  },
  {
    logo: ErDRLogo,
    title: "ErDr Institute",
    category: "Educational Institute",
  },
  {
    logo: ErweiternLogo,
    title: "Erweitern Technologies",
    category: "AR VR IT Company",
  },
  {
    logo: EuNextLogo,
    title: "EuNext",
    category: "Publication House",
  },
  {
    logo: GrowthFreakLogo,
    title: "GrowthFreak",
    category: "Graphic Designing",
  },
  {
    logo: GuruphoriaLogo,
    title: "Guruphoria",
    category: "Coaching Institute",
  },
  {
    logo: InventenoLogo,
    title: "Inventeno",
    category: "Consultation Agency",
  },
  {
    logo: KasayaSpicesLogo,
    title: "KasayaSpices",
    category: "Spices Industry",
  },
  {
    logo: MindPickLogo,
    title: "MindPick Publishers",
    category: "Publication House",
  },
  {
    logo: MMPLogo,
    title: "MMP Web & App",
    category: "Education Forum",
  },
  {
    logo: MohakLogo,
    title: "Mohak - The Vive",
    category: "Jwellery Store",
  },
  {
    logo: GangwarErDrLogo,
    title: "Gangwar ErDr",
    category: "NEET JEE Coaching",
  },
  {
    logo: PetCrossLogo,
    title: "PetCross",
    category: "Animal Welfare",
  },
  {
    logo: PSPowerLogo,
    title: "PS Power",
    category: "Solar Power Company",
  },
  {
    logo: BlackBirdLogo,
    title: "BlackBird",
    category: "Drycleaning Services",
  },
  {
    logo: RanakEnergyLogo,
    title: "RanakEnergy",
    category: "Solar Panel Manufacturer",
  },
  {
    logo: RenereLogo,
    title: "Renere",
    category: "Renewable Energy",
  },
  {
    logo: SahajSahyogLogo,
    title: "SahajSahyog",
    category: "Mining Consultants",
  },
  {
    logo: SiddharthaEarthMoversLogo,
    title: "Siddhartha EarthMovers",
    category: "Construction Consultants",
  },
  {
    logo: VertexLogo,
    title: "Vertex",
    category: "Educational Institute",
  },
  {
    logo: VraggerLogo,
    title: "Vragger",
    category: "Tech Company",
  },
  {
    logo: BookDesignerLogo,
    title: "BookDesigner",
    category: "Design & Publication House",
  },
  {
    logo: RecClothLogo,
    title: "RecCloth",
    category: "Clothing Brand",
  },

];

