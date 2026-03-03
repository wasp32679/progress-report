// @ts-check
import starlight from '@astrojs/starlight';
import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
    site: 'https://github.com/wasp32679', // TODO: Change to your github url
    base: 'Dossier-de-formation', // TODO: Change to your repo name
    integrations: [starlight({
        title: 'Progress  report',
        social: [
            { icon: 'github', label: 'GitHub', href: 'https://github.com/wasp32679/Dossier-de-formation' } // TODO: Change to your repo url
        ],
        editLink: {
            baseUrl: 'https://github.com/wasp32679/Dossier-de-formation/edit/main/docs/', // TODO: before /edit, change to your repo url
        },
        customCss: [
            // Relative path to your custom CSS file
            './src/styles/theme.css',
        ],
        sidebar: [
            {
                label: 'Introduction',
                link: '/introduction',
            },
            {
                label: 'Projects',
                autogenerate: {directory: 'projects'}
            },
            {
                label: 'Technologies',
                autogenerate: {directory: 'technologies'},
            },
            {
                label: 'Tools',
                autogenerate: {directory: 'tools'},
            }
        ],
    })],
});
