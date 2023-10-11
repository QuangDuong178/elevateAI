import React, {ChangeEvent} from 'react';
import {Input} from 'antd';
import "./style.scss"
import {ErrorType} from "@/types/models/error.ts";

type TextInputProps = {
    name: string;
    placeHolder: string;
    error?: ErrorType;
    value: string;
    setInputValue: (value: string) => void;
};

export const TextInput = React.memo((props: TextInputProps) => {
    const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
        props.setInputValue(event.target.value);
    };

    return (
        <div className={"text-input-atoms"}>
            <Input
                value={props.value}
                placeholder={props.placeHolder}
                onChange={handleInputChange}
            />
            {props.error && <p className={'error'}>{props.error.message}</p>}
        </div>
    );
});
