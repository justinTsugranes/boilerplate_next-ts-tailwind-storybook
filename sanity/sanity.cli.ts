import { defineCliConfig } from 'sanity/cli'

// const projectId = import.meta.env.SANITY_STUDIO_PROJECT_ID!
// const dataset = import.meta.env.SANITY_STUDIO_DATASET!

export default defineCliConfig({
  api: {
    // projectId,
    // dataset,
    projectId: '5i5u4lf2',
    dataset: 'production'
  }
})
