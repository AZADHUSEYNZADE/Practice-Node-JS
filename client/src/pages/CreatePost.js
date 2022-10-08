import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import axios from "axios";
import { useEffect, useState } from "react";
import "../styles/create-post.css";
const CreatePost = () => {
  const initialValues = {
    title: "",
    postText: "",
    username: "",
  };

  const validationSchema = Yup.object().shape({
    title: Yup.string().required("You must add title"),
    postText: Yup.string().required(),
    username: Yup.string().min(3).max(15).required(),
  });

  const onSubmit = (data) => {
    axios.post("http://localhost:3001/posts", data).then((response) => {
      console.log("workedd");
    });
  };

  return (
    <div className="mainFormDiv">
      <Formik
        initialValues={initialValues}
        onSubmit={onSubmit}
        validationSchema={validationSchema}
      >
        <Form>
          <div>
            <label>Title:</label>
            <ErrorMessage name="title" component="p" />
            <Field id="inputCreatePost" placeholder="Add title" name="title" />
          </div>

          <div>
            <label>PostText:</label>
            <ErrorMessage name="postText" component="p" />
            <Field
              id="inputCreatePost"
              placeholder="Add postText"
              name="postText"
            />
          </div>

          <div>
            <label>Username:</label>
            <ErrorMessage name="username" component="p" />
            <Field
              id="inputCreatePost"
              placeholder="Add Username"
              name="username"
            />
          </div>

          <button type="submit">Create Post</button>
        </Form>
      </Formik>
    </div>
  );
};

export default CreatePost;
