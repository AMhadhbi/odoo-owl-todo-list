const { Component, xml } = owl;

export class Task extends Component {
    
    static template = xml`
    <li t-attf-style="background-color:#{props.task.color}"  class="d-flex align-items-center justify-content-between border-bottom p-3 border rounded mb-2">
            <div class="form-check form-switch fs-5 name-dark">
                <input class="form-check-input" type="checkbox" value="" role="switch"
                       id="flexCheckDefault"
                       t-att-id="props.task.id"
                       t-att-checked="props.task.isCompleted" t-on-click="toggleTask"/>
                
                <label t-att-for="props.task.id"
                       t-attf-class="#{props.task.isCompleted ? 'text-decoration-line-through':''}">
                    <t t-esc="props.task.name"/>
                </label>
            </div>
            <div>
                <button class="btn btn-primary me-2"><i class="bi bi-pencil"></i></button>
                <button class="btn btn-danger" t-on-click="deleteTask"><i class="bi bi-trash"></i></button>
            </div>
    </li>

    `

    // use to get the states from parent component
    static props = ["task"];

    // toggle task
    toggleTask() {
        this.props.task.isCompleted = !this.props.task.isCompleted;
    }

    // delete task
    deleteTask() {
        this.props.onDelete(this.props.task);
    }
}


