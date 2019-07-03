import React from "react";

const UserBar = (props) =>{
	const userData = props.user;
	return (
		<div className="fixed bottom-0 left-0 w-full bg-orange-100 p-1 border-t border-orange-600 z-20 text-xs">
			{props.loggedIn ? 
				<div className="w-full flex items-center justify-between">
					<div>
						Logged in as <span className="font-bold">{userData.user.name}</span>
					</div>
					<div>
						<a href="/" className="mx-3 hover:text-purple-400">Home</a>
						<a href="/logout" className="mx-3 hover:text-purple-400">Logout</a>
					</div>
				</div>
				: 
				<div className="w-full flex items-center justify-between">
					<div>
						You are not logged in.
					</div>
					<div>
						<a href="/" className="mx-3 hover:text-purple-400">Home</a>
					</div>
				</div>
			}
		</div>
	)
}
export default UserBar;
