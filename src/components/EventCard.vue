
<script >
export default {
  props: {
    eventData: Object
  }
}
</script>

<template>
<router-link class="event-link" :to="{ name: 'EventDetails', params: { id: eventData.id } }">
  <div class="event-card">
    <span>
    @{{eventData.time}} on {{eventData.date}}
    </span>
    <h4>{{eventData.title}}</h4>
  </div>
  </router-link>
</template>

<style scoped>
.event-card {
  padding: 20px;
  width: 250px;
  cursor: pointer;
  border: 1px solid #e8eef5;
  margin-bottom: 18px;
}

.event-card:hover {
  transform: scale(1.01);
  box-shadow: 0 3px 12px 0 rgba(143, 143, 143, 0.397);
}
.event-link{
  color: #a4bfda;
  text-decoration: none;
}
</style>


