import React from "react";
import { Link } from "react-router-dom";
import { useFormik } from 'formik';
import * as Yup from 'yup';
import Swal from 'sweetalert2'
import { useContext } from "react";
import { Context } from "../store/appContext";


export const Login = () => {

	const {strore, actions} = useContext(Context)

	const formik = useFormik({
			initialValues: {
				email: '',
				password: ''
			},
			validationSchema: Yup.object({
				email: Yup.string().required('Email requerido'),
				password: Yup.string().min(7, '7 characters').required('Contraseña requerida'),
				
			}),
			onSubmit: async (values) => {
				console.log(values);
				
				const login = await actions.iniciarSesion(values.email, values.password)
				if(!login.error) {
					Swal.fire({
						title: 'Bienvenido!',
						text: 'Ingresaste satisfactoriamente!',
						icon: 'success',
						timer: 2000
					  })
					  navigate("/")
				} else {
					Swal.fire({
						title: 'Lo sentimos!',
						text: 'Ha habido un error!',
						icon: 'error',
						timer: 2000
					  })
				}
			},
		});


	return (
		<div className="form-container2 text-center mb-3 border border-3 rounded">
			<form action="#" id="login-form" onSubmit={formik.handleSubmit}>
				<h2 className="title fw-semibold text-secondary">Iniciar sesión</h2>

				<div className="left">
					<input type="email" className="input m-2" name="email" placeholder="Email:"
						onChange={formik.handleChange}
						onBlur={formik.handleBlur}
						value={formik.values.email} />
					{formik.touched.email && formik.errors.email ? (
						<div className="text-danger">{formik.errors.email}</div>
					) : null}
					<input type="password" className="input m-2" name="password" placeholder="Password:"
						onChange={formik.handleChange}
						onBlur={formik.handleBlur}
						value={formik.values.password} />
					{formik.touched.password && formik.errors.password ? (
						<div className="text-danger">{formik.errors.password}</div>
					) : null}
					<div>
						<button type="submit" className="btn btn-primary mt-2">Iniciar sesión</button>
					</div>
				</div>
				<div className="right">
					<div className="p-2">
						<Link to="/" className="login__forgot m-3">Olvidé mi contraseña</Link>
					</div>
					<div className="buttons-container">
						<button className="button justify-content-center">
							<svg xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid" viewBox="0 0 256 262">
								<path fill="#4285F4" d="M255.878 133.451c0-10.734-.871-18.567-2.756-26.69H130.55v48.448h71.947c-1.45 12.04-9.283 30.172-26.69 42.356l-.244 1.622 38.755 30.023 2.685.268c24.659-22.774 38.875-56.282 38.875-96.027"></path>
								<path fill="#34A853" d="M130.55 261.1c35.248 0 64.839-11.605 86.453-31.622l-41.196-31.913c-11.024 7.688-25.82 13.055-45.257 13.055-34.523 0-63.824-22.773-74.269-54.25l-1.531.13-40.298 31.187-.527 1.465C35.393 231.798 79.49 261.1 130.55 261.1"></path>
								<path fill="#FBBC05" d="M56.281 156.37c-2.756-8.123-4.351-16.827-4.351-25.82 0-8.994 1.595-17.697 4.206-25.82l-.073-1.73L15.26 71.312l-1.335.635C5.077 89.644 0 109.517 0 130.55s5.077 40.905 13.925 58.602l42.356-32.782"></path>
								<path fill="#EB4335" d="M130.55 50.479c24.514 0 41.05 10.589 50.479 19.438l36.844-35.974C195.245 12.91 165.798 0 130.55 0 79.49 0 35.393 29.301 13.925 71.947l42.211 32.783c10.59-31.477 39.891-54.251 74.414-54.251"></path>
							</svg>
							Inicia sesión con Google
						</button>
					</div>
					<div className="linea-divisoria">
						<span className="linea"></span>
						<span className="circulo"></span>
						<span className="linea"></span>
					</div>
					<div className="p-2">
						<p className="sign-up-label">
							No tienes una cuenta?<Link to="/vista-register" className="login__forgot m-3">REGISTRATE</Link>
						</p>
					</div>
				</div>
			</form>
		</div>
	);
};