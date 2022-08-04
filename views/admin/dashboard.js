const layout = require('../layout')

const adminDashboardPage = ({ clients }, req) => {
  // const { clients } = await axios.get('/admin/dashboard')
  // console.log(await clients)

  const renderedClients = () => {
    return clients.map(client => {
      return `
        <div class="card blue-grey darken-1">
          <div class="card-content white-text">
            <span class="card-title">${client.firstName} ${client.lastName}</span>
            <p></p>
          </div>
        </div>
      `
    })
  }

  return layout({ template: 
    `
      <main class="container">
        <h1>Admin Area</h1>
        <div class="row">
          <div class="col s12 m6">
            ${renderedClients()}
          </div>
        </div>
      </main>
    `
  }, req)
}

module.exports = adminDashboardPage