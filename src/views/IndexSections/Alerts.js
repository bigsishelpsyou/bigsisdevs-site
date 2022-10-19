/*!

=========================================================
* Argon Design System React - v1.1.1
=========================================================

* Product Page: https://www.creative-tim.com/product/argon-design-system-react
* Copyright 2022 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/argon-design-system-react/blob/master/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import React from "react";

// reactstrap components
import { UncontrolledAlert } from "reactstrap";

class Alerts extends React.Component {
  render() {
    return (
      <>
        <h2 className="mt-lg mb-5"> Welcome to the Support for International Scholars. </h2>
        <h3 className="h4 text-success font-weight-bold mb-4">Immigrants, reach out today!</h3>
        {/* <UncontrolledAlert color="info" fade={false}>
          <span className="alert-inner--icon">
            <i className="ni ni-bell-55" />
          </span>
          <span className="alert-inner--text ml-1">
            <strong>Info!</strong> Check out our patreon today!
          </span>
        </UncontrolledAlert> */}
        {/* <UncontrolledAlert color="success" fade={false}>
          <span className="alert-inner--icon">
            <i className="ni ni-like-2" />
          </span>
          <span className="alert-inner--text ml-1">
            <strong>Shop!</strong> BIGSIS SHOP! COMING SOON!
          </span>
        </UncontrolledAlert> */}
      </>
    );
  }
}

export default Alerts;
