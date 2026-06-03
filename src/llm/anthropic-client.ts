import { Anthropic } from "@anthropic-ai/sdk";
import { config } from "../config.js";

export const client = new Anthropic({ apiKey: config.anthropicApiKey });

export const askClaude = async (
  prompt: string,
  systemPrompt?: string,
): Promise<string> => {
  const response = await client.messages.create({
    model: config.anthropicModel,
    max_tokens: 1024,
    ...(systemPrompt && { system: systemPrompt }),
    messages: [
      {
        role: "user",
        content: prompt,
      },
    ],
  });

  const textBlock = response.content.find((block) => block.type === "text");
  if (!textBlock || textBlock.type !== "text") {
    throw new Error(`Cluade no retornó un bloque de texto en la respuesta`);
  }

  return textBlock.text;
};
