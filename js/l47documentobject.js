let val;

val = document;
val = document.doctype;
val = document.head;
val = document.body;

val = document.URL;

val = document.links; //HTMLCollection
val = document.links[0]; // <a href="#" id="delete-item1" class="delete-item"><i class="fas fa-trash"></i></a>
val = document.links[3]; 
val = document.links[3].id; //delete-item4
val = document.links[5].id; //clear-all

val = document.links[3].className; //delete-item (can't edit) (string)
val = document.links[3].classList; //DOMTokenList ['delete-item', value: 'delete-item'] (array)
val = document.links[3].classList[0]; //delete-item (for individual uses)
val = document.links[3].classList[1]; //myitem

val = document.forms;
val = document.forms[0];
val = document.forms[0].id; 
val = document.forms[0].className; 
val = document.forms[0].classList;
val = document.forms[0].classList[0];
val = document.forms[0].action;
val = document.forms[0].method;      

val = document.images;
val = document.images[0];
val = document.images[0].id;
val = document.images[0].className;
val = document.images[0].classList;
val = document.images[0].src;
val = document.images[0].alt;

val = document.scripts;
val = document.scripts[0];
val = document.scripts[0].src;
val = document.scripts[0].type;
// console.log(val);

//------------------------------------------------------------------------------------------------------


// =>Change Styling

document.getElementById('task-title').style.backgroundColor = 'green';
document.getElementById('task-title').style.color= '#fff';
document.getElementById('task-title').style.padding= '5px';

document.getElementById('task-title').textContent = "My Job";
document.getElementById('task-title').innerText = "My Tasks";
document.getElementById('task-title').innerHTML = "My ToDo";
document.getElementById('task-title').innerHTML = "<span style='color:yellow'>My ToDo</span>";
// document.getElementById('task-title').textContent = "<span style='color:yellow'>My ToDo</span>";
// document.getElementById('task-title').innerText= "<span style='color:yellow'>My ToDo</span>";

//------------------------------------------------------------------------------------------------------

// =>Call By Class Name

const lis = document.getElementsByClassName("list-group-item");
// console.log(lis); //HTMLCollection
// console.log(lis[2]);
// lis[2].style.color = 'red';
// lis[2].textContent = 'Have to Cook <a href="#" id="delete-item3" class="delete-item"><i class="fas fa-trash"></i></i></a>';
// lis[2].innerText = 'Have to Visit <a href="#" id="delete-item3" class="delete-item"><i class="fas fa-trash"></i></i></a>';
// lis[2].innerHTML = 'Have to Read <a href="#" id="delete-item3" class="delete-item"><i class="fas fa-trash"></i></i></a>';

//------------------------------------------------------------------------------------------------------

// =>Call By Tag Name(Element)

const listags = document.getElementsByTagName('li');
// console.log(listags); //HTMLCollection
// console.log(listags[1]);
// listags[1].style.color = 'blue';
// listags[1].innerHTML = 'Have to cook <a href="#" id="delete-item2" class="delete-item"><i class="fas fa-trash"></i></a>';

//------------------------------------------------------------------------------------------------------

// =>Query Selector

console.log(document.querySelector('#task-title'));
console.log(document.querySelector('.card-title'));
console.log(document.querySelector('h3'));

console.log(document.querySelector('li')); //only first li
console.log(document.querySelector('.list-group-item')); //only first li

// document.querySelector('li').style.color = 'red';
// document.querySelector('ul li').style.color = 'violet';
// document.querySelector('ul li:nth-child(odd)').style.backgroundColor = 'grey';
// document.querySelector('ul li:nth-child(even)').style.backgroundColor = 'silver';
// document.querySelector('ul li:last-child').style.backgroundColor = 'green';
// document.querySelector('ul li:nth-of-type(4)').style.backgroundColor = 'orange';
// document.querySelector('ul li:nth-of-type(3)').style.backgroundColor = 'steelblue';

