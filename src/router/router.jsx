import { createBrowserRouter } from "react-router";
import Home from "../pages/Home";
import About from "../pages/About";
import Team from "../pages/Team";

import App from "../App";
import Root from "../pages/Root";
import NotFound from "../pages/NotFound";
import Notes, { loader, action } from "../pages/Notes";
import PostList from "../pages/PostList";
import UserList from "../pages/UserList";
import PostDetails from "../pages/PostDetails";
import Shop from "../pages/Shop";
import AddProductForm from "../pages/AddProducts";
import SignupForm from "../pages/SignupForm";


// import "../index.css";

export const rootRouter = createBrowserRouter([
	{
		path: "/",
		element: <Root />,
		errorElement: <NotFound />,
		children: [
			{ path: "/", element: <Home /> },
			{ path: "/about", element: <About /> },
			{ path: "/team", element: <Team /> },
			{ path: "/post", element: <PostList /> },
			{ path: "/user", element: <UserList /> },
			{ path: "/posts/:postId", element: <PostDetails /> },
			{ path: "/shop", element: <Shop /> },
			{ path: "/add-product", element: <AddProductForm /> },
			{ path: "/signup", element: <SignupForm /> },



			

			{
				path: "/notes",
				element: <Notes />,
				loader: loader,
				action: action,
			},
			// { path: "*", element: <NotFound /> },
		],
	},
]);
