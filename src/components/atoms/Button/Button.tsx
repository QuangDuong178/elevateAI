import {Button} from "@mui/material";
import "@/components/atoms/Button/style.scss";

type ButtonProps = {
    content: string,
    handleClick: () => void
}

export const Button = (props: ButtonProps) => {
    return <Button className={"button-atoms"} variant={"outlined"}>
        {props.content}
    </Button>
}