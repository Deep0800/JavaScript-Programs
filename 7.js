let user = { name: "Deep Gandhi" };
const userList = [user];
user = null;

console.log(userList); //[ { name: 'Deep Gandhi' } ]
