<template lang="html">
  <div id="booking">
    <h3>{{booking.name}}</h3>
    <h5>{{booking.numberOfGuests}}</h5>
    <h6>{{booking.email}}</h6>
    <h4>{{booking.checkedIn}}</h4>
  </div>
</template>

<script>
import {eventBus} from '../main.js'

export default {
  name: 'booking',
  props: ['booking'],
  methods: {
    handleDelete(id) {
      eventBus.$emit('delete-booking', id);
    }
  }
}
</script>

<style lang="css" scoped>
</style>
