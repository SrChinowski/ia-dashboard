
import './App.css';
import Dashboard from './pages/dashboard';

import {Provider} from 'react-redux';
import store from './store';

function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <Dashboard></Dashboard> 
      </Provider>
    </div>
  );
}

export default App;
