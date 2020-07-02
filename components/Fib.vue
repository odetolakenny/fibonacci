<template>
  <div class="hello">
    <h4>{{ msg }}</h4>
    <div>
      <input type="number" class="input" v-model="maxNumber" placeholder="Enter maximum number">
      <button @click="generateFib">Generate Sequence</button>
    </div>

    <div>
      <input type="number" class="input" v-model="nextNumber" placeholder="Next number in series">
      <button @click="addNextNumber">Add Number</button> <br>
      <button @click="showResult = true">Submit</button>
    </div>

    <p v-if="!showResult" style="color:Tomato;">{{ message }}</p>
    <p v-else-if="showResult" style="color:MediumSeaGreen;"> Fibonacci Sequence: <br> <strong>{{ fib }}</strong></p>
  </div>
</template>

<script>
import { mapMutations } from 'vuex'

export default {
  name: 'Fib',
  props: {
    msg: String
  },
  data () {
    return {
      maxNumber: null,
      nextNumber: null,
      showResult: false
    }
  },
  methods: {
    generateFib () {
      this.maxNumber === null ? console.log('enter a number') : this.$store.commit('generateFib', this.maxNumber)
      this.$store.commit('editMessage', 'Fibonacci generated')
    },
    addNextNumber () {
      this.nextNumber === null ? console.log('enter a number') : this.$store.dispatch('addNextNumber', this.nextNumber)
      this.showResult = false
    }
  },
  computed: {
    fib () { return this.$store.state.fib },
    message () { return this.$store.state.message }
  }
}
</script>

<style scoped>
input {
  height: 25px;
  margin: 10px
}
text {
  color: brown;
}
button {
  height: 25px;
}
</style>
