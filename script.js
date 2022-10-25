$('.calcular').on('click', function () {
    let precio = $('.precio').val();
    let descuento_porcentaje = $('.descuento_porcentaje').val();

    let descuento = (descuento_porcentaje * precio) / 100;
    $('.descuento').html('$'+descuento);

    let precio_descuento = precio - descuento;

    $('.precio_descuento').html('$'+precio_descuento);
    $('.total').html('$'+precio_descuento);

    $('.botones').html(`<a href="/pages/pagoRealizado.html" class="btn btn-success boton">Comprar</a>`);
});