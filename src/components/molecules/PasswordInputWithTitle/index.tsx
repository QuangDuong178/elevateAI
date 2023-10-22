import React, {RefObject} from 'react';
import '@/components/molecules/InputWithTitle/style.scss';
import {ErrorType} from "@/types/models/error.ts";
import {PasswordInput} from "@/components/atoms/PasswordInput";

type PasswordInputWithTitleProps = {
    className?: string;
    title: string;
    name: string;
    placeHolder: string;
    error?: ErrorType;
    inputRef: RefObject<HTMLInputElement>
};

export const PasswordInputWithTitle = React.memo((props: PasswordInputWithTitleProps) => {
    const {className, title, name, placeHolder, error, inputRef} =
        props;

    return (
        <div className={'password-input-with-title ' + className}>
            <h3 className={'mb-2'}>{title}</h3>
            <PasswordInput
                name={name}
                placeHolder={placeHolder}
                inputRef={inputRef}
                error={error}
            />
        </div>
    );
});
