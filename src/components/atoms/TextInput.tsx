import React, {ChangeEvent} from "react";
import {Input} from "antd";

type TextInputProps = {
    name: string,
    placeHolder: string,
    error?: string,
    value: string,
    setInputValue: (value: string) => void
}
export const TextInput = React.memo((props: TextInputProps) => {

    const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
        props.setInputValue(event.target.value)
    }

    return <div>
        <Input value={props.value} size={"large"} placeholder={props.placeHolder} onChange={handleInputChange}/>
        {props.error && <p className={"error"}>{props.error}</p>}

    </div>
})
