import React, { useState } from "react";
import { Eye, EyeOff } from "lucide-react";

const FormField = ({
	label,
	name,
	type = "text",
	value,
	onChange,
	placeholder,
	required = false,
	error = "",
	info = "",
}) => {
	const [showPassword, setShowPassword] = useState(false);
	const isPassword = type === "password";

	const togglePassword = () => setShowPassword((prev) => !prev);

	return (
		<div className="flex flex-col gap-2 relative">
			{/* Label */}
			<label className="text-base font-semibold text-gray-700">
				{label} {required && <span className="text-red-500">*</span>}
			</label>

			{/* Input + Icon */}
			<div className="relative">
				<input
					type={isPassword && showPassword ? "text" : type}
					name={name}
					value={value}
					onChange={onChange}
					placeholder={placeholder}
					required={required}
					className={`w-full px-5 py-4 text-lg rounded-2xl border ${
						error ? "border-red-500" : "border-gray-300"
					} bg-white text-gray-700 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all pr-12`}
				/>

				{/* 👁️ Animated Show/Hide Button */}
				{isPassword && (
					<button
						type="button"
						onClick={togglePassword}
						className="absolute inset-y-0 right-4 flex items-center text-gray-500 hover:text-gray-700 transition-transform duration-200 ease-in-out"
						tabIndex={-1}
					>
						<div
							className={`transition-all duration-200 ease-in-out transform ${
								showPassword
									? "opacity-100 scale-110 rotate-0"
									: "opacity-90 scale-100 rotate-12"
							}`}
						>
							{showPassword ? (
								<EyeOff className="w-5 h-5" />
							) : (
								<Eye className="w-5 h-5" />
							)}
						</div>
					</button>
				)}
			</div>

			{/* Error or Info */}
			{error ? (
				<p className="text-red-500 text-sm mt-1 ml-1">{error}</p>
			) : info ? (
				<p className="text-sm text-gray-400 mt-1 ml-1">{info}</p>
			) : null}
		</div>
	);
};

export default FormField;
