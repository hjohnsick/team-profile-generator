const getJobInfo = (employee) => {
    if (employee.getRole() === "Manager") {
        return employee.getOfficeNumber();
    } else if (employee.getRole() === "Intern") {
        return employee.getSchool();
    } else if (employee.getRole() === "Engineer") {
        return employee.getGithub();
    }  
}

const generateCards = (employeesArr) => {
    return `
    <div>
        ${employeesArr.map((employee) => {
            return `
            <div class='container has-text-centered'>
    <div class='columns is-mobile is-centered'>
      <div class='column is-5'>
        <div class="card">
          <div class='media-content'>
            <h1 class="title is-3">${employee.getName()}</h1>
            <h2 class="subtitle is-4">${employee.getRole()}</h2>
          </div>
          <div class="card-content">
          <p>ID:${employee.getId()}</p>
          <p>Email:${employee.getEmail()}</p>
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
    </head>
    <div>
        <h1>My Team</h1>
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
