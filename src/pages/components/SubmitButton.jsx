import React from "react";

const SubmitButton = ({ label, loading = false }) => {
	return (
		<button
			type="submit"
			disabled={loading}
			className={`w-full py-4 flex justify-center items-center gap-3
				bg-linear-to-r from-blue-600 to-purple-600
				hover:from-blue-700 hover:to-purple-700
				text-white text-xl font-semibold rounded-2xl shadow-md
				hover:shadow-lg transition-all focus:outline-none focus:ring-2
				focus:ring-offset-2 focus:ring-blue-500
				disabled:opacity-60 disabled:cursor-not-allowed`}
		>
			{/* Spinner when loading */}
			{loading && (
				<span
					className="w-6 h-6 border-4 border-white border-t-transparent rounded-full animate-spin"
					role="status"
				/>
			)}

			{/* Button label */}
			<span>{label}</span>
		</button>
	);
};

export default SubmitButton;
