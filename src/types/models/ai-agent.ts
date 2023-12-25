import {AgentNoteType, AIChatType} from "@/types/enums/ai-chatbot";

export type AgentChat = {
    title: string,
    content : string,
    chatType: AIChatType,
    reflectFlg?: boolean,
    nextFlag?: boolean,
    question?: string,
    currentNode?: AgentNoteType,
    nextNode?: AgentNoteType,
    currentIdx?: number
    nextIdx?: number
}

export type AgentNote = {
    title: string,
    content : string,
    question?: string,
    questionIndex?: number | undefined,
    type?: AgentNoteType,
}

export type Question = {
    id: number,
    title: string,
    question: string,
    title_detail: string,
    question_detail: string,
    description:string,
}

export type AIAgentNotes = Array<AgentNote>;
export type AIAgentChats = Array<AgentChat>;
export type IdeaQuestions = Array<Question>;

