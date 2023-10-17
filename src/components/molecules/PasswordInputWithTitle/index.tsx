import React from 'react';
import '@/components/molecules/TextInputWithTitle/style.scss';
import {ErrorType} from "@/types/models/error.ts";
import {PasswordInput} from "@/components/atoms/PasswordInput";

type PasswordInputWithTitleProps = {
    className?: string;
    title: string;
    name: string;
    placeHolder: string;
    error?: ErrorType;
    value: string;
    setInputValue: (value: string) => void;
};

export const PasswordInputWithTitle = React.memo((props: PasswordInputWithTitleProps) => {
    const {className, title, name, placeHolder, error, value, setInputValue} =
        props;

    return (
        <div className={'password-input-with-title ' + className}>
            <h3 className={'mb-2'}>{title}</h3>
            <PasswordInput
                name={name}
                placeHolder={placeHolder}
                value={value}
                setInputValue={setInputValue}
                error={error}
            />
        </div>
    );
});
