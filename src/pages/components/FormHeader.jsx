import React from "react";

const FormHeader = ({ title, subtitle }) => (
	<div className="text-center mb-14">
		<h2 className="text-5xl font-bold text-gray-800">{title}</h2>
		<p className="text-gray-500 text-lg mt-6">{subtitle}</p>
	</div>
);

export default FormHeader;
