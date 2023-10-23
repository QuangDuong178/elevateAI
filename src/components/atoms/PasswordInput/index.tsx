import React, { forwardRef } from 'react';
import { Input } from 'antd';
import './style.scss';
import { ErrorType } from '@/types/models/error.ts';

type PasswordInputProps = {
    name: string;
    placeHolder: string;
    error?: ErrorType;
};

export const PasswordInput = forwardRef<HTMLInputElement, PasswordInputProps>(
    (props, ref) => {
        return (
            <div className={'password-input-atoms'}>
                <Input.Password ref={ref} placeholder={props.placeHolder} />
                {props.error && <p className={'error'}>{props.error.message}</p>}
            </div>
        );
    }
);
