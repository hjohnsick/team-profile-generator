const generateCards = (employeesArr) => {
    return `
    <div>
        ${employeesArr.map((employee) => {
            return `
            <h1>${employee.getName()}</h1>
            <h1>${employee.getId()}</h1>
            <h1>${employee.getEmail()}</h1>
            <h1>${employee.getRole()}</h1>
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
    </head>
    <body>
        <div>
            ${generateCards(employeesArr)}
        </div>
    </body>
    </html>
    `
};

module.exports = generateHTML;
