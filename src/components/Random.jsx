import React, { useState, useEffect } from "react";
import axios from "axios";
import Location from "./Location";
import Residents from "./Residents";
import Page from "./Page";
import logo from '/public/Rick-And-Morty-Logo.png'

const Random = () => {
    const [location, setLocation] = useState({});

    useEffect(() => {
        const randomLocation = Math.floor(Math.random() * 126) + 1;
        axios
            .get(`https://rickandmortyapi.com/api/location/${randomLocation}`)
            .then((resp) => setLocation(resp.data));
    }, []);

    const [searchLocation, setSearchLocation] = useState("");

    const handleSearch = () => {
        if (searchLocation.trim() !== "") {
            if (searchLocation <= 126) {
                axios
                    .get(`https://rickandmortyapi.com/api/location/${searchLocation}`)
                    .then((resp) => setLocation(resp.data))
                    .catch((error) => {
                        alert("Location not found");
                    });
            } else {
                alert("Location not found");
            }
            setSearchLocation("");
        }
    };

    const handleKeyPress = (event) => {
        if (event.key === "Enter") {
            handleSearch();
        }
    };

    const [page, setPage] = useState(1);
    const perPage = 10;
    const quantyPage = Math.ceil(location.residents?.length / perPage);
    const firstIndex = (page - 1) * perPage;
    const residents = location.residents?.slice(firstIndex, firstIndex + perPage);

    return (
        <div>
            <div className="header">
                <div className="logo__container">
                    <img className="logo" src={logo} alt="" />
                </div>
                <div className="input__container">
                    <input
                        className="input"
                        type="number"
                        placeholder="Id (1-126)"
                        max={126}
                        min={1}
                        value={searchLocation}
                        onChange={(e) => setSearchLocation(e.target.value)}
                        onKeyPress={handleKeyPress}
                    />
                    <button onClick={handleSearch} className="input__button">Search</button>
                </div>
            </div>
            <div >
                <Location rick={location}></Location>
                <Page page={page} setPage={setPage} quantyPage={quantyPage} />
                {residents?.map((rick) => (
                    <Residents url={rick} key={rick} />
                ))}
            </div>
        </div>
    );
};

export default Random;
