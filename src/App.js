import {Provider} from 'react-redux';
import store from './store';
import Todolist from './Todolist';
function App() {
  return (
    <Provider store={store}>
    <div>
      <h1>Todolist</h1>
      <Todolist></Todolist>
    </div>
    </Provider>
  );
}

export default App;
