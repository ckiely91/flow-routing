var React = require('react');
var ReactDOM = require('react-dom');

var BlazeToReact = React.createClass({
  mixins: [ReactMeteorData],
  renderBlaze() {
    this.removeBlaze();
    var parentNode = ReactDOM.findDOMNode(this.refs[this.props.blazeTemplate]);
    if (parentNode)
      this.view = Blaze.renderWithData(Template[this.props.blazeTemplate], _.omit(this.props, 'blazeTemplate'), parentNode);
  },
  removeBlaze() {
    if (this.view) Blaze.remove(this.view);
  },
  getMeteorData() {
    // Ensure a re-rendering of the template if a prop changes
    this.renderBlaze();
    return this.props;
  },
  componentDidMount() {
    this.renderBlaze();
  },
  componentWillUnmount() {
    this.removeBlaze();
  },
  render() {
    return <div ref={this.props.blazeTemplate}/>
  }
});

module.exports = BlazeToReact;
