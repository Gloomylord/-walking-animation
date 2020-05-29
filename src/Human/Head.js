import React from 'react';
import styled from "styled-components";

const Container = styled.div`
  display: grid;
  position: absolute;
  top: 0;
  left: 0;
  div {
    z-index: 10;
  }
`;

const Smile = styled.div`
    background: #faef97;
    width: 180px;
    height: 200px;
    border-radius: 50%;
    display: grid;
    border: 2px solid #e2aa48;
    grid-area: 1/1/2/2;
    z-index: 10;
    grid-template-columns: repeat(7,1fr);
    grid-template-rows: repeat(6,1fr) ;
    overflow: hidden;
    align-self: start;
    justify-self: center;
    > div {
        border-width: 3px  0;
        height: 100%;
        background: azure;
        border:  solid #e2aa48;
        border-width: 3px  0;
        border-radius: 100%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        animation: eye-1 1s ease-in infinite alternate;
        animation-delay: 1s;
        align-self: center;
        > div {
          width: 14px;
          height: 14px;
          background: #060c06;
          align-self: center;
          border-radius: 50%;
          position: relative;
          display: flex;
          flex-direction: column;
          justify-content: center;        
          animation: eye-2 3s ease-in-out infinite alternate;
          animation-delay: 1s;
          > div {
              //animation: eye-3 3s ease-in infinite alternate;
              animation-delay: 1s;
              top: -2px;
              left: 2px;
              position: relative;
              width: 3px;
              height: 3px;
              background: #e5e5e5;
              align-self: center;
              border-radius: 50%;
          }
        }
    }
    .left {
      grid-area: 3/3/4/4;
    }
    .right {
      grid-area: 3/5/4/6;
    }
    .mouth {
      background: rgba(255,211,199,0);
      border: solid #db9442;
      border-top: 0;
      grid-area: 5/3/6/6;
      position: relative;
      animation: mouth 1s ease-in infinite alternate;
    }
    
`;


function App() {
    return (
        <Container className='start'>
            <Smile >
                <div className='right'>
                    <div>
                        <div/>
                    </div>
                </div>
                <div className='left'>
                    <div>
                        <div/>
                    </div>
                </div>
                <div className='mouth'/>
            </Smile>
        </Container>
    );
}

export default App;


