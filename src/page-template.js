const getJobInfo = (employee) => {
    if (employee.getRole() === "Manager") {
        return `Office number: ${employee.getOfficeNumber()}`;
    } else if (employee.getRole() === "Intern") {
        return `School: ${employee.getSchool()}`;
    } else if (employee.getRole() === "Engineer") {
        return `GitHub: ${employee.getGithub()}`;
    }  
}

const getIcon = (employee) => {
    if (employee.getRole() === "Manager") {
        return `<i class="fa fa-solid fa-user-tie"></i>`;
    } else if (employee.getRole() === "Intern") {
        return `<i class="fa fa-solid fa-user-graduate"></i>`;
    } else if (employee.getRole() === "Engineer") {
        return `<i class="fa fa-solid fa-laptop-code"></i>`;
    } 
}

const generateCards = (employeesArr) => {
    return `
    <div>
        ${employeesArr.map((employee) => {
            return `
            <div class='container'>
    <div class='columns is-mobile'>
      <div class='column is-5'>
        <div class="card">
          <div class='media-content'>
            <h1 class="title is-3">${employee.getName()}</h1>
            <span class="icon-text">
  <span class="icon">
    ${getIcon(employee)}
  </span>
  <span class="subtitle is-4">${employee.getRole()}</span>
</span>
          </div>
          <div class="card-content">
          <p>ID: ${employee.getId()}</p>
          <p>Email: ${employee.getEmail()}</p>
          <p>${getJobInfo(employee)}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
            `
        })
    .join('')}
    </div>
    `        
};

const generateHTML = (employeesArr) => {
    return ` 
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <meta http-equiv="X-UA-Compatible" content="ie-edge">
        <title>Team Profile</title>
        <link rel='stylesheet' href=
    'https://cdnjs.cloudflare.com/ajax/libs/bulma/0.7.5/css/bulma.css'>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.1/css/all.min.css" integrity="sha512-+4zCK9k+qNFUR5X+cKL9EIR+ZOhtIloNl9GIKS57V1MyNsYpYcUrUeQc9vNfzsWfV28IaLL3i96P9sdNyeRssA==" crossorigin="anonymous" />
    </head>
    <div>
        <h1 class="title is-1 has-text-centered">My Team</h1>
    </div>
    <body>
        <div>
            ${generateCards(employeesArr)}
        </div>
    </body>
    </html>
    `
};

module.exports = generateHTML;
