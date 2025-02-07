import React, { useState } from 'react';
import './Game.css';
import Board from './Board.jsx';

let ply1 = '';
let ply2 = '';

const Game = () => {
    const [showPlayButton, setShowPlayButton] = useState(true);
    const [showXOButtons, setShowXOButton] = useState(false);
    const [showLogo, setShowLogo] = useState(true);
    const [showBoard, setShowBoard] = useState(false);
    const [value, setValue] = useState(Array(9).fill(''));
    const [count,setcount]=useState(1);

    const choice = () => {
        setShowPlayButton(false);
        setShowXOButton(true);
        setShowLogo(false);
    }
    const setMove = (st) => {
        setShowXOButton(false);
        setShowBoard(true);
        if (st === 'X') {
            ply1 = 'X';
            ply2 = 'O';
        } else {
            ply1 = 'O';
            ply2 = 'X';
        }
    }

    const showXO = (n) => {
        let updateArray = [...value];
        if (value[n]!==''){
            alert("Alredy Filled");
            return
        }
        if (count % 2 != 0) {
            updateArray[n] = ply1;
            setValue(updateArray);
        }
        else {
            updateArray[n] = ply2;
            setValue(updateArray);
        }
        setcount(count+1);
        if (checkWin(updateArray)){
            alert("Winner");
            updateArray.fill('');
            setValue(updateArray);
        };
    };
    let flag=false;
    const checkWin = (value) =>{
        const condition =[[0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]];
        condition.forEach(i => {
            if(value[i[0]]!=='' && value[i[1]]!=='' && value[i[2]]!==''){
                if(value[i[0]]==value[i[1]] && value[i[1]]==value[i[2]]){
                    flag=true;
                }
            }
        })
        return flag;
    }

    return (
        <div>
            <div className="container-fluid">
                <div className="row">
                    <div className="col-md-4 div-1"></div>
                    <div className="col-md-4 front_page">
                        <h2 className="title">Tic <span>Tac </span>Toe</h2>
                        {showLogo && (
                            <div className="logo">
                                <h3>X</h3>
                                <h3>O</h3>
                            </div>
                        )}
                        {showPlayButton && (
                            <div className="btn">
                                <button onClick={choice}>Play</button>
                            </div>
                        )}
                        {showXOButtons && (
                            <div className='ch-btn'>
                                <button className='btn-x' onClick={() => setMove("X")}>X</button>
                                <button className='btn-o' onClick={() => setMove("O")}>O</button>
                            </div>
                        )}
                        {showBoard && (
                            <div className="board">
                                <div className="row-1">
                                    <button onClick={() => showXO(0)}>{value[0]}</button>
                                    <button onClick={() => showXO(1)}>{value[1]}</button>
                                    <button onClick={() => showXO(2)}>{value[2]}</button>
                                </div>
                                <div className="row-2">
                                    <button onClick={() => showXO(3)}>{value[3]}</button>
                                    <button onClick={() => showXO(4)}>{value[4]}</button>
                                    <button onClick={() => showXO(5)}>{value[5]}</button>
                                </div>
                                <div className="row-3">
                                    <button onClick={() => showXO(6)}>{value[6]}</button>
                                    <button onClick={() => showXO(7)}>{value[7]}</button>
                                    <button onClick={() => showXO(8)}>{value[8]}</button>
                                </div>
                            </div>
                        )}
                    </div>
                    <div className="col-md-4 div-3"></div>
                </div>
            </div>
        </div>
    );
}

export default Game;
