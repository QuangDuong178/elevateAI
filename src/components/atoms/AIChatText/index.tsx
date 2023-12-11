import  "./style.scss"

type AIChatTextProps = {
    text: string,
    cssClass?: string,
}

export const AIChatText = (props: AIChatTextProps) => {
    const {text, cssClass} = props;
    return (
        <div className={`ai-chat-atoms px-4 py-3 rounded-[10px] bg-white ` + cssClass}>
            <p className={"mb-2.5"}>
                {text}
            </p>
        </div>
    )
}