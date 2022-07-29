const layout = require('../layout')

const loginPage = ({}) => {
  return layout({ template: 
    `
      <main class="container">
        <h1>Sign In</h1>
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
              <button type="submit" id="submitBtn" class="btn-large">Sign In</button>
            </form>
          </div>
        </div>
      </main>
    `
  })
}

module.exports = loginPage