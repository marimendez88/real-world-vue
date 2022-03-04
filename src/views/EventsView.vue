<script setup>
import EventCard from "../components/EventCard.vue";
import EventService from "@/services/EventService.js";
import { watchEffect } from 'vue';
</script>
<script>
export default {
  props: ['page'],
  components: {
    EventCard
  },
  data(){
    return {
      events:  null,
      totalEvents: 0
    }
  },
  created(){
    watchEffect( () => {
      console.log(this.page)
      EventService.fetchEvents(2, this.page)
      .then(res => {
        this.events = res.data;
        this.totalEvents = res.headers['x-total-count'];
      })
      .catch(err => {
        console.log(err);
      })
    })
  },
  computed: {
    hasNextPage(){
      return this.page  <  Math.ceil(this.totalEvents / 2);
    },
  }
}
</script>
<template>
  <main>
 <h1> Events for Good</h1>
<hr>
<br>
<section class="events">
  <EventCard v-for="event in events" :key="event.id" :eventData="event"  />
  <section class="pagination">
  <router-link id="page-prev" :to="{ name: 'events', query: { page: page - 1 }}" rel="prev" v-if="page != 1"> Previous</router-link>
    <router-link id="page-next" :to="{ name: 'events', query: { page: page + 1 }}" rel="next" v-if="hasNextPage" >Next </router-link>
</section>
  </section>
  </main>
</template>


<style scoped>
.events {
  display: flex;
  flex-direction: column;
  align-items: baseline;
}
.pagination {
  display: flex;
  width: 290px;
}
.pagination a {
  flex: 1;
  text-decoration: none;
  color: hsla(160, 100%, 37%, 1);
}

#page-prev {
  text-align: left;
}

#page-next {
  text-align: right;
}
</style>