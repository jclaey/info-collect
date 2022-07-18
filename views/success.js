const layout = require('./layout')

const successPage = () => {
  return layout({ template: 
    `
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
    `
  })
}

module.exports = successPage