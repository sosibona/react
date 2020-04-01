import React from 'react';

const Login = props => {
  return (
    <button 
      className="login btn" 
      onClick={props.login}
    >
      Login
    </button>
  )
}

export default Login;