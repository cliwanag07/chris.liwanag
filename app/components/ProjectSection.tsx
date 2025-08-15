"use client";

import { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';
import VideoModal from "./VideoModal";
import { DeepDive } from "./DeepDive";

const projectWardenContributions = [
	{
		contribution: 'Gameplay Contributions',
		highlights: [
		'Implemented procedural labyrinth generation system with configurable room counts, hallway depth, and seeded randomness - enabled creation of unique levels in seconds instead of manual design',
		<>
			Designed a modular interaction system adaptable to any interaction type (
			<VideoModal
			videoUrl="https://www.youtube.com/embed/dQw4w9WgXcQ"
			trigger="demo video"
			/>
			) - used in 10+ gameplay scenarios so far
			<DeepDive
			problem="Interactions needed to be modular across different gameplay elements."
			solution="Created a generic system that can plug into any interaction type."
			images={[
				{ src: '/code.jpg', caption: 'Interaction setup screenshot' },
				{ src: '/portrait.jpg', caption: 'Example in gameplay' }
			]}
			impact="Reduced implementation time and improved reusability across 10+ systems."
			/>
		</>,
		'Built an item slot system for inventory and equipment mechanics supporting multiple slot types and scalable item variety',
		],
	},
	{
		contribution: 'Tools Contributions',
		highlights: [
			'Created Room/Hallway Layout Tool (Unity Editor extension) with procedural options, custom inspectors, and automatic ScriptableObject/prefab linking - reduced new room creation time from 15 minutes to <1 minute (>90% faster)',
			'Developed CSV Importer Tool integrated with Confluence - supports 100+ entries in under 5 seconds, with update/create/delete logs and type validation',
			'Built a custom logger for targeted debugging by category/region - reduced time spent locating code issues by ~30%',
		],
	},
	{
		contribution: 'Leadership & Pipeline',
		highlights: [
			'Established Jira/Confluence workflows with GitHub integration - standardized task tracking across an 8-person team',
			'Authored and maintained documentation for all tools; encouraged team-wide documentation practices, increasing adoption rate of new tools to 100%',
		],
	}
];

const bobaStopContributions = [
	{
		contribution: 'Gameplay Contributions',
		highlights: [
			'Implemented item/inventory system with slot-based mechanics supporting 20+ item types',
			'Built interaction and dialogue manager systems in Unity, enabling 100+ unique NPC dialogue entries',
		],
	},
	{
		contribution: 'AI & Tools Contributions',
		highlights: [
			'Developed a Python FastAPI backend to handle RAG-based NPC dialogue retrieval - capable of referencing hundreds of prior dialogue lines per session',
			'Integrated Unity-Python communication for contextual AI prompts using both general knowledge databases and character-specific databases',
			'Packaged backend with environment freezing for easy distribution and deployment - reducing setup time on new machines to <5 minutes',
		],
	},
];

const pokerFacedContributions = [
	{
		contribution: 'Gameplay Contributions',
		highlights: [
			'Developed entire Poker game logic in Unity (TexasHoldemManager, UI, game state handling) - playable prototype delivered in ~4 months with a team of 4',
			'Designed clean, modular C# architecture for game flow and front-end systems - enabled future feature additions with minimal refactor',
		],
	},
	{
		contribution: 'AI & Tools Contributions',
		highlights: [
			'Implemented Flask-based backend running Monte Carlo simulations for AI decision-making - performing thousands of simulations per move',
			'Integrated DeepFace facial recognition to factor in 7+ emotion categories from player webcam input in real time',
			'Delivered packaged backend using environment freezing for Windows distribution - ensuring <10 minute setup time across devices',
		],
	}
];

const echoesOfHubrisContributions = [
	{
		contribution: 'Gameplay Contributions',
		highlights: [
			'Implemented inventory system with stacking, max stacks, and slot management - scaled to support dozens of item types during development',
			'Designed and programmed enemy and boss AI, including 5+ unique combat behaviors with multi-phase mechanics',
			'Built character movement and abilities (mobility skills, combat interactions) used throughout all major levels',
		],
	},
	{
		contribution: 'Leadership & Pipeline',
		highlights: [
			'Directed a team of 6 through core gameplay development using Agile practices - coordinated over multiple milestone deliverables',
			'Balanced both technical implementation (C++/Blueprints) and team management - contributed 400+ hours of programming effort alongside leadership duties',
		],
	}
];


type Contribution = {
	contribution: string;
	highlights: React.ReactNode[];
};

type ProjectOverview = {
	name: string;
	role: string;
	period: string;
	teamSize: string;
	overview: string;
	tech: string[];
};

type ProjectProps = {
	overview: ProjectOverview;
	contributions: Contribution[];
};

const ProjectOverviewBlock = ({ overview }: { overview: ProjectOverview }) => (
	<div className="mb-4">
		<div className="flex flex-col md:flex-row md:items-start md:justify-between">
			<h3
				className="font-semibold text-gray-900 dark:text-white text-center md:text-left"
				style={{ fontSize: 'clamp(1.3rem, 2.5vw, 1.9rem)' }}
			>
				{overview.name}
			</h3>
			<span className="text-sm text-gray-500 dark:text-gray-400 mt-1 md:mt-0">
				{overview.period}
			</span>
		</div>
		<p className="text-sm font-medium text-gray-600 dark:text-gray-300 mt-1">
			{overview.role} • Team Size: {overview.teamSize}
		</p>
		<p className="text-sm text-gray-600 dark:text-gray-400 mt-2 leading-relaxed">
			{overview.overview}
		</p>
		<div className="flex flex-wrap gap-2 mt-2">
			{overview.tech.map((tag) => (
				<span
					key={tag}
					className="px-2 py-0.5 rounded-full text-xs font-medium bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300"
				>
					{tag}
				</span>
			))}
		</div>
	</div>
);

const ContributionList = ({ overview, contributions }: ProjectProps) => {
	const [open, setOpen] = useState(true);

	return (
		<div>
			<ProjectOverviewBlock overview={overview} />

			{/* Toggle Button */}
			<button
				onClick={() => setOpen((prev) => !prev)}
				className="flex items-center gap-1 text-sm font-medium text-blue-600 dark:text-blue-400 hover:underline"
			>
				{open ? (
					<>
						Hide Contributions <ChevronUp size={16} />
					</>
				) : (
					<>
						Show Contributions <ChevronDown size={16} />
					</>
				)}
			</button>

			{/* Collapsible Contributions */}
			{open && (
				<div className="flex flex-col gap-6 mt-4">
					{contributions.map((contr) => (
						<div key={contr.contribution + contr.highlights} className="relative">
							<div className="relative pl-4 border-l-2 border-gray-200 dark:border-gray-700">
								<div className="absolute -left-[5px] top-[10px] h-2.5 w-2.5 rounded-full bg-gray-300 dark:bg-gray-600" />
								<div className="space-y-1">
									<h4 className="text-md font-medium text-gray-900 dark:text-white">
										{contr.contribution}
									</h4>
									<ul className="list-disc ml-5 text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
										{contr.highlights.map((item, idx) => (
											<li key={idx}>{item}</li>
										))}
									</ul>
								</div>
							</div>
						</div>
					))}
				</div>
			)}
		</div>
	);
};

const ProjectSection = () => {
	return (
		<div className="py-8 bg-white dark:bg-gray-900 px-6">
			<div className="space-y-10 max-w-4xl mx-auto">
				{/* Overarching Project Title */}
				<div>
					<h2
						className="font-semibold text-gray-900 dark:text-white text-center md:text-left"
						style={{ fontSize: 'clamp(1.7rem, 3vw, 2.3rem)' }}
					>
						Projects
					</h2>
					<div className="h-px w-full bg-gray-200 dark:bg-gray-700 mt-2" />
				</div>

				{/* Subsections */}
				<ContributionList
					overview={{
						name: 'Project Warden',
						role: 'Team Lead / Tools Programmer / Gameplay Programmer',
						period: 'May 2025 - Current',
						teamSize: '8',
						overview:
							'Project Warden is an isometric RPG focused on combat, exploration, and social interaction. Players assume the role of an imprisoned apothecary who must brew potions, fight monsters, and navigate a sprawling labyrinth. Live AI-driven NPC dialogue shapes relationships and story outcomes.',
						tech: ['Unity', 'C#', 'Jira', 'Confluence', 'Git'],
					}}
					contributions={projectWardenContributions}
				/>
				<ContributionList
					overview={{
						name: 'Boba Stop: Exploring AI-Generated Dialogue for NPCs',
						role: 'Project Producer / Gameplay Programmer / AI Systems Programmer',
						period: 'Sep 2024 - Apr 2025',
						teamSize: '3',
						overview:
							'Boba Stop is a capstone project and experiment in dynamic NPC interaction through AI-driven conversations. By leveraging Retrieval-Augmented Generation (RAG), NPCs adapt to prior interactions and evolve with the player\'s choices.',
						tech: ['Unity', 'C#', 'FastAPI', 'PyTorch (Hugging Face)', 'RAG Models', 'Jira', 'Confluence', 'Git'],
					}}
					contributions={bobaStopContributions}
				/>
				<ContributionList
					overview={{
						name: 'Poker-Faced',
						role: 'Gameplay Programmer / Backend Programmer',
						period: 'Jan 2025 - May 2025',
						teamSize: '4',
						overview:
							'Poker-Faced is a serious game designed to help players practice Poker strategy and stoicism. By integrating facial recognition and AI-driven simulations, the game trains players to maintain a neutral expression while playing against adaptive AI opponents.',
						tech: ['Unity', 'C#', 'Python', 'Flask', 'Monte Carlo Simulation', 'DeepFace'],
					}}
					contributions={pokerFacedContributions}
				/>
				<ContributionList
					overview={{
						name: 'Echoes of Hubris',
						role: 'Team Lead / Gameplay Programmer',
						period: 'Jan 2024 - Current',
						teamSize: '6',
						overview:
							'Echoes of Hubris is a narrative-driven action Metroidvania set in a mysterious tower. Players control Pride, one of seven immortal Sins, as they ascend through vast environments, fight bosses, and uncover the truth of their existence.',
						tech: ['Unreal Engine 5', 'C++', 'Jira', 'Confluence', 'Git'],
					}}
					contributions={echoesOfHubrisContributions}
				/>
			</div>
		</div>
	);
};

export default ProjectSection;
