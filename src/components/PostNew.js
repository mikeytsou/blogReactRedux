import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Field, reduxForm } from 'redux-form'; //reduxForm works very similar to the 'connect' helper from 'react-redux'
import { Link } from 'react-router-dom';
import { createPost } from '../actions/index';

// redux-form handles state of our forms like values and validations but not posting to the backend
class PostNew extends Component {
  renderField(field) { // this field object represents a single input or a piece of state
    const className = `field ${field.meta.touched && field.meta.error ? 'error' : ''}`;

    return (
      <div className={className}>
        <label>{field.label}</label>
        <input
          // onChange={field.input.onChange}
          // onFocus={field.input.onFocus}
          // onBlur={field.input.onBlur}
          // ...field.input is a shortcut for the above
          {...field.input} // ...field.input is an object that contains different event handlers(onChange, onBlur, onFocus, etc), props, and the the value of the input
          type="text"
        />
        <div id="input-error">
          {field.meta.touched ? field.meta.error : ''}
        </div>
      </div>
    );
  }

  onSubmit(values) {
    // this === component
    this.props.createPost(values, () => {
      this.props.history.push('/'); // the Route component passes in a bunch of props like 'history.push' which automatically navigates to a route given
    });
  }

  render() {
    const { handleSubmit } = this.props; // this handleSubmit is passed as props from redux-form

    return (
      <div>
        <form className="ui form" onSubmit={handleSubmit(this.onSubmit.bind(this))}>
          <Field
            label="Title:"
            name="title" // this name property must be identical to the properties in the validate function
            component={this.renderField}
          />

          <Field
            label="Categories:"
            name="categories"
            component={this.renderField}
          />

          <Field
            label="Content:"
            name="content"
            component={this.renderField}
          />

          <button className="ui button" type="submit">Submit</button>
          <Link to="/" className="ui button">Back</Link>
        </form>
      </div>
    );
  }
}

function validate(values) {
  // console.log(values) -> { titles: 'asdad', categories: 'asdqwe', content: 'derssdf' }
  const errors = {};
  // validate the inputs from 'values'
  if (!values.title || values.title.length < 5) {
    errors.title = 'Enter a title that is at least five characters';
  }

  if (!values.categories) {
    errors.categories = 'Enter some categories';
  }

  if (!values.content) {
    errors.content = 'Enter some content';
  }
  // if errors object is empty, the form is fine to submit
  // if errors object has any properties, redux-from assumes form is invalid
  return errors;
}

// This helper that allows redux form to communicate directly from the component to the reducer
export default reduxForm({
  validate, //this function is called automatically at certain points of the forms lifecycle, most notably when users try to submit the form
  form: 'PostsNewForm' // make sure the string for the form is unique for each form in different components
})(
  connect(null, { createPost })(PostNew)
);
