import type { Preview } from "@storybook/react";
import "../styles/global.css";

import localFont from 'next/font/local';


const PlusJakarta = localFont({
	src: '../assets/fonts/PlusJakartaSans-VariableFont_wght.ttf',
	variable: '--font-geist-mono',
});

const customViewports = {
	/* 360px */
	minXSmall: {
		name: 'X-Small - eg. iPhone Mini',
		type: 'mobile',
		styles: {
			width: '360px',
			height: '780px',
		},
	} /* 768px */,
	minSmall: {
		name: 'Small - eg. iPad Mini',
		type: 'tablet',
		styles: {
			width: '768px',
			height: '1024px',
		},
	},

	/* 1024px */
	minMedium: {
		name: 'Medium - eg. MacBook 13"',
		type: 'desktop',
		styles: {
			width: '1024px',
			height: '640px',
		},
	},

	/* 1366px */
	minLarge: {
		name: 'Large - eg. MacBook 16"',
		type: 'desktop',
		styles: {
			width: '1366px',
			height: '840px',
		},
	},

	/* 1920px */
	minXLarge: {
		name: 'X-Large - eg. Desktop@1080p',
		type: 'desktop',
		styles: {
			width: '1920px',
			height: '1080px',
		},
	},

	/* 2560px */
	minXXLarge: {
		name: 'XX-Large - eg. Desktop@1440p',
		type: 'desktop',
		styles: {
			width: '2560px',
			height: '1440px',
		},
	},
};



const preview: Preview = {
  parameters: {
    controls: {
			expanded: true,
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
			exclude: ['style', 'className', 'children'],

    },
    options: {
			showPanel: true,
			storySort: {
				order: ['Docs', 'Base', 'Atoms', 'Molecules', 'Components', 'Layout', 'Pages'],
			},
		},
		a11y: {
			config: {
				rules: [
					{
						// We'll want to enable this manually on more complex components
						// where we want to ensure it doesn't start to fail on modifications
						id: 'skip-link',
						reviewOnFail: true,
					},
					{
						// Alt text is not always required in our setup
						id: 'image-alt',
						reviewOnFail: true,
					},
					{
						// Color contrast is to be reviewed generally per project
						id: 'color-contrast',
						reviewOnFail: true,
					},
				],
			},
		},
		status: {
			statuses: {
				backlog: {
					background: 'hsla(40, 15%, 80%, 1)',
					color: 'hsla(37, 11%, 28%, 1)',
					description: 'This component is in the backlog.',
				},
				inprogress: {
					background: 'hsla(48, 95%, 76%, 1)',
					color: 'hsla(15, 86%, 30%, 1)',
					description: 'This component is a work in progress',
				},
				qa: {
					background: 'hsla(20, 100%, 77%, 1)',
					color: 'hsla(6, 96%, 26%, 1)',
					description: 'This component is in review',
				},
				done: {
					background: 'hsla(83, 63%, 74%, 1)',
					color: 'hsla(81, 78%, 21%, 1)',
					description: 'This component is built but not yet integrated',
				},
				ready: {
					background: 'hsla(83, 63%, 74%, 1)',
					color: 'hsla(81, 78%, 21%, 1)',
					description: 'This component is ready for use in production',
				},
			},
		},
		viewport: {
			viewports: customViewports,
		},
  },
  globalTypes: {
		theme: {
			description: 'Global theme for components',
			defaultValue: 'light',
			toolbar: {
				title: 'Theme',
				items: [
					'light',
					'dark',
				],
				dynamicTitle: true,
			},
		},
	},
  decorators: [
		(Story, context) => {
			return (
				<div
					id='__next'
					className={`${PlusJakarta.variable}`}
					style={{ minHeight: '100vh' }}
				>
					<Story />
				</div>
			);
		},
	],
};

export default preview;
