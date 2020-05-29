import React from 'react';
import styled from "styled-components";
import Grass from "./Grass";

const Container = styled.div`
  display: flex;
  position: absolute;
  top: 600px;
  z-index: 1;
  left: -200px;
  width: calc(100vw + 400px);
  height: 150px;
  background-color: #a1a1a1;
  border-top: #777777 solid 2px;
  border-bottom: #777777 solid 2px;
  transform: rotate(15deg);
  box-shadow: 0 20px 0 #a1a1a1;
  flex-direction: row;
  justify-content: flex-end;
  
  > div {
    border: 0;
    border-radius: 50%;
    position: relative;
    animation: move-1 linear 5s infinite;
  }
  
  > :first-child{
    background: #575757;
    width: 5px;
    height: 5px;
    align-self: center;
    top: -30px;
  }
  
  > :nth-child(2n) {
    background: #575757;
    width: 3px;
    height: 3px;
    align-self: center;
    top: 10px;
  }
  
  > :nth-child(3n) {
    width: 5px;
    height: 5px;
    top: 87px;
    background: #484848;
  }
  
  > :nth-child(2){
    animation-delay: 1s;
    top: 20px;
  }
  
  > :nth-child(3){
    animation-delay: 2s;
    top: 30px;
  }
  
  > :nth-child(4){
    animation-delay: 3s;
  }
  
  > :nth-child(5){
    width: 2px;
    height: 2px;
    top: 30px;
    animation-delay: 4.5s;
  }
  
  > :nth-child(6){
    animation-delay: 3.5s;
  }
  > :nth-child(7){
    animation-delay: 3.3s;
    top:-200px;
    left: unset; !important;
    background: none;
  }
  > :nth-child(8){
    animation-delay: 1.1s;
    top:200px;
    left: unset; !important;
    background: none;
  }
  
  > :nth-child(9){
    animation-delay: 0.1s;
    top:-10px;
    left: unset; !important;
    background: none;
    z-index: -1;
  }
  
  @media (max-width: 970px){
      > div {
        animation: move-1 linear 2.5s infinite;
      }
  }
  
`;




function App() {
    return (
        <Container>
            <div/>
            <div/>
            <div/>
            <div/>
            <div/>
            <div/>
            <Grass/>
            <Grass/>
            <Grass/>
        </Container>
    );
}

export default App;


