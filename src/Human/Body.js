import React from 'react';
import styled from "styled-components";

let bodyColor = '#faef97';
let shortsColor = '#0f53a6';
let shirtColor = '#c22eff';
const Container = styled.div`
  display: grid;
  position: absolute;
  top: 0;
  left: 0;
`;

const Smile = styled.div`
    background: ${bodyColor};
    z-index: 101;
    width: 170px;
    height: 200px;
    transform: rotate(-10deg);
    border-radius: 50%;
    display: grid;
    box-sizing: border-box;
    border: 2px solid #e2aa48;
    grid-area: 1/1/2/2;
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
const Main = styled.div`
    box-sizing: border-box;
    padding: 0;
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: start;
`;

const Decoration = styled.div`
    display: flex;
    flex-direction: column;
    text-align: left; 
    > div {
      background: ${bodyColor};
      width: 30px;
      border: 0;
      border-radius: 50px;
      position: absolute;
    }
    .foot {
      height:150px;
      transform-origin: 50% 15px;
      width: 30px;
      border: 0;
      border-radius: 50px;
      position: absolute;
      z-index: 10;
    }
    .arm {
      height:100px;
      transform-origin: 50% 15px;
      width: 30px;
      border: 0;
      border-radius: 50px;
      position: absolute;
      z-index: 10;
    }
    .body {
      height:230px;
      width: 80px;
      top: 180px;
      left: 50px;
      display: flex;
      z-index: 100;
      flex-direction: column;
      justify-content: space-between;
      box-sizing: border-box;
      > div {
        align-self: center;
        position: relative;
      }
      > :nth-child(2){
        display: flex;
        flex-direction: column;
        justify-content: flex-end;
        height: 30%;
        width: 100%;
        border-radius: 0 0 50px 50px;
        border-top: 2px solid #373737 ;
        background-color: ${shortsColor};    
      }
      > :first-child{
        display: flex;
        flex-direction: column;
        box-sizing: border-box;
        height: 70%;
        width: 100%;
        border-radius:50px 50px 0 0;
        border: 1px solid #373737 ;
        border-bottom: 0;
        background-color: ${shirtColor};    
      }
    }
    
    .arm-left-top {
        background: ${bodyColor};
        transform: rotate(81deg);
        top: 20px;
        left: 0; 
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        animation: arm-left-top 1s infinite;
        > div {
          position: relative;
          align-self: center;
          margin-bottom: 15px;
        }
        > :first-child {
          margin-bottom: 0;
          height: 50%;
          width: 120%;
          background: ${shirtColor};
          position: relative;
          top: -2px;
          border-radius: 50px 50px 0 0;
          border-bottom: 1px solid #373737;
        }
    }
    .arm-right-top {   
        background: ${bodyColor};
        top: 15px;
        left: 50px;  
        transform: rotate(-99deg);
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        animation: arm-right-top 1s infinite;
        > div {
          position: relative;
          align-self: center;
          margin-bottom: 15px;
        }
        > :first-child {
          margin-bottom: 0;
          height: 50%;
          width: 120%;
          background: ${shirtColor};
          border-radius: 50px 50px 0 0;
          border-bottom: 1px solid #373737;
          position: relative;
          top: -2px;
        }
    }
    .arm-left-bottom {
        animation: arm-left-bottom 1s infinite;
        transform: rotate(15deg);
        top: -15px;
        left: -15px;
        background: ${bodyColor};
        width: 30px;
        border: 0;
        border-radius: 50px;
        position: absolute;
    }
    .arm-right-bottom {     
        animation: arm-right-bottom 1s infinite;
        transform: rotate(-15deg);
        top: -15px;
        left: -15px;
        background: ${bodyColor};
        width: 30px;
        border: 0;
        border-radius: 50px;
        position: absolute;
    }
    .foot-left-top {
        animation: foot-left-top 1s infinite;
        background: ${bodyColor};
        width: 30px;
        position: absolute;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        z-index: 95;
        > div {
          position: relative;
          align-self: center;
          margin-bottom: 15px;
        }
        transform: rotate(30deg);
        > :first-child {
          height: 50%;
          width: 120%;
          background: ${shortsColor};
          border-radius: 50px 50px 0 0;
          border-bottom: #6f6f6f solid 1px;
        }
        top: 30px;
        left: 10px;
    }
    .foot-right-top {
        animation: foot-right-top 1s infinite;
        background: ${bodyColor};
        width: 30px;
        transform: rotate(-30deg);
        top: 30px;
        left: 40px;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        z-index: 90;
        > div {
          position: relative;
          align-self: center;
          margin-bottom: 15px;
        }
        > :first-child {
          height: 50%;
          width: 120%;
          background: ${shortsColor};
          border-radius: 50px 50px 0 0;
          border-bottom: #6f6f6f solid 1px;
          position: relative;
          top: -1px
        }
    }
    .foot-left-bottom {
        animation: foot-left-bottom 1s infinite;
        top:-15px;
        left: -15px;
        transform: rotate(30deg);
        background: ${bodyColor};
        width: 30px;
        border: 0;
        border-radius: 50px;
        position: absolute;
        display: flex;
        flex-direction: column;
        justify-content: flex-end;
        padding-bottom: 15px;
        > div {
          position: relative;
          top: -15px;
          left: -15px;
          width: 0;
          height: 0;
          align-self: center;
        }
    }
    .foot-right-bottom {
        animation: foot-right-bottom 1s infinite;
        top:-15px;
        left: -15px;
        transform: rotate(30deg);
        background: ${bodyColor};
        width: 30px;
        border: 0;
        border-radius: 50px;
        position: absolute;
        display: flex;
        flex-direction: column;
        justify-content: flex-end;
        padding-bottom: 15px;
        > div {
          position: relative;
          top: -15px;
          left: -15px;
          width: 0;
          height: 0;
          align-self: center;
        }
    }
    .ream {
      width: 30px;
      height: 50px;
      border-radius: 50%;
      border: 0;
      background-color: ${bodyColor};
      transform: rotate(-90deg);
      transform-origin: 50% 15px;
      
    }
    
    .ream-left {
      animation: ream-left 1s infinite;
    }
    .ream-right {
      animation: ream-right 1s infinite;
    }
    
    
`;


function Human() {
    return (
        <Main>
            <Container className='start'>
                <Smile>
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
            <Decoration>
                <div className='body'>
                    <div>
                        <div className='arm arm-left-top'>
                            <div/>
                            <div>
                                <div className='arm arm-left-bottom'/>
                            </div>
                        </div>

                        <div className='arm arm-right-top'>
                            <div/>
                            <div>
                                <div className='arm arm-right-bottom'/>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div className='foot foot-left-top'>
                            <div/>
                            <div>
                                <div className='foot foot-left-bottom'>
                                    <div>
                                        <div className='ream ream-left'/>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className='foot foot-right-top'>
                            <div/>
                            <div>
                                <div className='foot foot-right-bottom'>
                                    <div>
                                        <div className='ream ream-right'/>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Decoration>
        </Main>
    );
}

export default Human;
