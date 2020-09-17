import React from 'react';
import './App.css';
import styled from "styled-components";
import Body from './Human/Body';
import Horizon from './Horizon/index';
import Grass from './Horizon/Grass'

const Container = styled.div`
   width: 200px;
   height: 300px ;
   position: relative;
   align-self: center;
`;

function App() {
    return (
        <div className="App">
                <Body/>
            <Horizon/>

        </div>
    );
}

export default App;
