import environment from './environment';
//import './node_modules/bootstrap/dist/css/bootstrap.css';
// import 'bootstrap';

export function configure(aurelia) {
  aurelia.use
    .standardConfiguration()
    .developmentLogging()
    .plugin('aurelia-bootstrapper')
    .plugin('aurelia-dialog')
    .plugin('aurelia-http-client')
    .globalResources('bootstrap/css/bootstrap.css')
    .feature('resources');

  if (environment.debug) {
    aurelia.use.developmentLogging();
  }

  if (environment.testing) {
    aurelia.use.plugin('aurelia-testing');
  }

  aurelia.start().then(() => aurelia.setRoot());
}

