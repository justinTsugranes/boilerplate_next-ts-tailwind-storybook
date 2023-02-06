import { defineConfig } from 'sanity'
import { deskTool } from 'sanity/desk'
import { visionTool } from '@sanity/vision'
import { schemaTypes } from './schemas'

// const projectId = import.meta.env.SANITY_STUDIO_PROJECT_ID!
// const dataset = import.meta.env.SANITY_STUDIO_DATASET!

export default defineConfig({
  name: 'default',
  title: 'project_starter',

  // projectId,
  // dataset,
  projectId: '5i5u4lf2',
  dataset: 'production',

  plugins: [deskTool(), visionTool()],

  schema: {
    types: schemaTypes
  }
})
