import {useContext, useState} from "react";
import {AgentChat, AIAgentChats, AIAgentNotes, IdeaQuestions} from "@/types/models/ai-agent.ts";
import {AgentNoteType, AIChatType} from "@/types/enums/ai-chatbot.ts";
import {RepositoriesContext} from "@/plugins/http";
import {
    BOT_DETAIL_INTRO,
    BOT_IDEA_CONFIRM,
    BOT_OVERVIEW_INTRO,
    ERR_MESSAGE,
    QUESTION_EXAMPLE
} from "@/constant/messages";
import {IdeaDetailRequestParams, IdeaOverviewRequestParams} from "@/types/models/requests";
import {IdeaResponse} from "@/types/models/responses";

export const useModalAIAgentOrganism = () => {
    const $repositories = useContext(RepositoriesContext);
    const [aiAgentNotes, setAIAgentNotes] = useState<AIAgentNotes>([])
    const [ideaQuestions, setIdeaQuestions] = useState<IdeaQuestions>([])
    const [isWaiting, setWaitingStatus] = useState<boolean>(false)
    const [aiAgentChatList, setAIAgentChatList] = useState<AIAgentChats>([{
        title: '',
        question: QUESTION_EXAMPLE,
        content: '',
        chatType: AIChatType.BOT_CONFIRM,
        reflectFlg: false,
        currentNode: AgentNoteType.SUGGEST,
        nextNode: AgentNoteType.IDEA,
    }])

    const sleep = (ms: number = 1000) => {
        return new Promise((resolve => setTimeout(resolve, ms)))
    }

    const handleInsertAgentNotes = (agentChat: AgentChat, content: string) => {
        let flgExist = false;
        setAIAgentNotes(aiAgentNotes.map(i => {
            if (i.type == agentChat.currentNode && i.questionIndex == agentChat.currentIdx) {
                i.content = content;
                flgExist =true;
            }
            return i;
        }));
        if (!flgExist) {
            setAIAgentNotes(aiAgentNotes => [...aiAgentNotes, {
                title: agentChat.currentNode == AgentNoteType.IDEA ? '目的' : agentChat.title,
                content: content,
                question: agentChat.question,
                questionIndex: agentChat.currentIdx,
                type: agentChat.currentNode
            }]);
        }
    }
    
    const generateIdea = async (text: string) => {
        const response: IdeaResponse = await $repositories('idea').getIdea({'text': text})
            .catch(err => {
                const lastChat = aiAgentChatList[aiAgentChatList.length - 1];
                setAIAgentChatList(aiAgentChatList => [...aiAgentChatList, ...[{
                    title: lastChat.title,
                    content: ERR_MESSAGE,
                    chatType: AIChatType.ERROR,
                    currentNode: lastChat.currentNode,
                    nextNode : lastChat.nextNode,
                    currentIdx: lastChat.currentIdx,
                    nextIdx: lastChat.nextIdx
                }]]);
                return;
            });
        if (typeof response === 'undefined') {
            return;
        }
        // set Questions for idea
        setIdeaQuestions(response.data.data.questions)
        setAIAgentChatList(aiAgentChatList => [...aiAgentChatList, ...[{
            title: '',
            question: BOT_IDEA_CONFIRM,
            content: response.data.data.message || '',
            chatType: AIChatType.BOT_CONFIRM,
            reflectFlg: true,
            currentNode: AgentNoteType.IDEA,
            nextNode: AgentNoteType.OVERVIEW,
            nextIdx: 0
        }]]);
    }

    const generateOverview = async (agentChat: AgentChat, text: string = '', isTypeFromInput:boolean = false) => {
        const ideaNote = aiAgentNotes.find(i => i.type == AgentNoteType.IDEA);
        const question = ideaQuestions.find((item, idx) => idx == agentChat.nextIdx);
        const params: IdeaOverviewRequestParams = {
            idea: ideaNote.content,
            title: question.title,
            question: question.question,
        };
        if (text != '') {
            params.text = text;
        }
        if (agentChat.nextIdx == 0 && !isTypeFromInput) {
            setAIAgentChatList(aiAgentChatList => [...aiAgentChatList, ...[{
                title: BOT_OVERVIEW_INTRO,
                content: BOT_OVERVIEW_INTRO,
                chatType: AIChatType.BOT_TYPED
            }]]);
            await sleep(500);
        }
        const response = await $repositories('idea').overview(params)
            .catch(err => {
                const lastChat = aiAgentChatList[aiAgentChatList.length - 1];
                setAIAgentChatList(aiAgentChatList => [...aiAgentChatList, ...[{
                    title: lastChat.title,
                    content: ERR_MESSAGE,
                    chatType: AIChatType.ERROR,
                    currentNode: lastChat.currentNode,
                    nextNode : lastChat.nextNode,
                    currentIdx: lastChat.currentIdx,
                    nextIdx: lastChat.nextIdx
                }]]);
                return;
            });
        if (typeof response === 'undefined') {
            return;
        }
        const nextIdx = agentChat.nextIdx + 1;
        let nextChat: AgentChat = {
            title: question.title,
            question: question.question,
            content: response.data.data.message,
            chatType: AIChatType.BOT_CONFIRM,
            reflectFlg: true,
            currentNode: AgentNoteType.OVERVIEW,
            nextNode : AgentNoteType.OVERVIEW,
            currentIdx: agentChat.nextIdx,
            nextIdx
        };
        if (nextIdx == ideaQuestions.length) {
            nextChat.nextIdx = 0;
            nextChat.nextNode = AgentNoteType.DETAIL
        }
        setAIAgentChatList(aiAgentChatList => [...aiAgentChatList, ...[nextChat]]);
    }

    const generateDetail = async (agentChat: AgentChat, text: string = '', isTypeFromInput:boolean = false) => {
        const ideaNote = aiAgentNotes.find(i => i.type == AgentNoteType.IDEA);
        const ideaOverview = aiAgentNotes.find(i => i.type == AgentNoteType.OVERVIEW && i.questionIndex == agentChat.nextIdx);
        const question = ideaQuestions.find((item, idx) => idx == agentChat.nextIdx);
        const params: IdeaDetailRequestParams = {
            idea: ideaNote.content,
            title: question.title,
            question: question.question,
            overview: ideaOverview.content,
            title_detail: question.title_detail,
            question_detail: question.question_detail,
            purpose: question.description
        };
        if (text != '') {
            params.text = text;
        }
        if (agentChat.nextIdx == 0 && !isTypeFromInput) {
            setAIAgentChatList(aiAgentChatList => [...aiAgentChatList, ...[{
                title: BOT_DETAIL_INTRO,
                content: BOT_DETAIL_INTRO,
                chatType: AIChatType.BOT_TYPED
            }]]);
            await sleep(500);
        }
        const response = await $repositories('idea').detail(params)
            .catch(err => {
                const lastChat = aiAgentChatList[aiAgentChatList.length - 1];
                setAIAgentChatList(aiAgentChatList => [...aiAgentChatList, ...[{
                    title: lastChat.title,
                    content: ERR_MESSAGE,
                    chatType: AIChatType.ERROR,
                    currentNode: lastChat.currentNode,
                    nextNode : lastChat.nextNode,
                    currentIdx: lastChat.currentIdx,
                    nextIdx: lastChat.nextIdx
                }]]);
                return;
            });
        if (typeof response === 'undefined') {
            return;
        };
        const nextIdx = agentChat.nextIdx + 1;
        let nextChat: AgentChat = {
            title: question.title_detail,
            question: question.question_detail,
            content: response.data.data.message,
            chatType: AIChatType.BOT_CONFIRM,
            reflectFlg: true,
            currentNode: AgentNoteType.DETAIL,
            nextNode : AgentNoteType.DETAIL,
            currentIdx: agentChat.nextIdx,
            nextIdx
        };
        if (nextIdx == ideaQuestions.length) {
            nextChat.nextIdx = 0;
            nextChat.nextNode = AgentNoteType.SOLUTION
        }
        setAIAgentChatList(aiAgentChatList => [...aiAgentChatList, ...[nextChat]]);
    }

    const generateSolution = async () => {
        alert('Xin thí chủ dừng bước !');
    }

    const handleNextStep = async (agentChat: AgentChat, content: string = '', isTypeFromInput:boolean = false) => {
        setWaitingStatus(true);
        switch (agentChat.nextNode) {
            case AgentNoteType.IDEA :
                await generateIdea(content);
                break;
            case AgentNoteType.OVERVIEW :
                await generateOverview(agentChat, content, isTypeFromInput);
                break;
            case AgentNoteType.DETAIL :
                await generateDetail(agentChat, content, isTypeFromInput);
                break;
            case AgentNoteType.SOLUTION :
                await generateSolution();
                break;
        }
        setWaitingStatus(false);
    }

    const onSubmitChat = async (content: string = '') => {
        const tmpAiAgentChatList:AIAgentChats = aiAgentChatList.filter(i => i.chatType !== AIChatType.BOT_TYPED);
        const maxIdxChat = tmpAiAgentChatList.length - 1;
        const copyIdx = maxIdxChat > 0 ? maxIdxChat - 1 : maxIdxChat;
        const copyRecord: AgentChat = tmpAiAgentChatList.find((i, n) => n === copyIdx);
        const userChat: AgentChat = {
            title: copyRecord.title,
            content: content,
            chatType: AIChatType.USER_TYPED,
            reflectFlg: false,
            nextFlag: false,
            currentNode : copyRecord.currentNode,
            nextNode: copyRecord.nextNode,
            currentIdx: copyRecord.currentIdx,
            nextIdx: copyRecord.nextIdx
        };
        setAIAgentChatList(aiAgentChatList => [...aiAgentChatList.map((i, n) => {
            if (n == aiAgentChatList.length - 1) {
                i.reflectFlg = false;
                i.nextFlag = false;
            }
            return i;
        }), ...[userChat]]);
        await handleNextStep(userChat, content, true);
    }

    return {
        isWaiting,
        aiAgentChatList,
        aiAgentNotes,
        handleInsertAgentNotes,
        onSubmitChat,
        handleNextStep,
    }
}