

<script>
export default {
  props: ['eventData'],
}
</script>

<template>
  <div v-if="eventData" >
    <p>{{eventData.time}} on {{eventData.date}} @ {{eventData.location}}</p>
    <p>{{eventData.description}}</p>
  </div>
</template>