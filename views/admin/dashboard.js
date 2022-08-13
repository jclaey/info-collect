const layout = require('../layout')

const adminDashboardPage = ({ clients }, req) => {
  const renderedClients = () => {
    return clients.map(client => {
      return `
        <div class="card blue-grey darken-1">
          <div class="card-content white-text">
            <span class="card-title">${client.firstName} ${client.lastName}</span>
            <p>Email: ${client.email}</p>
            <p>Phone number: ${client.phoneNumber}</p>
            <p>
              Address: ${client.addressOne}
              ${client.addressTwo ? `<br />${client.addressTwo}` : ''}
            </p>
            <p>Insurance company: ${client.insuranceCompany}</p>
            <p>Vehicle year: ${client.vehicleYear}</p>
            <p>Vehicle make: ${client.vehicleMake}</p>
            <p>Vehicle model: ${client.vehicleModel}</p>
            <p>Policy number: ${client.policyNumber}</p>
            <p>Expiration date: ${client.expirationDate}</p>
            <p>Date submitted: ${client.submittedAt}</p>
          </div>
        </div>
      `
    }).join('')
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