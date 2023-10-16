import "@/components/atoms/CommonButton/style.scss";
import {Button} from 'antd';

type ButtonProps = {
    content: string,
    handleClick: () => void
    className?: string
}

export const CommonButton = (props: ButtonProps) => {
    return <Button onClick={props.handleClick} className={"button-atoms " + props.className}>
        {props.content}
    </Button>
}