import reflectIcon from '@/assets/img/reflect-icon.png';
import "./style.scss"
import {useState} from "react";

type AIChatBotConfirmProps = {
    text: string,
    inputContent: string | undefined,
    reflect: () => void,
    cssClass?: string,
}

export const AIChatBotConfirm = (props: AIChatBotConfirmProps) => {
    const {text, inputContent, reflect, cssClass} = props;
    const [showReflect, setShowReflect] = useState<boolean>(true)
    const handleClickReflect = () => {
        setShowReflect(false);
        reflect();
    }
    return (
        <div className={`ai-chat-atoms px-4 pt-3 pb-8 rounded-[10px] bg-white relative ` + cssClass}>
            <p className={"mb-2.5"}>
                {text}
            </p>
            <span className={"rounded-[10px] py-1.5 border w-full flex py-1.6 px-4"}>
                {inputContent}
            </span>

            {showReflect &&
                <div onClick={handleClickReflect}
                     className={"reflect absolute right-4 bottom-1 flex mt-1.5 items-center"}>反映する <img
                    src={reflectIcon} alt={""}/></div>
            }
        </div>
    )
}