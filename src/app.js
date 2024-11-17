const {Component, mount, xml, useState} = owl
import { Task } from "./task.js";

class Root extends Component {
    static components = { Task };
    static template = xml`

    <div class="m-0 p-4 bg-white rounded">
    
    <div class="input-group-lg bg-white rounded border d-flex w-100 align-items-center">
        <input type="name" class="form-control-lg fs-5 flex-fill border-0" placeholder="Add your new task"
               aria-label="Add your new task" id="name" name="name" aria-describedby="button-addon2"
               t-att-value="state.name" t-model="state.name"/>
        <input type="color" class="form-control-lg border-0 bg-white m-0 form-control-color" id="color"
               value="#563d7c" title="Choose your color"
               t-att-value="state.color" t-model="state.color"/>
        <button class="btn btn-primary" type="button" id="button-addon2"
               t-on-click="addTask"><i class="bi bi-plus-lg fs-3"></i>
        </button>
    </div>

    <ul class="tasks d-flex flex-column p-0 mt-5">
        <t t-foreach="tasks" t-as="task" t-key="task.id">
            <Task task="task" onDelete.bind="deleteTask" onEdit.bind="editTask"/>
        </t>
    </ul>
</div>
  
`


    setup(){
        this.state = useState({
        name: "",
        color: "#FFF700",
        isCompleted: false,
        isEditing: false
        });

        this.tasks = useState([])
    }

    addTask(){
            // do not allow empty task name
        if (!this.state.name){
            alert("Please add task.")
            return
        }

        // add unique id
        const id = Math.random().toString().substring(2,12)
        
        this.tasks.push({
            id,
            name: this.state.name,
            color: this.state.color,
            isCompleted: this.state.isCompleted,
        })

        // reset states after saving
        let state = this.state
        this.state = {...state, name:"", color: "#FFF700"}
    }

    // delete task
    deleteTask(task) {
        const index = this.tasks.findIndex((t) => t.id === task.id);
        this.tasks.splice(index, 1);
    }

    // edit task
    editTask(ta) {
        const index = this.tasks.findIndex((t) => t.id === ta.id);
        this.tasks.splice(index, 1, ta)
    }

}
mount(Root, document.getElementById("root"))