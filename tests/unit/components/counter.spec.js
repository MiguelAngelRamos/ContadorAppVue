import { shallowMount } from "@vue/test-utils";
import Counter from '@/components/Counter';

// CREAMOS NUESTRA SUITE
describe('Pruebas del componente Counter.vue', ()=> {
  let wrapper;
  // test('Debemos hacer match con el snapshot', () => {
  //   // Nuestro objeto de prueba
  //   const wrapper = shallowMount(Counter);
  //   // console.log(wrapper.html());
  //   expect(wrapper.html()).toMatchSnapshot();
  // });
  beforeEach(() => {
    wrapper = shallowMount(Counter);
  });

  test('h2 debe existir y tener el titulo por defecto', () => {

    expect(wrapper.find('h2').exists()).toBe(true);

    // obtener el valor del h2 Title Counter Default
    const h2Value = wrapper.find('h2').text();

    expect(h2Value).toBe('Title Counter Default');
  });

  test('el valor por defecto del parrafo debe ser 100', () => {

    // const wrapper = shallowMount(Counter);
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
    // const wrapper = shallowMount(Counter);
    // tomar una referencia del botón
    // vamos a suponer que es el primero
    const [incrementarBtn, decrementarBtn] = wrapper.findAll('button'); // aumentar y otro para disminuir
    // const incrementarBtn  = wrapper.findAll('button')[0]; // find all devuelve una lista (Array)
    await incrementarBtn.trigger('click'); // Es un click sobre el botón 101
    await incrementarBtn.trigger('click'); // Es un click sobre el botón 102
    await incrementarBtn.trigger('click'); // Es un click sobre el botón 103
    // const decrementarBtn = wrapper.findAll('button')[1];
    await decrementarBtn.trigger('click'); // 103 - 1 = 102
    await decrementarBtn.trigger('click'); // 102 - 1 = 101
    const value = wrapper.find('[data-testid="counter"]').text();
    // console.log(value);
    expect(value).toBe('101');

  });

  test('el prop debe tener el valor por defecto del parrafo', () => {
    const { start } = wrapper.props();
    // console.log(wrapper.props());
    // console.log(wrapper.props()); // objecto
    // const start = wrapper.props('start');
    // const title = wrapper.props('title');
    // console.log(start);
    const value = wrapper.find('[data-testid="counter"]').text();
    // console.log(value);

    // expect(+value).toBe(start);
    expect(Number(value)).toBe(start);

  });

  test('debe de mostrar en el h2 el contenido del prop enviado', () => {
    const title = 'Hola Mundo!';
    const wrapper = shallowMount(Counter, {
      props: {
        // title: 'Hola Mundo!'
        // title: title
        title
      }
    });
    console.log(wrapper.find('h2').text());
    //  expect(wrapper.find('h2').text()).toBe('Hola Mundo!')
    expect(wrapper.find('h2').text()).toBe(title)

  });

});