import React from 'react';
import Counter from './components/Counter';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import reducer from './reducers/index';

const store = createStore(reducer);

const App = () => {
  return (
    <Provider store={store}>
      <Counter />
    </Provider>
  );
}

export default App;
