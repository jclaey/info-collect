const header = require('./partials/header')

const successPage = () => {
  return `
    <!DOCTYPE html>
    <html>
      <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/css/materialize.min.css">
        <link rel="stylesheet" href="/css/index.css">
        <title>My Business</title>
      </head>
      <body>
        <header>
          ${header()}
        </header>
        <main class="container" id="success-main">
          <div class="row">
            <div class="col s12">
              <div class="card">
                <div class="card-content green-text">
                  <span class="card-title">Success!</span>
                  <p>Your information has been submitted. We will contact you shortly.</p>
                </div>
                <div class="card-action">
                  <a href="/">Home</a>
                </div>
              </div>
            </div>
          </div>
        </main>

        <script src="https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/js/materialize.min.js"></script>
      </body>
    </html>
  `
}

module.exports = successPage