$.ajax({
    url: '/api/pets',
    method: 'GET'
}).then(function (response) {
    for (let i = 0; i < response.length; i++) {
        let data = response[i];
        console.log(data);
        $("#pets-view .row").append(`<div class="col-4"><div class="card" style="width: 18rem;">
        <img class="card-img-top" src=${data.pet_image} alt="Card image cap">
        <div class="card-body">
          <h2 class="card-title">${data.pet_name}</h2>
          <h5 class="card-breed">${data.pet_breed}</h5>
          <h5 class="card-availability">${data.pet_availability}</h5>
          <p class="card-text">Fun loving pet looking for a place to call home!</p>
          <a data-id=${data.id} class="btn btn-primary get-pet">Go somewhere</a>
        </div>
      </div>
</div></div>`);
    }
    console.log(response);

});


$("#pets-view .row").on("click", ".get-pet", function (event) {
    event.preventDefault();
    let petId = $(this).data("id");
    console.log(petId)



    $.ajax({
        url: `/api/pets/${petId}`,
        method: 'GET'
    }).then(function (response) {
        $("#pets-view").empty();
        for (let i = 0; i < response.length; i++) {
            let pet = response[i];
            console.log(pet);
            $(".modal-body").append(`<div>${pet.pet_name}</div><div>${pet.pet_breed}</div><div>${pet.pet_availability}</div>`);
            $('#myModal').modal("show")
        }

    });

$('#form-submit').on('click', function () {
    // Add form element on HTML
    // When submit button is clicked, grab values from the form input fields
    // This POST request fires off and stores the `data` object into the MySQL db.
    // We'll then want to re-render all of the rows in our table to the DOM.
    $.ajax({
        url: `/api/pets`,
        method: `POST`,
        data: {}
    }).then(function (response) {
        $("pets-view")
    })
})


    // $.ajax({
    //     url: `/api/pets`,
    //     method: `POST`,
    //     data: {{pet.pet_name}}
    // }).then(function (response) {
    //     $("pets-view")
    // })


})
