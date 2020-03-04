<template lang="html">
  <div id="booking">
    <details>
      <summary>
        <div :class="booking.checkedIn ? 'green' : 'red'">
          {{booking.name}}
        </div>
      </summary>

      <h5>{{booking.numberOfGuests}}</h5>
      <h6>{{booking.email}}</h6>
      <button @click="checkInGuest(booking._id)">Check in Guest</button>
      <button @click="handleDelete(booking._id)">Delete Booking</button>
    </details>
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
    },
    checkInGuest(id) {
      eventBus.$emit('checkin-guest', id)
      booking.checkedIn = true;
    }
  }
}
</script>

<style lang="css" scoped>
summary {
  font-weight: bold;
  font-size: 1.2em;
}
details {
  margin: 40px auto;
}

.green{
  color: green;
}

.red {
  color: red;
}
</style>
