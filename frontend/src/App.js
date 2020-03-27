import React from 'react';
// import Header from './Header';

import './global.css';

import Routes from './routes';

function App() {
  //const [counter, setCounter] = useState(0);

  // function incrementar(){
  //   setCounter(counter+1);
  //   //console.log(counter);
  // }

  return (
    <Routes />
    // <div>
    // {/* // <Header title="Semana omnistack" /> */}
    // {/* <Header>Contado: {counter}</Header>
    // <button onClick={incrementar}>Incrementar</button> */}
    // </div>
  );
}

export default App;
