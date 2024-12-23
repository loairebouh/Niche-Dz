import { createClient } from "@sanity/client";
import imageUrlBuilder from "@sanity/image-url";

const client = createClient({
	projectId: "j7ywzfp6",
	dataset: "production",
	apiVersion: "2024-12-23",
	useCdn: true,
});
const builder = imageUrlBuilder(client);

export const urlFor = (source) => builder.image(source);

export default client;
