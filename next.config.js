module.exports = {
  images: {
    domains: ["links.papareact.com", "image.tmdb.org"],
  },

  publicRuntimeConfig: {
    // Will be available on both server and client
    apiKey: process.env.API_KEY,
  },
  };
