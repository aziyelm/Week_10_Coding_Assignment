/*Coding Steps:
Using HTML, Bootstrap, and JavaScript create a single page website that contains the following:
A Bootstrap styled table representing your choice of data.
A Bootstrap styled form that allows a user to add a new row to the table when clicking on submit.
*/

//refer to each order uniquely starting at 0
let id = 0;

//GOAL: create new row and add it to the table when an order is added (submit button is clicked)
document.getElementById('add').addEventListener('click', () => { //button id = 'add'

    //reference to table (id = 'list')
    let table = document.getElementById('list');

    //CREATE NEW ROW
    let row = table.insertRow(1); //position 0 is the headers, so start at 1
    
    //set attributes for the new row. 
    row.setAttribute('id', `item-${id}`); //each row will get 'id #'
    
    //set the value of the 1st cell (0) in the row to the order (id = 'order-name')
    row.insertCell(0).innerHTML = document.getElementById('order-name').value;

    //set the value of the 2nd cell (1) in the row to flavor (id='flavor) 
    row.insertCell(1).innerHTML = document.getElementById('flavor').value;

    //3rd cell(2) = Size (id = 'size')
    row.insertCell(2).innerHTML = document.getElementById('size').value;

    //4th cell(3) = toppings (id = 'toppings')
    row.insertCell(3).innerHTML = document.getElementById('toppings').value;

    //5th cell(4) = sweetness (id = 'sweetness')
    row.insertCell(4).innerHTML = document.getElementById('sweetness').value;

    //6th cell(5) = ice (id = 'ice')
    row.insertCell(5).innerHTML = document.getElementById('ice').value;

    //7th cell(6) action button to delete orders
    let actions = row.insertCell(6);

    //button appended to the actions cell (6). button will remove a specific id
    actions.appendChild(createDeleteButton(id++)) 
    
    //function to create a delete button in 7th cell (6) that will remove a specific order using its id (which is tied to the row)
    function createDeleteButton(id) {
        //create the button
        let btn = document.createElement('button'); //'button' is the tag of the element we want to create
        btn.className = 'btn btn-primary'; //setting attributes 
        btn.id = id; //each button will have its own unique id
        btn.innerHTML = 'Delete'; 

        /*binds a function to the buttons on click property 
        that will delete the row the button is assigned to */
        btn.onclick = () => { //onlick instead of event listener 
            console.log(`Deleting row with id: item-${id}`)
            let elementToDelete = document.getElementById(`item-${id}`);
            elementToDelete.parentNode.removeChild(elementToDelete);
        };
        return btn;
    }

    //clear order name input
    document.getElementById('order-name').value = ''

});
