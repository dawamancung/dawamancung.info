import type { Site, SocialObjects } from "./types";

export const SITE: Site = {
  website: "https://dawamancung.info/",
  author: "Fakih Fahmi 10",
  desc: "Info Dayeuh, Wanareja, Majenang, Cimanggu, Karang Pucung",
  title: "INFO SEPUTAR DAWAMANCUNG",
  ogImage: "astropaper-og.jpg",
  lightAndDarkMode: true,
  postPerPage: 25,
  scheduledPostMargin: 15 * 60 * 1000, // 15 minutes
};

export const LOCALE = {
  lang: "id", // html lang code. Set this empty and default will be "en"
  langTag: ["id-ID"], // BCP 47 Language Tags. Set this empty [] to use the environment default
} as const;

export const LOGO_IMAGE = {
  enable: false,
  svg: true,
  width: 216,
  height: 46,
};

export const SOCIALS: SocialObjects = [
  // {
  //   name: "Github",
  //   href: "https://github.com/satnaing/astro-paper",
  //   linkTitle: ` ${SITE.title} on Github`,
  //   active: true,
  // },
  {
    name: "Facebook",
    href: "https://www.facebook.com/profile.php?id=61550503618923",
    linkTitle: `${SITE.title} on Facebook`,
    active: true,
  },
  {
    name: "Instagram",
    href: "https://www.instagram.com/fakih_fahmi_mubarok/",
    linkTitle: `${SITE.title} on Instagram`,
    active: true,
  },
  {
    name: "LinkedIn",
    href: "https://www.linkedin.com/in/fakih-fahmi-mubarok-1a69653a/",
    linkTitle: `${SITE.title} on LinkedIn`,
    active: true,
  },
  {
    name: "Mail",
    href: "mailto:fakihfahmi@gmail.com",
    linkTitle: `Send an email to ${SITE.title}`,
    active: false,
  },
  // {
  //   name: "Twitter",
  //   href: "https://github.com/satnaing/astro-paper",
  //   linkTitle: `${SITE.title} on Twitter`,
  //   active: false,
  // },
  // {
  //   name: "Twitch",
  //   href: "https://github.com/satnaing/astro-paper",
  //   linkTitle: `${SITE.title} on Twitch`,
  //   active: false,
  // },
  {
    name: "YouTube",
    href: "https://www.youtube.com/@fakihfahmi5363",
    linkTitle: `${SITE.title} on YouTube`,
    active: true,
  },
  // {
  //   name: "WhatsApp",
  //   href: "https://github.com/satnaing/astro-paper",
  //   linkTitle: `${SITE.title} on WhatsApp`,
  //   active: false,
  // },
  // {
  //   name: "Snapchat",
  //   href: "https://github.com/satnaing/astro-paper",
  //   linkTitle: `${SITE.title} on Snapchat`,
  //   active: false,
  // },
  // {
  //   name: "Pinterest",
  //   href: "https://github.com/satnaing/astro-paper",
  //   linkTitle: `${SITE.title} on Pinterest`,
  //   active: false,
  // },
  {
    name: "TikTok",
    href: "https://www.tiktok.com/@fakih_fahmi",
    linkTitle: `${SITE.title} on TikTok`,
    active: true,
  },
  // {
  //   name: "CodePen",
  //   href: "https://github.com/satnaing/astro-paper",
  //   linkTitle: `${SITE.title} on CodePen`,
  //   active: false,
  // },
  // {
  //   name: "Discord",
  //   href: "https://github.com/satnaing/astro-paper",
  //   linkTitle: `${SITE.title} on Discord`,
  //   active: false,
  // },
  // {
  //   name: "GitLab",
  //   href: "https://github.com/satnaing/astro-paper",
  //   linkTitle: `${SITE.title} on GitLab`,
  //   active: false,
  // },
  // {
  //   name: "Reddit",
  //   href: "https://github.com/satnaing/astro-paper",
  //   linkTitle: `${SITE.title} on Reddit`,
  //   active: false,
  // },
  // {
  //   name: "Skype",
  //   href: "https://github.com/satnaing/astro-paper",
  //   linkTitle: `${SITE.title} on Skype`,
  //   active: false,
  // },
  // {
  //   name: "Steam",
  //   href: "https://github.com/satnaing/astro-paper",
  //   linkTitle: `${SITE.title} on Steam`,
  //   active: false,
  // },
  // {
  //   name: "Telegram",
  //   href: "https://github.com/satnaing/astro-paper",
  //   linkTitle: `${SITE.title} on Telegram`,
  //   active: false,
  // },
  // {
  //   name: "Mastodon",
  //   href: "https://github.com/satnaing/astro-paper",
  //   linkTitle: `${SITE.title} on Mastodon`,
  //   active: false,
  // },
];
