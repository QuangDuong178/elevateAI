import React, {ChangeEvent} from 'react';
import {Input} from 'antd';
import "./style.scss"
import {ErrorType} from "@/types/models/error.ts";

type PasswordInputProps = {
    name: string;
    placeHolder: string;
    error?: ErrorType;
    value: string;
    setInputValue: (value: string) => void;
};

export const PasswordInput = React.memo((props: PasswordInputProps) => {
    const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
        props.setInputValue(event.target.value);
    };

    return (
        <div className={"password-input-atoms"}>
            <Input.Password
                value={props.value}
                placeholder={props.placeHolder}
                onChange={handleInputChange}
            />
            {props.error && <p className={'error'}>{props.error.message}</p>}
        </div>
    );
});
