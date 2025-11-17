import logo from './logo.svg';
import './CSS/App.css';
import Header from './components/header';
import Select from './components/Select';

function App() {
  return (
    <div className='page'>
      <Header />
      <div className='container'>
        <Select />
      </div>
    </div>
  );
}

export default App;
