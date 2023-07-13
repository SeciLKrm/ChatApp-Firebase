import { useEffect, useState } from "react";
import {
  addDoc,
  collection,
  onSnapshot,
  orderBy,
  query,
  serverTimestamp,
  where,
} from "firebase/firestore";
import { db, auth } from "../firebase/firebaseConfig";

export default function Chat({ room }) {
  const [messages, setMessages] = useState([]);
  const messagesDb = collection(db, "messages");
  //   console.log(auth);
  const [text, setText] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();

    addDoc(messagesDb, {
      text,
      user: auth.currentUser.displayName,
      room,
      createdAt: serverTimestamp(),
    });

    setText("");
  };
  useEffect(() => {
    const queryMessage = query(
      messagesDb,
      where("room", "==", room),
      orderBy("createdAt")
    );
    onSnapshot(queryMessage, (snapshot) => {
      console.log(snapshot);
      let comingMessages = [];
      snapshot.forEach((doc) => {
        // console.log(doc.data);
        comingMessages.push(doc.data());
        setMessages(comingMessages);
      });
    });
  }, []);
  console.log(messages);
  return (
    <div className="chat">
      <div className="chat-info">
        <p>{auth.currentUser.displayName} </p>
        <p>{room} </p>
        <a href="/">Farklı Oda</a>
      </div>
      <div className="messages">
        {messages.map((message) => (
          <>
            {auth.currentUser.displayName === message.user ? (
              <p className="user-message"> {message.text}</p>
            ) : (
              <p className="sender-message">
                <span> {message.user} </span>
                <span>{message.text} </span>
              </p>
            )}
          </>
        ))}
      </div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={text}
          placeholder="Mesajınızı Yazınız..."
          onChange={(e) => setText(e.target.value)}
        />
        <button>Gönder</button>
      </form>
    </div>
  );
}
