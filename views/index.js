const layout = require('./layout')

const indexPage = ({}) => {
  return layout({ template: `
    <div class="row">
      <div id="showcase">
        <div class="showcase-content">
            <h1>Dent & Hail Repair</h1>
            <p id="showcase-sub">Paintless hail dent repair without leaving your home</p>
            <a href="/claim-form" class="btn-large">File Claim</a>
        </div>
      </div>
    </div>
    <main>
      <section id="features">
        <div class="container">
          <div class="row">
            <div class="col s12 m6 checks">
              <span class="material-icons check">check</span> Free new rental vehicle delivered to your home<br />
              <span class="material-icons check">check</span> Waived deductible up to $1,000<br />
              <span class="material-icons check">check</span> Largest facility of its kind<br />
              <span class="material-icons check">check</span> Top-rated and locally owned
            </div>
            <div class="col s12 m6 checks">
              <span class="material-icons check">check</span> Insurance process completely handled<br />
              <span class="material-icons check">check</span> Lightning fast 7 day average turnaround<br />
              <span class="material-icons check">check</span> All new OEM parts when needed<br />
              <span class="material-icons check">check</span> Paintless repair
            </div>
          </div>
        </div>
      </section>
      <section id="index-cards">
        <div class="row">
          <div class="col s12 m4">
            <div class="card index-card">
              <div class="card-image">
                <img src="/images/mechanic.jpg">
              </div>
              <div class="card-content white-text">
                <span class="card-title">Hail Repair With Certified Technicians</span>
                <p>Let us check your vehicle for hail damage using our special lights, and a grid to bring to light the damage. Then we'll highlight it for the estimate and work with your insurance company to get everything approved, fixed, and back to new. Choose Dent Mavericks as your preferred facility.</p>
              </div>
            </div>
          </div>
          <div class="col s12 m4">
            <div class="card index-card">
              <div class="card-image">
                <img src="/images/cars-parked.jpg">
              </div>
              <div class="card-content white-text">
                <span class="card-title">Full-Size Paint Booths With Certified Painters</span>
                <p>We have the best paintless dent removal technicians in the world, we also have full-size state-of-the-art paint booths with certified body technicians and painters, making our facility a one-of-a-kind one-stop shop for all your auto needs. There's no dent too big or too small for Dent Mavericks.</p>
              </div>
            </div>
          </div>
          <div class="col s12 m4">
            <div class="card index-card">
              <div class="card-image">
                <img src="/images/windshield.jpg">
              </div>
              <div class="card-content white-text">
                <span class="card-title">OEM Windshield Replacement</span>
                <p>We always work with your insurance to get your windshield replaced with OEM from the dealership when it's necessary. The adjuster from your insurance company will look at your vehicle and determine if the windshield damage was caused by hail, wind, or debris. Once we receive the estimate we replace it back to factory condition.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section>
        <div class="action-area">
          <a href="/claim-form" class="action-btn white-text">
            Get Your Vehicle Repaired Now!
          </a>
        </div>
      </section>
    </main>
  ` })
}

module.exports = indexPage