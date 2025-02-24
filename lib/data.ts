import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import thoughtboardImg from "@/public/thoughtboard.jpeg";
import taxVisualisedImg from "@/public/tax-visualised.png";
import uazoImg from "@/public/uazo.png";

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
] as const;

export const projectsData = [

  {
    title: "Income Tax Visualised",
    description:
      "Simple web app to visualise actual icnome tax percentage at various income levels in india.",
    tags: ["Html", "js"],
    links: [
      {
        name: "Demo",
        url: "https://mukuzz.github.io/tax-visualised/",
      }
    ],
    imageUrl: taxVisualisedImg,
  },
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
  }
] as const;

export const experienceData = [
  {
    title: "Software Engineer Intern",
    company: "Infoedge",
    date: 2023,
    description: "Implemented the Service Aggregator design pattern in a micro-services architecture. Optimized parallel execution of multiple interdependent services, including exception handling and alerting for errors from various external services.",
    icon: React.createElement(CgWorkAlt)
  },
  {
    title: "Software Engineer Intern",
    company: "Ekaisoft",
    date: 2021,
    description: "Contributed in building an api server in Golang using Gin framework. Implemented OTP delivery system for the login api endpoint and a JWT based authentication system.",
    icon: React.createElement(CgWorkAlt)
  }
]