var todos = [];

var todoList = {
    addTodo: function(todo) {
        todos.push({
            todoCompleted: false,
            todoText: todo
        });
    },
    changeTodo: function(position, todo) {
        todos[position].todoText = todo;
    },
    deleteTodo: function(position) {
        todos.splice(position, 1);
    },
    toggleCompleted: function(position) {
        todos[position].todoCompleted = !todos[position].todoCompleted;
    },
    toggleAll: function() {
            var completedTodo = 0;

            //counting how many todo that is completed.
            todos.forEach(function(todo) {
                if(todo.todoCompleted === true) {
                    completedTodo++;
                }                        
            });
        
            todos.forEach(function(todo) {        
                //if everything is true, make everything false.
                if(completedTodo === this.todos.length) {
                    todo.todoCompleted = false;
                } else {
                    //else, make everything true
                    todo.todoCompleted = true;
                }
            });
    
    }
};

var handler = {
    addTodo: function() {
        var todo = document.getElementById("addTodo").value;
        todoList.addTodo(todo);
        view.displayTodo();
    },
    changeTodo: function(){
        var changeTodoPosition = document.getElementById("changeTodoPosition").value;
        var changeTodoText = document.getElementById("changeTodoText").value;
        todoList.changeTodo(changeTodoPosition, changeTodoText);
        view.displayTodo();
    },
    deleteTodo: function() {
        var deleteTodoPosition = document.getElementById("deleteTodoPosition").value;
        todoList.deleteTodo(deleteTodoPosition);
        view.displayTodo();
    },
    toggleCompleted: function() {
        var toggleCompletedPosition = document.getElementById("toggleCompletedPosition").value;
        todoList.toggleCompleted(toggleCompletedPosition);
        view.displayTodo();
    },
    toggleAll: function() {
        todoList.toggleAll();
        view.displayTodo();
    }
};


var view = {
    displayTodo: function() {        
            var todoListAreaView = document.getElementById('listTodo');
        
            todoListAreaView.innerHTML = '';
        
            todos.forEach(function(todo) {
                var liElement = document.createElement('li');
                
                if(todo.todoCompleted === true) {
                    var todoText = document.createTextNode("(X) " + todo.todoText);    
                } else {
                    var todoText = document.createTextNode("( ) " + todo.todoText);    
                }
                
                liElement.appendChild(todoText);
                todoListAreaView.appendChild(liElement);
                
        });
    }
}

