/*const baseButtonStyle = {
    padding: '14px 27px',
    outline: 'none',
    cursor: 'pointer',
    borderRadius: '9999px',
    fontSize: '17px',
  }; //공통되는 특징들
  
  const blueButtonStyle = {
    ...baseButtonStyle, //공통 부분
    border: 'solid 1px #7090ff',
    color: '#7090ff',
    backgroundColor: 'rgba(0, 89, 255, 0.2)',
  };
  
  const redButtonStyle = {
    ...baseButtonStyle, //공통 부분
    border: 'solid 1px #ff4664',
    color: '#ff4664',
    backgroundColor: 'rgba(255, 78, 78, 0.2)',
  };*/

  import './css/Button.css';

function Button({color='blue',children,onClick,className=''}){
    const classNames=`Button ${color} ${className}`;
    return (
    <button className={classNames} onClick={onClick}>
        {children}</button>
    );
}

export default Button;