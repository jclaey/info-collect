const layout = require('./layout')
const { getErrors } = require('./helpers')

const claimFormPage = ({ errors, values = {} }) => {
  return layout({ template: `
    <main class="container">
      <h2>File claim</h2>
      <div class="row">
        ${errors ? 
          `
            <div class="col s12" style="border: 1px solid #9E9E9E; margin-bottom: 2rem">
              <div style="margin-bottom: 1rem">
                ${getErrors(errors)}
              </div>
            </div>
          `
        : ''}
      </div>
      <div class="row">
        <div class="form-container col s12" id="get-repairs">
          <form action="/claim-form" method="POST">
            <div class="row">
              <div class="input-field col s6">
                <input type="text" id="firstName" name="firstName" value="${errors && values.firstName && values.firstName !== '' ? values.firstName : ''}">
                <label for="firstName">*First name</label>
              </div>
              <div class="input-field col s6">
                <input type="text" id="lastName" name="lastName" value="${errors && values.lastName && values.lastName !== '' ? values.lastName : ''}">
                <label for="lastName">*Last name</label>
              </div>
            </div>
            <div class="row">
              <div class="input-field col s12">
                <input type="text" id="email" name="email" value="${errors && values.email && values.email !== '' ? values.email : ''}">
                <label for="email">*Email address</label>
              </div>
            </div>
            <div class="row">
              <div class="input-field col s12">
                <input type="text" id="phoneNumber" name="phoneNumber" value="${errors && values.phoneNumber && values.phoneNumber !== '' ? values.phoneNumber : ''}">
                <label for="phoneNumber">*Phone number</label>
              </div>
            </div>
            <div class="row">
              <div class="input-field col s12">
                <input type="text" id="addressLineOne" name="addressOne" value="${errors && values.addressLineOne && values.addressLineOne !== '' ? values.addressLineOne : ''}">
                <label for="addressLineOne">*Address</label>
              </div>
            </div>
            <div class="row">
              <div class="input-field col s12">
                <input type="text" id="addressLineTwo" name="addressTwo" value="${errors && values.addressLineTwo && values.addressLineTwo !== '' ? values.addressLineTwo : ''}">
                <label for="addressLineTwo">Address Line 2</label>
              </div>
            </div>
            <div class="row">
              <div class="input-field col s12">
                <input type="text" id="insuranceCompany" name="insuranceCompany" value="${errors && values.insuranceCompany && values.insuranceCompany !== '' ? values.insuranceCompany : ''}">
                <label for="insuranceCompany">*Insurance company</label>
              </div>
            </div>
            <div class="row">
              <div class="input-field col s4">
                <input type="text" id="vehicleYear" name="vehicleYear" value="${errors && values.vehicleYear && values.vehicleYear !== '' ? values.vehicleYear : ''}">
                <label for="vehicleYear">*Vehicle year</label>
              </div>
              <div class="input-field col s4">
                <input type="text" id="vehicleMake" name="vehicleMake" value="${errors && values.vehicleMake && values.vehicleMake !== '' ? values.vehicleMake : ''}">
                <label for="vehicleMake">*Vehicle make</label>
              </div>
              <div class="input-field col s4">
                <input type="text" id="vehicleModel" name="vehicleModel" value="${errors && values.vehicleModel && values.vehicleModel !== '' ? values.vehicleModel : ''}">
                <label for="vehicleModel">*Vehicle model</label>
              </div>
            </div>
            <div class="row">
              <div class="input-field col s6">
                <input type="text" id="policyNumber" name="policyNumber" value="${errors && values.policyNumber && values.policyNumber !== '' ? values.policyNumber : ''}">
                <label for="policyNumber">*Policy number</label>
              </div>
              <div class="input-field col s6">
                <input type="text" id="expirationDate" name="expirationDate" class="datepicker" value="${errors && values.expirationDate && values.expirationDate !== '' ? values.expirationDate : ''}">
                <label for="expirationDate">*Expiration date</label>
              </div>
            </div>
            <div id="form-required-text" class="right">
              <small>* denotes required field</small>
            </div>
            <button type="submit" id="submitBtn" class="btn-large">Submit</button>
          </form>
        </div>
      </div>
    </main>

    <script src="/javascript/date-picker.js"></script>
  ` })
}

module.exports = claimFormPage