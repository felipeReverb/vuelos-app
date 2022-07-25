import {
  Container,
  FormControlLabel,
  Grid,
  Radio,
  RadioGroup,
  Typography,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import DateTimePicker from "./FormsUI/DateTimePicker";
import { Header } from "./FormsUI/Header";
import ButtonWrapper from "./FormsUI/Button";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import SelectWrapper from "./FormsUI/Select";
import peopleNumber from "./data/peopleNumber.json";
import childrenNumber from "./data/childrenNumber.json";
import newCitiesAndCodes from "./data/newCitiesAndCodes";
import { fetchFlights } from "../redux/actions/results";
import { OfferItem } from "./OfferItem/OfferItem";

const options = ["Ida y Vuelta", "Solo Ida"];

const initialValues = {
  origen: "",
  destino: "",
  fechaIda: "",
  fechaVuelta: "",
  adultos: "",
  ninos: "",
};

const validationSchema = Yup.object({
  origen: Yup.string().required("¡El origen es requerido!"),
  destino: Yup.string().required("¡El destino es requerido!"),
  fechaIda: Yup.date().required("¡La fecha es requerida!"),
  fechaVuelta: Yup.date().required("¡La fecha es requerida!"),
  adultos: Yup.string().required("¡El número de adultos es requerido!"),
  ninos: Yup.number().required("¡El número de niños es requerido!"),
});



export const FlightSearchForm2 = () => {
  const isLoading = useSelector((state) => state.results.isLoading);
  const searchResults = useSelector((state) => state.results.data);

  const [value, setValue] = useState("idaVuelta");
  const handleChange = (event) => {
    setValue(event.target.value);
  };

  const dispatch = useDispatch();

  const onSubmit = (values) => {
    console.log(values);
    //dispatch(value));
    dispatch(fetchFlights(values));
  };

  return (
    <>
      <Grid container>
{/*         <Grid item xs={12}>
          <Header sx={{ marginBottom: "20px" }} />
        </Grid> */}
        <Grid item xs={12}>
          <Container
            maxWidth="md"
            sx={{ padding: 5, border: 1, borderRadius: 8 }}
          >
            <div>
              <Formik
                initialValues={{
                  ...initialValues,
                }}
                validationSchema={validationSchema}
                onSubmit={onSubmit}
              >
                <Form>
                  <Grid container spacing={3}>
                    <Grid item xs={12}>
                      <RadioGroup
                        row
                        name="use-radio-group"
                        defaultValue="idaVuelta"
                      >
                        <FormControlLabel
                          name="idaVueltaRb"
                          value="idaVuelta"
                          label="Ida y Vuelta"
                          control={<Radio />}
                          onChange={handleChange}
                        />
                        <FormControlLabel
                          name="soloIdaRb"
                          value="soloIda"
                          label="Solo Ida"
                          control={<Radio />}
                          onChange={handleChange}
                        />
                      </RadioGroup>
                    </Grid>

                    <Grid item xs={6}>
                      <SelectWrapper
                        name="origen"
                        label="Origen"
                        options={newCitiesAndCodes}
                      />
                    </Grid>

                    <Grid item xs={6}>
                      <SelectWrapper
                        name="destino"
                        label="Destino"
                        options={newCitiesAndCodes}
                      />
                    </Grid>

                    <Grid item xs={6}>
                      <DateTimePicker name="fechaIda" label="Fecha Ida" />
                    </Grid>

                    <Grid item xs={6}>
                      {value === "idaVuelta" && (
                        <DateTimePicker
                          name="fechaVuelta"
                          label="Fecha Vuelta"
                        />
                      )}
                    </Grid>

                    <Grid item xs={6}>
                      <SelectWrapper
                        name="adultos"
                        label="Adultos"
                        options={peopleNumber}
                      />
                    </Grid>

                    <Grid item xs={6}>
                      <SelectWrapper
                        name="ninos"
                        label="Niños"
                        options={childrenNumber}
                      />
                    </Grid>

                    <Grid item xs={12}>
                      <ButtonWrapper>Buscar</ButtonWrapper>
                    </Grid>
                  </Grid>
                </Form>
              </Formik>
            </div>
            <hr />
            <div>
              {isLoading && (
                <Typography variant="h2" align="center">
                  Cargando...
                </Typography>
              )}{" "}
            </div>
            <div className="flex flex-row flex-wrap	my-8 justify-center">
              {!isLoading &&
                searchResults.map((offer, index) => (
                  <OfferItem key={index} {...offer} />
                ))}
            </div>
          </Container>
        </Grid>
      </Grid>
    </>
  );
};
