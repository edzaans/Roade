import React, { useEffect, useState } from "react";
import axios from "axios";
import MainScreen from "../../components/MainScreen";
import { Button, Card, Form } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { deletePostAction, updatePostAction } from "../../actions/postsActions";
import Loading from "../../components/Loading";
import ErrorMessage from "../../components/ErrorMessage";
import ReactMarkdown from "react-markdown";

function SinglePost({ match, history }) {
  const [company, setCompany] = useState();
  const [title, setTitle] = useState();
  const [content, setContent] = useState();
  const [contact, setContact] = useState();
  const [category, setCategory] = useState();
  const [date, setDate] = useState("");

  const dispatch = useDispatch();

  const postUpdate = useSelector((state) => state.postUpdate);
  //const { loading, error } = postUpdate;

  useEffect(() => {
    const fetching = async () => {
      const { data } = await axios.get(`/api/posts/${match.params.id}`);
      console.log("data received");
      setCompany(data.company);
      setTitle(data.title);
      setContent(data.content);
      setContact(data.contact);
      setCategory(data.category);
      setDate(data.updatedAt);
    };

    fetching();
  }, [match.params.id, date]);

  const resetHandler = () => {
    setCompany("");
    setTitle("");
    setCategory("");
    setContact("");
    setContent("");
  };

  const updateHandler = (e) => {
    e.preventDefault();
    dispatch(
      updatePostAction(
        match.params.id,
        company,
        title,
        content,
        contact,
        category
      )
    );
    if (!company || !title || !content || !contact || !category) return;

    resetHandler();
    history.push("/posts");
  };

  return (
    <MainScreen title="Edit Post">
      <Card>
        <Card.Header>Edit your Post</Card.Header>
        <Card.Body>
          <Form onSubmit={updateHandler}>
            {/* {loadingDelete && <Loading />}
            {error && <ErrorMessage variant="danger">{error}</ErrorMessage>}
            {errorDelete && (
              <ErrorMessage variant="danger">{errorDelete}</ErrorMessage>
            )} */}

            {/*  */}
            <Form.Group controlId="company">
              <Form.Label>Company name</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter company name"
                value={company}
                onChange={(e) => setCompany(e.target.value)}
              />
            </Form.Group>

            <Form.Group controlId="title">
              <Form.Label>Title</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter the title"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
              />
            </Form.Group>

            {/* Code for POST preview, uncomment if needd!!!!! */}
            {/*     {content && (
              <Card>
                <Card.Header>Post Preview</Card.Header>
                <Card.Body>
                  <ReactMarkdown>{content}</ReactMarkdown>
                </Card.Body>
              </Card>
            )} */}

            {/*  */}
            <Form.Group controlId="contact">
              <Form.Label>Company email</Form.Label>
              <Form.Control
                type="email"
                placeholder="Enter company email"
                value={contact}
                onChange={(e) => setContact(e.target.value)}
              />
            </Form.Group>

            <Form.Group controlId="content">
              <Form.Label>Content</Form.Label>
              <Form.Control
                as="textarea"
                placeholder="Enter the content"
                rows={4}
                value={content}
                onChange={(e) => setContent(e.target.value)}
              />
            </Form.Group>

            <Form.Group controlId="category">
              <Form.Label>Category</Form.Label>
              <Form.Control
                className="mb-5"
                type="content"
                placeholder="Enter the Category"
                value={category}
                onChange={(e) => setCategory(e.target.value)}
              />
            </Form.Group>
            {Loading && <Loading size={50} />}
            <Button variant="primary" type="submit">
              Update Post
            </Button>
            <Button
              className="mx-2"
              variant="danger"
              /* onClick={() => deleteHandler(match.params.id)} */
            >
              Delete Post
            </Button>
          </Form>
        </Card.Body>

        <Card.Footer className="text-muted">
          Updated on - {date.substring(0, 10)}
        </Card.Footer>
      </Card>
    </MainScreen>
  );
}

export default SinglePost;
