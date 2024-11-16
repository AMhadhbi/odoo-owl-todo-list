const { Component, xml } = owl;

export class Task extends Component {
    
    static template = xml`
    <li t-attf-style="background-color:#{props.task.color}"  class="d-flex align-items-center justify-content-between border-bottom p-3 border rounded mb-2">
            <div class="form-check form-switch fs-5 name-dark">
                <input class="form-check-input" type="checkbox" value="" role="switch"
                       id="flexCheckDefault"
                       t-att-id="props.task.id"/>
                <label t-att-for="props.task.id">
                    <t t-esc="props.task.name"/>
                </label>
            </div>
            <div>
                <button class="btn btn-primary me-2"><i class="bi bi-pencil"></i></button>
                <button class="btn btn-danger"><i class="bi bi-trash"></i></button>
            </div>
    </li>

    `

    // use to get the states from parent component
    static props = ["task"];
}


