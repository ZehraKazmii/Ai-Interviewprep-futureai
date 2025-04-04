import { Inngest } from "inngest";

export const inngest = new Inngest({
  id: " Your-Organization", // Unique app ID
  name: "name",
  credentials: {
    gemini: {
      apiKey: process.env.GEMINI_API_KEY,
    },
  },
});
