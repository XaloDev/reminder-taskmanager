import React, { useState, useEffect } from 'react';
import './home.css';
import Navbar from '../../components/navbar';
import firebase from '../../config/firebase'
import GrupoCard from '../../components/grupo-card';
import Card from '../../components/card';




function Home(){
    
    const db = firebase.firestore();

    function NovoGrupo(){

    }
    
    
    return(
        <>
            <Navbar/>
            <div className="tela-home">
                <Card/>
                <GrupoCard/>
            </div>
        </>
    )
}

export default Home;