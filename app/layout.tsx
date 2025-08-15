import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import './globals.css';

const geistSans = Geist({
	variable: '--font-geist-sans',
	subsets: ['latin'],
});

const geistMono = Geist_Mono({
	variable: '--font-geist-mono',
	subsets: ['latin'],
});

export const metadata: Metadata = {
	title: 'Christopher Liwanag - Portfolio',
	description:
		'Portfolio of a versatile game and software developer. Explore projects in C++, C#, Python, Unity, Unreal Engine, and interactive web experiences.',
	keywords: [
		'Christopher Liwanag',
		'Game developer portfolio',
		'Software developer portfolio',
		'Blueprints developer',
		'C++ developer',
		'C# developer',
		'Python developer',
		'Unity developer',
		'Python projects',
		'Unity games',
		'Unreal Engine 5',
		'Interactive web apps',
		'Game design and programming',
		'Game development',
		'Game programming',
		'Game design',
		'Procedural generation',
		'AI-assisted development',
		'FastAPI backend',
		'Local AI NPCs',
		'Game mechanics prototyping',
		'Game development tools',
		'Simple design'
	],
	authors: [{ name: 'Christopher Liwanag' }],
	creator: 'Christopher Liwanag',
	openGraph: {
		title: 'Christopher Liwanag - Game Developer Portfolio',
		description: 'Passionate developer creating simple and effective solutions. Explore my projects and development approach.',
		url: 'https://your-domain.com',
		siteName: 'Christopher Liwanag - Portfolio',
		images: [
			{
				url: '/og-image.jpg',
				width: 1200,
				height: 630,
				alt: 'Christopher Liwanag - Game Developer Portfolio',
			},
		],
		locale: 'en_US',
		type: 'website',
	},
	twitter: {
		card: 'summary_large_image',
		title: 'Christopher Liwanag - Game Developer',
		description: 'Passionate developer creating simple and effective solutions. Explore my projects and development approach.',
		creator: '@yourusername',
		images: ['/og-image.jpg'],
	},
	robots: {
		index: true,
		follow: true,
		googleBot: {
			index: true,
			follow: true,
			'max-video-preview': -1,
			'max-image-preview': 'large',
			'max-snippet': -1,
		},
	},
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>{children}</body>
		</html>
	);
}
