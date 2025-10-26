import React from "react";

const Header = ({ user }) => (
	<header className="text-center mb-12 animate-fade-in">
		<h1 className="text-4xl sm:text-5xl font-bold text-gray-800 mb-2">
			Welcome {user?.user_metadata?.nickname || user?.email || "Guest"} 👋
		</h1>
		<p className="text-gray-500 text-lg">
			This is your project’s homepage template 🧩
		</p>
	</header>
);

export default Header;
