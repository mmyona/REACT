/*import ReactDOM from 'react-dom';

const WINS = {
  rock: 'scissor',
  scissor: 'paper',
  paper: 'rock',
};

function getResult(left, right) {
  if (WINS[left] === right) return '승리';
  else if (left === WINS[right]) return '패배';
  return '무승부';
}

function handleClick() {
  console.log('가위바위보!');
}

const me = 'rock';
const other = 'scissor';
const imagestyle={
  height:'100px',
  width:'100px',
};

ReactDOM.render(
  <>
    <h1>가위바위보</h1>
    <img src='./img/dog.jpg' alt='play!' style={imagestyle}/>
    <h2>{getResult(me, other)}</h2>
    <button onClick={handleClick}>가위</button>
    <button onClick={handleClick}>바위</button>
    <button onClick={handleClick}>보</button>
  </>,
  document.getElementById('root')
);*/



/*function Hello(){ //리액트 컴포넌트 (꼭 대문자로 시작해야 함)
  return <h1>hello react!</h1>;
}

const element=(
  <>
  <Hello />
  <Hello />
  <Hello />
  </>
);*/

//프로젝트 시작
import ReactDOM from 'react-dom';
import App from './App';
import './css/index.css'; //css 파일 불러옴

ReactDOM.render(<App/>,document.getElementById('root'));

