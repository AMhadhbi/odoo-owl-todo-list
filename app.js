const {Component, mount, xml, useState} = owl

class Root extends Component {
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
        <li t-attf-style="background-color:#{task.color}"  class="d-flex align-items-center justify-content-between border-bottom p-3 border rounded mb-2">
            <div class="form-check form-switch fs-5 name-dark">
                <input class="form-check-input" type="checkbox" value="" role="switch"
                       id="flexCheckDefault"
                       t-att-id="task.id"/>
                <label t-att-for="task.id">
                    <t t-esc="task.name"/>
                </label>
            </div>
            <div>
                <button class="btn btn-primary me-2"><i class="bi bi-pencil"></i></button>
                <button class="btn btn-danger"><i class="bi bi-trash"></i></button>
            </div>
        </li>

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

}
mount(Root, document.getElementById("root"))