import React, { useState, useEffect } from "react";
import feed from "./Feed.module.css";
import { Avatar } from "@mui/material";
import InputOptions from "./InputOptions";
import PhotoIcon from "@mui/icons-material/Photo";
import SmartDisplayIcon from "@mui/icons-material/SmartDisplay";
import EventNoteIcon from "@mui/icons-material/EventNote";
import CalendarViewDayIcon from "@mui/icons-material/CalendarViewDay";
import Post from "./Post";
import { db } from "../firebase";
import firebase from "firebase/compat/app";
import { useSelector } from "react-redux";
import { selectUser } from "../../features/userSlice";
import FlipMove from 'react-flip-move'

const Feed = () => {
  const user = useSelector(selectUser);

  const [input, setInput] = useState("");
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    db.collection("posts")
    .orderBy("timestamp","desc")
    .onSnapshot((snapshot) => {
      setPosts(
        snapshot.docs.map((doc) => ({
          id: doc.id,
          data: doc.data(),
        }))
      );
    });
  }, []);

  const sendPost = (e) => {
    e.preventDefault();

    db.collection("posts").add({
      name: user.displayName,
      // userLike: user.displayName[],
      description: user.email,
      message: input,
      photoUrl: user.photoUrl || "",
      timestamp: firebase.firestore.FieldValue.serverTimestamp(),
    });
    setInput("");
  };

  return (
    <div className={feed.feed}>
      <div className={feed.feed_inputContainer}>
        <div className={feed.feed_input_avatar}>
          <Avatar className={feed.feed_avatar} src={user.photoUrl} >{user.email[0]} </Avatar>
          <div className={feed.feed_input}>
            <form>
              <input
                value={input}
                onChange={(e) => setInput(e.target.value)}
                type="text"
              />
              <button onClick={sendPost} type="submit">
                Post
              </button>
            </form>
          </div>
        </div>

        <div className={feed.feed_inputOptions}>
          <InputOptions Icon={PhotoIcon} title="Photo" color="#378FE9" />
          <InputOptions Icon={SmartDisplayIcon} title="Video" color="#5F9B41" />
          <InputOptions Icon={EventNoteIcon} title="Event" color="#C31D16" />
          <InputOptions
            Icon={CalendarViewDayIcon}
            title="Write article"
            color="#E16745"
          />
        </div>
      </div>

      {/* Posts */}
      <FlipMove>
      {posts.map(({ id, data: { name, description, message, photoUrl } }) => {
        return (
          <Post
            key={id}
            name={name}
            description={description}
            message={message}
            photoUrl={photoUrl}
          />
        );
      })}
      </FlipMove>
    </div>
  );
};

export default Feed;
