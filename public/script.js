//- split pathname client side and add active state
$(function() {
  $('ul a[href^="/' + location.pathname.split("/")[1] + '"]').addClass('selected');
});


const openTab2 = () => {
  const tab_1_Button = document.getElementById('js-tabButton-1')
  const tab_1_content = document.getElementById('test1')
  const tab_2_Button = document.getElementById('js-tabButton-2')
  const tab_2_content = document.getElementById('test2')

  function restore () {
    tab_2_content.classList.remove('active')
    tab_1_content.classList.add('active')
  }

  function active () {
    tab_1_content.classList.remove('active')
    tab_2_content.classList.add('active')
  }

  tab_1_Button.addEventListener('click', restore)
  tab_2_Button.addEventListener('click', active)
}

document.addEventListener('DOMContentLoaded', () => {
  openTab2()
})
