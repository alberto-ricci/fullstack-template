import React from "react";

const SupabaseIcon = ({ className = "w-6 h-6" }) => (
	<svg
		xmlns="http://www.w3.org/2000/svg"
		viewBox="0 0 256 256"
		className={className}
	>
		<defs>
			<linearGradient
				id="supabase-gradient"
				x1="0"
				y1="0"
				x2="256"
				y2="256"
				gradientUnits="userSpaceOnUse"
			>
				<stop
					offset="0%"
					stopColor="#3ECF8E"
				/>
				<stop
					offset="100%"
					stopColor="#00AC69"
				/>
			</linearGradient>
		</defs>
		<path
			fill="url(#supabase-gradient)"
			d="M170.67 7.47c8.39-11.17 26.12-5.06 26.12 8.6v223.84c0 13.63-17.65 19.79-26.12 8.6l-110.9-147.86c-7.46-9.94-0.23-24.2 11.58-24.2h55.57L170.67 7.47z"
		/>
	</svg>
);

export default SupabaseIcon;
