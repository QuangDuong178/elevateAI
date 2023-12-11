import {useState} from "react";
import {AIAgentChat, AIAgentNote} from "@/types/models/ai-agent.ts";
import {AIChatType} from "@/types/enums/ai-chatbot.ts";

export const useModalAIAgentOrganism = () => {
    const defaultStep = ["目的", "ペルソナ"]
    const [step, setStep] = useState<number>(1)
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
        let arr = [];
        if (type === AIChatType.BOT_CONFIRM) {
            arr = [{
                text: title,
                content: content,
                type: type
            }, {
                text: "",
                content: "",
                type: AIChatType.BUTTON_NEXT_STEP
            }]
        } else {
            arr = [
                {
                    text: title,
                    content: content,
                    type: type
                }
            ]
        }
        setAIAgentChatList([...aiAgentChatList, ...arr])
    }
    const handleInsertButtonNextStep = () => {
        setAIAgentChatList([...aiAgentChatList, {
            text: "",
            content: "",
            type: AIChatType.BUTTON_NEXT_STEP
        }])
    }


    const handleInsertUserAgentNotes = (title: string, content: string) => {

        setAIAgentNotes([...aiAgentNotes, {
            title: defaultStep[step - 1],
            content: content
        }])
    }
    const handleSubmitUserInput = async (input: string) => {
        const response = await returnResponseUserInput();
        await handleInsertUserAgentChat(response.title, input, response.type)
    }

    const handleClickNextStep = async () => {
        if (aiAgentNotes.length === step) {
            setStep(step + 1)
            const response = await returnResponseClickNextStep();
            await handleInsertUserAgentChat(response.title, response.content, response.type)
        }
    }

    const returnResponseClickNextStep = async () => {
        return new Promise((resolve) => {
            // Giả lập một khoảng thời gian chờ đợi như khi gọi API thực tế
            setTimeout(() => {
                // Giả lập dữ liệu trả về từ API
                const data = {
                    // Dữ liệu giả lập
                    title: '想定されるユーザーペルソナ',
                    content: "お問い合わせデータを過去の情報を活用して自動的に処理することで、効率的にお問い合わせ対応を行いたいと思っているのは、お客様対応の担当者のようです。",
                    type: AIChatType.BOT_CONFIRM,
                };

                resolve(data);
            }, 1000); // Thời gian chờ đợi 1 giây
        });
    }

    const returnResponseUserInput = async () => {
        return new Promise((resolve) => {
            // Giả lập một khoảng thời gian chờ đợi như khi gọi API thực tế
            setTimeout(() => {
                // Giả lập dữ liệu trả về từ API
                const data = {
                    // Dữ liệu giả lập
                    title: 'いただいた情報を整理すると下記になる認識であってますか',
                    content: "お問い合わせ対応の自動化ツールを開発して、お問い合わせデータを過去の情報を活用して自動的に処理すること",
                    type: AIChatType.BOT_CONFIRM,
                };

                resolve(data);
            }, 1000); // Thời gian chờ đợi 1 giây
        });
    }


    return {aiAgentChatList, aiAgentNotes, handleClickNextStep, handleInsertButtonNextStep, handleSubmitUserInput, handleInsertUserAgentChat, handleInsertUserAgentNotes}
}