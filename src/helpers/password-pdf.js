export const password = () => {

    // Product Department
    let productDepartment = BigInt(Math.pow(2, 250)).toString();

    let addition1 = 0;
    console.log(`\nProduct Department - 2 raised to 250: ${productDepartment}`)
    for (let i = 0; i <= productDepartment.length; i++) {
        addition1 = addition1 + Number(productDepartment.charAt(i));
    };
    console.log(`The addition of the digits in product department is ${addition1}\n`);

    // Marketing Department
    let marketingDepartment = BigInt(Math.pow(2, 200)).toString();
    console.log(`Marketing Department - 2 raised to 200: ${marketingDepartment}`);

    let addition2 = 0;

    for (let i = 0; i <= marketingDepartment.length; i++) {
        addition2 = addition2 + Number(marketingDepartment.charAt(i));
    };

    console.log(`The addition of the digits in marketing department is ${addition2}\n`)

    // Backend Department
    let backendDepartment = BigInt(Math.pow(2, 130)).toString();
    console.log(`Backend Department - 2 raised to 130: ${backendDepartment}`);

    let addition3 = 0

    for (let i = 0; i <= backendDepartment.length; i++) {
        addition3 = addition3 + Number(backendDepartment.charAt(i));
    }

    console.log(`The addition of the digits in backend department is ${addition3}\n`);

    // Frontend Department
    let frontendDepartment = BigInt(Math.pow(2, 170)).toString();
    console.log(`Frontend Department - 2 raised to 170: ${frontendDepartment}`);

    let addition4 = 0

    for (let i = 0; i <= frontendDepartment.length; i++) {
        addition4 = addition4 + Number(frontendDepartment.charAt(i));
    }
    console.log(`The addition of the digits in frontend department is ${addition4}\n`);

    // Security Department
    let securityDepartment = BigInt(Math.pow(2, 50)).toString();
    console.log(`Security Department - 2 raised to 50: ${securityDepartment
}`);

    let addition5 = 0

    for (let i = 0; i <= securityDepartment.length; i++) {
        addition5 = addition5 + Number(securityDepartment.charAt(i));
    }
    console.log(`The addition of the digits in security department is ${addition5}\n`);

    // All Departments
    let allDepartments = BigInt(Math.pow(2, 800)).toString();
    console.log(`All Departments - 2 raised to 800: ${allDepartments
}\n`);

    let total = 0

    for (let i = 0; i <= allDepartments.length; i++) {
        total = total + Number(allDepartments.charAt(i));
    }

    console.log(`---- THE PASSWORD OF THE PDF IS: ${total} ----\n`);
};