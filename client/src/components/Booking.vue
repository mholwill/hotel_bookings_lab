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
      <details>
        <summary>
          <div class="update">Update Details</div>
        </summary>
        <form id="update-booking" method="put" @submit="handleUpdate">
          <div class="form-wrap">
            <label for="updatedName">Name: </label>
            <input type="text" id="updatedName" value="booking.name" required>
          </div>
          <div class="form-wrap">
            <label for="updatedEmail">Email: </label>
            <input type="text" id="updatedEmail" v-model="booking.email" required>
          </div>
          <div class="form-wrap">
            <label for="updatedNumberOfGuests">Number of Guests: </label>
            <input type="number" id="updatedNumberOfGuests" v-model="booking.numberOfGuests">
          </div>
          <input type="submit" id="update-booking" value="Update Booking">
        </form>
      </details>
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
    },
    handleUpdate(evt) {
        this.booking.name = evt.target.elements[0].value,
        this.booking.email = evt.target.elements[1].value,
        this.booking.numberOfGuests = evt.target.elements[2].value
        eventBus.$emit('update-booking', this.booking);
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

summary:focus {
  outline: none;
}

.green{
  color: green;
}

.red {
  color: red;
}

.update {
  font-size: 0.7em;
  color: indigo;
  padding: 0;
}

#booking {
    border: 2px dotted green;
    width: 50%;
    margin: auto;
    margin-top: 15px;
    border-radius: 8px;

  }
</style>
