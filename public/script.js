const transition = () => {
  const button = document.getElementById('js-enter')

  function toggle (e) {
    const target = e.currentTarget
    const page1 = document.getElementById('js-pt-page-1')
    const page2 = document.getElementById('js-pt-page-2')
    page1.classList.toggle('hidden')
    page2.classList.toggle('reveal')
  }

  button.addEventListener('click', toggle)
}

const backButton = () => {
  const back = document.getElementById('js-back')

  function toggle (e) {
    const target = e.currentTarget
    const page1 = document.getElementById('js-pt-page-1')
    const page2 = document.getElementById('js-pt-page-2')
    page1.classList.toggle('reveal')
    page2.classList.toggle('hidden')
  }

  back.addEventListener('click', toggle)
}

document.addEventListener('DOMContentLoaded', () => {
  transition()
  backButton()
})
