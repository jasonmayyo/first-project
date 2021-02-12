const listsContainer = document.querySelector('[data-lists]')
const newListForm = document.querySelector('[data-new-list-form]')
const newListInput = document.querySelector('[data-new-list-input]')


let lists = []

newListForm.addEventListener('submit', e => {
    e.preventDefault()
    const listName = newListInput.value
    if(listName == null || listName === '') return
    const list = createList(listName)
    newListInput.value = null
    lists.push(list)
    render()
})

function createList(name) {
    return { id: Date.now().toString(), name: name, task: []}
}

function render() {
    clearElement(listsContainer)
    lists.forEach(list => {
        const listElement = document.createElement('li')
        listElement.dataset.listId = list.id
        listElement.classList.add("task-container")
        listElement.innerText = list.name
        listsContainer.appendChild(listElement)
    })
}

function clearElement(element) {
    while (element.firstChild) {
        element.removeChild(element.firstChild)
    }
}



render()



























//var answerNode = document.querySelector('.answer')
//var footer = document.querySelector('.footer')
//var notes = document.querySelector('.notes')
//var footer2 = document.querySelector('.footer2')
//var progressBar = document.querySelector('.progressBar')
//var questionNode = document.querySelector('.question')

//footer.addEventListener('click', function(){
    //answerNode.innerHTML = `A: ${answer}`
    //notes.style.display = "flex"
    //footer.style.display = "none"
    //footer2.style.display = "flex"
    //progressBar.style.width = "40%"
    //progressBar.classList.add("pb-transion")
    //questionNode.classList.add("question-transion")
    //answerNode.classList.add("answer-transion")
//})

//answer = "Mitocondria"


//TODO LIST:

//var checkbox = document.querySelector(".bigbox")
//var todoProgressBar = document.querySelector(".todo-progressBar")
//var todoText = document.querySelector(".todo-text")

//checkbox.addEventListener('click', function(){
    //todoProgressBar.classList.add("todo-pb-transion")
    //todoText.classList.add("strike")
//})


