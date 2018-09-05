import { configure, setAddon } from '@storybook/react';
import infoAddon, { setDefaults } from '@storybook/addon-info';
import { setOptions } from '@storybook/addon-options';

import './index.css';
const req = require.context('../src', true, /\.story\.js$/)

setOptions({
    name: 'Sagan',
    url: 'https://github.com/paesvitor/sagan',
    goFullScreen: false,
    showStoriesPanel: true,
    showAddonPanel: true,
    showSearchBox: false,
    addonPanelInRight: false,
    sortStoriesByKind: true
});

setDefaults({
    inline: true,
    header: false,
    source: true,
    styles: stylesheet => {
        stylesheet.infoBody = {
            infoBody: {
                padding: '10px'
            }
        };
        return stylesheet;
    },
    maxPropsIntoLine: 1
});

function loadStories() {
    req.keys().forEach((filename) => req(filename))
}
setDefaults({
    header: true,
    maxPropsIntoLine: 4,
    styles: {
        header: {
            h1: {
                fontSize: '12px'
            },
            h2: {
                fontWeight: 'bold'
            }
        },
        
    }
});

setAddon(infoAddon);

configure(loadStories, module);