//------------------------------------------------------------------------------------------------------

// =>Query Selector All(NodeList Array)

console.log(document.querySelectorAll('#task-title')); //NodeList
console.log(document.querySelectorAll('#task-title')[0]);  

console.log(document.querySelectorAll('.card-title')); //NodeList
console.log(document.querySelectorAll('.card-title')[0]);

console.log(document.querySelectorAll('li')); //NodeList
console.log(document.querySelectorAll('li')[3]);

console.log(document.querySelectorAll('.list-group-item')); //NodeList
console.log(document.querySelectorAll('.list-group-item')[2]); 

//------------------------------------------------------------------------------------------------------

// const listitems = document.querySelector('ul').getElementsByTagName('li');
// console.log(listitems);
// console.log(typeof listitems);
// console.log(listitems[1]);


// const arritems = Array.from(listitems);
// console.log(arritems);

// arritems.forEach(function(arritem,idx){
//     console.log(arritem);
// });


// const listitms = document.querySelectorAll('ul.list-group li.list-group-item');
// console.log(listitms);
// console.log(typeof listitms);
// console.log(listitms[1]);

// listitms.forEach(function(listitm,idx){
//     console.log(listitm);

//     listitm.innerText = 'Hello World';
//     listitm.innerText = `${++idx} = Hello World`;
// });


// const lisodds = document.querySelectorAll('li:nth-child(odd)');

// const lisevens = document.querySelectorAll('li:nth-child(even)');

// lisodds.forEach(function(lisodd){
//     lisodd.style.backgroundColor = 'grey';
// });

// lisevens.forEach(function(liseven){
//     liseven.style.backgroundColor = 'orange';
// });

// for(let i = 0;i < lisevens.length;i++){
//     // console.log(i);
//     lisevens[i].style.backgroundColor = 'silver';
// }

//------------------------------------------------------------------------------------------------------

// =>Parent to Children

var getli = document.querySelector('li');
    getli = document.querySelector('li.list-group-item');
    getli = document.querySelector('li.list-group-item:first-child');

console.log(getli);

let chl;
const getul = document.querySelector('ul.list-group');
console.log(getul); //HTMLCollection

chl = getul.children;
console.log(chl);
console.log(chl[2]);

// chl[1].innerText = "Have to cook";
// getul.children[3].innerText = 'Have to do';
// getul.children[4].innerHTML = `Have to read <a href="#" id="delete-item5" class="delete-item"><i class="fas fa-trash"></i></a>`;


//------------------------------------------------------------------------------------------------------

// =>Parent to Children to Children

chl = getul;
chl = getul.children;
chl = getul.children[0];
chl = getul.children[0].children;

    //  ul       li         a
chl = getul.children[0].children[0];
chl = getul.children[0].children[0].id;
chl = getul.children[0].children[0].className;
chl = getul.children[0].children[0].classList; //DOMTokenList
chl = getul.children[0].children[0].classList[0];
chl = getul.children[0].children[0].href;

        // ul               li          a
chl = getul.children[0].children[0].children;

        // ul               li          i
chl = getul.children[0].children[0].children[0];

console.log(chl);

//------------------------------------------------------------------------------------------------------

// =>Children Element Count

chl = getul.children.length; //5
chl = getul.childElementCount; //5

chl = getul.children[0].childElementCount; //1
chl = getul.children[0].children[0].childElementCount; //1

console.log(chl); 

//------------------------------------------------------------------------------------------------------

// =>Children to Parent Element

let getfirstli = document.querySelector('li.list-group-item:first-child');
console.log(getfirstli);

                // li          ul
let getparent = getfirstli.parentElement;

                // li           ul         div.card
    getparent = getfirstli.parentElement.parentElement;

    getparent = getfirstli.parentElement.parentElement.parentElement;

console.log(getparent);

//------------------------------------------------------------------------------------------------------

// =>Next Element Sibling

