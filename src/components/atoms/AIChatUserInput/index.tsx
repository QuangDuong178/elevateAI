import "./style.scss"
import React, {useRef, useState} from "react";

type AIChatUserInputProps = {
    text: string,
    inputContent: string | undefined,
    handleClickSubmit: () => string
    cssClass?: string,
}

export const AIChatUserInput = (props: AIChatUserInputProps) => {
    const {text, inputContent, cssClass, handleClickSubmit} = props;
    const inputRef = useRef("");
    const [showButton, setShowButton] = useState<boolean>(true)
    return (
        <div className={`ai-chat-user-input-atoms px-4 py-3 rounded-[10px] bg-white ` + cssClass}>
            <p className={"mb-2.5"}>
                {text}
            </p>
            <textarea
                disabled={!showButton}
                ref={inputRef}
                rows={3}
                className={"rounded-[10px] resize-none border w-full flex py-1.5 px-4 bg-neutral-100"}>
                {inputContent}
            </textarea>
            {showButton && (
                <div className={"flex justify-end mt-2.5"}>
                    <button onClick={() => handleClickSubmit(inputRef.current.value.toString())}
                            className={"btn-next-step py-3.5 px-5"}>
                        erwqer
                    </button>
                </div>
            )}

        </div>
    )
}