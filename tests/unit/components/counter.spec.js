import { shallowMount } from "@vue/test-utils";
import Counter from '@/components/Counter';

// CREAMOS NUESTRA SUITE
describe('Pruebas del componente Counter.vue', ()=> {

  test('Debemos hacer match con el snapshot', () => {
    // Nuestro objeto de prueba
    const wrapper = shallowMount(Counter);
    // console.log(wrapper.html());
    expect(wrapper.html()).toMatchSnapshot();
  })
});