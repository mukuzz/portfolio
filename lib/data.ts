import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import thoughtboardImg from "@/public/thoughtboard.jpeg";
import collegeNoticeBotImg from "@/public/college_notice_bot.jpg";
import uazoImg from "@/public/uazo.png";
import carShowcaseImg from "@/public/car_showcase.jpg";

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const projectsData = [

  {
    title: "Factory Floor QA Application",
    description:
      "A full stack solution to track quality of manufactured products in a textile factory. Developed dashboard, app, and backend API.",
    tags: ["React", "Django", "Flutter"],
    links: [
      {
        name: "Demo",
        url: "https://uazo.mukulsingh.in",
      },
      {
        name: "Source Code",
        url: "https://github.com/mukuzz/uazo_dashboard",
      }
    ],
    imageUrl: uazoImg,
  },
  {
    title: "Car Showcase",
    description:
      "A Demo Website built with Next.js. The website allows for quick searching of cars based on their make and model and provides the user with the details of the car.",
    tags: ["React", "Next.js", "Tailwind"],
    links: [
      {
        name: "Demo",
        url: "https://cars.mukulsingh.in/",
      },
      {
        name: "Source Code",
        url: "https://github.com/mukuzz/car_showcase",
      }
    ],
    imageUrl: carShowcaseImg,
  },
  {
    title: "College Notice Bot",
    description:
      "A Django Bot for telegram which scraps the college website every 10 mins and sends any new notices to a telegram channel.",
    tags: ["Django", "Telegram"],
    links: [
      {
        name: "Source Code",
        url: "https://github.com/mukuzz/dsc_notice_bot",
      },
      {
        name: "Telegram Channel",
        url: "https://t.me/dyalsinghcollege",
      },
    ],
    imageUrl: collegeNoticeBotImg,
  },
  {
    title: "Thought Board DUCS",
    description:
      "Open Chat Flutter Application for intradepartmental communications for Department of Computer Science, University of Delhi.",
    tags: ["Flutter", "Firebase"],
    links: [
      {
        name: "Source Code",
        url: "https://github.com/mukuzz/ThoughtBoard-DUCS",
      }
    ],
    imageUrl: thoughtboardImg,
  },
] as const;

export const skillsData = [
  "React",
  "Next.js",
  "Springboot",
  "Git",
  "Tailwind",
  "SQL",
  "Flutter",
  "Python",
  "Django",
  "TypeScript",
  "HTML",
  "CSS"
] as const;