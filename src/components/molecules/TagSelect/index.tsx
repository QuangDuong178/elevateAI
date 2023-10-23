import { Autocomplete, TextField } from '@mui/material';
import { CommonCheckbox } from '@/components/atoms/CommonCheckbox';
import './style.scss';
import { forwardRef } from 'react';

export type TagType = {
    id: string | number,
    label: string
}

type TagProp = {
    title: string,
    tags: Array<TagType>
};

export const TagSelect = forwardRef<HTMLInputElement, TagProp>((props, ref) => {
    const { title, tags } = props;
    return (
        <Autocomplete
            className={"tag-select-molecules"}
            multiple
            options={tags}
            disableCloseOnSelect
            getOptionLabel={(option) => option.label}
            renderInput={(params) => (
                <div>
                    <h3 className={"mb-2"}>{title}</h3>
                    <TextField {...params} inputRef={ref} />
                </div>
            )}
        />
    );
});
