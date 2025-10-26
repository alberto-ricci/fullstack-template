import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { loginUser } from "../../lib/authService";

import FormHeader from "../components/FormHeader";
import FormField from "../components/FormField";
import SubmitButton from "../components/SubmitButton";
import FormFooter from "../components/FormFooter";

const Login = () => {
	const [formData, setFormData] = useState({
		email: "",
		password: "",
	});

	const [errors, setErrors] = useState({});
	const [loading, setLoading] = useState(false);
	const [success, setSuccess] = useState("");
	const navigate = useNavigate();

	// Handle input changes
	const handleChange = (e) => {
		const { name, value } = e.target;
		setFormData((prev) => ({ ...prev, [name]: value }));
		setErrors((prev) => ({ ...prev, [name]: "" }));
		setSuccess("");
	};

	// Validate email & password
	const validateForm = () => {
		let valid = true;
		const newErrors = {};

		const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
		if (!emailRegex.test(formData.email)) {
			newErrors.email = "Please enter a valid email address.";
			valid = false;
		}

		if (formData.password.length < 6) {
			newErrors.password = "Password must be at least 6 characters long.";
			valid = false;
		}

		setErrors(newErrors);
		return valid;
	};

	// Handle submit
	const handleSubmit = async (e) => {
		e.preventDefault(); // ✅ Prevent form reload

		if (!validateForm()) return;

		setLoading(true);
		setSuccess("");
		setErrors({});

		try {
			// ✅ Authenticate via authService
			const { user, error } = await loginUser(formData);

			if (error) {
				console.error("❌ Login error:", error);
				setErrors({ email: error });
				setLoading(false);
				return;
			}

			console.log("✅ Logged in user:", user);
			setSuccess("Login successful! Redirecting...");

			// 🟢 Redirect after success
			setTimeout(() => navigate("/homepage"), 1500);
			setFormData({ email: "", password: "" });
		} catch (err) {
			console.error("⚠️ Unexpected login error:", err);
			setErrors({ email: "An unexpected error occurred." });
		} finally {
			setLoading(false);
		}
	};

	// Allow pressing Enter to submit
	const handleKeyDown = (e) => {
		if (e.key === "Enter") handleSubmit(e);
	};

	return (
		<div className="min-h-screen flex flex-col justify-center items-center bg-linear-to-br from-blue-50 via-white to-purple-50 px-6 py-12">
			<FormHeader
				title="Welcome Back"
				subtitle="Log in to continue 🚀"
			/>

			<form
				onSubmit={handleSubmit}
				onKeyDown={handleKeyDown}
				className="w-full max-w-md flex flex-col gap-10"
			>
				<FormField
					label="Email"
					name="email"
					type="email"
					placeholder="you@example.com"
					required
					value={formData.email}
					onChange={handleChange}
					error={errors.email}
				/>

				<FormField
					label="Password"
					name="password"
					type="password"
					placeholder="••••••••"
					required
					value={formData.password}
					onChange={handleChange}
					error={errors.password}
					info="Must be at least 6 characters long."
				/>

				{/* Success Message */}
				{success && (
					<p className="text-green-600 text-center font-medium -mt-4">
						{success}
					</p>
				)}

				{/* Submit Button */}
				<div className="flex justify-center">
					<SubmitButton
						label={loading ? "Logging in..." : "Log In"}
						loading={loading}
					/>
				</div>
			</form>

			<FormFooter
				text="Don’t have an account?"
				linkText="Register"
				linkHref="/register"
			/>
		</div>
	);
};

export default Login;
