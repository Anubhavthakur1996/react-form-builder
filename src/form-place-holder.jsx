import React from "react";
import PropTypes from "prop-types";
import { injectIntl } from "react-intl";

const PLACE_HOLDER = "form-place-holder";
const PLACE_HOLDER_HIDDEN = "form-place-holder-hidden";

class PlaceHolder extends React.Component {
  render() {
    const placeHolder = "Dropzone";
    const placeHolderClass = PLACE_HOLDER;

    return <div className={placeHolderClass}>{placeHolder}</div>;
  }
}

export default injectIntl(PlaceHolder);
PlaceHolder.propTypes = {
  text: PropTypes.string,
  show: PropTypes.bool,
};

PlaceHolder.defaultProps = {
  text: "Dropzone",
  show: false,
};
