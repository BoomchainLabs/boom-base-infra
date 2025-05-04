import { deepinfra } from "@ai-sdk/deepinfra";
import {
  customProvider,
  extractReasoningMiddleware,
  wrapLanguageModel,
} from "ai";

const languageModels = {
  "meta-llama/Llama-3.3-70B-Instruct-Turbo": wrapLanguageModel({
    middleware: extractReasoningMiddleware({
      tagName: "think",
    }),
    model: deepinfra("meta-llama/Llama-3.3-70B-Instruct-Turbo"),
  }),
  "deepseek-ai/DeepSeek-R1": wrapLanguageModel({
    middleware: extractReasoningMiddleware({
      tagName: "think",
    }),
    model: deepinfra("deepseek-ai/DeepSeek-R1"),
  }),
  "Qwen/Qwen2.5-72B-Instruct": deepinfra("Qwen/Qwen2.5-72B-Instruct"),
};

export const model = customProvider({
  languageModels,
});

export type modelID = keyof typeof languageModels;

export const MODELS = Object.keys(languageModels);

export const defaultModel: modelID = "deepseek-ai/DeepSeek-R1";
