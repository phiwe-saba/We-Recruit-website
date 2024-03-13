import { jobs } from "../data/jobs.js"

let jobHTML = '';

jobs.forEach((job) => {
    jobHTML += `
        <div class="box">
            <a href="application.html">
                <div class="title">
                    <p>${job.jobTitle}<p>
                </div>
                <div class="subtitle">
                    <p>${job.department}</p>
                </div>
                <div class="location">
                    <p>${job.jobType} | ${job.location}</p>
                </div>
                <div class="buttons">
                    <div class="details">
                        <button>Details</button>
                    </div>
                    <div class="apply" data-job-id="${job.id}">
                        <button>Apply</button>
                    </div>
                </div>
            </a>
        </div>
    `;
});

document.querySelector(".js-boxes").innerHTML = jobHTML;
