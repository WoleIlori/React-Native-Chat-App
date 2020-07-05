import React from 'react';
import {Button, ScrollView, StyleSheet, Text, TextInput, View} from 'react-native';
import {Constants} from 'expo'




//every time state changes, render gets called again
export default class LoginScreen extends React.Component{
	state = {
		mcn: '',
		password: '',
		loginErr:'',
	}
	
	//ensure mcn is a number
	handleMcnChange = mcn => {
		if(+mcn >= 0 && mcn.length <= 7){
			this.setState({mcn})
		}
		
	}
	
	handlePasswordChange = password => {
		this.setState({password})
	}
	
	handleSubmit = ()=>{
    this.props.navigation.navigate("Chat")
	}
	
	login = async () => {
		try{
			//const success = await getLogin(this,state.mcn)
			this.props.navigation.navigate("ChatScreen")
		}catch(err){
			this.setState({loginErr:"Login failed"})
		}
	}
	
	//sole purpose of components is to render things to the UI
	render(){
		return(
			<View style={styles.container}>
				<TextInput
          keyboardType="numeric"
          style={styles.input}
          value={this.state.mcn}
					onChangeText={this.handleMcnChange}
					placeholder="Name"
        />
        <TextInput
          keyboardType="password"
          style={styles.input}
          value={this.state.password}
					onChangeText={this.handlePasswordChange}
					placeholder="Password"
        />
        <Button
          title="Login"
          onPress={this.handleSubmit}
         />
			</View>
		)
	}
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#ffff',
    padding:30,
  },
  input: {
    margin:10,
    borderRadius:5,
    borderWidth:1,
    padding:10,
  }})