if (document.querySelector('.header__btn')) {
	document.querySelector('.header__btn').addEventListener('click', () => {
		document.documentElement.classList.toggle('active')
	})
}