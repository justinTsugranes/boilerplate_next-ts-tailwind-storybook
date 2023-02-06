import { createClient } from 'next-sanity'

// const projectId = import.meta.env.SANITY_STUDIO_PROJECT_ID!,
// const dataset = import.meta.env.SANITY_STUDIO_DATASET!,
// const apiVersion = import.meta.env.SANITY_STUDIO_API_VERSION!,

export const sanityClient = createClient({
  // projectId,
  // dataset,
  // apiVersion,
  projectId: '5i5u4lf2',
  dataset: 'production',
  apiVersion: '2023-02-03',
  useCdn: true
})
