const transition = () => {
  const button = document.getElementById('js-enter')

  function toggle (e) {
    const target = e.currentTarget
    const page1 = document.getElementById('js-pt-page')
    page1.classList.toggle('page-2')
  }

  button.addEventListener('click', toggle)
}

document.addEventListener('DOMContentLoaded', () => {
  transition()
})
