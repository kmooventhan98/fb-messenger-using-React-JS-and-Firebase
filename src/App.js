import { FormControl, Input, IconButton } from "@material-ui/core";
import React, { useState,useEffect } from "react";
import './App.css';
import Message from "./Message";
import db from './firebase';
import firebase from 'firebase';
import FlipMove from 'react-flip-move';
import SendIcon from '@material-ui/icons/Send'




function App() {
  const [input, setInput] = useState('')
  const [messages, setMessages] = useState([])
  const [username, setUsername] = useState('')

  useEffect(()=>{
    db.collection('messages')
    .orderBy('timestamp','desc')
    .onSnapshot(snapshot=>{
      setMessages(snapshot.docs.map(doc=>({id: doc.id, message: doc.data()})))
    })
  }, [])

  useEffect(() => {
   setUsername(prompt('Enter Your name'))
  }, [])

  const sendMessage=(event)=>{
   //all the logics to send message goes here
   event.preventDefault()
   db.collection('messages').add({
     message: input,
     username: username,
     timestamp: firebase.firestore.FieldValue.serverTimestamp()

   })

   setInput('')

  }

  return (
    <div className="App">
      <img src='https://facebookbrand.com/wp-content/uploads/2020/10/Logo_Messenger_NewBlurple-399x399-1.png?w=100&h=100' alt='Logo'/>
      <form className="app__form">
      <p>Welcome <b>{username}</b></p>
     <FormControl className="app__formControl">
      
      <Input value={input} onChange={event=>setInput(event.target.value)} placeholder='Write Here...' className="app__input"/>
    
    <IconButton
       type='submit'
       onClick={sendMessage}
       variant="contained"
       color="primary"
       disabled={!input}
       className="app__iconButton"
    >
      <SendIcon/>
    </IconButton>

      </FormControl>
     </form>
     <FlipMove>
    {messages.map(({message,id})=>(<Message key={id} message={message} username={username}/>))}
     </FlipMove>
    </div>
  );
}

export default App;
