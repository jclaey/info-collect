const header = (req = null) => {
  return `
    <nav>
      <div class="nav-wrapper">
        <a href="/" class="brand-logo">V. Raju</a>
        <a href="#" data-target="mobile-demo" class="sidenav-trigger"><i class="material-icons">menu</i></a>
        <ul id="nav-mobile" class="right hide-on-med-and-down">
          <li><a href="/claim-form">File A Claim</a></li>
          ${req && req.session && req.session.userId
            ? '<li><a href="/admin/logout">Sign Out</a></li>'
            : ''
          }
        </ul>
      </div>
    </nav>

    <ul class="sidenav" id="mobile-demo">
      <li><a href="/claim-form">File A Claim</a></li>
      ${req && req.session && req.session.userId
        ? '<li><a href="/admin/logout">Sign Out</a></li>'
        : ''
      }
    </ul>
  `
}

module.exports = header