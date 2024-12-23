import { defineConfig } from "sanity";
import { deskTool } from "sanity/desk";


const config = defineConfig({
  projectId: "j7ywzfp6",
  dataset: "production",
  title: "niche dz",
  apiVersion: "2022-03-04",
  basePath: "/admin",
  plugins: [deskTool()],
})

export default config;