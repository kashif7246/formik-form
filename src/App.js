import React from "react";
import { Form, Formik, } from "formik";
import * as Yup from "yup";
import Container from "@mui/material/Container";
import { Grid, Typography } from "@mui/material";
import TextFieldWrapper from "./component/FormUI/TextFields";
import SelectWrapper from "./component/FormUI/Select";
import countries from './data/countries.json'
import DateTimePicker from "./component/FormUI/DateTimePicker";
import CheckboxWrapper from "./component/FormUI/CheckBox";
import ButtonWrapper from "./component/FormUI/Button";
import { useDispatch, useSelector } from "react-redux";
import { STORE_DATA } from "./constant/constant";


const INITAL_FORM_STATE = {
  firstName: "",
  lastName: "",
  email: "",
  phone: "",
  addressLine1: '',
  addressLine2: '',
  city: '',
  state: '',
  country: '',
  arrivalDate: ''
  , departureDate: '',
  message: '',
  termsOfService: ''

};
const FORM_VALIDATION = Yup.object().shape({
  firstName: Yup.string().required("Required"),
  lastName: Yup.string().required("Required"),
  email: Yup.string().email("Invalid email").required("Required"),
  phone: Yup.number()
    .integer()
    .typeError("Please enter a valid phone number")
    .required("Required"),
  addressLine1: Yup.string().required('Required'),
  addressLine2: Yup.string(),
  city: Yup.string().required('Required'),
  state: Yup.string().required('Required'),
  country: Yup.string().required('Required'),
  arrivalDate: Yup.date(),
  departureDate: Yup.date(),
  message: Yup.string(),
  termsOfService: Yup.boolean()
    .oneOf([true], 'The Terms and conditions must be accepted')
    .required('The Terms and Condtion must be accepted.')
});

const SignupForm = () => {

  const dispatch = useDispatch();

  const state = useSelector((state) => state.data);

  console.log(state, 'state');


  return (
    <Container>
      <div style={{ marginTop: "5vmax", marginBottom: "4vmax" }}>
        <Formik
          initialValues={{
            ...INITAL_FORM_STATE,
          }}
          validationSchema={FORM_VALIDATION}
          onSubmit={(values) => {
            dispatch({
              type: STORE_DATA,
              payload: values

            })
          }}
        >
          <Form>
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <Typography>Your details</Typography>
              </Grid>
              <Grid item xs={6}>
                <TextFieldWrapper name="firstName" label="Frist Name" />
              </Grid>
              <Grid item xs={6}>
                <TextFieldWrapper name="lastName" label="Last Name" />
              </Grid>
              <Grid item xs={12}>
                <TextFieldWrapper name="email" label="email" />
              </Grid>
              <Grid item xs={12}>
                <TextFieldWrapper name="phone" label="Phone" />
              </Grid>
              <Grid item xs={12}>
                <Typography>Address</Typography>
              </Grid>
              <Grid item xs={12}>
                <TextFieldWrapper name="addressLine1" label="Address Line1" />
              </Grid>
              <Grid item xs={12}>
                <TextFieldWrapper name="addressLine2" label="Address Line2" />
              </Grid>
              <Grid item xs={6}>
                <TextFieldWrapper name="city" label="city" />
              </Grid>
              <Grid item xs={6}>
                <TextFieldWrapper name="state" label="state" />
              </Grid>
              <Grid item xs={12}>
                <SelectWrapper name="country" label="Country" options={countries} />
              </Grid>
              <Grid item xs={12}>
                <Typography>Booking Information</Typography>
              </Grid>
              <Grid item xs={6}>
                <DateTimePicker name="arrivalDate" label="Arrival Date" />
              </Grid>
              <Grid item xs={6}>
                <DateTimePicker name="departureDate" label="Departure Date" />
              </Grid>
              <Grid item xs={12}>
                {/* <TextField name="message" label="message" multiline={true} rows={3} fullWidth={true} /> */}
                <TextFieldWrapper name="message" label="message" multiline={true} rows={4} />
              </Grid>
              <Grid item xs={12}>
                <CheckboxWrapper name="termsOfService" legend="Terms of Service" label="I agree" />
              </Grid>
              <Grid item xs={12}>
                <ButtonWrapper  >submit</ButtonWrapper>
              </Grid>
            </Grid>{" "}
          </Form>
        </Formik>
      </div>
    </Container>
  );
};
export default SignupForm;
