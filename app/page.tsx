import ProfileSection from './components/ProfileSection';
import SkillsSection from './components/SkillsSection';
import ExperienceSection from './components/ProjectSection';

export default function MinimalistPortfolio() {
	return (
		<main className="min-h-screen min-w-0 flex flex-col bg-white dark:bg-gray-900">
			<div className="flex-1 min-h-0 min-w-0 flex flex-col md:flex-row">
				{/* Left Column - Profile */}
				<div className="md:w-2/5 w-full min-w-0 min-h-0 flex flex-col border-b md:border-b-0 md:border-r border-gray-200 dark:border-gray-800 md:h-screen md:sticky md:top-0 justify-center items-center">
					<div className="w-full flex-1 flex flex-col justify-center items-center p-6">
						<ProfileSection />
					</div>
				</div>
				{/* Right Column - Skills and Experience */}
				<div className="md:w-3/5 w-full min-w-0 min-h-0 flex flex-col flex-1 grow p-6 gap-[clamp(1rem,3vw,2rem)]">
					<SkillsSection />
					<ExperienceSection />
				</div>
			</div>
		</main>
	);
}
