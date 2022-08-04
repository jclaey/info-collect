const header = (req = null) => {
  return `
    <nav>
      <div class="nav-wrapper">
        <a href="#" class="brand-logo">My Business</a>
        <ul id="nav-mobile" class="right hide-on-med-and-down">
        ${req && req.session && req.session.userId
          ? '<li><a href="/admin/logout">Sign Out</a></li>'
          : ''
        }
        </ul>
      </div>
    </nav>
  `
}

module.exports = header