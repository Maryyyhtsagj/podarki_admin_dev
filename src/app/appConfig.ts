export const appConfig = {
  apiUrl:
    process.env.NODE_ENV === "production"
      ? "http://79.174.80.241:3001/"
      : "http://localhost:8010/proxy",
}

// http://194.58.121.218:3001
