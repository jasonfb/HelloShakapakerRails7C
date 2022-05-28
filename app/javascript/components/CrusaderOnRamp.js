import React from "react"
import PropTypes from "prop-types"


class CrusaderOnRamp extends React.Component {
  render () {
    return (
      <React.Fragment>
        Step: {this.props.step}
      </React.Fragment>
    );
  }
}

CrusaderOnRamp.propTypes = {
  step: PropTypes.node
};
export default CrusaderOnRamp
