import logo from './logo.svg';
import './App.css';
function App() {
  const [inputFields, setInputFields] = useState([
    { name: '', age: '' }
  ])
  const handleFormChange = () => {
    
  }
  <div key={index}>
              <input
                name='name'
                placeholder='Name'
                value={input.name}
                onChange={event => handleFormChange(index, event)}
              />
              <input
                name='age'
                placeholder='Age'
                value={input.age}
                onChange={event => handleFormChange(index, event)}
              />
  </div>
  const addMethod = () =>{
    let newfield = { name: '', age: '' }

    setInputFields([...inputFields, newfield])
  }
  return (
    <div className="App">
      <form>
        <div>
          <button onClick={addMethod}></button>
        </div>
      </form>
    </div>
  );
}

export default App;
