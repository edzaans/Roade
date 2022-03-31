import React, { useEffect, useState } from "react";
import MainScreen from "../../components/MainScreen";
import { Button, Card, Form } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { createPostAction } from "../../actions/postsActions";
import Loading from "../../components/Loading";
import ErrorMessage from "../../components/ErrorMessage";
import ReactMarkdown from "react-markdown";

function CreatePost({ history }) {
  const [company, setCompany] = useState("");
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [contact, setContact] = useState("");
  const [category, setCategory] = useState("");

  const dispatch = useDispatch();

  const postCreate = useSelector((state) => state.postCreate);
  const { loading, error, post } = postCreate;

  console.log("This is what got posted : " + post);

  const resetHandler = () => {
    setTitle("");
    setCategory("");
    setContent("");
  };

  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(createPostAction(company, title, content, contact, category));
    if (!company || !title || !content || !contact || !category) return;

    resetHandler();
    history.push("/posts");
  };

  useEffect(() => {}, []);

  return (
    <MainScreen title="Create a Post">
      <Card>
        <Card.Header>Create new Post</Card.Header>
        <Card.Body>
          <Form onSubmit={submitHandler}>
            {error && <ErrorMessage variant="danger">{error}</ErrorMessage>}
            {/* Sets company NAME */}
            <Form.Group controlId="title">
              <Form.Label>Company name</Form.Label>
              <Form.Control
                type="text"
                value={company}
                placeholder="Enter company name"
                onChange={(e) => setCompany(e.target.value)}
              />
            </Form.Group>
            {/*  */}
            <Form.Group controlId="title">
              <Form.Label>Job title</Form.Label>
              <Form.Control
                type="text"
                value={title}
                placeholder="Enter the title"
                onChange={(e) => setTitle(e.target.value)}
              />
            </Form.Group>

            {/* Sets company CONTACT */}
            <Form.Group controlId="title">
              <Form.Label>Company contact email </Form.Label>
              <Form.Control
                type="email"
                value={contact}
                placeholder="Enter contact email"
                onChange={(e) => setContact(e.target.value)}
              />
            </Form.Group>
            {/*  */}

            <Form.Group controlId="content">
              <Form.Label>Category</Form.Label>
              <Form.Control
                type="content"
                value={category}
                placeholder="Enter the Category"
                onChange={(e) => setCategory(e.target.value)}
              />

              <Form.Group controlId="content">
                <Form.Label>Job description</Form.Label>
                <Form.Control
                  as="textarea"
                  value={content}
                  placeholder="Enter the content"
                  rows={4}
                  onChange={(e) => setContent(e.target.value)}
                />
              </Form.Group>
              {content && (
                <Card>
                  <Card.Header>Post Preview</Card.Header>
                  <Card.Body>
                    <ReactMarkdown>{content}</ReactMarkdown>
                  </Card.Body>
                </Card>
              )}
            </Form.Group>
            {loading && <Loading size={50} />}
            <Button type="submit" variant="primary">
              Create Post
            </Button>
            <Button className="mx-2" onClick={resetHandler} variant="danger">
              Reset All
            </Button>
          </Form>
        </Card.Body>

        <Card.Footer className="text-muted">
          Creating on - {new Date().toLocaleDateString()}
        </Card.Footer>
      </Card>
    </MainScreen>
  );
}

export default CreatePost;
