// PRIMERA PRUEBA

describe('Mi primer Contenedor de Pruebas', () => {
  // it o test da lo mismo cual de las 2 utilizes
  test('debe ser mayor a 18', () => {

    // ETAPA DE PREPARACIÓN
    let value = 10;
    // ESTIMULO
    value = 10 + 10;
    // OBSERVAR EL RESULTADO
    expect(value).toBeGreaterThan(18);

  })
})