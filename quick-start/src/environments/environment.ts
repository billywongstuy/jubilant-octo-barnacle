// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  url: 'http://quik-biz.org',
  port: 80,
  app: 'routes-akyty',
  db: 'quik-biz',
  secret: 'penn',
  create: 'https://webhooks.mongodb-stitch.com/api/client/v2.0/app/routes-akyty/service/routes/incoming_webhook/create',
  login: 'https://webhooks.mongodb-stitch.com/api/client/v2.0/app/routes-akyty/service/routes/incoming_webhook/login'
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
