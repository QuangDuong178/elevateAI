import {useState} from "react";
import {AIAgentChat, AIAgentNote} from "@/types/models/ai-agent.ts";
import {AIChatType} from "@/types/enums/ai-chatbot.ts";

export const useModalAIAgentOrganism = () => {
    const [aiAgentChatList, setAIAgentChatList] = useState<Array<AIAgentChat>>([
        {
            text: "私は、”アイデア”からプロダクト開発におけるソリューション案を生成するAI-botです。\n" +
                "ぜひ、あなたの”アイデア”について教えてください。",
            content: "",
            type: AIChatType.TEXT
        },
        {
            text: "例：お問い合わせ対応を過去データを使って自動化したい",
            content: "",
            type: AIChatType.USER_INPUT
        },
    ])
    const [aiAgentNotes, setAIAgentNotes] = useState<Array<AIAgentNote>>([])

    const handleInsertUserAgentChat = (title: string, content: string, type: AIChatType) => {
        aiAgentChatList.push({
            text: title,
            content: content,
            type: type
        })
        setAIAgentChatList(aiAgentChatList)
    }

    const handleInsertUserAgentNotes = (title: string, content: string) => {
        aiAgentNotes.push({
            title: title,
            content: content
        })
        setAIAgentNotes(aiAgentNotes)
    }
    const handleSubmitUserInput = () => {

    }


    return {aiAgentChatList, aiAgentNotes, handleInsertUserAgentChat, handleInsertUserAgentNotes}
}