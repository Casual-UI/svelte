import type * as Kit from '@sveltejs/kit';

type Expand<T> = T extends infer O ? { [K in keyof O]: O[K] } : never;
type RouteParams = {  }
type RouteId = '/components';
type MaybeWithVoid<T> = {} extends T ? T | void : T;
export type RequiredKeys<T> = { [K in keyof T]-?: {} extends { [P in K]: T[K] } ? never : K; }[keyof T];
type OutputDataShape<T> = MaybeWithVoid<Omit<App.PageData, RequiredKeys<T>> & Partial<Pick<App.PageData, keyof T & keyof App.PageData>> & Record<string, any>>
type EnsureDefined<T> = T extends null | undefined ? {} : T;
type OptionalUnion<U extends Record<string, any>, A extends keyof U = U extends U ? keyof U : never> = U extends unknown ? { [P in Exclude<A, keyof U>]?: never } & U : never;
type LayoutRouteId = RouteId | "/components/button" | "/components/button/demos/basic-usage" | "/components/button/demos/block" | "/components/button/demos/customize-loading-instance" | "/components/button/demos/different-status" | "/components/button/demos/icon-button" | "/components/button/demos/sizes" | "/components/button/demos/themes" | "/components/carousel" | "/components/carousel/demos/arrow-shown-timing" | "/components/carousel/demos/basic-usage"
type LayoutParams = RouteParams & {  }
type LayoutParentData = EnsureDefined<import('../$types.js').LayoutData>;

export type LayoutServerData = null;
export type LayoutData = Expand<LayoutParentData>;