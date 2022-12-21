const app = Vue.createApp({
  data() {
    return {
      enteredGoalValue: '',
      goals: [] };
  },
  methods: {
      addGoal() {
        this.goals.push(this.enteredGoalValue)
      },

      removeGoal(inx) {
        this.goals.splice(inx, 1)
      }
  }
});

app.mount('#user-goals');
