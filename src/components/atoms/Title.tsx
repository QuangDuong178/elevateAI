type TitleProps = {
    text: string,

}
export const Title = (props: TitleProps) => {
    return <h1 className="font-semibold	text-2xl">
        {props.text}
    </h1>
}