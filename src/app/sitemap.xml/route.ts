import { MetadataRoute } from "next";
import { images } from "@/config/images";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://atlascreativestudio.com";
  
  const routes = [
    "",
    "/work",
    "/services",
    "/about",
    "/process",
    "/contact",
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: route === "" ? 1 : 0.8,
  }));

  return routes;
}