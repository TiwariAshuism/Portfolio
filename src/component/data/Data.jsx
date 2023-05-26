// This file contains the data for the projects and navbarbar items.

import calculator from "../assets/calculator.png";
import Expense from "../assets/Snake1.png";
import Retro from "../assets/Draw.png";
import Stranger from "../assets/Strange.png";
import AI from "../assets/tiwari.png"

export const data= [
  {
    id: 1,
    title: "tiwari foundation",
    img_url: `${AI}`,
    link: "https://tiwari-foundation.vercel.app/",
    gitHub: "https://github.com/TiwariAshuism/tiwari-Foundation ",
  },
  {
    id: 2,
    title: "Dhirema School",
    img_url: `${calculator}`,
    link: "https://dhiremaschool.com/",
    gitHub: "https://github.com/TiwariAshuism/Dhirema-School",
  },
  {
    id: 3,
    title: "Expense Tracker",
    img_url: `${Expense}`,
    link: "https://expense-tracker-kappa-puce.vercel.app/",
    gitHub: "https://github.com/TiwariAshuism/expense-tracker",
  },
  {
    id: 4,
    title: "EZYWAYTAX",
    img_url: `${Retro}`,
    link: "https://ezywaytax.com/",
    gitHub: "https://ezywaytax.com/",
  },
  {
    id: 5,
    title: "E-Safar",
    img_url: `${Stranger}`,
    link: "https://github.com/TiwariAshuism/hackthon",
    gitHub: "https://github.com/TiwariAshuism/hackthon",
  },
];

export const listNavBar = [
  {
    id: 1,
    item: "Home",
    icon: "uil uil-home",
    href: "home",
  },
  {
    id: 2,
    item: "About",
    icon: "uil uil-user",
    href: "about",
  },
  {
    id: 3,
    item: "Skills",
    icon: "uil uil-file-alt",
    href: "skills",
  },
  {
    id: 4,
    item: "Qualifications",
    icon: "uil uil-graduation-cap",
    href: "qualification",
  },
  {
    id: 5,
    item: "Projects",
    icon: "uil uil-briefcase-alt",
    href: "projects",
  },
  {
    id: 6,
    item: "Contact",
    icon: "uil uil-envelope",
    href: "contact",
  },
];