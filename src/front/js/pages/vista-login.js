import React from "react";
import { Login } from "../component/login.jsx"
import "../../styles/registro-login.css"

const VistaLogin = () => {

    return (
        <div className="container-fluid vh-100 d-flex align-items-center justify-content-center row">
            <div className="row w-100">
                <div className="col-md-6 d-flex align-items-center justify-content-center rectangle-10">

                    <Login />

                </div>
            </div>

        </div>
    );
};
export default VistaLogin;