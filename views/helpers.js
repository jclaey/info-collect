module.exports = {
  getErrors(errors) {
    const renderedErrors = errors.array({ onlyFirstError: true }).map(error => {
      return `<span style="color: red"> ${error.msg}</span>`
    })

    return `
      <div>
        <h5>
          <i class="material-icons orange-text text-darken-3">warning</i>
          Errors:
        </h5>
        ${renderedErrors}
      </div>
    `
  },
  getError(errors, prop) {
    try {
      return errors.mapped()[prop].msg
    } catch (err) {
      return ''
    }
  }
}