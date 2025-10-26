import React from "react";

const RouterIcon = ({ className = "w-6 h-6" }) => (
	<svg
		xmlns="http://www.w3.org/2000/svg"
		viewBox="0 0 256 256"
		className={className}
	>
		<circle
			cx="128"
			cy="128"
			r="120"
			fill="#CA4245"
		/>
		<path
			fill="#fff"
			d="M64 128c0-35.3 28.7-64 64-64s64 28.7 64 64-28.7 64-64 64-64-28.7-64-64zm88 0a24 24 0 1 0-48 0 24 24 0 0 0 48 0z"
		/>
	</svg>
);

export default RouterIcon;
