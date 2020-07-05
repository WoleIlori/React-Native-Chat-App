const HISTORY_LENGTH = 4

let key = 1

const messages = ["How are you doing?", "Thanks", "When are you free?", "Sorry, I am busy today", "Do you have any plans this weekend?", "I'm visiting my parents", "I'm at an event ", "Im going shopping today", "I'm meeting up with my friends", "Great!", "See you soon",]

const users = ["Me", "Kevin"]

const rand = (max, min=0) => Math.floor(Math.random() * (max-min + 1)) + min

const chat_date = ["14/06/2020 17:00 PM","14/06/2020 17:22 PM", "14/06/2020 17:36 PM", "14/06/2020 17:48 PM", "14/06/2020 18:12 PM"]

const add_keys = (val, key)=>({key:key, ...val})

const createChatMsg = () =>({
  key:key,
  sender: users[rand(users.length - 1)],
  message: messages[rand(messages.length-1)],
  date:chat_date[key++],
})

export default Array.from({length:HISTORY_LENGTH}, createChatMsg)




