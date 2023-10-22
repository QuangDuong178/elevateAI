import React, {RefObject} from 'react';
import {TextInput} from '@/components/atoms/TextInput';
import '@/components/molecules/InputWithTitle/style.scss';
import {ErrorType} from "@/types/models/error.ts";
import {CommonTextArea} from "@/components/atoms/CommonTextArea";

type TextInputProps = {
    className?: string;
    title: string;
    name: string;
    placeHolder: string;
    error?: ErrorType;
    inputRef : RefObject<HTMLInputElement>
};

export const TextAreaWithTitle = React.memo((props: TextInputProps) => {
    const {className, title, name, placeHolder, error,inputRef} =
        props;

    return (
        <div className={'text-input-with-title ' + className}>
            <h3 className={'mb-2'}>{title}</h3>
            <CommonTextArea
                name={name}
                placeHolder={placeHolder}
                inputRef={inputRef}
                error={error}
            />
        </div>
    );
});
