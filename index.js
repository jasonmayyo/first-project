const listsContainer = document.querySelector('[data-lists]')
const newListForm = document.querySelector('[data-new-list-form]')
const newListInput = document.querySelector('[data-new-list-input]')
const deleteListButton = document.querySelector('[data-delete-list-button]')
const listDisplayContainer = document.querySelector('[data-list-display-container]')
const listTitleElement = document.querySelector('[data-list-title]')
const listCountElement = document.querySelector('[data-list-count]')
const tasksContainer = document.querySelector('[data-tasks]')


const LOCAL_STORAGE_LIST_KEY = 'tasks.lists'
const LOCAL_STORAGE_LIST_ID_KEY = 'tasks.selectedListId'
let lists = JSON.parse(localStorage.getItem(LOCAL_STORAGE_LIST_KEY)) || []
let selectedListId = localStorage.getItem(LOCAL_STORAGE_LIST_ID_KEY)


listsContainer.addEventListener('click', e => {
    if (e.target.tagName.toLowerCase() === 'li') {
        selectedListId = e.target.dataset.listId
        saveAndRender()
    }
})

newListForm.addEventListener('submit', e => { 
    e.preventDefault()
    const listName = newListInput.value 
    if (listName == null || listName === '') return
    const list = createList(listName)
    newListInput.value = null
    lists.push(list)
    saveAndRender()
})

deleteListButton.addEventListener('click', e => {
    lists = lists.filter(list => list.id !== selectedListId)
    selectedListId = null
    saveAndRender()
})

function createList(name) {
    return ({
        id: Date.now().toString(),
        name: name,
        tasks: []
    })
    
}

function saveAndRender() {
    save()
    render()
}

function save() {
    localStorage.setItem(LOCAL_STORAGE_LIST_KEY, JSON.stringify(lists))
    localStorage.setItem(LOCAL_STORAGE_LIST_ID_KEY, selectedListId)
}

function render() {
    clearElement(listsContainer)
    renderLists()

    const selectedList = lists.find(list => list.id === selectedListId)
    if (selectedListId == null) {
        listDisplayContainer.style.display = 'none'
    } else {
        listDisplayContainer.style.display = ''
        listTitleElement.innerText = selectedList.name
        renderTaskCount(selectedList)
    }
}

function renderTaskCount(selectedList) {
    const incompleteTaskCount = selectedList.tasks.filter(task => !task.complete).length
    listCountElement.innerText = `${incompleteTaskCount}`
}

function renderLists() {
    lists.forEach(list => {
        const listElement = document.createElement('li')
        listElement.dataset.listId = list.id
        listElement.classList.add("task-container")
        listElement.innerText = list.name
        if (list.id == selectedListId) {
            listElement.classList.add('active-list')
        }
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


