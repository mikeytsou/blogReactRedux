import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form'; //reduxForm works very similar to the 'connect' helper from 'react-redux'

class PostNew extends Component {
  renderField(field) {
    return (
      <div className="ui form">
        <label>{field.label}</label>
        <input
          // onChange={field.input.onChange}
          // onFocus={field.input.onFocus}
          // onBlur={field.input.onBlur}
          // ...field.input is a shortcut for the above
          {...field.input} // ...field.input is an object that contains different event handlers(onChange, onBlur, onFocus, etc), props, and the the value of the input
          type="text"
        />
      </div>
    );
  }

  render() {
    return (
      <div>
        <form>
          <Field
            label="Title:"
            name="title"
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
})(PostNew);
