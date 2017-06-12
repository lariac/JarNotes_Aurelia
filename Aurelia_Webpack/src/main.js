import environment from './environment';
//import './node_modules/bootstrap/dist/css/bootstrap.css';
// import 'bootstrap';

export function configure(aurelia) {
  aurelia.use
    .standardConfiguration()
    .developmentLogging()
    .globalResources('bootstrap/css/bootstrap.css')


  aurelia.start().then(a => {
        a.setRoot('app', document.body);
    });
}

