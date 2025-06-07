import { Icons } from "@/components/icons";
import { HomeIcon, NotebookIcon } from "lucide-react";

export const DATA = {
  name: "Bolaxious",
  initials: "DV",
  url: "https://github.io/BemoDB/",
  location: "Wuhan, China",
  locationLink: "https://map.baidu.com/@12739404,3548740,17z",
  description:
    "A sophomore studying software engineering at HUST, who loves front-end technology and art design, this is my personal landing page.",
  summary:
    "A sophomore student in the School of Software of HUST, participated in the on-campus technical club - [Bingyan Studio](https://www.bingyan.net/), and participated in the development and maintenance of campus products as a member of the front-end group. Now that I'm learning and devoting myself to front-end technology, and are interested in UI design, Welcome to visit : [BemoDB](https://mengbooo.github.io/BemoDB/).",
  avatarUrl: "/me.jpg",
  skills: [
    "React",
    "Vue",
    "Typescript",
    "Javascript",
    "Node.js",
    "Python",
    "Java",
    "git",
    "Markdown",
  ],
  navbar: [
    { href: "/", icon: HomeIcon, label: "Home" },
  ],
  contact: {
    email: "bolaxious@163.com",
    tel: "XXX",
    social: {
      GitHub: {
        name: "GitHub",
        url: "https://github.com/Mengbooo",
        icon: Icons.github,

        navbar: true,
      },
      email: {
        name: "Send Email",
        url: "mailto:bolaxious@163.com",
        icon: Icons.email,
        navbar: true,
      },
      // zhihu: {
      //   name: "zhihu",
      //   url: "https://www.zhihu.com/people/bolaxious",
      //   icon: Icons.zhihu,
      //   navbar: true,
      // },
    },
  },

  work: [
    {
      company: "Bingyan Studio",
      href: "https://www.bingyan.net",
      badges: [],
      location: "HUST",
      title: "member of the front-end group",
      logoUrl: "/bingyan.png",
      start: "Sep 2023",
      end: "now",
      description:
        "As a member of the front-end team, responsible for developing and maintaining campus product projects, and also participates in product design, UI design, product operation, etc., the main technology stack is React, Typescript, and the development of web pages, H5, and small programs",
    },
  ],
  education: [
    {
      school: "Huazhong University of Science and Technology",
      href: "https://www.hust.edu.cn/",
      degree: "Software Engineering Undergraduate",
      logoUrl: "/HUST.png",
      start: "2023",
      end: "2027",
    },
  ],
  projects: [
    {
      title: "TransBemo",
      href: "https://github.com/Mengbooo/TransBemo",
      dates: "2025.5 - 2025.6",
      active: true,
      description:
        "A user-friendly, multi-functional Android translation app with a minimalist page, developed based on Expo",
      technologies: [
        "Expo",
        "Typescript",
        "MongoDB",
        "Expo Router",
        "React Native",
        "Zustand",
      ],
      links: [
        {
          type: "Source",
          href: "https://github.com/Mengbooo/TransBemo",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/TransBemo.png",
      video:
        "",
    },
    {
      title: "BemoDB",
      href: "https://mengbooo.github.io/BemoDB/",
      dates: "2024.12 - present",
      active: true,
      description:
        "A personal blog built with VitePress, designed to showcase my projects and share my learning journey.",
      technologies: [
        "VitePress",
        "Typescript",
        "JavaScript",
        "Vue",
      ],
      links: [
        {
          type: "Website",
          href: "https://mengbooo.github.io/BemoDB/",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/Mengbooo/BemoDB",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/logo.png",
      video: "",
    },
  ],
  // hackathons: [
  //   {
  //     title: "Hack Western 5",
  //     dates: "November 23rd - 25th, 2018",
  //     location: "London, Ontario",
  //     description:
  //       "Developed a mobile application which delivered bedtime stories to children using augmented reality.",
  //     image:
  //       "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/hack-western.png",
  //     mlh: "https://s3.amazonaws.com/logged-assets/trust-badge/2019/mlh-trust-badge-2019-white.svg",
  //     links: [],
  //   },
  // ],
} as const;