let getsibling = getfirstli;
                    //li1       li2
    getsibling = getfirstli.nextElementSibling;
    getsibling = getfirstli.nextElementSibling.nextElementSibling;
    getsibling = getfirstli.nextElementSibling.nextElementSibling.nextElementSibling;
                    //li1           li2              li3                li4                li5
    getsibling = getfirstli.nextElementSibling.nextElementSibling.nextElementSibling.nextElementSibling;
    // getsibling = getfirstli.nextElementSibling.nextElementSibling.nextElementSibling.nextElementSibling.nextElementSibling; //null

console.log(getsibling);

//------------------------------------------------------------------------------------------------------

// =>Previous Element Sibling

    getsibling = getfirstli;
                    //li1           li2              li3                 li2
    getsibling = getfirstli.nextElementSibling.nextElementSibling.previousElementSibling;

console.log(getsibling);

//------------------------------------------------------------------------------------------------------

// =>Create Element

const newli= document.createElement('li');

// =>Add Id

newli.id = "new-item";

// =>Add Class

newli.className = "list-group-item";
newli.className = "delete-me";
newli.className = "list-group-item delete-me";

newli.classList.add('delete-i');
newli.classList.add('delete-u');
newli.classList.add('delete-we',"delete-them",'delete-us');

// =>Add Attribute
// selectAttribute(attrname,value);

newli.setAttribute('title','new-item');


// newli.textContent = 'hay';
// newli.innerText = 'Hi';
// newli.innerHTML = `List Item 6<a href="#" id="delete-item5" class="delete-item"><i class="fas fa-trash"></i></a>`;

// const newtext = document.createTextNode('Hello World');
// newli.appendChild(newtext);

newli.appendChild(document.createTextNode('Hello Thailand'));

const newlink = document.createElement('a');
newlink.href = "#"
newlink.id = 'delete-item6';
// newli.className = 'delete-item';
newlink.classList.add('delete-item');

const newitalic = document.createElement('i');
newitalic.classList.add('fas','fa-trash');

newlink.appendChild(newitalic);

newli.appendChild(newlink);
console.log(newlink);

document.querySelector('ul.list-group').appendChild(newli);

// console.log(newli);

//------------------------------------------------------------------------------------------------------

// =>Replace Element
// replaceChild(new,old)

const newtitleh2 = document.createElement('h2');
newtitleh2.id = 'task-title';

const newcaption = document.createTextNode('All My Lists');
newtitleh2.appendChild(newcaption);

// console.log(newtitleh2);

const oldtitleh4 = document.getElementById('task-title');
// console.log(oldtitleh4);

const getcardfooter = document.querySelector('.card-footer');
getcardfooter.replaceChild(newtitleh2,oldtitleh4);

//------------------------------------------------------------------------------------------------------

// => Remove Element(Self)

const getlis = document.querySelectorAll('li');
// console.log(getlis);

// getlis[0].remove();
// getlis[1].remove();

// console.log(getlis);


// => Remove Child Element(from Parent)

const getfirstul = document.querySelector('ul');
// console.log(getfirstul);
// getfirstul.remove();

// console.log(getfirstul.children[0]);

// getfirstul.removeChild(getfirstul.children[0]);
// getfirstul.removeChild(getfirstul.children[4]);

// getfirstul.removeChild(getfirstul.children[1]);

//------------------------------------------------------------------------------------------------------

// => Attribute

const firstli = document.querySelector('li');
console.log(firstli);

const firstlichild = firstli.children[0];
// console.log(firstlichild);
// console.log(firstlichild.id);
// console.log(firstlichild.href);

console.log(firstlichild.getAttribute('href')); //#
console.log(firstlichild.getAttribute('id')); // #
console.log(firstlichild.title); //iamtitle
console.log(firstlichild.alt); //undefied
console.log(firstlichild.getAttribute('alt')); //iamalt


