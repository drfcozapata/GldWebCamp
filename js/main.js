(function() {
    'use strict'

    var regalo = document.getElementById('regalo');
    document.addEventListener('DOMContentLoaded', function() {

        // Campos Datos de Usuario
        var nombre = document.getElementById('nombre');
        var apellido = document.getElementById('apellido');
        var email = document.getElementById('email');

        // Campos Pases
        var pase_dia = document.getElementById('pase_dia');
        var pase_dosdias = document.getElementById('pase_dosdias');
        var pase_completo = document.getElementById('pase_completo');

        // Botones y Divs
        var calcular = document.getElementById('calcular');
        var errorDiv = document.getElementById('error');
        var botonRegistro = document.getElementById('btnRegistro');
        var lista_productos = document.getElementById('lista-productos');
        var suma = document.getElementById('suma-total');

        // Extras
        var camisas = document.getElementById('camisa_evento');
        var etiquetas = document.getElementById('etiquetas');



        // EVENT LISTENERS
        calcular.addEventListener('click', calcularMontos);

        nombre.addEventListener('blur', validarCampos);
        apellido.addEventListener('blur', validarCampos);
        email.addEventListener('blur', validarCampos);
        email.addEventListener('blur', validarMail);

        pase_dia.addEventListener('blur', mostrarDias);
        pase_dosdias.addEventListener('blur', mostrarDias);
        pase_completo.addEventListener('blur', mostrarDias);



        // FUNCIONES
        function validarCampos() {
            if (this.value == '') {
                this.style.border = '1px solid #fe4918';
                errorDiv.style.display = 'block';
                errorDiv.innerHTML = 'Este campo es obligatorio';
                errorDiv.style.color = '#fe4918';
                errorDiv.style.textAlign = 'center';
                errorDiv.style.padding = '10px';
                this.focus();
            } else {
                this.style.border = '1px solid #000000';
                errorDiv.style.display = 'none';
            }
        }

        function validarMail() {
            if (this.value.indexOf('@') > -1) {
                this.style.border = '1px solid #000000';
                errorDiv.style.display = 'none';
            } else {
                this.style.border = '1px solid #fe4918';
                errorDiv.style.display = 'block';
                errorDiv.innerHTML = 'Formato de correo no válido';
                errorDiv.style.color = '#fe4918';
                errorDiv.style.textAlign = 'center';
                errorDiv.style.padding = '10px';
                this.focus();
            }
        }

        function calcularMontos(event) {
            event.preventDefault();
            if (regalo.value === '') {
                alert('Debes elegir un regalo');
                regalo.focus();
            } else {
                var boletosDia = parseInt(pase_dia.value, 10) || 0,
                    boletos2Dias = parseInt(pase_dosdias.value, 10) || 0,
                    boletoCompleto = parseInt(pase_completo.value, 10) || 0,
                    cantCamisas = parseInt(camisas.value, 10) || 0,
                    cantEtiquetas = parseInt(etiquetas.value, 10) || 0;

                var listadoProductos = [];
                if (boletosDia >= 1) {
                    listadoProductos.push(boletosDia + ' Pases por un solo día');
                }
                if (boletos2Dias >= 1) {
                    listadoProductos.push(boletos2Dias + ' Pases por dos días');
                }
                if (boletoCompleto >= 1) {
                    listadoProductos.push(boletoCompleto + ' Pases por todo el evento');
                }
                if (cantCamisas >= 1) {
                    listadoProductos.push(cantCamisas + ' Camisas del evento');
                }
                if (cantEtiquetas >= 1) {
                    listadoProductos.push(cantEtiquetas + ' Etiquetas del evento');
                }

                lista_productos.style.display = 'block';
                lista_productos.innerHTML = '';
                for (var i = 0; i < listadoProductos.length; i++) {
                    lista_productos.innerHTML += listadoProductos[i] + '<br/>';
                }

                var totalPagar = (boletosDia * 30) + (boletoCompleto * 50) + (boletos2Dias * 45) + ((cantCamisas * 10) * .93) + (cantEtiquetas * 2);

                suma.style.display = 'block';
                suma.innerHTML = '$ ' + totalPagar.toFixed(2);

            }
        }

        function mostrarDias() {
            var boletosDia = parseInt(pase_dia.value, 10) || 0,
                boletos2Dias = parseInt(pase_dosdias.value, 10) || 0,
                boletoCompleto = parseInt(pase_completo.value, 10) || 0;

            var diasElegidos = [];

            if (boletosDia >= 1 || boletosDia != '') {
                diasElegidos.push('viernes');
            }
            if (boletos2Dias >= 1 || boletos2Dias != '') {
                diasElegidos.push('viernes', 'sabado');
            }
            if (boletoCompleto >= 1 || boletoCompleto != '') {
                diasElegidos.push('viernes', 'sabado', 'domingo');
            }

            for (var i = 0; i < diasElegidos.length; i++) {
                document.getElementById(diasElegidos[i]).style.display = 'block';
            }

        }


    });
})();