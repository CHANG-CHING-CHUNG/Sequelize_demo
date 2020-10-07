const db = require('./models');
const User = db.User;
const Comment = db.Comment;

User.create({
  firstName: 'John',
  lastName: 'Chang'
}).then(() => {
  console.log('OK!');
})