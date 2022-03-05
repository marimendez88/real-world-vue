

<script>
export default {
  props: ['eventData'],
  data(){
    return {
      unsavedChanges: true
    }
  },
  beforeRouteLeave() {
    console.log('onBeforeRouteLeave', this.unsavedChanges)
    if (this.unsavedChanges) {
      if (!confirm('You have unsaved changes. Are you sure you want to leave?')) return false;
    }
  }
}
</script>

<template>
  <div v-if="eventData" >
    <p>Edit for the event here</p>
  </div>
</template>