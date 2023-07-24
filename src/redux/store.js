import { createStore } from 'redux';
import chatListReducer from './reducers';

const store = createStore(chatListReducer);

export default store;
