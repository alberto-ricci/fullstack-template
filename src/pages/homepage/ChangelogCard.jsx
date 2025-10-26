import React from "react";
import { Wrench, CalendarDays, Tag } from "lucide-react";
import projectInfo from "../../data/projectInfo.json";
import CardWrapper from "./CardWrapper";

const tagColors = {
	UI: "bg-blue-100 text-blue-700 border-blue-200",
	Feature: "bg-green-100 text-green-700 border-green-200",
	Auth: "bg-purple-100 text-purple-700 border-purple-200",
	Data: "bg-yellow-100 text-yellow-700 border-yellow-200",
	Other: "bg-gray-100 text-gray-700 border-gray-200",
};

const ChangelogCard = () => (
	<CardWrapper
		title="Project Changelog"
		icon={<Wrench className="w-6 h-6 text-purple-600" />}
	>
		<div className="space-y-6 overflow-y-auto pr-2 max-h-[55vh] text-sm">
			{projectInfo.changelog.map((entry, index) => (
				<div key={index}>
					{/* Date header */}
					<div className="flex items-center gap-2 mb-2 text-gray-600">
						<CalendarDays className="w-5 h-5 text-blue-500" />
						<span className="font-medium">
							{new Date(entry.date).toLocaleDateString("en-GB", {
								day: "2-digit",
								month: "short",
								year: "numeric",
							})}
						</span>
					</div>

					{/* Two-column grid for description + tag */}
					<div className="grid grid-cols-1 sm:grid-cols-2 gap-y-2 gap-x-4 ml-2">
						{entry.changes.map((change, i) => (
							<div
								key={i}
								className="flex justify-between items-center border-b border-gray-100 pb-1"
							>
								<span className="text-gray-700 pr-2 leading-snug">
									{change.description}
								</span>
								<span
									className={`flex items-center gap-1 px-2 py-0.5 text-xs font-medium rounded-full border whitespace-nowrap ${
										tagColors[change.tag]
									}`}
								>
									<Tag className="w-3 h-3" />
									{change.tag}
								</span>
							</div>
						))}
					</div>

					{/* Divider between dates */}
					{index !== projectInfo.changelog.length - 1 && (
						<hr className="my-4 border-gray-200" />
					)}
				</div>
			))}
		</div>
	</CardWrapper>
);

export default ChangelogCard;
