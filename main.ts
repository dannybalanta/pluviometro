let cantidad_agua = 0
let precipitacion = 0
let promedio = 0
/**
 * inicializar precipitacion de agua en ceros
 */
/**
 * iniciar promedio en ceros
 */
/**
 * inicializar cantidad de agua en ceros
 */
input.onButtonPressed(Button.A, function () {
    // al presionar el botón A
    // inicializar cantidad de agua en ceros
    cantidad_agua = 0
    // elegir un valor entre 0 y 6 mm de agua
    precipitacion = randint(0, 6)
    // pausa de 500 milisegundos
    basic.pause(500)
    for (let index = 0; index < 1825; index++) {
        // para cada uno de los 1825 días del estudio, acumular la cantidad de agua que cae en cada precipitación
        // asignar a la variable cantidad_agua el acumulado de precipitacion durante 1825 dias, un día a la vez
        cantidad_agua = cantidad_agua + precipitacion
    }
    // mostrar la cantidad de agua total en 1825 días
    basic.showNumber(cantidad_agua)
    // pausa de 100 milisegundos
    basic.pause(100)
    // mostrar unidad milímetro
    basic.showString("mm")
    // limpiar pantalla
    basic.clearScreen()
})
input.onButtonPressed(Button.B, function () {
    // al presionar el botón B
    // Calcular el promedio de precipitacion
    promedio = cantidad_agua / 1825
    // mostrar promedio
    basic.showNumber(promedio)
    // pausa de 100 milisegundos
    basic.pause(100)
    // mostrar unidad milímetros
    basic.showString("mm")
    // limpiar pantalla
    basic.clearScreen()
})
