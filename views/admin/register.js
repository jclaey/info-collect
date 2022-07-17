const header = require('../partials/header')

const registerPage = () => {
  return `
    <!DOCTYPE html>
    <html>
      <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/css/materialize.min.css">
        <link rel="stylesheet" href="/css/index.css">
        <title>Register | Some Business</title>
      </head>
      <body>
        <header>
          ${header()}
        </header>
        <main class="container">
          <h1>Register</h1>
          <div class="row">
            <div class="form-container col s12">
              <form action="/admin/dashboard" method="POST">
                <div class="row">
                  <div class="input-field col s12">
                    <input name="email" id="email" type="email" class="validate">
                    <label for="email">Email</label>
                  </div>
                </div>
                <div class="row">
                  <div class="input-field col s12">
                    <input name="password" id="password" type="password" class="validate">
                    <label for="password">Password</label>
                  </div>
                </div>
                <div class="row">
                  <div class="input-field col s12">
                    <input name="passwordConfirm" id="passwordConfirm" type="password" class="validate">
                    <label for="passwordConfirm">Confirm password</label>
                  </div>
                </div>
                <button type="submit" id="submitBtn" class="btn-large">Register</button>
              </form>
            </div>
          </div>
        </main>

        <script src="https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/js/materialize.min.js"></script>
      </body>
    </html>
  `
}

module.exports = registerPage