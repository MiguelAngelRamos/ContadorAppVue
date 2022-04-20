import { shallowMount } from "@vue/test-utils";
import Counter from '@/components/Counter';

// CREAMOS NUESTRA SUITE
describe('Pruebas del componente Counter.vue', ()=> {

  // test('Debemos hacer match con el snapshot', () => {
  //   // Nuestro objeto de prueba
  //   const wrapper = shallowMount(Counter);
  //   // console.log(wrapper.html());
  //   expect(wrapper.html()).toMatchSnapshot();
  // });

  test('h2 debe existir y tener el titulo por defecto', () => {
    const wrapper = shallowMount(Counter); // El wrapper va obtener una instancia del componente montado.
    expect(wrapper.find('h2').exists()).toBe(true);

    // obtener el valor del h2 Title Counter Default
    const h2Value = wrapper.find('h2').text();
    
    expect(h2Value).toBe('Title Counter Default');
  });

  test('el valor por defecto del parrafo debe ser 100', () => {
    
    const wrapper = shallowMount(Counter);

    // encontrar dentro tags "p" ( todas las etiquetas p )
    // const pTags = wrapper.findAll('p'); // Nos va regresar un listado (Array)
    const value = wrapper.find('[data-testid="counter"]').text();
    // toBe trabaja con el ===
    // expect(pTags[1].text()).toBe('100');

    // [data-testid=""]
    // ===
    expect(value).toBe("100");
  });

  test('debe de incrementar en 1 y decrementar 1 el contador', async () => {
    const wrapper = shallowMount(Counter);
    // tomar una referencia del botón
    // vamos a suponer que es el primero
    const incrementarBtn  = wrapper.find('button');

    await incrementarBtn.trigger('click');

    const value = wrapper.find('[data-testid="counter"]').text();
    // console.log(value);
    expect(value).toBe('101');

  });

});