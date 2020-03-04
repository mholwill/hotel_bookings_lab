use guests;
db.dropDatabase();

db.bookings.insertMany([
  {
    name: "Graham Grahamsson",
    email: "g_g@gmail.com",
    numberOfGuests: 1,
    checkedIn: false
  },
  {
    name: "Callum Gould",
    email: "callum@gould.co.uk",
    numberOfGuests: 6,
    checkedIn: true
  },
  {
    name: "Eugene Traitor",
    email: "traitor@codeclan.com",
    numberOfGuests: 2,
    checkedIn: false
  }
]);
