<script setup>
import EventService from "@/services/EventService.js";
</script>

<script>
export default {
  data(){
    return {
      eventData: null,
      id: 123
    }
  },
  created(){
  EventService.fetchEventById(this.id)
    .then(res => {
      this.eventData = res.data;
    })
    .catch(err => {
      console.log(err);
    })
  }
}

</script>

<template>
  <div v-if="eventData" >
    <h1>{{eventData.title}}</h1>
    <p>{{eventData.time}} on {{eventData.date}} @ {{eventData.location}}</p>
    <p>{{eventData.description}}</p>
  </div>
</template>