let hasatt = firstlichild.hasAttribute('href'); 
console.log(hasatt); //true

hasatt = firstlichild.hasAttribute('hay'); 
console.log(hasatt); //false

//------------------------------------------------------------------------------------------------------

// => className vs classList

// console.log(firstlichild.className);
// firstlichild.className = 'delete-myself';
// firstlichild.className = 'delete-item delete-myself ';
// firstlichild.className = 'delete-item delete-myself delete-ourselves';
// firstlichild.className = 'delete-item delete-ourselves';
// console.log(firstlichild.className);

// console.log(firstlichild.classList); //Dom Token List
// console.log(firstlichild.classList[0]); //delete-item
// console.log(firstlichild.classList[1]); //undefied

firstlichild.classList.add('delete-myself');
firstlichild.classList.add('delete-us');
// firstlichild.classList.add('delete-yourself','delete-ourselves');

// firstlichild.classList.remove('delete-us');
// firstlichild.classList.remove('delete-ourselves','delete-myself');


console.log(firstlichild.className);

if(firstlichild.className === 'delete-item delete-myself delete-us'){ //can check only sequence/rewrite all
    console.log('Yes');
}else{
    console.log('No')
}

if(firstlichild.classList.contains('delete-us','delete-myself')){
    console.log('Yes');
}else{
    console.log('No');
}

//------------------------------------------------------------------------------------------------------

// => addEventListener(eventype,callbackfunction())

const clearbtn = document.querySelector('.clear-task');

// Method 1
// clearbtn.addEventListener('click',function(e){
//     console.log('i am working');

// // clearbtn.addEventListener('click',(e)=>{  // (e parameter is needed)
// //     console.log('i am working');
//     // console.log(e);
//     // console.log(e.target);
//     // console.log(e.target.id);
//     // console.log(e.target.className);
//     // console.log(e.target.classList);

//     console.log(this); //can't use in arrow function 

//     e.preventDefault();
// });

// Method 2

// clearbtn.addEventListener('click',myclick);

// function myclick(e){

//     e.preventDefault();

//     console.log('hay');
//     console.log(this);
//     console.log(this.id);

    // e.target.innerHTML = 'Done';
    // this.innerHTML = 'Finished';

// => Coordinate Event - relative to window 

// console.log(e);
// const clientx = e.clientX;
// const clienty = e.clientY;
// console.log(clientx,clienty);

// // Coordinate Event - relative to element

// const offsetx = e.offsetX;
// const offsety = e.offsetY;
// console.log(offsetx,offsety);

// }

//------------------------------------------------------------------------------------------------------

// => Mouse Event (Pointer Event)

// const clbtn = document.querySelector(".clear-task");

// Single Click
// clbtn.addEventListener('click',mouseeventtype);

// Double Click
// clbtn.addEventListener('dblclick',mouseeventtype);

// mousedown
// clbtn.addEventListener('mousedown',mouseeventtype);

// mouseup(click)
// clbtn.addEventListener('mouseup',mouseeventtype);

// const card = document.querySelector(".card");

// mouseenter
// card.addEventListener('mouseenter',mouseeventtype);

// mouseover
// card.addEventListener('mouseover',mouseeventtype); // element area change work within their areas.

// mouseleave
// card.addEventListener('mouseleave',mouseeventtype); 

// mouseout
// card.addEventListener('mouseout',mouseeventtype); 

// mousemove
// card.addEventListener('mousemove',mouseeventtype); 

// const headingh2 = document.querySelector('h2');

function mouseeventtype(e){


    // console.log('i am working');

    // console.log(`Event type = ${e.type}`);

    // headingh2.textContent =` MouseX : ${e.clientX} MouseY : ${e.clientY}`;
    // headingh2.textContent =` MouseX : ${e.offsetX} MouseY : ${e.offsetY}`;


    // document.body.style.backgroundColor = `rgba(${e.clientX},${e.clientY},${e.clientY},0.5)`;
    // document.body.style.backgroundColor = `rgba(${e.offsetX},${e.offsetY},${e.offsetY},0.5)`;

    // e.preventDefault();
}

