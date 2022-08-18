const header = require('./partials/header')
const footer = require('./partials/footer')

const layout = ({ template }, req) => {
  return `
    <!DOCTYPE html>
      <html>
        <head>
          <meta charset="UTF-8">
          <meta http-equiv="X-UA-Compatible" content="IE=edge">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
          <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/css/materialize.min.css">
          <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">
          <link rel="stylesheet" href="/css/index.css">
          <title>Some Business</title>
        </head>
        <body>
          <header>
            ${header(req)}
          </header>
          ${template}
          <footer class="page-footer">
            ${footer()}
          </footer>

          <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.5.1/jquery.min.js" integrity="sha256-9/aliU8dGd2tb6OSsuzixeV4y/faTqgFtohetphbbj0=" crossorigin="anonymous"></script>
          <script src="https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/js/materialize.min.js"></script>
          <script src="/javascript/side-nav.js"></script>
        </body>
      </html>
  `
}

module.exports = layout