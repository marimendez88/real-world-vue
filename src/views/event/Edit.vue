

<script>
export default {
  props: ['eventData'],
}
</script>

<template>
  <div v-if="eventData" >
    <p>Edit for the event here</p>
  </div>
</template>