import { Link } from "react-router";


const Nav = () => {
	return (
		<div>
			<ul>
				<li>
					<Link to="/">Home</Link>
				</li>
				<li>
					<Link to="/about">About</Link>
				</li>
				<li>
					<Link to="/notes">Notes</Link>
				</li>
				<li>
					<Link to="/team">Team</Link>
				</li>
				<li>
					<Link to="/post">Posts</Link>
				</li>
				<li>
					<Link to="/user">User</Link>
				</li>
				<li>
					<Link to="/shop">Shop</Link>
				</li>
				<li>
					<Link to="/add-product">add-product</Link>
				</li>
				<li>
					<Link to="/signup">SignUp</Link>
				</li>
			</ul>
		</div>
	);
};

export default Nav;
