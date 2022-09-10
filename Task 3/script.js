/* ------------------------------ TASK 3 -----------------------------------
Parašykite JS kodą, kuris leis vartotojui paspaudus ant mygtuko "Show users"
pamatyti vartotojus iš Github API (endpoint'as pateiktas žemiau).

Paspaudus mygtuką "Show users":
1. Informacija atvaizdavima <div id="output"></div> bloke
1.1. Informacija, kuri pateikiama: "login" ir "avatar_url" reikšmės (kortelėje)
2. Žinutė "Press "Show Users" button to see users" turi išnykti;

Pastaba: Sukurta kortelė, kurioje yra pateikiama vartotojo informacija, turi 
turėti bent minimalų stilių ir būti responsive;
-------------------------------------------------------------------------- */
const logBtn = document.getElementById('myBtn');
logBtn.addEventListener('click', fetchData, hideButton);

function hideButton(x)
 {
  x.style.display = 'none';
 }
 function removeMessage(){
    const e = document.getElementById("message");
    e.style.display = 'none';
 }

async function fetchData() {

    const response = await fetch('https://api.github.com/users');
    const data = await response.json();
    const listEl = document.querySelector('ul');
        data.forEach(post => {
          listEl.insertAdjacentHTML('beforeend',`<li>${post.login} - ${post.avatar_url} </li>`);
      });
}


