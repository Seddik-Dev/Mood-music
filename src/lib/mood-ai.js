import { InferenceClient } from "@huggingface/inference";

const client = new InferenceClient(process.env.HF_API_KEY);

export async function analyzeMood(mood) {
  try {
    const chatCompletion = await client.chatCompletion({
      model: "deepseek-ai/DeepSeek-V3.2:novita",
      messages: [
        {
          role: "user",
          content: `
            You are an expert music curator, emotional listener, and DJ.

            Your role is to deeply understand the user's emotional state and intent,
            then recommend music that precisely matches their mood, energy level,
            and ideal listening context.

            User message:
            "${mood}"

            Output EXACTLY three fields in JSON:
            {
              "explanation": "why this mood fits the music",
              "player_mode": "how it should be played",
              "queries": ["query 1", "query 2", "query 3"]
            }

            DO NOT output anything outside this JSON.
          `,
        },
      ],
    });

    // Hugging Face renvoie le texte généré dans chatCompletion.choices[0].message.content
    const text = chatCompletion.choices?.[0]?.message?.content?.trim();

    if (!text) return { explanation: "", player_mode: "", queries: [] };

    try {
      return JSON.parse(text);
    } catch (e) {
      console.error("DeepSeek JSON parse error:", text);
      return { explanation: "", player_mode: "", queries: ["chill"] };
    }
  } catch (err) {
    console.error("Network/API error:", err);
    return { explanation: "", player_mode: "", queries: ["chill"] };
  }
}

// Exemple d'utilisation
(async () => {
  const mood = "I feel nostalgic and calm, want relaxing evening music";
  const result = await analyzeMood(mood);
  console.log("🎵 Explanation:", result.explanation);
  console.log("🎧 Player mode:", result.player_mode);
  console.log("🔍 Queries:", result.queries);
})();
