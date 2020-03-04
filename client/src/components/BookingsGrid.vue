<template lang="html">
  <div id="bookingsGrid">
    <booking v-for="(booking, index) in bookings" :key="index" :booking="booking" />
  </div>
</template>

<script>
import Booking from './Booking';

export default {
  name: 'bookings-grid',
  components: {
    'booking': Booking
  },
  props: ['bookings']
}
</script>

<style lang="css" scoped>

</style>
