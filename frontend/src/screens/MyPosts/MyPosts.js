import axios from "axios";
import { useEffect, useState } from "react";
import MainScreen from "../../components/MainScreen";
import { Link } from "react-router-dom";
import { Accordion, Badge, Button, Card } from "react-bootstrap";
import { useSelector } from "react-redux";

function MyPosts() {
  const [posts, setPosts] = useState([]);

  // Delete POST function
  const deleteHandler = (id) => {
    if (window.confirm("Are you sure you want to delete?")) {
      console.log("Deleted");
    }
  };

  // Fetch notes and assign to variables
  const fetchPosts = async () => {
    const { data } = await axios.get("api/posts");
    // Store data drom API in STATE
    setPosts(data);
  };
  console.log(posts);

  // Create useEffect when component is rendered
  useEffect(() => {
    // Pass async function
    fetchPosts();
  }, []);

  // Get username thats logged in from State
  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;

  return (
    <div className="text-center">
      <MainScreen title={`Welcome Back ${userInfo && userInfo.name}`}>
        <Link to="createPost">
          <Button className="my-2">Create Posting</Button>
        </Link>
        {/* Map over Test data */}
        {posts.map((post) => {
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
                      Created on : date
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
