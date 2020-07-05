import React from 'react'
import {Button, ScrollView, StyleSheet, Text, View} from 'react-native'
import {Constants} from 'expo'
import {createAppContainer, createSwitchNavigator} from 'react-navigation'
import LoginScreen from './screens/LoginScreen'
import ChatScreen from './screens/ChatScreen'
import {Provider} from 'react-redux'
import store from './redux/store'

export default class App extends React.Component{
	state = {
		socket: null,
		mcn: '',
	}
	



	render(){
		return(
			<Provider store={store}>
				<AppNavigator screenProps={{socket: this.state.socket, mcn: this.state.mcn}}/> 
			</Provider>
		)
	
	}
}

const Navigator = createSwitchNavigator({
  Login: LoginScreen,
	Chat: ChatScreen
  },{
      initialRouteName: "Login",
  })

const AppNavigator = createAppContainer(Navigator)

