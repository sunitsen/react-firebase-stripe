
import { Link } from "react-router";
import { useFetch } from "../components/hooks/useFetch";

const PostList = () => {

    const {data: posts, loading, error} = useFetch([], `https://jsonplaceholder.typicode.com/posts?_limit=5`)

    if (loading) {
        return <h2>Loading...</h2>;
    }

    if (error) {
        return <h2>{error}</h2>;
    }

    return (
        <div>
            <h2>Post List</h2>
            <ul>
                {posts.map((post) => (
                    <li key={post.id}>
                        <h3>
                            <Link to={`/posts/${post.id}`}>{post.title}</Link>
                        </h3>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default PostList;
