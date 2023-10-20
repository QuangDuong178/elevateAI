import React, {RefObject} from 'react';
import {Input} from 'antd';
import "./style.scss"
import {ErrorType} from "@/types/models/error.ts";

type CommonTextAreaProps = {
    name: string;
    placeHolder: string;
    error?: ErrorType;
    inputRef: RefObject<HTMLInputElement>
};

export const CommonTextArea = React.memo((props: CommonTextAreaProps) => {

    return (
        <div className={"text-input-atoms"}>
            <Input.TextArea
                ref={props.inputRef}
                placeholder={props.placeHolder}
                autoSize={{ minRows: 6 ,maxRows: 6}}
            />
            {props.error && <p className={'error'}>{props.error.message}</p>}
        </div>
    );
});
