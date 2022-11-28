
import { Button } from "@mui/material";

import { useFormikContext } from "formik";

const ButtonWrapper=({
    children,
    ...otherProps
})=>{


    const {submitForm}=useFormikContext();

  const handleSubmit=()=>{
    submitForm();
  }
   const configButton={
    
    color:'primary',
    variant:'contained',
    onClick:handleSubmit,
fullWidth:true
   }
    return(
        <Button {...configButton} >
         {children}
        </Button>
    )
}
export default ButtonWrapper;