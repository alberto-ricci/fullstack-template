import React from "react";
import { Rocket, Code } from "lucide-react";
import CardWrapper from "./CardWrapper";
import pkg from "../../../package.json";
import {
	ReactIcon,
	TailwindIcon,
	SupabaseIcon,
	RouterIcon,
	LucideIcon,
	ComponentIcon,
} from "./icons";

// 🔍 Helper: extract version safely
const getVersion = (dep) =>
	(pkg.dependencies?.[dep] || pkg.devDependencies?.[dep] || "")
		.replace("^", "")
		.trim();

// 🧩 Define your core stack (these will always show)
const mainStack = [
	{
		name: "React",
		dep: "react",
		icon: <ReactIcon />,
	},
	{
		name: "Vite",
		dep: "vite",
		icon: <ReactIcon />,
	},
	{
		name: "Tailwind CSS",
		dep: "tailwindcss",
		icon: <TailwindIcon />,
	},
	{
		name: "React Router DOM",
		dep: "react-router-dom",
		icon: <RouterIcon />,
	},
	{
		name: "Supabase JS",
		dep: "@supabase/supabase-js",
		icon: <SupabaseIcon />,
	},
	{
		name: "Lucide React",
		dep: "lucide-react",
		icon: <LucideIcon />,
	},
	{
		name: "Reusable Modular Components",
		dep: "internal",
		icon: <ComponentIcon />,
	},
];

// 💡 Build stack with live versions
const stackWithVersions = mainStack.map((item) => ({
	...item,
	version: item.dep === "internal" ? "internal" : getVersion(item.dep) || "—",
}));

const TechStackCard = () => (
	<CardWrapper
		title="Tech Stack"
		icon={<Rocket className="w-6 h-6 text-blue-600" />}
	>
		<ul className="space-y-3 text-gray-700 text-sm sm:text-base">
			{stackWithVersions.map((item, index) => (
				<li
					key={index}
					className="flex items-center justify-between gap-3 border-b border-gray-100 pb-1"
				>
					<div className="flex items-center gap-3">
						{item.icon}
						<span className="font-medium">{item.name}</span>
					</div>
					<span className="text-gray-500 text-xs">
						{item.version}
					</span>
				</li>
			))}
		</ul>
	</CardWrapper>
);

export default TechStackCard;
