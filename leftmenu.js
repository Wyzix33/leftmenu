const mainMenu = document.getElementById('mainMenu');
mainMenu.addEventListener('click', menu);
mainMenu.addEventListener('mouseleave', menu);
openMenu_();
export function show() {
 mainMenu.removeAttribute('style');
}
export function hide() {
 mainMenu.style.display = 'none';
}
function openMenu_() {
 const lochash = window.location.hash.split('/');
 const item = mainMenu.querySelector(`a[href='${lochash[0]}']`);
 if (item) openParent_(item);
 else openParent_(mainMenu.firstElementChild.firstElementChild);
}

function openParent_(el) {
 el.className = 'active';
 const parentElement = el.parentElement.closest('li');
 if (parentElement) openParent_(parentElement);
}

function menu(e) {
 if (e.type === 'click') mainMenu.classList.add('open');
 else mainMenu.classList.remove('open');
 const link = e.target;
 const closest_ul = link.closest('ul');
 if (!closest_ul) return;
 const parallel_active_links = closest_ul.getElementsByClassName('active');
 [...parallel_active_links].forEach((el) => el.classList.toggle('active'));
 const closest_li = link.closest('li');
 if (closest_li) closest_li.classList.toggle('active');
}
