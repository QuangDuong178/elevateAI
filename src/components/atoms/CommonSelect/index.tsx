import { RefObject } from 'react';
import { Select } from 'antd';
import './style.scss';

export type OptionSelect = {
  value: string | number,
  label: string,
}
type SelectProps = {
  name: string;
  options: Array<OptionSelect>,
  inputRef: RefObject<HTMLSelectElement>
};
export const CommonSelect = (props: SelectProps) => {
  return <Select
    className={'input-atoms'}
    ref={props.inputRef}
    defaultValue={props.options[0].value}
    options={props.options}
  />;
};