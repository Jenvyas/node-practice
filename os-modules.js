const os = require('os')

//info about current user
const user = os.userInfo()
console.log(user)

//method resurns the system uptime in seconds

console.log(os.uptime() / 60);

const currentOS = {
    name: os.type(),
    release: os.release(),
    totalMem: os.totalmem(),
    freeMemL: os.freemem(),
}
console.log(currentOS);