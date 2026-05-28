import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Focus Grid",
    short_name: "Focus Grid",
    description:
      "A cyberpunk productivity app: Eisenhower Matrix + RPG gamification + Deep Work timer.",
    start_url: "/",
    display: "standalone",
    background_color: "#0a0926",
    theme_color: "#0a0926",
    icons: [
      {
        src: "/favicon.ico",
        sizes: "any",
        type: "image/x-icon",
      },
    ],
  };
}

