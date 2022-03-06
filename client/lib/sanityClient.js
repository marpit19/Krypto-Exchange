import sanityClient from '@sanity/client'
import 'dotenv/config'

export const client = sanityClient({
  projectId: process.env.projectId,
  dataset: 'production',
  apiVersion: 'v1',
  token: process.env.token,
  useCdn: false,
})