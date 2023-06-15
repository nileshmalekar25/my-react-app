import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import AppHeader from './Test/AppHeader';
import AppBody from './Test/AppBody';
function App() {
  return (
  <>
<div><AppHeader/>
<AppBody/>
<AppFooter/></div>

  </>
  );
}





function AppFooter(){
  return(

    <>

    <h1>AppFooter</h1>
    </>
  
  )
}


export default App;
