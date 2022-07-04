const header = require('./partials/header')

const indexPage = () => {
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
        <main class="container">
          <h1>My Business</h1>
          <form action="/" method="POST">
            <div class="input-field">
              <input type="text" id="firstName" name="firstName" placeholder="Enter first name...">
              <label for="firstName">First name</label>
            </div>
            <div class="input-field">
              <input type="text" id="lastName" name="lastName" placeholder="Enter last name...">
              <label for="lastName">Last name</label>
            </div>
            <button type="submit" class="btn-large">Submit</button>
          </form>
        </main>

        <script src="https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/js/materialize.min.js"></script>
      </body>
    </html>
  `
}

module.exports = indexPage