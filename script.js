const ekleDom = document.querySelector('#liveToastBtn')
const ulDom = document.querySelector('#list')
const taskDom = document.querySelector('#task')
let myNodelist = document.getElementsByTagName("LI");
ulDom.addEventListener('load,',addtoo())



// Click on a close button to hide the current list item
let close = document.getElementsByClassName("close");

for (let i = 0; i < close.length; i++) {
  close[i].onclick = function() {
    var liremove = this.parentElement;
    liremove.remove()
    deletelocal()
  }
}

// Add a "checked" symbol when clicking on a list item
let list = document.querySelector('ul');
list.addEventListener('click', function (ev) {
    if (ev.target.tagName === 'LI') {
        ev.target.classList.toggle('checked')
        
    }
}, false);
//"delete" function
setInterval(deletelocal(),100)
function deletelocal() {
    const element = document.querySelectorAll('p')
    let arr = [...element]
    let arr5 = [];
    for (let i = 0; i < arr.length; i++) {
        arr5.push(arr[i].innerText)
    }
   localStorage.setItem('list', JSON.stringify(arr5))
}

// first load "add" function
function addtoo() 
{
    let keyarr=Object.keys(localStorage)
   if(keyarr.includes('list')!=true)
   {
    const setlocal=localStorage.setItem('list',JSON.stringify([]))
   }
    const toDoLocal = JSON.parse(localStorage.getItem('list'))
     for (let i = 0; i < toDoLocal.length; i++) {
     var li = document.createElement('li');
     li.innerHTML = `<p>${toDoLocal[i]}</p> 
     <span class="close">&times;</span>`;
     ulDom.appendChild(li);
    }
   
}
// add function
const errortoastDom = document.querySelector('.error')
const successtoastDom = document.querySelector('.success')
ekleDom.onclick = function () {
    var li = document.createElement('li')
    if (taskDom.value.trim() === '') {
        if (errortoastDom.classList.contains('hide')) {
            errortoastDom.classList.remove('hide')
            errortoastDom.classList.add('show')
        }
        setTimeout(() => {
            errortoastDom.classList.remove('show')
            errortoastDom.classList.add('hide')
        }, 4000)
    }
    else {

        li.innerHTML = `<p>${taskDom.value}</p> 
        <span class="close">&times;</span>`
        ulDom.appendChild(li)
        if (successtoastDom.classList.contains('hide')) {
            successtoastDom.classList.remove('hide')
            successtoastDom.classList.add('show')
        }
        setTimeout(() => {
            successtoastDom.classList.remove('show')
            successtoastDom.classList.add('hide')
        }, 4000)
        const element = document.querySelectorAll('p')
        let arr = [...element]
        let arr5 = [];
        for (let i = 0; i < arr.length; i++) {
            arr5.push(arr[i].innerText)
        }
       localStorage.setItem('list', JSON.stringify(arr5))
    }
    taskDom.value = ""
    for (i = 0; i < close.length; i++) {
        close[i].onclick = function () {
            var liremove = this.parentElement;
            liremove.remove()
            deletelocal()
        }
    }
}


