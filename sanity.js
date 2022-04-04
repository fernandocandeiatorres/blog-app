import createImageUrlBuilder from '@sanity/image-url'
import { createCurrentUserHook, createClient } from 'next-sanity'

export const config = {
  /**
   * Find your project ID and dataset in 'sanity.json in your studio project.
   * These are considered "public", but you can use environment variables
   * if you want differ between local dev and production.
   * https://nextjs.org/docs/basic-features/environment-variables
   **/
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || 'production',
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  apiVersion: '2021-03-25',
  /**
   * Set usecdn to 'false if your application require the freshest possible
   * data always (potentially slightly slower and a bit more expensive).
   * Authenticated request (like preview) will always bypass the CDN
   **/
  useCdn: process.env.NODE_ENV === 'production',
}

// Set up the client for fetching data in the getProps page functions
export const sanityClient = createClient(config)

// Set up a helper function for generating Image URLs with only
// the asset reference data in your documents.
export const urlFor = (source) => createImageUrlBuilder(config).image(source)
