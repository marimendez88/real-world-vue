

<script>
export default {
  props: ['eventData'],
  inject: ['GStore'],
  methods: {
    registerEvent() {
      // * Call to API to register for event
      // * If successful, redirect to event details page

      this.GStore.flashMessage = 'You have successfully registered for' + this.eventData.title;
      setTimeout(() => {
        this.GStore.flashMessage = '';
      }, 3000);
      this.$router.push({
        name: 'EventDetails',
      })
      //* $router.replace -> redirect to new route, but don't add to history
      //* $router.push -> add to history
      //* $router.go -> programmatically invoke the browser back and forward buttons 
      //* .go(1) -> go forward one page
      //* .go(-1) -> go back one page       
    }
  }
}
</script>

<template>
  <div v-if="eventData" >
    <p>Register for the event here</p>
    <button class="button-style" @click="registerEvent">Register me</button>
  </div>
</template>

<style scoped>
.button-style{
  background-color: #4CAF50;
  border: none;
  color: white;
  padding: 15px 32px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 26px;
  font-weight: bold;
  margin: 4px 2px;
  cursor: pointer;
}
</style>