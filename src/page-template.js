const generateCards = (employeesArr) => {
    return `
    <div>
        ${employeesArr.map((employee) => {
            return `
            <div class='container has-text-centered'>
    <div class='columns is-mobile is-centered'>
      <div class='column is-5'>
        <div class="card">
          <div class='card-header'>
            <div class="card-header-title has-text-success">
            <h1>${employee.getName()}</h1>
            <h1>${employee.getRole()}</h1>
            </div>
          </div>
          <div class="card-content">
          <h1>${employee.getId()}</h1>
          <h1>${employee.getEmail()}</h1>
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
