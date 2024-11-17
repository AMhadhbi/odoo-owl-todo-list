const { Component, xml, useState } = owl;

export class Task extends Component {
    
    static template = xml`
    <li t-attf-style="background-color:#{state.color}" 
            class="d-flex align-items-center justify-content-between border-bottom p-3 border rounded mb-2">
            
            <div t-if="state.isEditing" 
                class="d-flex align-items-center flex-grow-1 me-2">
                <input t-ref="text1" t-model="state.name" class="form-control me-2"/>
                <input style="width:60px" type="color" class="form-control-lg border-0 bg-white m-0 form-control-color" id="color" t-att-value="state.color" t-model="state.color" title="Choose your color"/>
            </div>

            <div t-if="!state.isEditing" class="form-check form-switch fs-5 name-dark">
                <input class="form-check-input" type="checkbox" value="" role="switch"
                       t-att-id="state.id" t-att-checked="state.isCompleted" t-on-click="toggleTask"/>
                
                <label t-att-for="state.id" 
                       t-attf-class="#{state.isCompleted ? 'text-decoration-line-through':''}">
                    <t t-esc="state.name"/>
                </label>
            </div>
            <div>
                <button t-if="!state.isEditing" class="btn btn-primary me-2" t-on-click="editTask">
                    <i class="bi bi-pencil"></i>
                </button>
                <button t-if="state.isEditing" class="btn btn-primary me-2" t-on-click="saveTask">
                    <i class="bi bi-check-lg"></i>
                </button>
                <button class="btn btn-danger" t-on-click="deleteTask"><i class="bi bi-trash"></i></button>
            </div>
    </li>

    `

    // use to get the states from parent component
    static props = ["task", "onDelete", "onEdit"];
    
    setup() {
        this.state = useState({
            isEditing: false,
            name: this.props.task.name,
            id: this.props.task.id,
            isCompleted: this.props.task.isCompleted,
            color: this.props.task.color,
        })
    }

    
    // toggle task
    toggleTask() {
        this.state.isCompleted = !this.state.isCompleted;
    }

    deleteTask() {
        this.props.onDelete(this.props.task);
    }


    // save the edited task
    saveTask() {
        this.state.isEditing = false
        this.props.onEdit(this.state);
    }

    // use to show and hide form input
    editTask() {
        this.state.isEditing = true
    }
}


