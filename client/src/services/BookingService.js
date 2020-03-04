const baseURL = 'http://localhost:3000/api/bookings/'

export default {
  getBookings() {
    return fetch(baseURL)
    .then(res => res.json())
  },
  postBooking(payload){
    return fetch(baseURL, {
      method: 'POST',
      body: JSON.stringify(payload),
      headers: {'Content-Type': 'application/json'}
    })
    .then(res => res.json())
  },
  deleteBooking(id){
    return fetch(baseURL + id, {
      method: 'DELETE'
    })
  },
  updateBooking(payload, id){
    return fetch(baseURL + id, {
      method: 'PUT',
      body: JSON.stringify(payload),
      headers: {'Content-Type': 'application/json'}
    })
    .then(res => res.json())
  },
  updateCheckInStatus(id){
    return fetch(baseURL + id + "/check-in/", {
      method: 'PATCH',
      headers: {'Content-Type': 'application/json'}
    })
    .then(res => res.json())
  },

  updateCheckOutStatus(id){
    return fetch(baseURL + id + "/check-out/", {
      method: 'PATCH',
      headers: {'Content-Type': 'application/json'}
    })
    .then(res => res.json())
  }


}
