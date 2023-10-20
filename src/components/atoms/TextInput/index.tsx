import React, {ChangeEvent, RefObject} from 'react';
import {Input} from 'antd';
import "./style.scss"
import {ErrorType} from "@/types/models/error.ts";

type TextInputProps = {
    name: string;
    placeHolder: string;
    error?: ErrorType;
    inputRef: RefObject<HTMLInputElement>
};

export const TextInput = React.memo((props: TextInputProps) => {

    return (
        <div className={"text-input-atoms"}>
            <Input
                ref={props.inputRef}
                placeholder={props.placeHolder}
            />
            {props.error && <p className={'error'}>{props.error.message}</p>}
        </div>
    );
});
