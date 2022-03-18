import { Fragment } from "react";
import Button from "../../../ui/button/button";
import UnderLine from "../../../ui/underline/underline";
import classes from "../order-summary.module.scss";

function OrderSummaryHeader(props) {
  return (
    <Fragment>
      <div className={` ${classes["order-summary-header-mobile"]}`}>
        <h2 className={`text-large ${classes["order-summary-heading-text"]}`}>
          Order Summary
        </h2>
      </div>
      <div className={` ${classes["order-summary-header"]}`}>
        <div className={`flex-align ${classes["order-summary-heading"]}`}>
          <h2
            className={`link-medium ${classes["order-summary-heading-text"]}`}
          >
            Order Summary
          </h2>
          <Button className="link-vv-small" tertiary transparent>
            edit
          </Button>
        </div>

        <UnderLine className="margin-top-2" />
      </div>
    </Fragment>
  );
}

export default OrderSummaryHeader;
