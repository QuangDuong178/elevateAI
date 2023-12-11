import React from "react";
import {AIChatText} from "@/components/atoms/AIChatText";
import {AIChatUserInput} from "@/components/atoms/AIChatUserInput";
import {AIChatBotConfirm} from "@/components/atoms/AIChatBotConfirm";
import "./style.scss"
import {useModalAIAgentOrganism} from "@/composables/useModalAIAgentOrganism.ts";
import {AIChatType} from "@/types/enums/ai-chatbot.ts";
import {AIChatNote} from "@/components/atoms/AIChatNote";

export const ModalAIAgentOrganism = () => {
    const {
        aiAgentChatList,
        aiAgentNotes,
        handleSubmitUserInput,
        handleClickNextStep,
        handleInsertButtonNextStep,
        handleInsertUserAgentChat,
        handleInsertUserAgentNotes
    } = useModalAIAgentOrganism();


    return <div className={'modal-ai-agent-organism relative'}>
        <div className="flex flex-row w-full gap-6 ">
            <div className="basis-2/5 mt-16 ">
                {aiAgentChatList.map((item, index) => {
                        switch (item.type) {
                            case AIChatType.TEXT :
                                return <AIChatText key={index} cssClass={"mb-6"} text={item.text}/>
                            case AIChatType.USER_INPUT:
                                return <AIChatUserInput key={index} cssClass={"mb-6"} text={item.text}
                                                        inputContent={item.content}
                                                        handleSendMessage={handleSubmitUserInput}
                                />
                            case AIChatType.BOT_CONFIRM:
                                return <AIChatBotConfirm key={index} cssClass={"mb-6"} text={item.text}
                                                         inputContent={item.content}
                                                         reflect={() => {
                                                             handleInsertUserAgentNotes(item.text, item.content)
                                                         }
                                                         }/>
                            default:
                                return <div key={index} className={"flex justify-end items-center mb-6"}>
                                    <button onClick={handleClickNextStep}
                                            className={"btn-next-step py-3.5 px-5"}>
                                        erwqer
                                    </button>
                                </div>


                        }
                    }
                )}


            </div>
            <div className="basis-3/5 bg-white h-screen px-10 pt-6">
                {aiAgentNotes.map((item, index) =>
                    <AIChatNote cssClass={"mb-4"} key={index} title={item.title} content={item.content}/>
                )}
            </div>
        </div>
    </div>
        ;
};

