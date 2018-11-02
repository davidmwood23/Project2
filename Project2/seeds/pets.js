const db = require('../models');

const items = [{
    pet_name: "Andrew",
    pet_breed: "dog",
    pet_availability: "yes",
    pet_image: "https://img.huffingtonpost.com/asset/5b7fdeab1900001d035028dc.jpeg?cache=sixpwrbb1s&ops=1910_1000"
  },
  {
    pet_name: "David",
    pet_breed: "dog",
    pet_availability: "yes",
    pet_image: "https://img.huffingtonpost.com/asset/5b7fdeab1900001d035028dc.jpeg?cache=sixpwrbb1s&ops=1910_1000"
  },
  {
    pet_name: "Andrew2",
    pet_breed: "dog",
    pet_availability: "yes",
    pet_image: "https://img.huffingtonpost.com/asset/5b7fdeab1900001d035028dc.jpeg?cache=sixpwrbb1s&ops=1910_1000"
  },
  {
    pet_name: "David2",
    pet_breed: "dog",
    pet_availability: "yes",
    pet_image: "https://img.huffingtonpost.com/asset/5b7fdeab1900001d035028dc.jpeg?cache=sixpwrbb1s&ops=1910_1000"
  }, {
    pet_name: "Andrew3",
    pet_breed: "dog",
    pet_availability: "yes",
    pet_image: "https://img.huffingtonpost.com/asset/5b7fdeab1900001d035028dc.jpeg?cache=sixpwrbb1s&ops=1910_1000"
  }
];

db.sequelize.sync().then(function () {
  db.Pets.bulkCreate(items).then(function (rows) {
    console.log('\n\nINSERTED\n\n');
  }).catch(function (err) {
    console.log('\n\nError:', err);
  });
});