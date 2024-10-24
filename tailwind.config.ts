import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      screens: {

      
          sxm:"320px",
          sxm2:'370px',
        ssm:"400px",
        ssm2:"428px",
 
        mdl:"820px",
        lg: '1024px',
        xl: '1280px',
        '2xl': '1536px',
        'xll':"1600px"
      },
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
export default config;
