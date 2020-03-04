<template>
  <div id="app">
    <bookings-form />
    <bookings-grid :bookings="bookings"/>
  </div>
</template>

<script>
import {eventBus} from './main.js';
import BookingService from '../services/BookingService.js';
import BookingsGrid from './components/BookingsGrid.vue'
import Booking from './components/Booking.vue'
import BookingsForm from './components/BookingsForm.vue'

export default {
  name: 'App',
  data() {
    return {
      bookings: []
    }
  },
  mounted() {
    BookingService.getBookings()
    .then(data => this.bookings = data)

    eventBus.$on('submit-booking', payload => {
      BookingService.postBooking(payload)
      .then(booking => this.bookings.push(booking))
    })
  },
  components: {
    'bookings-grid': BookingsGrid,
    'bookings-form': BookingsForm
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
