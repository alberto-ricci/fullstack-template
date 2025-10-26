import React from "react";

const CardWrapper = ({ title, icon, children }) => {
	return (
		<div className="bg-white/80 backdrop-blur-md border border-gray-200 rounded-3xl p-8 flex flex-col shadow-xl ">
			{/* Title & Icon */}
			{title && (
				<h2 className="text-2xl font-semibold flex items-center gap-2 text-gray-800 mb-6">
					{icon}
					{title}
				</h2>
			)}

			{/* Content */}
			<div className="flex-1 flex flex-col">{children}</div>
		</div>
	);
};

export default CardWrapper;
