// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  agent_api_url: "http://localhost:8000/agent_backend",
  agent_frontend_url: "http://localhost:4200",
  images_url: "http://localhost:8000/image_service",
  auth_url: "http://localhost:8000/authentication",
  profile_url: "http://localhost:8000/user_profile",
  post_url: "http://localhost:8000/post",
  comment_url: "http://localhost:8000/post_comment",
  campaign_url: "http://localhost:8000/campaign",
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.
