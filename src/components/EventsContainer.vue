<script setup>
import EventCard from "./EventCard.vue";
import EventService from "@/services/EventService.js";
</script>
<script>
export default {
  data(){
    return {
      events:  null
    }
  },
  created(){
  EventService.fetchEvents()
    .then(res => {
      this.events = res.data;
    })
    .catch(err => {
      console.log(err);
    })
  }
}
</script>

<template>
<h1> Events for Good</h1>
<hr>
<br>
<section class="events">
  <EventCard v-for="event in events" :key="event.id" :eventData="event"  />
  </section>
</template>

<style scoped>
.events {
  display: flex;
  flex-direction: column;
  align-items: baseline;
}
</style>