import React from "react";
import {AIChatText} from "@/components/atoms/AIChatText";
import {AIChatUserInput} from "@/components/atoms/AIChatUserInput";
import {AIChatBotConfirm} from "@/components/atoms/AIChatBotConfirm";
import "./style.scss"
import {useModalAIAgentOrganism} from "@/composables/useModalAIAgentOrganism.ts";
import {AIChatType} from "@/types/enums/ai-chatbot.ts";

export const ModalAIAgentOrganism = () => {
    const {
        aiAgentChatList,
        aiAgentNotes,
        handleInsertUserAgentChat,
        handleInsertUserAgentNotes
    } = useModalAIAgentOrganism();

    return <div className={'modal-ai-agent-organism relative'}>
        <div className="flex flex-row w-full gap-6 ">
            <div className="basis-2/5 mt-16">
                {aiAgentChatList.map(item => {
                        switch (item.type) {
                            case AIChatType.TEXT :
                                return <AIChatText key={item.text} cssClass={"mb-6"} text={item.text}/>
                            case AIChatType.USER_INPUT:
                                return <AIChatUserInput cssClass={"mb-6"} text={item.text}
                                                        inputContent={item.content}
                                                        handleClickSubmit={}/>
                            case AIChatType.BOT_CONFIRM:
                                return <AIChatBotConfirm cssClass={"mb-6"} text={item.text}
                                                        inputContent={item.content} />
                        }
                    }
                )}



            </div>
            <div className="basis-3/5 bg-white h-screen">

            </div>
        </div>
    </div>;
};

