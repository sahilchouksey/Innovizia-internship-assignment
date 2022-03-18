import classes from "../payment-section.module.scss";
import Tab from "../../../ui/tabs/tabs";
import UnderLine from "../../../ui/underline/underline";
import { Fragment } from "react";

function PaymentSectionHeader(props) {
  return (
    <Fragment>
      <div
        className={` ${classes["payment-section-tabs"]} ${classes["payment-section-remove-tab-land"]}`}
      >
        <Tab
          name="tabs"
          className={classes["payment-section-tabs-1"]}
          id="personal details"
          label="Personal Details"
        />
        <Tab
          name="tabs"
          className={classes["payment-section-tabs-2"]}
          id="payment section"
          label="Payment Section"
          defaultChecked
        />
      </div>

      <div
        className={`margin-bottom-1 margin-top-2 ${classes["payment-section-header-mobile"]}`}
      >
        <h2
          className={`link-medium uppercase  ${classes["payment-section-header-mobile-title"]} ${classes["payment-section-center-padding"]}`}
        >
          Payment CheckOut
        </h2>

        <UnderLine className="margin-top-2" />
      </div>
    </Fragment>
  );
}

export default PaymentSectionHeader;
