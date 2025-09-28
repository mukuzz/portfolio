import taxVisualisedImg from "@/public/tax-visualised.png";
import uazoImg1 from "@/public/uazo1.png";
import uazoImg2 from "@/public/uazo2.png";
import uazoImg3 from "@/public/uazo3.png";

export const projectsData = [

  {
    title: "AI Expense Tracker",
    description:
      "An AI agent that processes emails containing bank transactions, credit card transactions, and statements to keep track of your expenses.",
    tags: ["Spring Boot", "React.js", "Prompt Engineering", "MCP"],
    links: [
      {
        name: "Source Code",
        url: "https://github.com/mukuzz/myfi",
      }
    ],
    images: [],
  },
  {
    title: "Income Tax Visualised",
    description:
      "Simple web app to visualise actual icnome tax percentage at various income levels in india.",
    tags: ["HTML", "JavaScript"],
    links: [
      {
        name: "Demo",
        url: "https://mukuzz.github.io/tax-visualised/",
      }
    ],
    images: [taxVisualisedImg],
  },
  {
    title: "Factory Floor QA Application",
    description:
      "A full stack solution to track quality of manufactured products in a textile factory. Developed dashboard, app, and backend API.",
    tags: ["React.js", "Django", "Flutter"],
    links: [
      {
        name: "Source Code - Dashboard",
        url: "https://github.com/mukuzz/uazo_dashboard",
      },
      {
        name: "Source Code - Backend",
        url: "https://github.com/mukuzz/uazo_backend",
      }
    ],
    images: [uazoImg1, uazoImg2 , uazoImg3],
  }
] as const;

export const experienceData = []

export type Project = typeof projectsData[number]