<template lang="html">
  <div id="booking-form">
  <form id="booking-form" @submit.prevent="handleSubmit">
    <h2>Add a booking</h2>
    <div class="form-wrap">
      <label for="name">Name: </label>
      <input type="text" id="name" v-model="name" required>
    </div>
    <div class="form-wrap">
      <label for="email">Email: </label>
      <input type="text" id="email" v-model="email" required>
    </div>
    <div class="form-wrap">
      <label for="numberOfGuests">Number of Guests: </label>
      <input type="number" id="numberOfGuests" v-model="numberOfGuests">
    </div>
    <input type="submit" id="save" value="Save Booking">
  </form>
</div>
</template>

<script>
import {eventBus} from '../main.js'

export default {
  data(){
    return {
      name: "",
      email: "",
      numberOfGuests: null,
      checkedIn: false
    }
  },
  methods: {
    handleSubmit() {
      const payload = {
        name: this.name,
        email: this.email,
        numberOfGuests: this.numberOfGuests
      };

      eventBus.$emit('submit-booking', payload);
      this.name = "";
      this.email = "";
      this.numberOfGuests = null
    }
  }
}
</script>

#booking-form {
  border: 2px solid green;
}

<style lang="css" scoped>
</style>
