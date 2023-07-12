import React, {useState, useEffect} from "react";
import axios from "axios";

const Location = ({rick}) => {


    return (
        <>
        <div className="card__location">
            <h1>{rick.name}</h1>
            <p><strong>Id: </strong>{rick.id}</p>
            <p><strong>Type: </strong>{rick.type}</p>
            <p><strong>Dimension: </strong>{rick.dimension}</p>
            <p><strong>Residents: </strong>{rick.residents?.length}</p>
        </div>
        </>
    )
}

export default Location