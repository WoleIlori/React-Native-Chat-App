import {UPDATE_CHAT} from './actions'
import {combineReducers} from 'redux'

//helper functions
const merge = (prev, next) => Object.assign({}, prev, next)


//mini reducer
const chatReducer = (state=[], action) =>{
	//update existing chat object
	if(action.type === UPDATE_CHAT) return [...state,action.payload]

	return state
}


//better version
const reducer = combineReducers({
	chat: chatReducer,
})

export default reducer