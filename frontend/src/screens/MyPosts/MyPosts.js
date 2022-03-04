import axios from "axios";
import { useEffect } from "react";
import MainScreen from "../../components/MainScreen";
import { Link, useHistory } from "react-router-dom";
import Loading from "../../components/Loading";
import ErrorMessage from "../../components/ErrorMessage";
import { Accordion, Badge, Button, Card } from "react-bootstrap";
import { useSelector, useDispatch } from "react-redux";
import { listPosts } from "../../actions/postsActions";

function MyPosts() {
  const dispatch = useDispatch();

  const postList = useSelector((state) => state.postList);
  const { loading, posts, error } = postList;

  const postCreate = useSelector((state) => state.postCreate);
  const { success: successCreate } = postCreate;

  // Get username thats logged in from State
  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;

  // Delete POST function
  const deleteHandler = (id) => {
    if (window.confirm("Are you sure you want to delete?")) {
      console.log("Deleted");
    }
  };

  console.log(posts);

  const history = useHistory();

  // Create useEffect when component is rendered
  useEffect(() => {
    // Pass async function
    dispatch(listPosts());
    if (!userInfo) {
      history.push("/");
    }
  }, [dispatch]);

  return (
    <div className="text-center">
      <MainScreen title={`Welcome Back ${userInfo.name}`}>
        <Link to="/createpost">
          <Button className="my-2">Create Posting</Button>
        </Link>
        {/* Map over Test data */}
        {error && <ErrorMessage variant="danger">{error}</ErrorMessage>}
        {loading && <Loading />}
        {posts?.map((post) => {
          return (
            <Accordion key={post._id}>
              <Card className="mx-2 my-3">
                <Card.Header className="d-flex">
                  <span
                    style={{
                      display: "flex",
                      color: "black",
                      textDecoration: "none",
                      flex: 1,
                      cursor: "pointer",
                      alignSelf: "center",
                      fontSize: "1.5 rem",
                      justifyContent: "start",
                    }}
                  >
                    {post.title}
                  </span>
                  <div>
                    <Button
                      variant="info"
                      className="mx-2"
                      href={`/posts/${post._id}`}
                    >
                      Edit
                    </Button>
                    <Button
                      variant="primary"
                      className="mx-2"
                      onClick={() => deleteHandler(post._id)}
                    >
                      Delete
                    </Button>
                  </div>
                </Card.Header>
                <Card.Body>
                  <h4>
                    {" "}
                    <Badge pill bg="success">
                      Category : {post.category}
                    </Badge>{" "}
                  </h4>
                  <blockquote className="blockquote mb-0">
                    <p style={{ fontSize: "1rem" }}>{post.content}</p>
                    <footer className="blockquote-footer">
                      Created on :{" "}
                      <cite title="Source Title">
                        {post.createdAt.substring(0, 10)}
                      </cite>
                    </footer>
                  </blockquote>
                </Card.Body>
              </Card>
            </Accordion>
          );
        })}
      </MainScreen>
    </div>
  );
}

export default MyPosts;
