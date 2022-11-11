import SanityClient from "@sanity/client";
import ImageUrlBuilder from "@sanity/image-url";

export const client = SanityClient({
  projectId: 'u88shlv5',
  dataset: 'production',
  apiVersion: '2022-11-11',
  useCdn: true,
  token : process.env.NEXT_PUBLIC_SANITY_TOKEN
})

const builder = ImageUrlBuilder(client)

export const UrlFor = (source) => builder.image(source) 