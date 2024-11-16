const {Component, mount, xml, useState} = owl

class Root extends Component {
    static template = xml`

    <div class="m-0 p-4 bg-white rounded">
    
    <div class="input-group-lg bg-white rounded border d-flex w-100 align-items-center">
        <input type="name" class="form-control-lg fs-5 flex-fill border-0" placeholder="Add your new task"
               aria-label="Add your new task" id="name" name="name" aria-describedby="button-addon2"/>
        <input type="color" class="form-control-lg border-0 bg-white m-0 form-control-color" id="color"
               value="#563d7c" title="Choose your color"/>
        <button class="btn btn-primary" type="button" id="button-addon2"><i class="bi bi-plus-lg fs-3"></i>
        </button>
    </div>

    <ul class="tasks d-flex flex-column p-0 mt-5">
    <t t-foreach="tasks" t-as="task" t-key="task.id">
        <li class="d-flex align-items-center justify-content-between border-bottom p-3 border rounded mb-2">
            <div class="form-check form-switch fs-5 name-dark">
                <input class="form-check-input" type="checkbox" value="" role="switch"
                       id="flexCheckDefault"/>
                <label for="flexCheckDefault">
                    Default Checkbox
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
    this.tasks = useState([
      {id:1, name:"Task 1", color:"fff000", isCompleted: false},
      {id:2, name:"Task 2", color:"fff000", isCompleted: false},
      {id:3, name:"Task 3", color:"fff000", isCompleted: false},
        {id:3, name:"Task 3", color:"fff000", isCompleted: false},

    ])
  }

}
mount(Root, document.getElementById("root"))