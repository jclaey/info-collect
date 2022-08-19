const layout = require('./layout')

const failurePage = () => {
  return layout({
    template: `
      <main class="container" id="success-main">
        <div class="row">
          <div class="col s12">
            <div class="card">
              <div class="card-content red-text">
                <span class="card-title">Error!</span>
                <p>Something went wrong. Please try again later.</p>
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

module.exports = failurePage