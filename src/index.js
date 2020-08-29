document.addEventListener("DOMContentLoaded", () => {
  /* 
  1. Grab the button √
  2. Create even listener for button √
  3. fetch info from json √
  4. grab the html placement for each item
  5. assign the info to innertext for each
  */

  const newUser = () => {
    const button = document.querySelector('button')
    button.addEventListener('click', () => {
      fetch('https://randomuser.me/api/')
        .then(response => response.json())
        .then(userData => {
          const user = userData.results[0]
          renderUser(user)
        })

      const renderUser = user => {
        const picture = document.querySelector('#profile_picture')
        picture.src = user.picture.large

        const fullname = document.getElementById("fullname");
        const userFullName = `${user.name.title}. ${user.name.first} ${user.name.last}`
        fullname.textContent = userFullName

        const email = document.querySelector('#email')
        email.textContent = user.email

        const street = document.querySelector('#street')
        street.textContent = `${user.location.street.number} ${user.location.street.name}`

        const city = document.querySelector('#city')
        city.textContent = user.location.city

        const state = document.querySelector('#state')
        state.textContent = user.location.state

        const postcode = document.querySelector('#postcode')
        postcode.textContent = user.location.postcode

        const phone = document.querySelector('#phone')
        phone.textContent = user.phone

        const cell = document.querySelector('#cell')
        cell.textContent = user.cell

        const dob = document.querySelector('#date_of_birth')
        dob.textContent = user.dob.date
      }
    })
  }

  newUser();
});
