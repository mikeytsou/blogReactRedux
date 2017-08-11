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

// This helper that allows redux form to communicate directly from the component to the reducer
export default reduxForm({
  // make sure the string for the form is unique for each form in different components
  form: 'PostsNewForm'
})(PostNew);
