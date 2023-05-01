import { useHistory, useParams } from "react-router-dom";

const BlogDetails = () => {
  const {id} = useParams();
  const history = useHistory();
  const url = `http://localhost:8000/blogs/${id}`

  const handleClick = () => {
    fetch(url, {
      method: 'DELETE'
    }).then(() => {
      history.push('/');
    });
  }

  return (
    <div className="blog-details">
      <h2>Blog Details - {id}</h2>
      <button onClick={handleClick}>Delete</button>
    </div>
  );
}
 
export default BlogDetails;