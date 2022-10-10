import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import "../styles/post.css";
const Post = () => {
  const [postObject, setPostObject] = useState("");
  let { id } = useParams();
  useEffect(() => {
    axios.get(`http://localhost:3001/posts/byId/${id}`).then((response) => {
      setPostObject(response.data);
    });
  });
  return (
    <div className="mainBoxDiv">
      <div className="post">
        <div className="title">{postObject.title}</div>
        <div className="body">{postObject.postText}</div>
        <div className="footer">{postObject.username}</div>
      </div>
      <div>Comment Section</div>
    </div>
  );
};

export default Post;
