import {AIChatType} from "@/types/enums/ai-chatbot.ts";

export type AIAgentChat = {
    text: string,
    content: string,
    type: AIChatType,
}

export type AIAgentNote = {
    title: string,
    content: string,
}