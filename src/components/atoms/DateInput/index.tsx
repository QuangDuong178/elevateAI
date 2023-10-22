import React, { RefObject } from 'react';
import { DatePicker } from 'antd';
import './style.scss';
import { ErrorType } from '@/types/models/error.ts';

type DateInputProps = {
  name: string;
  placeHolder: string;
  error?: ErrorType;
  inputRef: RefObject<HTMLInputElement>
};

export const DateInput = React.memo((props: DateInputProps) => {

  return (
    <div className={'text-input-atoms'}>
      <DatePicker
        format={"YYYY/MM/DD hh:mm"}
        ref={props.inputRef}
        placeholder={props.placeHolder}
      />
      {props.error && <p className={'error'}>{props.error.message}</p>}
    </div>
  );
});
