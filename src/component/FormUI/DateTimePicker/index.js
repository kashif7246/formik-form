import { TextField } from "@mui/material";

import { useField } from "formik";


const DateTimePicker = ({ name, ...otherProps }) => {

    const [field, meta] = useField(name)




    const configDateTimePicker = {
        ...field,
        ...otherProps,
        type: 'date',
        varient: 'outlined',
        fullWidth: true,
        inputLabelProps: {
            shrink: false
        }
    }

    if (meta && meta.touched && meta.error) {
        configDateTimePicker.error = true
        configDateTimePicker.helperText = meta.error
    }

    return (
        <TextField {...configDateTimePicker} />
    )
}
export default DateTimePicker;