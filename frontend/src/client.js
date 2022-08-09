// @ts-nocheck
import sanityClient from "@sanity/client"
import ImageUrlBuilder from "@sanity/image-url"

export const client = sanityClient({
  projectId: process.env.REACT_APP_SANITY_PROJECT_ID,
  dataset: "production",
  apiVersion: "2022-02-01",
  useCdn: true,
  token: process.env.REACT_APP_SANITY_APPLICATION_TOKEN,
})

console.info(process.env)
console.log(process.env.SANITY_APPLICATION_TOKEN)

const builder = ImageUrlBuilder(client)

export const urlFor = (source) => builder.image(source)
