import {jobs} from "../data/jobs.js"

let jobHTML = '';

jobs.forEach(() => {
    jobHTML += `
        <div class="box">
            <a href="application.html">
                <h2>Junior Software Developer</h2>
                <p>Information Technology</p>
                <p>Fulltime | Johannesburg</p>
                <button>Apply</button>
            </a>
        </div>
    `;
});

console.log('Phiwe');
document.querySelector('.js-job-container').innerHTML = jobHTML;