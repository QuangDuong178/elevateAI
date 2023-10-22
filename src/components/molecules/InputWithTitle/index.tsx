import React, { RefObject } from 'react';
import { TextInput } from '@/components/atoms/TextInput';
import '@/components/molecules/InputWithTitle/style.scss';
import { ErrorType } from '@/types/models/error.ts';
import { InputType } from '@/types/enums/input-type.ts';
import { CommonTextArea } from '@/components/atoms/CommonTextArea';
import { DateInput } from '@/components/atoms/DateInput';
import { PasswordInput } from '@/components/atoms/PasswordInput';
import { CommonSelect, OptionSelect } from '@/components/atoms/CommonSelect';

type InputProps = {
  type: keyof InputType,
  className?: string;
  title: string;
  name: string;
  placeHolder: string;
  error?: ErrorType;
  options?: Array<OptionSelect>;
  inputRef: RefObject<HTMLInputElement | HTMLSelectElement>;
};

export const InputWithTitle = React.memo((props: InputProps) => {
  const { options, type, className, title, name, placeHolder, error, inputRef } =
    props;

  const renderInput = () => {
    switch (type) {
      case InputType.TEXT :
        return <TextInput
          name={name}
          placeHolder={placeHolder}
          inputRef={inputRef}
          error={error}
        />;
      case InputType.AREA :
        return <CommonTextArea name={name}
                               placeHolder={placeHolder}
                               inputRef={inputRef}
                               error={error} />;
      case InputType.DATE :
        return <DateInput name={name}
                          placeHolder={placeHolder}
                          inputRef={inputRef}
                          error={error} />;
      case InputType.PASSWORD :
        return <PasswordInput name={name}
                              placeHolder={placeHolder}
                              inputRef={inputRef}
                              error={error} />;
      case InputType.SELECT :
        return <CommonSelect name={name}
                             inputRef={inputRef}
                             options={options}
                             error={error} />;

    }
  };

  return (
    <div className={'text-input-with-title ' + className}>
      <h3 className={'mb-2'}>{title}</h3>
      {renderInput()}
    </div>
  );
});
