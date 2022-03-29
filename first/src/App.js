import { useState } from 'react';
import Board from './Board';
import Button from './Button';
import './css/App.css';
import LogoImg from './assets/logo.png';

function random(n) {
  return Math.ceil(Math.random() * n);
}

function App() {
  const [myHistory, setMyHistory] = useState([]);
  const [otherHistory, setOtherHistory] = useState([]);

  const handleRollClick = () => {
    const nextMyNum = random(6);
    const nextOtherNum = random(6);
    setMyHistory([...myHistory, nextMyNum]);
    setOtherHistory([...otherHistory, nextOtherNum]);
  };

  const handleClearClick = () => {
    setMyHistory([]);
    setOtherHistory([]);
  };

  return (
    <div className="Container">
    <div className="App">
        <img src={LogoImg} alt='주사위게임'/>
        <p>주사위 게임</p>
        <div>
        <Button className="App-button" color='blue' onClick={handleRollClick}>던지기</Button>
        <Button className="App-button" color='red' onClick={handleClearClick}>처음부터</Button>
        </div>

        <div className="blue">
            <Board name="나" color="blue" gameHistory={myHistory} />
        </div>
        <div className="red">
            <Board name="상대" color="red" gameHistory={otherHistory} />
        </div>
    </div>
    </div>
  );
}

export default App;
