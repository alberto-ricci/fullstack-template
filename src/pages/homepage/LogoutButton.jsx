import React from "react";
import { LogOut } from "lucide-react";
import { supabase } from "../../config/supabase-config";
import { useNavigate } from "react-router-dom";

const LogoutButton = () => {
	const navigate = useNavigate();

	const handleLogout = async () => {
		await supabase.auth.signOut();
		navigate("/login");
	};

	return (
		<div className="flex justify-center mt-12 animate-fade-in">
			<button
				onClick={handleLogout}
				className="flex items-center gap-2 px-8 py-3 bg-linear-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white text-lg font-semibold rounded-2xl shadow-md hover:shadow-lg transition-all focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
			>
				<LogOut className="w-5 h-5" /> Log Out
			</button>
		</div>
	);
};

export default LogoutButton;
