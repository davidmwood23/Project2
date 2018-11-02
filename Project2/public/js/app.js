$.ajax({
    url:'/api/pets',
    method: 'GET'
}).then(function(response){
    for(let i = 0; i < response.length; i++){
        let data = response[i];
        $("#product-view").append(`<div>${data.product_name} <button data-id=${data.id} class="get-product">Click Me</button></div>`);

        // $('#product-view').append(data.product);
    }
    console.log(response);

});

$.ajax({
    url:'/api/products/:id',
    method: 'GET'
}).then(function(response){
    for(let i = 0; i < reponse.length; i++){
        let data = response[i];
        $("#stock-view").append(`<div>${data.product_name} <button data-id=${data.id} class="get-product">Click Me</button></div>`);
    }
});

$("#product-view").on("click", "get-product", function(event){
    event.preventDefault();
	let productId = $(this).data("id");
	console.log(productId)

})