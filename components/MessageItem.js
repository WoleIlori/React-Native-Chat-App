import React from 'react';
import {StyleSheet, Text, View} from 'react-native'

const OTHER = "Kevin"

const handleDateDisplay = date=>{
  const split = date.split(" ")
  if(split[0] === new Date().toLocaleDateString()){
    return split[1]
  }
  return date
}

const MessageItem = props => (
  //Patient Name
  <View style={{justifyContent: 'space-between', flexDirection: 'row'}}>
            {props.sender === OTHER && (
                <View style={{width: 50}}/>
            )}

            <View>
              <View style={props.sender === OTHER ? [styles.messageBubble,styles.messageBubbleRight]: [styles.messageBubble,styles.messageBubbleLeft]}>
                <Text style={{color:"white"}}>
                  {props.message}
                </Text>
              </View>
              <Text>{handleDateDisplay(props.date)}</Text>
            </View>
          

            {props.sender !== OTHER && (
                <View style={{width: 50}}/>
            )}
    </View>

	
)

const styles = StyleSheet.create({
   //MessageBubble
  messageBubble: {
      borderRadius: 5,
      marginTop: 8,
      paddingHorizontal: 10,
      paddingVertical: 5,
      flexWrap: 'wrap'
  },
  messageBubbleRight: {
    backgroundColor: '#d5d8d4',
    
  },
  messageBubbleLeft: {
    backgroundColor: '#66db30',
  
  },
})

export default MessageItem
