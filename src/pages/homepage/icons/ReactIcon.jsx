import React from "react";

const ReactIcon = ({ className = "w-6 h-6" }) => (
	<svg
		xmlns="http://www.w3.org/2000/svg"
		viewBox="0 0 256 256"
		className={className}
	>
		<circle
			cx="128"
			cy="128"
			r="16"
			fill="#61DAFB"
		/>
		<g
			fill="none"
			stroke="#61DAFB"
			strokeWidth="12"
			transform="translate(128 128)"
		>
			<ellipse
				rx="75"
				ry="32"
			/>
			<ellipse
				rx="75"
				ry="32"
				transform="rotate(60)"
			/>
			<ellipse
				rx="75"
				ry="32"
				transform="rotate(120)"
			/>
		</g>
	</svg>
);

export default ReactIcon;
