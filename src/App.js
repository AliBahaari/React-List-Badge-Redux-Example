import './App.css';
import Navbar from './components/Navbar';
import Content from './components/Content';
import { Provider } from 'react-redux';
import { store } from './redux/store';

function App() {
  return (
    <Provider store={store}>
      <div className="app">
        <Navbar />
        <Content />
      </div>
    </Provider>
  );
}

export default App;
