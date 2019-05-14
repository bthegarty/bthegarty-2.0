const transition = () => {
  const button = document.getElementById('js-enter')

  function toggle (e) {
    const target = e.currentTarget
    const page1 = document.getElementById('js-pt-page')
    page1.classList.toggle('page-2')
  }

  button.addEventListener('click', toggle)
}

const openTab = (e, tabName) => {
  const tabContent = document.getElementsByClassName('tabContent')
  for(let i = 0; i < tabContent.length; i++) {
    // tabContent[i].style.display = 'none'
  }
  document.getElementById(tabName).style.display = 'flex'
}

document.addEventListener('DOMContentLoaded', () => {
  transition()
  openTab()
})
