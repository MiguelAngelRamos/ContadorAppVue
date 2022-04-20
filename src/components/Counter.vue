<template>
  <h2>{{customTitle}}</h2>
  <p>{{contador }} <sup>2</sup> = {{ squareCounter }}</p>
  <p data-testid="counter">{{ contador }}</p>
  <div>
    <button class="btn btn-success mx-2" @click="incrementar">+1</button>
    <button class="btn btn-danger" @click="disminuir">-1</button>
  </div>
</template>

<script>
export default {
  name: 'Counter',
  props: {
    title: String,
    start: {
      type: Number,
      default: 100,
      validator(value) {
        // PARA EL EQUIPO TRABAJO DE PROGRAMADORES
        return value >=0;
      }
    }
  },
  data() {
    return {
      contador : this.start,
    }
  },
  methods: {
    incrementar() {
      console.log('aumentar contador');
      this.contador++;
    },
    disminuir() {
      console.log('disminuir contador');
      this.contador--;
    }
  },
  computed: {
    squareCounter() {
      return Math.pow(this.contador, 2);
    },
    customTitle() {
      return this.title || "Title Counter Default"
    }
  }

}
</script>

<style>

</style>