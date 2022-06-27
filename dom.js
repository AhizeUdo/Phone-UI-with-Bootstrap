var form  = document.getElementById('addForm');
var itemList = document.getElementById('items');
var filter = document.getElementById('filter');
form.addEventListener('submit', addItem);
itemList.addEventListener('click',removeItem);
filter.addEventListener('keyup',filterItems);
function addItem(e){
    e.preventDefault();
    // console.log(123);

    // Get the input value
    var newItem = document.getElementById('item').value;
    var thrdItem = document.getElementById('thrdItem').value
    var furdItem = document.getElementById('furdItem').value
    // Create new li element
    var li = document.createElement('li');
    // Add class
    li.className = 'list-group-item';
    // console.log(li);

    // Add text node with input
    // li.appendChild(document.createTextNode('Names: ' + newItem  + '   Mobile Number: ' + scnItem + '    Email Address: ' + thrdItem + ''));
    li.appendChild(document.createTextNode('   First name: '  + newItem));
    li.appendChild(document.createTextNode('   Mobile No: ' + thrdItem));
    li.appendChild(document.createTextNode('   Email address: ' + furdItem));
    
    //create delete button
    var deleteBtn = document.createElement('button');
    
    // Add classes to del button
    deleteBtn.className = 'btn btn-danger btn-sm float-right delete';

    // Append text node
    deleteBtn.appendChild(document.createTextNode('X'));
    
    // Append li to list 
    li.appendChild(deleteBtn);

    // Append li to list
    itemList.appendChild(li);
}

// Remove item
function removeItem(e){
    if(e.target.classList.contains('delete')){
        var li = e.target.parentElement;
        itemList.removeChild(li);
    }
}

// Filter Item
function filterItems(e){
    // Convert text to lowercase
    var text = e.target.value.toLowerCase();
    // console.log(text);
    var items = itemList.getElementsByTagName('li');
    // Convert to an array
    Array.from(items).forEach(function(item){
      var itemName = item.firstChild.textContent;
    //   console.log(itemName);
    if(itemName.toLowerCase().indexOf(text) != -1){
        item.style.display = 'block';
    }else{
        item.style.display = 'none';
    }
    });
}

