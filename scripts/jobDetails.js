import { details } from "../data/jobs";

let detailsHTML = '';

details.forEach((details) => {
    detailsHTML += `
        <h1>${details.jobTitle}</h1>
        <p>${details.description}</p>
        <div class="job-details">
            <h1>Responsibilities</h1>
            <ul>
                <li>Lorem ipsum dolor sit amet consectetur adipisicing elit.</li>
                <li>Lorem ipsum dolor sit amet consectetur adipisicing elit.</li>
                <li>Lorem ipsum dolor sit amet consectetur adipisicing elit.</li>
                <li>Lorem ipsum dolor sit amet consectetur adipisicing elit.</li>
                <li>Lorem ipsum dolor sit amet consectetur adipisicing elit.</li>
                <li>Lorem ipsum dolor sit amet consectetur adipisicing elit.</li>
            </ul>
        </div>
        <div class="requirements">
            <h1>Rquirements</h1>
            <ul>
                <li>Lorem ipsum dolor sit amet consectetur adipisicing elit.</li>
                <li>Lorem ipsum dolor sit amet consectetur adipisicing elit.</li>
                <li>Lorem ipsum dolor sit amet consectetur adipisicing elit.</li>
                <li>Lorem ipsum dolor sit amet consectetur adipisicing elit.</li>
                <li>Lorem ipsum dolor sit amet consectetur adipisicing elit.</li>
                <li>Lorem ipsum dolor sit amet consectetur adipisicing elit.</li>
            </ul>
        </div>
        <div class="apply" data-job-id="${details.id}">
            <button>Apply</button>
        </div>
    `;
});

console.log(detailsHTML);

document.querySelector(".js-details").innerHTML = detailsHTML;

console.log("Phiwe");