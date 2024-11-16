const {Component, mount, xml} = owl

class Root extends Component {
  static template = xml`
  Test OWL
  `
}
mount(Root, document.getElementById("root"))