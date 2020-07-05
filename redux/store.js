import {createStore, applyMiddleware} from 'redux'
import reducer from './reducer'
import {updateChat} from './actions'
import messages from '../generatechat'


const DEFAULT_STATE = { 
  user:"John",
  other: "Kevin",
  chat:messages,
}



const store = createStore(reducer, DEFAULT_STATE)

export default store