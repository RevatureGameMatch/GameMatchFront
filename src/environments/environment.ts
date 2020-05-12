// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

const baseUri = `https://www.back.g2g.revatureprojects.com/g2g/`;

/**
 * This is the environment config.
 */
export const environment = {
 
  production: false,
  environmentName: 'Default Environment',
  baseUri: `${baseUri}/`,
  gameUri: `${baseUri}Game/`,
  helloUri: `${baseUri}Hello/`,
  playerUri: `${baseUri}Player/`,
  playerLoginUri: `${baseUri}PlayerLogin/`,
  roomUri: `${baseUri}Room/`,
  surveyUri: `${baseUri}Survey/`,
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
