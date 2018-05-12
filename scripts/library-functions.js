const getSavedBooks = function() {
    const booksJSON = localStorage.getItem('books')
    if (booksJSON) {
        return JSON.parse(booksJSON)
    }else {
        return []
    }
}

const render = function (myLibrary) {
    let booksList = document.querySelector('#booksList')
    booksList.innerHTML = ''
    myLibrary.forEach(function (book) {
        generateDOM(book)
    })
}

const addBookToLibrary = function () {
    let myLibrary = getSavedBooks()
    myLibrary.push({
        title: document.querySelector('#bookTitle').value,
        author: document.querySelector('#bookAuthor').value,
        pages: document.querySelector('#bookPages').value,
        read: false
    })
    saveBook(myLibrary)
    location.assign('/index.html')
    render()
}

const formLocation = function() {
    location.assign('/forms.html')
}

const generateDOM = function(book) {
    let removeButton = document.createElement('button')
    let rmvbtnAtt = document.createAttribute("class")
    rmvbtnAtt.value = "btn btn-outline-warning mx-2"
    removeButton.textContent = 'x'
    removeButton.addEventListener('click', function() {
        removeBook(book.title)
        saveBook(myLibrary)
        render(myLibrary)
    })
    removeButton.setAttributeNode(rmvbtnAtt);

    let changeReadStatus = document.createElement('button')
    let btnAtt = document.createAttribute("class")
    btnAtt.value = "btn btn-outline-info"
    changeReadStatus.textContent = 'Unread'
    changeReadStatus.addEventListener('click',function (e) {
        toggleReadStatus(book.title)
        e.target.innerHTML = book.read ? 'Read': 'Unread'       
    })
    changeReadStatus.setAttributeNode(btnAtt)

    const card = document.createElement('div')
    let cardAtt = document.createAttribute("class");
    cardAtt.value = "card my-2 border border-info text-center";
    card.setAttributeNode(cardAtt);

    const cardBody = document.createElement('div')
    let bodyAtt = document.createAttribute("class");
    bodyAtt.value = "card-body text-center";
    cardBody.setAttributeNode(bodyAtt);

    const cardTitle = document.createElement('h3')
    let titleAtt = document.createAttribute("class");
    titleAtt.value = "card-title text-center";
    cardTitle.setAttributeNode(titleAtt);
    cardTitle.textContent = book.title
    cardBody.appendChild(cardTitle)

    const cardText = document.createElement('h4')
    let textAtt = document.createAttribute("class");
    textAtt.value = "card-text text-center";
    cardText.setAttributeNode(textAtt);
    cardText.textContent = "by " + book.author
    cardBody.appendChild(cardText)

    const cardSubtitle = document.createElement('h6')
    let subtitleAtt = document.createAttribute("class");
    subtitleAtt.value = "card-subtitle text-center text-muted p-3";
    cardSubtitle.setAttributeNode(subtitleAtt);
    cardSubtitle.textContent = book.pages + " pages"
    cardBody.appendChild(cardSubtitle)

    

    cardBody.appendChild(changeReadStatus)
    cardBody.appendChild(removeButton)

    card.appendChild(cardBody)

    booksList.appendChild(card)
    
}

const removeBook = function(title) {
    const bookIndex = myLibrary.findIndex(function(book) {
        return book.title === title
    })

    if (bookIndex) {
        myLibrary.splice(bookIndex,1)
    }
}

const saveBook = function (myLibrary) {
    localStorage.setItem('books', JSON.stringify(myLibrary))
}

const toggleReadStatus = function(title) {
    const book = myLibrary.find(function(book) {
        return book.title === title
    })

    if (book) {
        book.read = !book.read
    }
    
}

const cardItem = function() {
    // < div class = "card"
    // style = "width: 18rem;" >
    //     <
    //     div class = "card-body" >
    //     <
    //     h5 class = "card-title" > Card title < /h5> <
    //     h6 class = "card-subtitle mb-2 text-muted" > Card subtitle < /h6> <
    //     p class = "card-text" > Some quick example text to build on the card title and make up the bulk of the card 's content.</p> <
    //     a href = "#"
    // class = "card-link" > Card link < /a> <
    //     a href = "#"
    // class = "card-link" > Another link < /a> <
    //     /div> <
    //     /div>
    
}