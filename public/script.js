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
  const tabButton = document.getElementsByClassName('tabButton')
  const tabContainer = document.getElementById('js-tab-container')
  const tabContent = tabContainer.getElementsByClassName('tabContent')
  for (let i = 0; i < tabButton.length; i++) {
    tabButton[i].addEventListener('click', function() {
    let current = document.getElementsByClassName('active')
    current[0].className = current[0].className.replace(' active', '')
    this.className += " active";
  })
  }
}

const openTab2 = () => {
  const tabButton = document.getElementsByClassName('js-tabButton')
  const id = 1

  function active (e) {
    const target = e.currentTarget
    const tabContent = document.querySelector('div.tabContent[data-cat-id="' + id + '"]')
    console.log('CON =', tabContent)
    // tabContent.classList.toggle('active')
  }

  for (let i = 0; i < tabButton.length; i++) {
    tabButton[i].addEventListener('click', active)
  }
}

document.addEventListener('DOMContentLoaded', () => {
  transition()
  openTab2()
})
