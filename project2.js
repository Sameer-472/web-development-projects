class Book {
    constructor(name, author, type) {
        this.name = name;
        this.author = author;
        this.type = type;
    }
}

function getttingData() {
    // getting the data from the local storage
    let getBooks = localStorage.getItem('books');
    let bookObj;
    if (getBooks == null) {
        bookObj = [];
    } else {
        bookObj = JSON.parse(getBooks);   //json.parse ki madat sa hum ne data ko object main convert kara hai grab karne se phele take os par foreach lagakar further operation karskahe,.

        let addRow = "";
        bookObj.forEach(function (element, index) {
            addRow += `<tr>
               <td class='bookName'>${element.name}</td>
               <td>${element.author}</td>
               <td>${element.type}</td>
               <td><button id="${index}" onclick="deleteBook(this.id)" class="btn btn-primary">Delete Book</button></td>
             </tr>`;
        });
        let tableBody = document.getElementById('tableBody');
        if (bookObj.length == 0) {
            tableBody.innerHTML = "";
        } else {
            tableBody.innerHTML = addRow;
        }
    }
}

class Display {
    //adding the book
    add(book) {
        //local storage main save karenge data ko
        console.log("Book has been added to library");

        let getBooks = localStorage.getItem('books');
        let bookObj;
        if (getBooks == null) {
            bookObj = [];
        } else {
            bookObj = JSON.parse(getBooks);    /// json.parse kisi object main convert kardeta hai ye isliye use karre hain take further operation jese push use kar sakhe;
        }

        bookObj.push(book);
        localStorage.setItem('books', JSON.stringify(bookObj)); //json.stringfy string main convert kardeta hai kisi bhi object ko take os main furhter operation perform karskahe jese 'length' 
        let tableBody = document.getElementById('tableBody');
        getttingData();

    }
    // use to clear the form
    clear() {
        let library = document.getElementById('libraryForm');
        library.reset();
    }
    //use to apply some restriction
    validate(book) {
        let name = document.getElementById('bookName').value;
        let author = document.getElementById('author').value;

        if (name.length < 2 || author.length < 2) {
            return false;
        }
        else {
            return true;
        }
    }
    //is used to show the status messag in the form of alert
    show(danger, addMessage) {
        let message = document.getElementById('message')
        message.innerHTML = `<div class="alert alert-${danger} alert-dismissible fade show" role="alert">
    <strong>Message!</strong> ${addMessage}.
    <button type="button" class="close" data-dismiss="alert" aria-label="Close">
    <span aria-hidden="true">×</span>
    </button>
  </div>`
  setTimeout(function(){
    let message = document.getElementById('message')
    message.innerHTML = "";
  },5000);

  } 
}

function  deleteBook(index) {
    console.log("i am deleting this note")
    let getBooks = localStorage.getItem("books");
    let bookObj;
    if (getBooks == null){
        bookObj = [];
      
    }
    else {
        bookObj = JSON.parse(getBooks); 
    }
    let bookName = bookObj[index].name
    bookObj.splice(index , 1)
    localStorage.setItem("books" , JSON.stringify(bookObj));

    // display the alert message 
    let message = document.getElementById('message')
        message.innerHTML = `<div class="alert alert-danger alert-dismissible fade show" role="alert">
    <strong>Message!</strong> Book has been deleted.
    <button type="button" class="close" data-dismiss="alert" aria-label="Close">
    <span aria-hidden="true">×</span>
    </button>
  </div>`
  setTimeout(function(){
    let message = document.getElementById('message')
    message.innerHTML = "";
  },5000);

    getttingData();
}

let search = document.getElementById("searchTxt");
search.addEventListener("input",function(){
    let inputVal = search.value
    // console.log('input event fired',inputVal);
    let table = document.getElementById('tableBody');
    // console.log(table)
    Array.from(table).forEach(function(element){
        let bookTxt = element.getElementByTagName('td')[0].value;
    if(bookTxt.include(inputVal)){
        element.style.display = 'block';
    }
    else{
        element.style.display= 'none';
    }
    })
})

    




// final executor code
let library = document.getElementById('libraryForm');
// console.log(library);
library.addEventListener('submit', sumbitForm);

function sumbitForm(e) {
    e.preventDefault();
    let name = document.getElementById('bookName').value;
    let author = document.getElementById('author').value;

    let fiction = document.getElementById('fiction')
    let programming = document.getElementById('programming');
    let cooking = document.getElementById('cooking');


    if (fiction.checked) {
        type = fiction.value;
    }
    else if (programming.checked) {
        type = programming.value;
    }
    else if (cooking.checked) {
        type = cooking.value;
    }

    let book = new Book(name, author, type);
    // console.log(book);
    let display = new Display();
    if (display.validate(book)) {
        display.add(book);
        display.clear();
        display.show('success', 'Book has been added succussfully');
    }
    else {
        display.show('danger', 'unsuccessfull to add');
    }


}

getttingData();

let tableBody = document.getElementById('tableBody');
tableBody.style.overflow = "auto";
table.style.height = "350px";