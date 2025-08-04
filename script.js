const form = document.querySelector('form')
const input = document.querySelector("input")
const holidayCard = document.querySelector('.holiday-card')
const h1 = document.querySelector('h1')
const p = document.querySelector('p')


const searchHoliday = async (e) => {
    e.preventDefault()

    const year = input.value.split("-")[0]
    const month = input.value.split("-")[1]
    const day = input.value.split("-")[2]

    const response = await fetch(`https://holidays.abstractapi.com/v1/?api_key=f5aa2711ebc94e67861a208a148b9e35&country=IN&year=${year}&month=${month}&day=${day}`)
    const data = await response.json()
    if (data.length === 0) {
        h1.innerText = "No Holiday"
        p.innerText = "On This Date"
    } else {
        h1.innerText = data[0].name
        p.innerText = data[0].date
    }

    holidayCard.className = "card holiday-card"
    form.reset()
}

form.addEventListener("submit", searchHoliday)