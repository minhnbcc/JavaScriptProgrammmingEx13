import {$, createElement} from '/dom.js';
import {Person} from '/person.js';


const createBtn = $('#btnCreate');
const txtFirstName = $('#txtFirstName');
const txtLastName = $('#txtLastName');
const txtDoB = $('#txtDoB');

let err = $('#errors');
let tb = $('#people');

createBtn.addEventListener('click', addPerson);

function addPerson() {
    let p = new Person(
        txtFirstName.value,
        txtLastName.value,
        new Date(`${txtDoB.value}T00:00:00`)
    );

    let tr = createElement('tr');
    let tdFirstName = createElement('td');
    let tdLastName = createElement('td');
    let tdAge = createElement('td');

    tdFirstName.innerHTML = p.firstName;
    tdLastName.innerHTML = p.lastName;
    tdAge.innerHTML = p.age();

    tr.appendChild(tdFirstName);
    tr.appendChild(tdLastName);
    tr.appendChild(tdAge);
    tb.appendChild(tr);
    clearForm();
}

function clearForm() {
    txtFirstName.value = '';
    txtLastName.value = '';
    txtDoB.value=  '';
    err.innerHTML = '';
    txtFirstName.focus();
}

