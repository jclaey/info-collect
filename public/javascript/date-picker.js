document.addEventListener('DOMContentLoaded', function() {
  const now = new Date(Date.now())
  const elems = document.querySelectorAll('.datepicker');
  const instances = M.Datepicker.init(elems, {
    autoClose: true,
    minDate: now
  });
});