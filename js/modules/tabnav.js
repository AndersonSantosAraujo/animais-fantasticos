export default function initTabNav() {
  const tabMenu = document.querySelectorAll('[data-tab="menu"] li');
  const tabContent = document.querySelectorAll('[data-tab="content"] section');
  function activeTab(index) {
    tabContent.forEach((section) => {
      section.classList.remove('atv');
    });
    const direcao = tabContent[index].dataset.anime;
    tabContent[index].classList.add('atv', direcao);
  }
  if (tabMenu.length && tabContent.length) {
    tabContent[0].classList.add('atv');
    tabMenu.forEach((itemMenu, index) => {
      itemMenu.addEventListener('click', () => {
        activeTab(index);
      });
    });
  }
}
