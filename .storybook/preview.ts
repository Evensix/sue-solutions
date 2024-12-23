import type {Preview} from "@storybook/react";
import {themes} from "@storybook/theming";
import {withThemeByClassName,withThemeByDataAttribute} from '@storybook/addon-themes';
import {initialize, mswLoader} from 'msw-storybook-addon'
import {http, HttpResponse, delay} from "msw";
import '../src/variables.css'

const preview: Preview = {
    beforeAll: async () => {
        initialize();
    },
    loaders: [mswLoader],
    decorators: [
        // withThemeByClassName({
        //     themes: {
        //         light: 'light',
        //         dark: 'dark',
        //     },
        //     defaultTheme: 'light',
        // }),
        withThemeByDataAttribute({
            themes: {
                light: 'light',
                dark: 'dark',
            },
            defaultTheme: 'light',
            attributeName: 'data-mode',
        }),
    ],
    parameters: {

        a11y: {
            // Optional selector to inspect
            element: '#storybook-root',
            config: {
              rules: [
                {
                  // The autocomplete rule will not run based on the CSS selector provided
                  id: 'autocomplete-valid',
                  selector: '*:not([autocomplete="nope"])',
                },
                {
                  // Setting the enabled option to false will disable checks for this particular rule on all stories.
                  id: 'image-alt',
                  enabled: false,
                },
              ],
            },
            // Axe's options parameter
            options: {},
            // Optional flag to prevent the automatic check
            manual: true,
        },
        controls: {
            matchers: {
                color: /(background|color)$/i,
                date: /Date$/i,
            },
        },
        docs: {
            theme: window.matchMedia('(prefers-color-scheme: dark)').matches ? themes.dark : themes.light
        },
        msw: {
            handlers: {
                feedbackPage: http.post(
                    /.*\/api\/v1\/feedback/,
                    async () => {
                        const rand = Math.random()
                        await delay(rand * 200 + 400);
                        return new HttpResponse(`${rand}`, {status: 200});
                    },
                ),
            },
        },
    },
};

export default preview;
