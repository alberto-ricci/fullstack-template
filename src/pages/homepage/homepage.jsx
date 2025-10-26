import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { supabase } from "../../config/supabase-config";
import Header from "./Header";
import TechStackCard from "./TechStackCard";
import ChangelogCard from "./ChangelogCard";

import LogoutButton from "./LogoutButton";

const Homepage = () => {
	const [user, setUser] = useState(null);
	const navigate = useNavigate();

	useEffect(() => {
		const getUser = async () => {
			const {
				data: { user },
			} = await supabase.auth.getUser();
			if (!user) navigate("/login");
			else setUser(user);
		};
		getUser();
	}, [navigate]);

	return (
		<div className="min-h-screen flex flex-col items-center justify-center bg-linear-to-br from-blue-50 via-white to-purple-50 text-gray-800 px-6 py-16">
			<Header user={user} />

			{/* Top Two Cards */}
			<div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full max-w-6xl mb-8 items-stretch">
				<TechStackCard />
				<ChangelogCard />
			</div>

			<LogoutButton />
			<footer className="mt-16 text-gray-500 text-sm text-center animate-fade-in">
				Built as a template for experimentation and learning 🌱
				<br />
				<span className="text-xs text-gray-400">
					React + Vite + Supabase + Tailwind
				</span>
			</footer>
		</div>
	);
};

export default Homepage;
