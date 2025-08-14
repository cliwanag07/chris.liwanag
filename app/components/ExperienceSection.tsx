
const gameplayExperiences = [
	{
		role: 'Gameplay Developer',
		company: 'Game Studio Alpha',
		period: '2022 - Present',
		highlights: [
			'Implemented core gameplay systems',
			'Collaborated with designers to prototype new mechanics',
		],
	},
	{
		role: 'Junior Gameplay Programmer',
		company: 'Indie Games Co.',
		period: '2020 - 2022',
		highlights: [
			'Developed player controls and AI behaviors',
			'Optimized game performance',
		],
	},
];

const toolsExperiences = [
	{
		role: 'Team Lead, Tools & Gameplay Programmer',
		company: '4 Fates Studio',
		period: '2025 - Present',
		highlights: [
			'Room/Hallway Layout Tool - Reduced new space creation time from 15 min → <1 min with Unity Editor extension',
			'CSV Importer Tool - Imported 100+ entries in <5 sec with full update/create/delete logging',
			'Team Workflows - Standardized Jira/Confluence processes with GitHub integration',
		],
	},
	{
		role: 'Software Engineer',
		company: 'Innovation Labs',
		period: '2017 - 2020',
		highlights: [
			'Architected cloud-native applications',
			'Mentored junior developers',
		],
	},
	{
		role: 'Full Stack Developer',
		company: 'StartUp Inc',
		period: '2015 - 2017',
		highlights: [
			'Built scalable web applications using React and Node.js',
		],
	},
];

const ExperienceSection = () => {
	return (
		<div className="py-8 bg-white dark:bg-gray-900 px-6">
			<div className="space-y-6 max-w-4xl mx-auto">
					{/* Gameplay Developer Experience */}
					<div>
						<h3 className="font-semibold text-gray-900 dark:text-white text-center md:text-left" style={{ fontSize: 'clamp(1.35rem, 2.5vw, 1.9rem)' }}>Gameplay Developer Experience</h3>
						  <div className="h-px w-full bg-gray-200 dark:bg-gray-700 mt-2 mb-4" />
						  <div className="flex flex-col gap-6">
						{gameplayExperiences.map((exp) => (
							<div key={exp.company + exp.period} className="relative">
								<div className="relative pl-4 border-l-2 border-gray-200 dark:border-gray-700">
									<div className="absolute -left-[5px] top-[10px] h-2.5 w-2.5 rounded-full bg-gray-300 dark:bg-gray-600" />
									<div className="space-y-1">
										<div className="flex flex-col md:flex-row md:items-center md:justify-between">
											<h4 className="text-md font-medium text-gray-900 dark:text-white">{exp.role}</h4>
											<span className="text-sm text-gray-500 dark:text-gray-400">{exp.period}</span>
										</div>
										<p className="text-sm font-medium text-gray-600 dark:text-gray-300">{exp.company}</p>
										<ul className="list-disc ml-5 text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
											{exp.highlights.map((item, idx) => (
												<li key={idx}>{item}</li>
											))}
										</ul>
									</div>
								</div>
							</div>
						))}
					</div>
				</div>

					{/* Tools Programmer Experience */}
					<div>
						<h3 className="font-semibold text-gray-900 dark:text-white text-center md:text-left" style={{ fontSize: 'clamp(1.35rem, 2.5vw, 1.9rem)' }}>Tools Programmer Experience</h3>
						  <div className="h-px w-full bg-gray-200 dark:bg-gray-700 mt-2 mb-4" />
						  <div className="flex flex-col gap-6">
						{toolsExperiences.map((exp) => (
							<div key={exp.company + exp.period} className="relative">
								<div className="relative pl-4 border-l-2 border-gray-200 dark:border-gray-700">
									<div className="absolute -left-[5px] top-[10px] h-2.5 w-2.5 rounded-full bg-gray-300 dark:bg-gray-600" />
									<div className="space-y-1">
										<div className="flex flex-col md:flex-row md:items-center md:justify-between">
											<h4 className="text-md font-medium text-gray-900 dark:text-white">{exp.role}</h4>
											<span className="text-sm text-gray-500 dark:text-gray-400">{exp.period}</span>
										</div>
										<p className="text-sm font-medium text-gray-600 dark:text-gray-300">{exp.company}</p>
										<ul className="list-disc ml-5 text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
											{exp.highlights.map((item, idx) => (
												<li key={idx}>{item}</li>
											))}
										</ul>
									</div>
								</div>
							</div>
						))}
					</div>
				</div>
			</div>
		</div>
	);
};

export default ExperienceSection;
