export const state = () => ({
  fib: Array,
  message: ''
})

export const mutations = {
  generateFib (state, maxNumber) {
    var x = 0; var y = 1; state.fib = [0]; while (y <= maxNumber) { state.fib.push(y); y += x; x = y - x }
  },
  editMessage (state, message) { state.message = message },
  addNextNumber( state, number) { state.fib.push(number)}
}

export const actions = {
  addNextNumber ({state, commit}, number) {
    console.log(state)
    if ((state.fib[state.fib.length - 1] + state.fib[state.fib.length - 2]) === parseInt(number)) {
      commit('addNextNumber', parseInt(number))
      commit('editMessage', 'Correct number in the sequence: ' + parseInt(number))
    } else commit('editMessage', 'Wrong number in the sequence')
  }
}
