import type { Config } from "tailwindcss";
import { fontFamily } from "tailwindcss/defaultTheme";

const config: Config = {
   content: [
      "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
      "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
      "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
   ],
   theme: {
      extend: {
         colors: {
            gray: {
               700: "#373A40",
            },
            primary: {
               700: "#A40DEE",
            },
         },
      },
      fontFamily: {
         lexend: ["var(--font-lexend)", ...fontFamily.sans],
         "lexend-exa": ["var(--font-lexend-exa)", ...fontFamily.sans],
         "mochiy-pop-one": ["var(--font-roboto-slab)", ...fontFamily.sans],
      },
      container: {
         center: true,
      },
   },
   plugins: [],
};
export default config;
