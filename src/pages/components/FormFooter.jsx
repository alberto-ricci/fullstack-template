import React from "react";

const FormFooter = ({ text, linkText, linkHref }) => (
	<p className="text-gray-600 text-center mt-14 text-lg">
		{text}{" "}
		<a
			href={linkHref}
			className="text-blue-600 font-semibold hover:underline"
		>
			{linkText}
		</a>
	</p>
);

export default FormFooter;
