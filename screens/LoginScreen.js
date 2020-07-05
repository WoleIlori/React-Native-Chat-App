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
	
	
	
	//sole purpose of components is to render things to the UI
	render(){
		return(
			<View style={styles.container}>
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
})