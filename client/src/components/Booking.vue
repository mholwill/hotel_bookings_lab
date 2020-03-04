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
      <button @click="checkOutGuest(booking._id)">Check Out Guest</button>
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
    },
    checkOutGuest(id) {
      eventBus.$emit('checkout-guest', id)
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

details::selection {
  outline: 0;
  border: none;
}

details:active {
  outline: 0;
}

.green{
  color: green;
}

.red {
  color: red;
}
</style>
