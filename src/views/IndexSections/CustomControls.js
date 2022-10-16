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
// plugin that creates slider
import Slider from "nouislider";
// reactstrap components
import { Row, Col } from "reactstrap";

class CustomControls extends React.Component {
  state = {
    simpleValue: 100.0,
    rangeLow: 200.0,
    rangeHigh: 400.0
  };
  componentDidMount() {
    // slider1 init
    // var slider1 = this.refs.slider1;
    // Slider.create(slider1, {
    //   start: [0.0],
    //   connect: [true, false],
    //   step: 0.01,
    //   range: { min: 100.0, max: 500.0 }
    // }).on(
    //   "update",
    //   function (values, handle) {
    //     this.setState({ simpleValue: values[0] });
    //   }.bind(this)
    // );

    // // slider2 init
    // var slider2 = this.refs.slider2;
    // Slider.create(slider2, {
    //   start: [200.0, 400.0],
    //   connect: [false, true, false],
    //   step: 0.01,
    //   range: { min: 100.0, max: 500.0 }
    // }).on(
    //   "update",
    //   function (values, handle) {
    //     this.setState({ rangeLow: values[0], rangeHigh: values[1] });
    //   }.bind(this)
    // );
  }
  render() {
    return (
      <>
        <Row>
        </Row>
      </>
    );
  }
}

export default CustomControls;
