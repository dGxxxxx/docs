// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import starlightVersions from 'starlight-versions';
import starlightHeadingBadges from 'starlight-heading-badges';

// https://astro.build/config
export default defineConfig({
	redirects: {
		'/': '/en',
	},
	integrations: [
		starlight({
			title: 'YAMP :: V',
			social: {
				github: 'https://github.com/withastro/starlight',
			},
			// Set English as the default language for this site.
			defaultLocale: 'en',
			locales: {
				// English docs in `src/content/docs/en`
				en: {
					label: 'English',
				},
				// German docs in `src/content/docs/de/`
				de: {
					label: 'Deutsch',
					lang: 'de',
				},
				// Romanian docs in `src/content/docs/ro/`
				ro: {
					label: 'Română',
					lang: 'ro',
				}
			},
			sidebar: [
			{
				label: 'Appendix',
				collapsed: false,
				autogenerate: {
					directory: "appendix",
				},
				translations: {
					ro: 'Anexă',
				},
			},
			{
				label: 'Getting Started',
				collapsed: false,
				autogenerate: {
					directory: "getting-started",
				},
				translations: {
					ro: 'Introducere',
				},
			},
			{
				label: 'Developer Guides',
				collapsed: true,
				autogenerate: {
					directory: "developer-guides",
				},
				translations: {
					ro: 'Ghiduri pentru Dezvoltatori',
				},
			},
			{
				label: 'GTA:V Reference Data',
				collapsed: true,
				autogenerate: {
					directory: "gta-v-reference-data",
				},
				translations: {
					ro: 'Date Referință GTA:V',
				},
			},
			{
				label: 'Platform Internals',
				collapsed: true,
				autogenerate: {
					directory: "platform-internals",
				},
				translations: {
					ro: 'Internals Platformă',
				},
			},
			{
				label: 'SDK Development',
				collapsed: true,
				autogenerate: {
					directory: "sdk-development",
				},
				translations: {
					ro: 'Dezvoltare SDK',
				},
			},
			],

			plugins: [
				starlightHeadingBadges(),
				starlightVersions({
					versions: [
						{
							slug: 'dev',
							label: 'dev',
						},
						{
							slug: 'rc',
							label: 'rc',
						},
					],
				}),
			],
		}),
	],
});
