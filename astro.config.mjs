import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
	integrations: [
		starlight({
			title: 'Gazi Yapay Zeka Topluluğu',
			social: {
				// github: 'https://github.com/withastro/starlight',
				instagram: "https://www.instagram.com/gaziyapayzeka/",
				linkedin: "https://www.linkedin.com/company/gaziyapayzeka/",
				youtube: "https://www.youtube.com/channel/UCpxJfBA_FnleFeA0WYvereA",
				discord: "https://discord.gg/QuVgreqvs5",
			},
			sidebar: [
				{
					label: 'Guides',
					items: [
						// Each item here is one entry in the navigation menu.
						{ label: 'Example Guide', link: '/guides/example/' },
						// { label: 'Example Guide 2', link: '/guides/example2/' },
					],
				},
				{
					label: 'Reference',
					autogenerate: { directory: 'reference' },
				},
			],
		}),
	],
});
