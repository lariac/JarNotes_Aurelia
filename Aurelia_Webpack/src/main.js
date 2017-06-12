import environment from './environment';
//import './node_modules/bootstrap/dist/css/bootstrap.css';
// import 'bootstrap';

export function configure(aurelia) {
  aurelia.use
    .standardConfiguration()
    .developmentLogging()
    .plugin('aurelia-bootstrap');
    //.globalResources('bootstrap/css/bootstrap.css')

  aurelia.start().then(() => aurelia.setRoot());
}
// export function configure(aurelia) {
//   aurelia.use
//     .standardConfiguration()
//     .developmentLogging()
//     .plugin('aurelia-bootstrap');

//   aurelia.start().then(() => aurelia.setRoot());
// }