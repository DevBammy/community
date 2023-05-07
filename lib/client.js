import { createClient } from "@sanity/client";
import imageUrlBuilder from "@sanity/image-url";

export const client = createClient({
  projectId: "6xse66hl",
  dataset: "production",
  useCdn: true,
  apiVersion: "2023-04-29",
  token:
    "skEwN7DhR8raR2ypOx4KqvEAUF3LlKeu7teNZLlJVOYXWrmNetGb3xwytsX09yxuFKInHhWhOthA9gHUu3uLUi6JIPP35odIc3T13XpwPwL3jN4izgEVK52VmEiXRCwQ4HfvBnsxwJOdZaWG8pGhz7lfQD0gtnn5odh6vaZaUzrjJBXdkElF",
});

const builder = imageUrlBuilder(client);

export const urlFor = (source) => builder.image(source);
