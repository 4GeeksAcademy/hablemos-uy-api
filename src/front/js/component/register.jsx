import React from "react";
import { Link } from "react-router-dom";
import { useFormik } from 'formik';
import * as Yup from 'yup';



export const Register = () => {

	const formik = useFormik({
		initialValues: {
			nombre: '',
			apellido: '',
			fechaDeNacimiento: '',
			codigoPais: '',
			telefono: '',
			email: '',
			password: '',
			checkTerminos: ''
		},
		validationSchema: Yup.object({
			nombre: Yup.string().min(4, '4 characters').required('Nombre requerido'),
			apellido: Yup.string().required('Apellido requerido'),
			fechaDeNacimiento: Yup.string().required('Fecha de nacimiento requerida'),
			codigoPais: Yup.string().max(4, '4 characters').required('Código de área requerido'),
			telefono: Yup.string().required('Teléfono requerido'),
			email: Yup.string().required('Email requerido'),
			password: Yup.string().min(7, '7 characters').required('Contraseña requerida'),
			checkTerminos: Yup.string().required('Debe aceptar Términos y Condiciones')
		}),
		onSubmit: values => {
			alert(JSON.stringify(values, null, 2));
		},
	});

	return (
		// <div className="d-flex justify-content-center align-items-center vh-100">
		  <div className="form-container mb-3  border border-3 rounded p-4">
			<p className="title fw-semibold text-secondary text-center">Registrarse</p>
			<form className="row g-3 d-flex" onSubmit={formik.handleSubmit}>
			  <div className="col-md-6">
				<input
				  type="text"
				  className="form-control"
				  name="nombre"
				  placeholder="Nombre:"
				  onChange={formik.handleChange}
				  onBlur={formik.handleBlur}
				  value={formik.values.nombre}
				/>
				{formik.touched.nombre && formik.errors.nombre ? (
				  <div className="text-danger">{formik.errors.nombre}</div>
				) : null}
			  </div>
	  
			  <div className="col-md-6">
				<input
				  type="text"
				  className="form-control"
				  name="apellido"
				  placeholder="Apellido:"
				  onChange={formik.handleChange}
				  onBlur={formik.handleBlur}
				  value={formik.values.apellido}
				/>
				{formik.touched.apellido && formik.errors.apellido ? (
				  <div className="text-danger">{formik.errors.apellido}</div>
				) : null}
			  </div>
	  
			  <div className="col-md-6">
				<label htmlFor="fecha-de-nacimiento" className="form-label text-start">
				  Fecha de nacimiento:
				</label>
				<input
				  type="date"
				  className="form-control"
				  name="fechaDeNacimiento"
				  onChange={formik.handleChange}
				  onBlur={formik.handleBlur}
				  value={formik.values.fechaDeNacimiento}
				/>
				{formik.touched.fechaDeNacimiento && formik.errors.fechaDeNacimiento ? (
				  <div className="text-danger">{formik.errors.fechaDeNacimiento}</div>
				) : null}
			  </div>
	  
			  <div className="col-md-6">
				<label htmlFor="codigo-pais" className="form-label text-start">
				  Código de Área:
				</label>
				<input
				  list="codigos-pais"
				  className="form-control"
				  id="codigo-pais"
				  name="codigoPais"
				  placeholder="+589"
				  onChange={formik.handleChange}
				  onBlur={formik.handleBlur}
				  value={formik.values.codigoPais}
				/>
				{formik.touched.codigoPais && formik.errors.codigoPais ? (
				  <div className="text-danger">{formik.errors.codigoPais}</div>
				) : null}
	  
				<datalist id="codigos-pais">
				  <option value="+54">Argentina</option>
				  <option value="+56">Chile</option>
				  <option value="+57">Colombia</option>
				  <option value="+52">México</option>
				  <option value="+595">Paraguay</option>
				  <option value="+51">Perú</option>
				  <option value="+589">Uruguay</option>
				  <option value="+58">Venezuela</option>
				</datalist>
			  </div>
	  
			  <div className="col-md-6">
				<input
				  type="text"
				  className="form-control"
				  name="telefono"
				  placeholder="Teléfono:"
				  onChange={formik.handleChange}
				  onBlur={formik.handleBlur}
				  value={formik.values.telefono}
				/>
				{formik.touched.telefono && formik.errors.telefono ? (
				  <div className="text-danger">{formik.errors.telefono}</div>
				) : null}
			  </div>
	  
			  <div className="col-md-6">
				<input
				  type="email"
				  className="form-control"
				  name="email"
				  placeholder="Email:"
				  onChange={formik.handleChange}
				  onBlur={formik.handleBlur}
				  value={formik.values.email}
				/>
				{formik.touched.email && formik.errors.email ? (
				  <div className="text-danger">{formik.errors.email}</div>
				) : null}
			  </div>
	  
			  <div className="col-md-6">
				<input
				  type="password"
				  className="form-control"
				  name="password"
				  placeholder="Password:"
				  onChange={formik.handleChange}
				  onBlur={formik.handleBlur}
				  value={formik.values.password}
				/>
				{formik.touched.password && formik.errors.password ? (
				  <div className="text-danger">{formik.errors.password}</div>
				) : null}
			  </div>
	  
			  <div className="col-md-12 d-flex align-items-center">
				<input
				  className="form-check-input me-2"
				  type="checkbox"
				  id="checkboxNoLabel"
				  name="checkTerminos"
				  aria-label="Términos y condiciones"
				  onChange={formik.handleChange}
				  onBlur={formik.handleBlur}
				  value={formik.values.checkTerminos}
				/>
				{formik.touched.checkTerminos && formik.errors.checkTerminos ? (
				  <div className="text-danger">{formik.errors.checkTerminos}</div>
				) : null}
				<span>He leído y acepto los términos y condiciones de uso.</span>
			  </div>
	  
			  <div className="col-md-12">
				<button className="btn btn-primary w-100" type="submit">
				  Siguiente
				</button>
			  </div>
			</form>
	  
			<p className="sign-up-label mt-3 text-center">
			  ¿Ya tienes una cuenta?
			  <Link to="/vista-login" className="login__forgot m-3">
				Inicia sesión
			  </Link>
			</p>
	  
			<div className="linea-divisoria d-flex align-items-center my-3">
			  <span className="linea flex-grow-1"></span>
			  <span className="circulo mx-3"></span>
			  <span className="linea flex-grow-1"></span>
			</div>
	  
			<div className="buttons-container">
			  <button className="btn btn-light w-100 d-flex align-items-center justify-content-center">
				<svg
				  xmlns="http://www.w3.org/2000/svg"
				  preserveAspectRatio="xMidYMid"
				  viewBox="0 0 256 262"
				  width="20"
				  height="20"
				  className="me-2"
				>
				  <path
					fill="#4285F4"
					d="M255.878 133.451c0-10.734-.871-18.567-2.756-26.69H130.55v48.448h71.947c-1.45 12.04-9.283 30.172-26.69 42.356l-.244 1.622 38.755 30.023 2.685.268c24.659-22.774 38.875-56.282 38.875-96.027"
				  ></path>
				  <path
					fill="#34A853"
					d="M130.55 261.1c35.248 0 64.839-11.605 86.453-31.622l-41.196-31.913c-11.024 7.688-25.82 13.055-45.257 13.055-34.523 0-63.824-22.773-74.269-54.25l-1.531.13-40.298 31.187-.527 1.465C35.393 231.798 79.49 261.1 130.55 261.1"
				  ></path>
				  <path
					fill="#FBBC05"
					d="M56.281 156.37c-2.756-8.123-4.351-16.827-4.351-25.82 0-8.994 1.595-17.697 4.206-25.82l-.073-1.73L15.26 71.312l-1.335.635C5.077 89.644 0 109.517 0 130.55s5.077 40.905 13.925 58.602l42.356-32.782"
				  ></path>
				  <path
					fill="#EB4335"
					d="M130.55 50.479c24.514 0 41.05 10.589 50.479 19.438l36.844-35.974C195.245 12.91 165.798 0 130.55 0 79.49 0 35.393 29.301 13.925 71.947l42.211 32.783c10.59-31.477 39.891-54.251 74.414-54.251"
				  ></path>
				</svg>
				Continuar con Google
			  </button>
			</div>
		  </div>
		// </div>
	  );
	  
	  
	  
	  
	  
};