import { jobs } from "../data/jobs.js"

let jobHTML = '';

jobs.forEach((job) => {
    jobHTML += `
        <div class="box">
            <a href="" data-job-id="${job.id}">
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
                    <div class="details" class="js-details" data-job-id="${job.id}">
                        <button><a href="">Details</a></button>
                    </div>
                    <div class="apply" data-job-id="${job.id}">
                        <button><a href="./application.html">Apply</a></button>
                    </div>
                </div>
            </a>
        </div>
    `;
});

document.querySelector(".js-boxes").innerHTML = jobHTML;

document.querySelectorAll('.js-details')
    .forEach((jobId) => {
        console.log("Phiwe", jobId);
        jobId.aadEventListener('click', () => {
            const id = jobId.dataset.jobId;
            window.location.href = `job-details.html?jobId=${id}`
        })
    });

/*document.getElementById("details").onclick = previewDetails();

function previewDetails() {
    console.log("Phiwe Saba");
}*/

//console.log(element);