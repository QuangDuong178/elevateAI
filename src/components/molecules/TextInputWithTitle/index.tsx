import React, {RefObject} from 'react';
import {TextInput} from '@/components/atoms/TextInput';
import '@/components/molecules/TextInputWithTitle/style.scss';
import {ErrorType} from "@/types/models/error.ts";
import {InputType} from "@/types/enums/input-type.ts";

type TextInputProps = {
    type : keyof InputType,
    className?: string;
    title: string;
    name: string;
    placeHolder: string;
    error?: ErrorType;
    inputRef : RefObject<HTMLInputElement>
};

export const TextInputWithTitle = React.memo((props: TextInputProps) => {
    const {type,className, title, name, placeHolder, error,inputRef} =
        props;

    const renderInput = () => {
        switch (type) {
            case InputType.TEXT : return <TextInput
                name={name}
                placeHolder={placeHolder}
                inputRef={inputRef}
                error={error}
            />
            case InputType.AREA : return ()
        }
    }

    return (
        <div className={'text-input-with-title ' + className}>
            <h3 className={'mb-2'}>{title}</h3>

            <TextInput
                name={name}
                placeHolder={placeHolder}
                inputRef={inputRef}
                error={error}
            />
        </div>
    );
});
