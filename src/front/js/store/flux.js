const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			email: [],
			password: []
// lineas

































		},
		actions: {

			iniciarSesion: async (email, password) => {
				try {
					const response = await axios.get(process.env.BACKEND_URL+'/usuarios', {
						"correo": email,
						"clave": password,					
					})
					alert(response.data)
					

				} catch (error) {
					console.log(error);
					return false;
				}
			},
			
			









































			/* Hasta ésta línea de código estará trabajando Pablo */
		}
	};
};

export default getState;
