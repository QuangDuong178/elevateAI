import "./style.scss"
import React, {useRef, useState} from "react";

type AIChatUserInputProps = {
    text: string,
    inputContent: string | undefined,
    handleSendMessage: (input: string) => void
    cssClass?: string,
}

export const AIChatUserInput = (props: AIChatUserInputProps) => {
    const {text, inputContent, cssClass, handleSendMessage} = props;
    const inputRef = useRef("");
    const [showButton, setShowButton] = useState<boolean>(true)
    const handleClickSubmit = () => {
        setShowButton(false);
        handleSendMessage(inputRef.current.value.toString())
    }
    return (
        <div className={`ai-chat-user-input-atoms px-4 py-3 rounded-[10px] bg-white ` + cssClass}>
            <p className={"mb-2.5"}>
                {text}
            </p>
            <textarea
                defaultValue={inputContent}
                disabled={!showButton}
                ref={inputRef}
                rows={3}
                className={"rounded-[10px] resize-none border w-full flex py-1.5 px-4 bg-neutral-100"}/>

            {showButton && (
                <div className={"flex justify-end mt-2.5"}>
                    <button onClick={handleClickSubmit}
                            className={"btn-next-step py-3.5 px-5"}>
                        erwqer
                    </button>
                </div>
            )}

        </div>
    )
}