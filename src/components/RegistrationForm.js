import React from 'react';

class RegistrationForm extends React.Component {
  render() {
    return (
      <div className="regform">
        <form>
          <input type="text"/>
          <input type="password"/>
        </form>
        <button type="submit"/>
      </div>
    )
  }
}

export default RegistrationForm;
