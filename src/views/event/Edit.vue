<script setup>
import EventService from "@/services/EventService.js";
</script>

<script>
export default {
  props: ['id'],
  data(){
    return {
      eventData: null,
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
    <div id="nav">
      <router-link :to="{ name: 'EventDetails', params: { id } }"
        >Details</router-link
      >
      |
      <router-link :to="{ name: 'EventRegister', params: { id } }"
        >Register</router-link
      >
      |
      <router-link :to="{ name: 'EventEdit', params: { id } }"
        >Edit</router-link
      >
    </div>
    <p>Edit for the event here</p>
  </div>
</template>