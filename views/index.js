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
        <title>Some Business</title>
      </head>
      <body>
        <header>
          ${header()}
        </header>
        <main class="container">
          <h1>Some Business</h1>
          <div class="row">
            <div class="form-container col s12">
              <form action="/" method="POST">
                <div class="row">
                  <div class="input-field col s6">
                    <input type="text" id="firstName" name="firstName">
                    <label for="firstName">*First name</label>
                  </div>
                  <div class="input-field col s6">
                    <input type="text" id="lastName" name="lastName">
                    <label for="lastName">*Last name</label>
                  </div>
                </div>
                <div class="row">
                  <div class="input-field col s12">
                    <input type="text" id="email" name="email">
                    <label for="email">*Email address</label>
                  </div>
                </div>
                <div class="row">
                  <div class="input-field col s12">
                    <input type="text" id="phoneNumber" name="phoneNumber">
                    <label for="phoneNumber">*Phone number</label>
                  </div>
                </div>
                <div class="row">
                  <div class="input-field col s12">
                    <input type="text" id="addressLineOne" name="addressLineOne">
                    <label for="addressLineOne">*Address</label>
                  </div>
                </div>
                <div class="row">
                  <div class="input-field col s12">
                    <input type="text" id="addressLineTwo" name="addressLineTwo">
                    <label for="addressLineTwo">Address Line 2</label>
                  </div>
                </div>
                <div class="row">
                  <div class="input-field col s12">
                    <input type="text" id="insuranceCompany" name="insuranceCompany">
                    <label for="insuranceCompany">*Insurance company</label>
                  </div>
                </div>
                <div class="row">
                  <div class="input-field col s4">
                    <input type="text" id="vehicleYear" name="vehicleYear">
                    <label for="vehicleYear">*Vehicle year</label>
                  </div>
                  <div class="input-field col s4">
                    <input type="text" id="vehicleMake" name="vehicleMake">
                    <label for="vehicleMake">*Vehicle make</label>
                  </div>
                  <div class="input-field col s4">
                    <input type="text" id="vehicleModel" name="vehicleModel">
                    <label for="vehicleModel">*Vehicle model</label>
                  </div>
                </div>
                <div class="row">
                  <div class="input-field col s6">
                    <input type="text" id="policyNumber" name="policyNumber">
                    <label for="policyNumber">*Policy number</label>
                  </div>
                  <div class="input-field col s6">
                    <input type="text" id="expirationDate" name="expirationDate">
                    <label for="expirationDate">*Expiration date</label>
                  </div>
                </div>
                <div class="row">
                  <div class="input-field col s6">
                    <p class="label-gray">*Drivers license</p>
                    <input type="file" name="driversLicense" accept="images/*">
                  </div>
                  <div class="input-field col s6">
                    <p class="label-gray">*Policy card</p>
                    <input type="file" name="policyCard" accept="images/*">
                  </div>
                </div>
                <button type="submit" id="submitBtn" class="btn-large">Submit</button>
              </form>
            </div>
          </div>
        </main>

        <script src="https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/js/materialize.min.js"></script>
      </body>
    </html>
  `
}

module.exports = indexPage