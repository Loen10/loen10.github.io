import { deleteDoc, doc, collection, setDoc } from 'firebase/firestore/lite';
import { useHistory, useParams } from "react-router-dom";

const BlogDetails = () => {
    const { id } = useParams<{ id: string }>();
    const history = useHistory();
    const url = `http://localhost:8000/blogs/${id}`

    const handleDeleteClick = async () => {
        await deleteDoc(doc(globalThis.firestore, '/test/rSS50mB2SKAFGqEjbb1J'));
    };

    const handleSetClick = async () => {
        await setDoc(doc(globalThis.firestore, 'test/yodude'), {
            bar: 'baz'
        });
    };

    return (
        <div className="blog-details">
            <button onClick={ handleSetClick }>Set</button>
            <button onClick={ handleDeleteClick }>Delete</button>
        </div>
    );
}

export default BlogDetails;