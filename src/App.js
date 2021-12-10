import './App.css';
import Counter from './components/Counter';
import { Provider } from 'react-redux';
import store from './redux/store';

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        using mapStateToProps, mapDispatchToProps 
        <Counter />
      </div> 
    </Provider>  
  );
}

export default App;
