import { Autocomplete, TextField } from '@mui/material';
import { CommonCheckbox } from '@/components/atoms/CommonCheckbox';
import './style.scss';
import { RefObject } from 'react';
import { Title } from '@/components/atoms/Title';

export type TagType = {
  id: string | number,
  label: string
}

type TagProp = {
  title : string,
  tags: Array<TagType>,
  inputRef: RefObject<HTMLInputElement>
};
export const TagSelect = (props: TagProp) => {
  const {title, tags, inputRef } = props;
  return (
    <Autocomplete
      className={"tag-select-molecules"}
      multiple
      options={tags}
      disableCloseOnSelect
      getOptionLabel={(option) => option.label}
      renderOption={(props, option, { selected }) => (
        <li {...props}>
          <CommonCheckbox
            label={option.label}
            value={selected}
            handleClick={() => {
            }}
          />
          {option.label}
        </li>
      )}
      renderInput={(params) => (
        <div>
          <h3 className={"mb-2"}>{title}</h3>
          <TextField {...params} ref={inputRef} />
        </div>
      )}
    />
  );
};