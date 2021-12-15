// An object storing random data to be passed into messages
const data = {
    names: ['George','Michael','Steven','Mary','Rachel','Tyler','Connor','Alex','Molly'],
    ages: () => {
        const min = 16;
        const max = 65;
        return Math.floor(Math.random() * (max - min) + min);
    },
    jobs: ['Software Engineer','Warehouse Operative','Plumber','Bus Driver','Builder','Pharmacist','Doctor','Farmer','Nurse']
}

// Returns a random name
const randomName = () => {
    const min = 0;
    const max = data.names.length;
    const random = Math.floor(Math.random() * max);
    return data.names[random];
}

// Returns a random Job
const randomJob = () => {
    const min = 0;
    const max = data.jobs.length;
    const random = Math.floor(Math.random() * max);
    return data.jobs[random];
}

// Function that prints messages when called
function printMessages() {
    console.log(`My name is ${randomName()}`);
    console.log(`I am ${data.ages()} years old`);
    console.log(`I am a ${randomJob()}`);
}

//Print Messages
printMessages();