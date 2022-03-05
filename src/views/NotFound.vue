<script>
  export default {
    props: {
      resource: {
        type: String,
        required: true,
        default: 'page'
      },
    }
  }
</script>
<template>
<div>
  <h1>Oops!</h1>
  <h4>The {{resource}} you're looking for is not here.</h4>
  <router-link :to="{ name: 'Events' }">Back to the home page</router-link>
  </div>
</template>