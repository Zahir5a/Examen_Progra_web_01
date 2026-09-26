function calcular() {
    var precio = parseFloat(document.getElementById('precio').value);
    var cantidad = parseFloat(document.getElementById('cantidad').value);
    var cuota = parseInt(document.getElementById('cuotas').value);

    if (precio > 0 && cantidad > 0) {
        var total = precio*cantidad;
        var monto = total/cuota;

        document.getElementById('resultado').innerHTML = 
        `
        Total de la compra: S/ ${total.toFixed(2)}<br>
        Número de cuotas: ${cuota}<br>
        <strong>Monto de cada cuota S/ ${monto.toFixed(2)}</strong>
        `
    } else {
        document.getElementById('resultado').innerHTML = "Ingrese un precio y una cantidad mayores que cero."
    }
}