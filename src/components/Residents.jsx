import axios from "axios";
import React, { useEffect, useState } from "react";

const Residents = ({url}) => {
    
    const [residents, setResidents] = useState ("")

    useEffect (() => {
        axios
        .get(url)
        .then (resp => setResidents(resp.data))
    }, [])   


    //* cambio de color Status

    const status = () => {
        if (residents.status === "Alive"){
            return "chartreuse"
        } else if ( residents.status === "Dead"){
            return "red"
        }else{
            return "grey"
        }
    }


    return(
        
        
            <div className="resident__card">
            <img className="resident__image" src={residents.image} alt="" />
            <h3 className="resident__name">{residents.name}</h3>
            <div className="info__status">
                <div className="status" style={{ backgroundColor: status() }}></div>
                <p className="status__text">{residents.status}</p>
            </div>
            <p className="resident__info"><strong>Species: </strong>{residents.species}</p>
            <p className="resident__info"><strong>Type: </strong>{residents.type}</p>
            <p className="resident__info"><strong>Gender: </strong>{residents.gender}</p>
            <p className="resident__info"><strong>Origin name: </strong>{residents.origin?.name}</p>
            <p className="resident__info"><strong>Episodes: </strong>{residents.episode?.length}</p>

        </div>

        
    )
}

export default Residents;