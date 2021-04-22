import {applyMiddleware, combineReducers, createStore} from 'redux';
import { PhimReducer } from './reducers/PhimReducer';
import reduxThunk from 'redux-thunk'
import { NguoiDungReducer } from './reducers/NguoiDungReducer';

const rootReducer = combineReducers({
    //Chứa các state của ứng dụng
    PhimReducer,
    NguoiDungReducer
})

export const store = createStore(rootReducer,applyMiddleware(reduxThunk) );

