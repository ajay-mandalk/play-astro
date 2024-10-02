import { defineConfig } from 'astro/config';
import tailwind from "@astrojs/tailwind";
import compress from "astro-compress";
import vercel from '@astrojs/vercel/serverless';
import clerk from "@clerk/astro";

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind(), compress(), clerk(),],
  output: 'server',
  adapter: vercel(),
});