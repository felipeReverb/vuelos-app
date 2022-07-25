import React from 'react'
import { useField, useFormikContext} from 'formik'
import { MenuItem, TextField } from '@mui/material';

export const SelectWrapper  = ( {
    name,
    options,
    ...otherprops
} ) => {

    const { setFieldValue } = useFormikContext();
    const [field, meta] = useField(name);

    const handleChange = (event) => {
        const { value } = event.target;
        setFieldValue(name, value);
    }

const configSelect = {
    ...field,
    ...otherprops,
    select: true,
    variant: "outlined",
    fullWidth: true,
    onChange: handleChange
    
}

    if (meta && meta.touched && meta.error) {
        configSelect.error = true;
        configSelect.helperText = meta.error;
    }


  return (
    <TextField {...configSelect}>
        {
            Object.keys(options).map( (item, position) => {
                return (
                    <MenuItem key={position} value={item}>
                        {options[item]}
                    </MenuItem>
                )
            })
        }

        </TextField>
  )
}

export default SelectWrapper;
