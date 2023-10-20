import React, {RefObject} from 'react';
import {Input} from 'antd';
import "./style.scss"
import {ErrorType} from "@/types/models/error.ts";

type PasswordInputProps = {
    name: string;
    placeHolder: string;
    error?: ErrorType;
    inputRef: RefObject<HTMLInputElement>
};

export const PasswordInput = React.memo((props: PasswordInputProps) => {

    return (
        <div className={"password-input-atoms"}>
            <Input.Password
                ref={props.inputRef}
                placeholder={props.placeHolder}
            />
            {props.error && <p className={'error'}>{props.error.message}</p>}
        </div>
    );
});
