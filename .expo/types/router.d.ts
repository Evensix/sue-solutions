/* eslint-disable */
import * as Router from 'expo-router';

export * from 'expo-router';

declare module 'expo-router' {
  export namespace ExpoRouter {
    export interface __routes<T extends string | object = string> {
      hrefInputParams: { pathname: Router.RelativePathString, params?: Router.UnknownInputParams } | { pathname: Router.ExternalPathString, params?: Router.UnknownInputParams } | { pathname: `/_sitemap`; params?: Router.UnknownInputParams; } | { pathname: `${'/(tabs)'}/formFour` | `/formFour`; params?: Router.UnknownInputParams; } | { pathname: `${'/(tabs)'}/formThree` | `/formThree`; params?: Router.UnknownInputParams; } | { pathname: `${'/(tabs)'}/formTwo` | `/formTwo`; params?: Router.UnknownInputParams; } | { pathname: `${'/(tabs)'}` | `/`; params?: Router.UnknownInputParams; } | { pathname: `/+not-found`, params: Router.UnknownInputParams & {  } };
      hrefOutputParams: { pathname: Router.RelativePathString, params?: Router.UnknownOutputParams } | { pathname: Router.ExternalPathString, params?: Router.UnknownOutputParams } | { pathname: `/_sitemap`; params?: Router.UnknownOutputParams; } | { pathname: `${'/(tabs)'}/formFour` | `/formFour`; params?: Router.UnknownOutputParams; } | { pathname: `${'/(tabs)'}/formThree` | `/formThree`; params?: Router.UnknownOutputParams; } | { pathname: `${'/(tabs)'}/formTwo` | `/formTwo`; params?: Router.UnknownOutputParams; } | { pathname: `${'/(tabs)'}` | `/`; params?: Router.UnknownOutputParams; } | { pathname: `/+not-found`, params: Router.UnknownOutputParams & {  } };
      href: Router.RelativePathString | Router.ExternalPathString | `/_sitemap${`?${string}` | `#${string}` | ''}` | `${'/(tabs)'}/formFour${`?${string}` | `#${string}` | ''}` | `/formFour${`?${string}` | `#${string}` | ''}` | `${'/(tabs)'}/formThree${`?${string}` | `#${string}` | ''}` | `/formThree${`?${string}` | `#${string}` | ''}` | `${'/(tabs)'}/formTwo${`?${string}` | `#${string}` | ''}` | `/formTwo${`?${string}` | `#${string}` | ''}` | `${'/(tabs)'}${`?${string}` | `#${string}` | ''}` | `/${`?${string}` | `#${string}` | ''}` | { pathname: Router.RelativePathString, params?: Router.UnknownInputParams } | { pathname: Router.ExternalPathString, params?: Router.UnknownInputParams } | { pathname: `/_sitemap`; params?: Router.UnknownInputParams; } | { pathname: `${'/(tabs)'}/formFour` | `/formFour`; params?: Router.UnknownInputParams; } | { pathname: `${'/(tabs)'}/formThree` | `/formThree`; params?: Router.UnknownInputParams; } | { pathname: `${'/(tabs)'}/formTwo` | `/formTwo`; params?: Router.UnknownInputParams; } | { pathname: `${'/(tabs)'}` | `/`; params?: Router.UnknownInputParams; } | `/+not-found` | { pathname: `/+not-found`, params: Router.UnknownInputParams & {  } };
    }
  }
}
