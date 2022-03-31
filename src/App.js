import './App.css';

function App() {
  return (
   
    <div className='container py-5'>
      <div className='row'>
        <div className='col-md-6'>
          <div className='card'>
            <div className='card-header'>
              <h3>Hello Dojo!</h3>
              <h6>Things I need to do:</h6>
            </div>  
            <div className='card-body'>
              <ul className='list-group'>
                <li className='list-group-item'>Learn React</li>
                <li className='list-group-item'>Climb Mt. Everest</li>
                <li className='list-group-item'>Run a marathon</li>
                <li className='list-group-item'>Feed the dogs</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
   
  );
}

export default App;
