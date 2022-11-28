
import { MenuItem, TextField } from "@mui/material";
import { useField } from "formik";

const SelectWrapper = ({ name,options, ...otherProps }) => {
    const [field, mata] = useField(name);
    const configTextField = {
        ...field,
        select:true,
        ...otherProps,
        fullWidth: true,
        varient: "outlined",
    };
    if (mata && mata.touched && mata.error) {
        configTextField.error = true
         configTextField.helperText = mata.error
    }
    return <TextField {...configTextField} >
{
    Object.keys(options).map((item,pos)=>{
        return(
            <MenuItem keys={pos} value={item}>
                {options[item]}
            </MenuItem>
        )
    })
}

    </TextField>;
};
export default SelectWrapper;
