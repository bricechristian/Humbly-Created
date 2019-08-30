import React from 'react'

class Footer extends React.Component {
  render() {
    const currentYear = new Date().getFullYear()

    return (
      <div id="footer">
        <div className={`section`}>
          <div className={`wrapper center-text`}>
            <div className={`copyright blue-color`}>
              <span id="year">&copy;{currentYear} </span>Humbly Created Co.
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Footer
