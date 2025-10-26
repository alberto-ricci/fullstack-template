import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

import { registerUser } from "../../lib/authService";

import FormHeader from "../components/FormHeader";
import FormField from "../components/FormField";
import SubmitButton from "../components/SubmitButton";
import FormFooter from "../components/FormFooter";

const Register = () => {
	const [formData, setFormData] = useState({
		name: "",
		surname: "",
		nickname: "",
		email: "",
		password: "",
	});

	const [errors, setErrors] = useState({});
	const [loading, setLoading] = useState(false);
	const [success, setSuccess] = useState("");
	const navigate = useNavigate();

	const handleChange = (e) => {
		const { name, value } = e.target;
		setFormData((prev) => ({ ...prev, [name]: value }));
		setErrors((prev) => ({ ...prev, [name]: "" }));
		setSuccess("");
	};

	const handleSubmit = async (e) => {
		e.preventDefault();
		setLoading(true);
		setSuccess("");
		setErrors({});

		const { user, error } = await registerUser(formData);

		if (error) {
			setErrors({ email: error });
			setLoading(false);
			return;
		}

		setSuccess("Account created successfully!");
		setTimeout(() => navigate("/login"), 2000);
		setLoading(false);
	};

	return (
		<div className="min-h-screen flex flex-col justify-center items-center bg-linear-to-br from-blue-50 via-white to-purple-50 px-6 py-12">
			<FormHeader
				title="Create Account"
				subtitle="Create an account to get started 🚀"
			/>

			<form
				onSubmit={handleSubmit}
				className="w-full max-w-2xl flex flex-col gap-10"
			>
				<div className="grid grid-cols-1 sm:grid-cols-2 gap-10">
					<FormField
						label="First Name"
						name="name"
						placeholder="First Name"
						value={formData.name}
						onChange={handleChange}
						required
					/>
					<FormField
						label="Last Name"
						name="surname"
						placeholder="Last Name"
						value={formData.surname}
						onChange={handleChange}
						required
					/>
				</div>

				<FormField
					label="Nickname"
					name="nickname"
					placeholder="Nickname"
					value={formData.nickname}
					onChange={handleChange}
					required
				/>
				<FormField
					label="Email"
					name="email"
					type="email"
					placeholder="you@example.com"
					value={formData.email}
					onChange={handleChange}
					error={errors.email}
					required
				/>
				<FormField
					label="Password"
					name="password"
					type="password"
					placeholder="••••••••"
					value={formData.password}
					onChange={handleChange}
					error={errors.password}
					required
					info="Must be at least 6 characters long."
				/>

				{success && (
					<p className="text-green-600 text-center font-medium -mt-4">
						{success}
					</p>
				)}

				<SubmitButton
					label={loading ? "Creating Account..." : "Register"}
					loading={loading}
				/>
			</form>

			<FormFooter
				text="Already have an account?"
				linkText="Log in"
				linkHref="/login"
			/>
		</div>
	);
};

export default Register;
