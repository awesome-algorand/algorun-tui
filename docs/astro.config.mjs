// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import tailwind from '@astrojs/tailwind';

// https://astro.build/config
export default defineConfig({
	integrations: [
		starlight({
			title: 'NodeKit',
			logo: {
				src: './public/nodekit.png',
				replacesTitle: true,
			},
			social: {
				github: 'https://github.com/algorandfoundation/nodekit',
			},
			sidebar: [
				// {
				// 	label: 'Guides',
				// 	items: [
				// 		// Each item here is one entry in the navigation menu.
				// 		{ label: 'Example Guide', slug: 'guides/example' },
				// 	],
				// },
				{
					label: 'Reference',
					// collapsed: true,
					autogenerate: { directory: 'reference' },
				},
			],
			customCss: ['./src/tailwind.css'],
		}),
		tailwind({ applyBaseStyles: true }),
	],
});
