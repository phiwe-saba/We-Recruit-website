<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="./styles/vac-styles.css">
    <title>We-Recruit | Vacancies</title>
</head>
<body>
    <div class="navbar">
        <nav class="container">
            <div class="logo"> <a href="./index.php">We-Recruit</a></div>
            <ul>
                <li id="header-links"><a href="vacancies.php">Vacancies</a></li>
                <li id="header-links"><a href="blog.php">Blog</a></li>
                <li id="header-links"><a href="application.php">Apply</a></li>
            </ul>
        </nav>
    </div>

    <div class="search-bar">
        <div class="container">
            <div class="header-section">
                <h1>Find your next job or internship</h1>
                <p>Explore available jobs</p>
            </div>
            <div class="content-bar">
                <input type="text" placeholder="Job title">
                <select class="location">
                    <option selected="">Select location</option>
                    <option value="1">Gauteng</option>
                    <option value="2">Cape Town</option>
                    <option value="3">Durban</option>
                    <option value="3">Port Elizabeth</option>
                    <option value="3">Northern Cape</option>
                </select>
                <select class="job-type">
                    <option selected="">Select job type</option>
                    <option value="1">Contract</option>
                    <option value="2">Permanant</option>
                    <option value="3">Temporary</option>
                </select>
                <button type="submit">Search</button>  
            </div>
        </div>
    </div>
    
    <div class="job-container">
        <div class="container">
            <div class="box">
                <a href="application.php">
                    <h2>Junior Software Developer</h2>
                    <p>Information Technology</p>
                    <p>Fulltime | Johannesburg</p>
                    <button>Apply</button>
                </a>
            </div>
            <div class="box">
                <a href="application.php">
                    <h2>HR Intern</h2>
                    <p>Human Resource</p>
                    <p>Fulltime | Johannesburg</p>
                    <button>Apply</button>
                </a>
            </div>
            <div class="box">
                <a href="application.php">
                    <h2>Data Analyst Intern</h2>
                    <p>Information Technology</p>
                    <p>Contract | Sandton</p>
                    <button>Apply</button>
                </a>
            </div>
            <div class="box">
                <a href="application.php">
                    <h2>Cloud Developer</h2>
                    <p>Information Technology</p>
                    <p>Fulltime | Johannesburg</p>
                    <button>Apply</button>
                </a>
            </div>
            <div class="box">
                <a href="application.php">
                    <h2>Cashier</h2>
                    <p>Retail</p>
                    <p>Fulltime | Johannesburg</p>
                    <button>Apply</button>
                </a>
            </div>
            <div class="box">
                <a href="application.php">
                    <h2>Internal Auditor</h2>
                    <p>Finance</p>
                    <p>Fulltime | Cape Town</p>
                    <button>Apply</button>
                </a>
            </div>
            <div class="box">
                <a href="application.php">
                    <h2>Web Developer</h2>
                    <p>Information Technology</p>
                    <p>Contract | Johannesburg</p>
                    <button>Apply</button>
                </a>
            </div>
        </div>
    </div>
    <footer>
        <p>We-Recruit Pty Ltd 2022 - Phiwe Saba</p>
    </footer>
</body>
<script src="script.js"></script>
</html>