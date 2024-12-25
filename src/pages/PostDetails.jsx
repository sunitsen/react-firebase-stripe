import { useState, useEffect } from "react";
import { useParams } from "react-router";
import { useFetch } from "../components/hooks/useFetch";

const PostDetails = () => {
    const { postId } = useParams(); // Use `postId` to match your route

    const { data: post, loading, error } = useFetch(null, `https://jsonplaceholder.typicode.com/posts/${postId}`);
    if (loading) {
        return <h2>Loading...</h2>;
    }

    if (error) {
        return <h2>Error: {error}</h2>;
    }

    return (
        <div>
            <h1>Post Details</h1>
            <h2>{post?.title}</h2>
            <p>{post?.body}</p>
        </div>
    );
};

export default PostDetails;
