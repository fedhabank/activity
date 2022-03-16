
import {createStore, combineReducers, compose, applyMiddleware} from 'redux';
import { activityReducer } from './activity'

//@redux-helper/rootReducer
const rootReducer = combineReducers({
	activity: activityReducer
});

export type StateType = ReturnType<typeof rootReducer>;
export function configureStore() {
	const middleware = [];
	// middleware.push(thunk);
  
	// if (process.env.NODE_ENV !== 'production') {
	//   middleware.push(createLogger());
	// }
  
	const store = createStore(rootReducer, compose(applyMiddleware(...middleware)));
	return store;
}

