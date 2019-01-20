import React, { Component } from 'react';

class ToDo extends Component {
	deleteTodo(e) {
   e.preventDefault()
   this.props.deleteTodo(this.props.description);
 }
	render() {
		return (
			<li>
				<input type="checkbox" checked={ this.props.isCompleted } onChange={ this.props.toggleComplete } />
				<input value="Delete" type="button" onClick= {(e) => this.deleteTodo(e)} />
				<span>{ this.props.description }</span>
			</li>
			);
		}
	}

export default ToDo;