// Submit

// const getform = document.querySelector('form');

// getform.addEventListener('submit',function(e){
//     console.log(`Event type = ${e.type}`);

//     e.preventDefault();
// });

//------------------------------------------------------------------------------------------------------

// Input type event
// const getinput = document.querySelector('#task');

// keydown
// getinput.addEventListener('keydown',inputeventtype);
// keypress
// getinput.addEventListener('keypress',inputeventtype);


// keyup
// getinput.addEventListener('keyup',inputeventtype);
// input
// getinput.addEventListener('input',inputeventtype);


// focus
// getinput.addEventListener('focus',inputeventtype);

// blur
// getinput.addEventListener('blur',inputeventtype);

// cut (ctl+x)
// getinput.addEventListener('cut',inputeventtype);

// paste (ctl+v)
// getinput.addEventListener('paste',inputeventtype);


// function inputeventtype(e){
//     // console.log(e.target);
//     // console.log(this);

//     // console.log(e.target.value);
//     // console.log(this.value);
//     console.log(getinput.value);

// }

//------------------------------------------------------------------------------------------------------

// =>Event Bubbling

// document.querySelector('.card-title').addEventListener('click',function(){
//     console.log('i am card-title');
// });


// document.querySelector('.card-header').addEventListener('click',function(){
//     console.log('i am card-header');
// });

//------------------------------------------------------------------------------------------------------

// =>Event Delegation

const getdeleteitem = document.querySelector('.delete-item');
// console.log(getdeleteitem);

// getdeleteitem.addEventListener('click',function(e){
//     // console.log('i am delete-item');

//     // console.log(e.target); // i tag
//     // console.log(this); // a tag

//     e.preventDefault();
// });

// document.body.addEventListener('click',eventdelg);

// function eventdelg(e){

//     e.preventDefault();

    // console.log(e.target);
    // console.log(e.target.className);

    //i
    // if(e.target.className === 'fas fa-trash'){
    //     console.log('i am working,i am trash');
    // }

    // console.log(e.target.parentElement);
    // console.log(e.target.parentElement.className);

            // i   a
    // if(e.target.parentElement.className === 'delete-item'){
    //     console.log('i am working, i am a tag');
    // }

            // i   a
    // if(e.target.parentElement.classList.contains('delete-item')){
    //     // console.log('i am working, i am a tag');
    // }

    // i
    // e.target.parentElement.remove();

        // i     a               li
    // e.target.parentElement.parentElement.remove();
// }



document.querySelector('form').addEventListener('submit',function(e){
    e.preventDefault();
    // console.log('i am working');

    const getnewtask = document.getElementById('task').value;
    // console.log(getnewtask);

    
    let alltasks;

    if(localStorage.getItem('mytasks') === null){
        alltasks = [];

        console.log("Not value yet");
    }else{
        console.log("Value already exist");
        alltasks = JSON.parse(localStorage.getItem('mytasks'));
    }

    console.log(alltasks);
    console.log(typeof alltasks);

    alltasks.push(getnewtask);
    localStorage.setItem('mytasks',JSON.stringify(alltasks));

    // console.log(localStorage.getItem('mytasks'));
    // console.log(typeof localStorage.getItem('mytasks'));

    console.log(JSON.parse(localStorage.getItem('mytasks')));
    console.log(typeof JSON.parse(localStorage.getItem('mytasks')));

    const getmytasks = JSON.parse(localStorage.getItem('mytasks'));

    getmytasks.forEach(function(getmytask){
        console.log(getmytask);
    });

});





//------------------------------------------------------------------------------------------------------


//Jvascript can call any attributes except class(className/classList)

// forEach looping needs pure array for looping.
//HTML Collection can't looping with forEach Loop.