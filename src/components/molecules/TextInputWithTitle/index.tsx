import React from 'react';
import {TextInput} from '@/components/atoms/TextInput';
import '@/components/molecules/TextInputWithTitle/style.scss';
import {ErrorType} from "@/types/models/error.ts";

type TextInputProps = {
    className?: string;
    title: string;
    name: string;
    placeHolder: string;
    error?: ErrorType;
    value: string;
    setInputValue: (value: string) => void;
};

export const TextInputWithTitle = React.memo((props: TextInputProps) => {
    const {className, title, name, placeHolder, error, value, setInputValue} =
        props;

    return (
        <div className={'text-input-with-title ' + className}>
            <h3 className={'mb-2'}>{title}</h3>
            <TextInput
                name={name}
                placeHolder={placeHolder}
                value={value}
                setInputValue={setInputValue}
                error={error}
            />
        </div>
    );
});
