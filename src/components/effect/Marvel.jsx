import React from 'react'
import axios from 'axios'
import { useState, useEffect } from "react";

// autorization : https://developer.marvel.com/documentation/authorization

// http://gateway.marvel.com/v1/public/characters?ts=1&apikey=1234&hash=ffd275c5130566a2916217b101f26150

// ts: 1

// Key public: 2bbf33aabe0d17905193dbfafbd81070

// md5 generator: https://www.md5hashgenerator.com/

// hash: eb8283ac5b33d7b25e0600a08ef59062



const Marvel = () => {

    const[personajes, setPersonajes] = useState([])

    useEffect(() => {

        axios.get("https://gateway.marvel.com/v1/public/characters?&ts=1&apikey=2bbf33aabe0d17905193dbfafbd81070&hash=eb8283ac5b33d7b25e0600a08ef59062").then(res=>{
            setPersonajes(res.data.data.results)
            console.log(res.data.data.results)
        }).catch(console.error())

    }, [])
    

  return (
    <>
        <div className="container mt-4">
            <h1 className="mb-4 text-2xl">API Marvel 🐱👤🐺</h1>
            <hr />
            <div className="row row-cols-1 row-cols-md-2 g-4">

                { 
                    personajes.map(per => (

                    <div className="col" key = {per.id}>
                        <div className="card" style={{wight:"18rem",height:"19rem"}}>
                            <img src={`${per.thumbnail.path}.${per.thumbnail.extension}`} className="card-img-top" style={{wight:"80%",height:"80%"}}></img>
                            <div className="card-body">
                                <p className="card-text">{per.name}</p>
                            </div>
                        </div>
                    </div>

                ))

                }

            </div>    
        </div>   
    </>
  )
}

export default Marvel