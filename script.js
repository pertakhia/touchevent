document.addEventListener("touchstart", function (e) {
  const changeArray = [...e.changedTouches]
  changeArray.forEach(touch => {
    const div = document.createElement("div")
    div.classList.add("dot")
    div.style.left = touch.pageX + "px"
    div.style.top = touch.pageY + "px"
    div.id = touch.identifier
    document.body.appendChild(div)
  })
})

const topHalf = document.getElementById("top-half")

topHalf.addEventListener("touchstart", function (e) {
  e.preventDefault()
  console.log("Touches: ", e.touches.length)
  console.log("TargetTouches: ", e.targetTouches.length)
  console.log("ChangedTouches: ", e.changedTouches.length)
})

document.addEventListener("touchmove", function (e) {
  const changeArray = [...e.changedTouches]
  changeArray.forEach(touch => {
    const div = document.getElementById(touch.identifier)
    div.style.left = touch.pageX + "px"
    div.style.top = touch.pageY + "px"
  })
})

document.addEventListener("touchend", function (e) {
  const changeArray = [...e.changedTouches]
  changeArray.forEach(touch => {
    const div = document.getElementById(touch.identifier)
    div.remove()
  })
})

document.addEventListener("touchcancel", function (e) {
  const changeArray = [...e.changedTouches]
  changeArray.forEach(touch => {
    const div = document.getElementById(touch.identifier)
    div.remove()
  })
})

// we have touches, targetTouches and changedTouches in the event object
// touches: all fingers currently on the screen (including new ones)
// targetTouches: inside the element that the event was fired on (e.g. a button)
// changedTouches: list of touches that have changed since the last event (e.g. a finger is removed)
