import logo from './logo.svg';
import './App.css';
import Form from './components/Form'

function App() {
  return (
    <div className="App">
      <header className="App-header row" style={{ 
      backgroundColor: "white",       
      backgroundImage: "url(" + "https://hellofuture.orange.com/app/uploads/2018/01/Intro-HELLO-FUTURE-1920x1080_v2.gif" + ")",
      backgroundPosition: 'center',
      backgroundSize: 'cover',
      backgroundRepeat: 'no-repeat'}} >
      <div className="col-md-10" >
        <Form />
      </div>
      </header>
    </div>
  );
}

export default App;
