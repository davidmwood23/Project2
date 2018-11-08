const db = require('../models');

const items = [{
    pet_name: "Andrew",
    pet_breed: "Dog",
    pet_availability: "yes",
    pet_image: "https://s3.amazonaws.com/cdn-origin-etr.akc.org/wp-content/uploads/2017/11/12230019/Parson-Russell-Terrier-On-White-02.jpg"
  },
  {
    pet_name: "David",
    pet_breed: "Dog",
    pet_availability: "yes",
    pet_image: "https://img.thrfun.com/img/087/816/doberman_pinscher_l2.jpg"
  },
  {
    pet_name: "Milo",
    pet_breed: "Dog",
    pet_availability: "yes",
    pet_image: "https://s3.amazonaws.com/cdn-origin-etr.akc.org/wp-content/uploads/2017/11/13001133/Basenji-On-White-01-400x267.jpg"
  },
  {
    pet_name: "Lilo",
    pet_breed: "Dog",
    pet_availability: "yes",
    pet_image: "https://img.huffingtonpost.com/asset/5b7fdeab1900001d035028dc.jpeg?cache=sixpwrbb1s&ops=1910_1000"
  }, {
    pet_name: "Slick",
    pet_breed: "Dog",
    pet_availability: "yes",
    pet_image: "https://s3.amazonaws.com/cdn-origin-etr.akc.org/wp-content/uploads/2017/11/12233026/German-Shepherd-Dog-On-White-06.jpg"
  }
];

db.sequelize.sync({force:true}).then(function () {
  db.Pets.bulkCreate(items).then(function (rows) {
    console.log('\n\nINSERTED\n\n');
  }).catch(function (err) {
    console.log('\n\nError:', err);
  });
});