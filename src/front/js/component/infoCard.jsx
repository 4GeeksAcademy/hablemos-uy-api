import React from "react";
import { Link } from "react-router-dom";

const InfoCard = ({ title, description, icono }) => {
    return (
        <div className="col-md-4 col-12 mb-3 d-flex justify-content-center">
            <div className="card info-card" style={{ width: "18rem" }}>
                <i className={`${icono} fa-4x mt-2`}></i>
                <div className="card-body">
                    <h5>{title}</h5>
                    <p className="card-text text-inicio">{description}</p>
                </div>
            </div>
        </div>
    )
}

export default InfoCard