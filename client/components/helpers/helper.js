export function generateColumn(name){

}

export function generateContent(name){
    var taskHolder = document.getElementsByClassName('taskHolder')
        for(let i = 0; i < taskHolder.length; i++){
                var createTaskLabel = document.createElement('LABEL')
                    createTaskLabel.setAttribute('for', 'task' + i)

                var createTask = document.createElement('INPUT')
                    createTask.setAttribute('type', 'text')
                    createTask.setAttribute('name', 'task' + i)
                    createTask.setAttribute('placeholder', 'Enter new task')

                taskHolder[i].appendChild(createTaskLabel)   
                taskHolder[i].appendChild(createTask)

}


// <div className="column alexandra">
//     <div className="content">
//     <img src="./img/houses/alexandra/alexandra.png" alt="alexandra"></img>
//     <h4>Alexandra</h4>
//     <p>Cover</p>
//     </div>
// </div>