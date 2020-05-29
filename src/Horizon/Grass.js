import React from 'react';
import styled from "styled-components";

const Main = styled.div`
  position: absolute;
  ${ props => (props.left ? 'left:' + props.left + 'px;' : 'left:100px;') +
    (props.top ? 'top:' + props.top + 'px;' : 'top:100px; ')
}
`;

const Container = styled.div`
  display: flex;
  position: relative;
  width: 100px;
  //align-self: center;
  flex-direction: row;
  justify-content: flex-end;
  > div {
    height: 80px;
    width: 60px;
    border: solid green;
    border-width: 0 0 0 3px;
    border-radius: 50%;
    position: absolute;
    align-self: center;
    clip-path: polygon(0 0, 100% 0%, 100% 50%, 0 50%);
    box-sizing: border-box;
    z-index: 1;
  }
  
  > :first-child{
    width: 60px;
    border-width: 0 0 0 5px;
  }

  > :nth-child(2){
    width: 70px;
    height: 120px;
    border-width: 0 0 0 6px;
    left: 34px;
  }
  
  > :nth-child(3){
    left: -25px;
    border-width: 0 5px 0 0 ;
  } 
  > :nth-child(4){
    border: 1px solid brown;
    background-color: #6e2c14;
    width: 60px;
    height: 10px;
    clip-path: none;
    z-index: 0;
    left: 10px;
    box-shadow: 0 0 4px #6e2c14 ;
  } 
`;


function App({top, left}) {
    return (
        <Main top={top} left={left}>
            <Container >
                <div/>
                <div/>
                <div/>
                <div/>
            </Container>
        </Main>
    );
}

export default App;


