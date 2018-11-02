const db = require('../models');

const items = [{
    first_name: "Andrew",
    last_name: "Kemp",
    email: "andrewtkemp@gmail.com",
    password: "lolumad"
  },
  {
    first_name: "David",
    last_name: "Woods",
    email: "davidmwoods@gmail.com",
    password: "lolumad"
  },
  {
    first_name: "Andrew2",
    last_name: "Kemp2",
    email: "andrewtkemp2@gmail.com",
    password: "lolumad"
  },
  {
    first_name: "David2",
    last_name: "Woods2",
    email: "andrewtkemp33@gmail.com",
    password: "lolumad"
  }, {
    first_name: "Andrew3",
    last_name: "Kemp3",
    email: "andrewtkemp3@gmail.com",
    password: "lolumad"
  }
];

db.sequelize.sync({
  force: true
}).then(function () {
  db.Users.bulkCreate(items).then(function (rows) {
    console.log('\n\nINSERTED\n\n');
  }).catch(function (err) {
    console.log('\n\nError:', err);
  });
});