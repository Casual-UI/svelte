export { matchers } from './client-matchers.js';

export const nodes = [() => import('./nodes/0'),
	() => import('./nodes/1'),
	() => import('./nodes/2'),
	() => import('./nodes/3'),
	() => import('./nodes/4'),
	() => import('./nodes/5'),
	() => import('./nodes/6'),
	() => import('./nodes/7'),
	() => import('./nodes/8'),
	() => import('./nodes/9'),
	() => import('./nodes/10'),
	() => import('./nodes/11'),
	() => import('./nodes/12'),
	() => import('./nodes/13'),
	() => import('./nodes/14'),
	() => import('./nodes/15')];

export const server_loads = [0];

export const dictionary = {
	"/": [3],
	"/components/button": [4,[2]],
	"/components/button/demos/basic-usage": [5,[2]],
	"/components/button/demos/block": [6,[2]],
	"/components/button/demos/customize-loading-instance": [7,[2]],
	"/components/button/demos/different-status": [8,[2]],
	"/components/button/demos/icon-button": [9,[2]],
	"/components/button/demos/sizes": [10,[2]],
	"/components/button/demos/themes": [11,[2]],
	"/components/carousel-slider": [15,[2]],
	"/components/carousel": [12,[2]],
	"/components/carousel/demos/arrow-shown-timing": [13,[2]],
	"/components/carousel/demos/basic-usage": [14,[2]]
};

export const hooks = {
	handleError: (({ error }) => { console.error(error) }),
};