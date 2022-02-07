const generateCards = (employeesArr) => {
    return `
    <div>
        ${employeesArr.map(({name, id, email}) => {
            return `
            <h1>${name}</h1>
            <h1>${id}</h1>
            <h1>${email}</h1>
            `
        })}
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
