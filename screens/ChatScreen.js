import React from 'react'
import {Button, ScrollView, StyleSheet, TextInput, View} from 'react-native'
import {Constants} from 'expo'
import {connect} from 'react-redux'
import MessageList from '../components/MessageList'
import {updateChat} from '../redux/actions'



class ChatScreen extends React.Component{
	state = {
		message: '',
	}

	handleNewMessage = () =>{
		//this.props.updateChat(msgObj)
		const msgObj = {
			key: this.props.chat.length,
			sender:this.props.user,
			message:this.state.message, 
			date: `${new Date().toLocaleDateString()} ${new Date().toLocaleTimeString()}`,
		}
		this.props.updateChat(msgObj)
		this.setState({message:''})
	}
	
	handleMsgChange = message => {
		this.setState({message})
	}
	
	
	
	

	render(){
		return(
			<View  style={{paddingTop:20,}}>
				<MessageList 
				  chat={this.props.chat}
				/>
				<View style={{flexDirection:"row", alignItems:"center"}}>
				  <TextInput
					style={{width: 200}}  
					value={this.state.message}
					onChangeText={this.handleMsgChange}
					placeholder="Message"
				  />
				  <Button
					title="Send"
					onPress={this.handleNewMessage}
				  />
				</View>
			</View>
			)
	}
}

const mapPropsToState = state =>({
  user: state.user,
  other: state.other,
	chat:state.chat,
})

export default connect(mapPropsToState,{updateChat})(ChatScreen)
		
