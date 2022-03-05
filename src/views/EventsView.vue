<script >
import EventCard from "../components/EventCard.vue";
import EventService from "@/services/EventService.js";
import NProgress from "nprogress";

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
  beforeRouteEnter(routeTo, routeFrom, next) {
    NProgress.start();
      EventService.fetchEvents(2, parseInt(routeTo.query.page) || 1)
      .then(res => {
         next(comp => {
          comp.events = res.data;
          comp.totalEvents = res.headers['x-total-count'];
        })
      })
      .catch(() => {
        next({name: 'NetworkError'});
      })
      .finally(() => {
        NProgress.done();
      })
  },
    beforeRouteUpdate(routeTo) {
      NProgress.start();
    EventService.fetchEvents(2, parseInt(routeTo.query.page) || 1)
      .then(response => {
        this.events = response.data
        this.totalEvents = response.headers['x-total-count']
      })
      .catch(() => {
        return { name: 'NetworkError' }
      })
      .finally(() => {
        NProgress.done();
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
  <router-link id="page-prev" :to="{ name: 'Events', query: { page: page - 1 }}" rel="prev" v-if="page != 1"> Previous</router-link>
    <router-link id="page-next" :to="{ name: 'Events', query: { page: page + 1 }}" rel="next" v-if="hasNextPage" >Next </router-link>
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