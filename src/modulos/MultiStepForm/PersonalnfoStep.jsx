import React from "react";

import { Formik, Form, Field } from "formik";
import { FormControlLabel, FormControl, FormLabel, Radio, RadioGroup, Button, TextField } from "@mui/material";

import { withRouter } from "react-router-dom";

const PersonalInfoStep = (props) => {

  const [nombre, setNombre] = React.useState('')
  const [apellido, setApellido] = React.useState('')
  const [telefono, setTelefono] = React.useState('')
  const [ubicacion, setUbicacion] = React.useState('')
  const [mentor, setMentor] = React.useState(false)
  const [guardado, setGuardado] = React.useState(false)
  const [pagina, setPagina] = React.useState('')
  const [informacion, setInformacion] = React.useState([])
  const [usuarios, setUsuarios] = React.useState([])
  const [getId, setId] = React.useState([])




  const fetchData = async () => {
    const data = await fetch('http://localhost:8080/api/users/')
    const users = await data.json()
    // console.log(users)
    setUsuarios(users)

    const db = { datos: JSON.parse(localStorage.getItem('usuario')) }

    console.log(db.datos.uid);
    var registros = await usuarios.filter(info => info.uid === db.datos.uid)
    try {
      await setId(registros[0].id)
      await console.log(registros[0].id)
    } catch (error) {
      console.log(error)
    }
  }

  const agregarInfo = e => {
    e.preventDefault()
    if (!nombre.trim()) {
      console.log('Campo vacio')
      return
    }
    if (localStorage.getItem('usuario')) {
      const bd = { datos: JSON.parse(localStorage.getItem('usuario')) };
      console.log(bd);
      console.log(bd.datos.uid)

      setGuardado(!guardado);
      if (mentor) {
        setPagina('/MentorInfoStep')
        const data = {
          price: "",
          portfolio: "",
          about: "",
          modality: "",
          video: "",
          education: "",
          uid: bd.datos.uid,
          name: nombre,
          lastname: apellido,
          location: ubicacion,
          image_profile: bd.datos.fotoURL,
          phone: telefono,
          birthdate: "2000-01-01",
          register_date: "2022-03-15T05:23:12",
          user_id: getId
        }
        setInformacion([
          ...informacion,
          data
        ])

        sessionStorage.setItem("informacionPersonal", JSON.stringify(data))

      } else {
        setPagina('/StudentInfoStep')
        const bd = { datos: JSON.parse(localStorage.getItem('usuario')) };
        const datas = {
          uid: bd.datos.uid,
          name: nombre,
          lastname: apellido,
          birthday: "2000-01-01",
          image_profile: bd.datos.fotoURL,
          location: ubicacion,
          phone: telefono,
          about: "",
          education: "",
          interests: "",
          registerDate: "2022-03-15T05:23:12",
          user_id: getId
        }
        setInformacion([
          ...informacion,
          datas
        ])
        sessionStorage.setItem("informacionPersonalStudent", JSON.stringify(datas))
      }
    }
    console.log(informacion);


  }




  return (
    <div className="form-section">
      <div className="row">
        <div className="col "></div>
        <div
          className="col-md-6 card py-5 px-4"
          style={{ backgroundColor: "beige" }}
        >
          <div className="form-container mt-5">
            <Formik
              initialValues={{
                userName: "",
                email: "",
                passWord: "",
                toggleTerms: false,
                firstName: "",
                lastName: "",
                location: "",
                telephone: "",
              }}
              validate={(values) => {
                const errors = {};
                if (!values.email) {
                  errors.email = "Required";
                } else if (
                  !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
                ) {
                  errors.email = "Invalid email address";
                }
                return errors;
              }}
              onSubmit={(values, actions) => {
                setTimeout(() => {
                  alert(JSON.stringify(values, null, 2));
                  actions.setSubmitting(false);
                }, 1000);
                props.updateUser(values);
                props.history.push("/MentorInfoStep");
                console.log(values);
              }}
            >
              {({ handleSubmit }) => (
                <Form onSubmit={handleSubmit}>
                  <div className="mt-5">
                    <h3>Cuéntanos más sobre ti</h3>
                    <Field
                      name="firstName"
                      component={TextField}
                      onChange={e => setNombre(e.target.value)}
                      label="Nombre"
                    ></Field>
                    <Field
                      name="lastName"
                      component={TextField}
                      onChange={e => setApellido(e.target.value)}
                      label="Apellido"
                    ></Field>
                    {/* <Field
                      name="birthday"
                      component={TextField}
                      label="Fecha de nacimiento"
                    ></Field> */}
                    <Field
                      name="location"
                      component={TextField}
                      label="Ubicación"
                      onChange={e => setUbicacion(e.target.value)}
                    ></Field>
                    <Field
                      name="phone"
                      type="number"
                      component={TextField}
                      onChange={e => {
                        setTelefono(e.target.value);
                        fetchData();
                      }}
                      label="Teléfono"
                    ></Field>
                    <h3>Elige como usaras Mentoritos ... </h3>

                    <FormControl>
                      <FormLabel id="demo-row-radio-buttons-group-label"></FormLabel>
                      <RadioGroup
                        row
                        aria-labelledby="demo-row-radio-buttons-group-label"
                        name="row-radio-buttons-group"
                      >
                        <FormControlLabel
                          value="Mentor"
                          control={<Radio />}
                          label="Mentor"
                          onChange={e => setMentor(true)}
                        />
                        <FormControlLabel
                          value="Estudiante"
                          control={<Radio />}
                          label="Estudiante"
                          onChange={e => setMentor(false)}
                        />
                      </RadioGroup>
                    </FormControl>


                    <Button
                      variant="contained"
                      onClick={agregarInfo}
                      disabled={guardado}
                    >
                      Guardar
                    </Button>
                    <Button
                      type="submit"
                      onClick={() => props.history.push(pagina)}
                      disabled={!guardado}
                    >
                      Siguiente
                    </Button>
                  </div>
                </Form>
              )}
            </Formik>
          </div>
        </div>
        <div className="col "></div>
      </div>
    </div>
  );
};

export default withRouter(PersonalInfoStep);