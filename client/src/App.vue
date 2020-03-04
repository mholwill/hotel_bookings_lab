<template>
  <div id="app">
    <h1>CodeClanHotel<span id="dot">.</span></h1>
    <bookings-form />
    <bookings-grid :bookings="bookings"/>
  </div>
</template>

<script>
import {eventBus} from './main.js';
import BookingService from './services/BookingService.js';
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

    eventBus.$on('update-booking', (payload) => {
      BookingService.updateBooking(payload)
        .then(data => this.bookings = data)
      // .then((updatedBooking) => {
      //   const index = this.bookings.findIndex(booking => booking._id === id);
      //   this.bookings = this.bookings.map(booking => {
      //     return (booking._id === updatedBooking._id) ? {...booking} : booking
      //   })
    })

    eventBus.$on('delete-booking', id => {
      BookingService.deleteBooking(id)
      .then(() => {
        const index = this.bookings.findIndex(booking => booking._id === id);
        this.bookings.splice(index, 1)
      })
    })

    eventBus.$on('checkin-guest', id => {
      BookingService.updateCheckInStatus(id)
      .then((updatedBooking) => {
        const index = this.bookings.findIndex(booking => booking._id === id);
        this.bookings = this.bookings.map(booking => {
          return (booking._id === updatedBooking._id) ? {...booking, checkedIn: updatedBooking.checkedIn} : booking
        })
      })
    })

    eventBus.$on('checkout-guest', id => {
      BookingService.updateCheckOutStatus(id)
      .then((updatedBooking) => {
        const index = this.bookings.findIndex(booking => booking._id === id);
        this.bookings = this.bookings.map(booking => {
          return (booking._id === updatedBooking._id) ? {...booking, checkedIn: updatedBooking.checkedIn} : booking
        })
      })
    })
  },
  components: {
    'bookings-grid': BookingsGrid,
    'bookings-form': BookingsForm
  }
}
</script>

<style>

@import url('https://fonts.googleapis.com/css?family=Nunito&display=swap');

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

 #dot {
   color: green;
 }

 h1 {
   font-family: 'Nunito', sans-serif;
   font-size: 4em;
   color: dimgrey;
 }
</style>
