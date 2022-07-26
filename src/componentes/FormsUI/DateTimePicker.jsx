import { TextField } from "@mui/material";
import { useField } from "formik";



export const DateTimePicker = ( {
    name,
   ...otherprops  
}) => {


const [field, meta] = useField(name);

  const configDateTimePcicker = {
    ...field,
    ...otherprops,
    type: "date",
    variant: "outlined",
    min: new Date().toISOString().slice(0, 16),
        InputLabelProps: {
      shrink: true,
    },
  };

  if( meta && meta.touched && meta.error){
    configDateTimePcicker.error = true;
    configDateTimePcicker.helperText = meta.error;
    }

  return <TextField {...configDateTimePcicker}  />;
};

export default DateTimePicker;
