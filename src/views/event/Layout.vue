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
      <router-link :to="{ name: 'EventDetails' }"
        >Details</router-link
      >
      |
      <router-link :to="{ name: 'EventRegister' }"
        >Register</router-link
      >
      |
      <router-link :to="{ name: 'EventEdit' }"
        >Edit</router-link
      >
    </div>
    <router-view :eventData="eventData"></router-view>
  </div>
</template>