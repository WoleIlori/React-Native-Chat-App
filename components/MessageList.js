import React from 'react';
import {FlatList} from 'react-native'
import PropTypes from 'prop-types'
import MessageItem from './MessageItem'


const renderItem = ({item}) =>(<MessageItem { ...item}/>)

const MessageList = props =>(
  <FlatList
    data={props.chat}
    renderItem={renderItem}
  />
)

MessageList.propTypes = {
	chat: PropTypes.array,
}

export default MessageList