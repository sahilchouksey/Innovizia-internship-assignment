import { Fragment } from "react";
import classes from "../payment-section.module.scss";

import Input from "../../../ui/input/input";
import MasterCardIcon from "../../../icons/mastercard";
import AlertCircleIcon from "../../../icons/alert";
import UnderLine from "../../../ui/underline/underline";
import NewPaymentSvgIcon from "../../../icons/new-payment";
import ArrowLeftIcon from "../../../icons/arrow-left";

import Button from "../../../ui/button/button";
import Tab from "../../../ui/tabs/tabs";
import PaymentCard from "../../../ui/payment-card/card";

function PaymentSectionMain(props) {
  const paymentMethods = ["Credit/Debit Card", "Net Banking", "UPI"];

  return (
    <Fragment>
      <div
        className={`margin-top-3 ${classes["payment-section-content"]} ${classes["payment-section-center-padding"]}`}
      >
        <div className={classes["payment-section-content-header"]}>
          <h2
            className={`link-medium uppercase ${classes["payment-section-content-header-title"]}  ${classes["payment-section-remove-tab-land"]}`}
          >
            Payment Section
          </h2>
          <div
            className={`flex-align uppercase margin-top-1 ${classes["payment-section-content-header-options"]}}`}
          >
            <p
              className={`link-x-small ${classes["payment-section-content-header-options-text"]}`}
            >
              Saved Cards
            </p>
            <Button className="link-vv-small" tertiary transparent>
              edit
            </Button>
          </div>
        </div>

        <div className={classes["payment-section-content-main"]}>
          <div
            className={`margin-top-2 flex-align ${classes["payment-section-content-cards"]}`}
          >
            <PaymentCard type="visa" number="XXXX 4023" />
            <PaymentCard type="mastercard" number="XXXX 4023" />
          </div>
          <form
            className={`margin-top-4 ${classes["payment-section-content-payment-options"]}`}
          >
            <h2
              className={`text-x-small ${classes["payment-section-content-payment-options-title"]}`}
            >
              Other Payent Methods
            </h2>

            <div
              className={`margin-top-3 ${classes["payment-section-content-payment-options-methods"]}`}
            >
              {paymentMethods.map((e) => {
                return (
                  <Tab
                    defaultChecked
                    name="options"
                    id={e}
                    key={e}
                    button={
                      <Button
                        className={`text-x-small ${classes["payment-section-content-payment-options-button"]}`}
                        secondary
                        transparent
                        widthAuto
                      >
                        {<span>{e}</span>}
                      </Button>
                    }
                  ></Tab>
                );
              })}
            </div>

            <div
              className={`margin-top-3 ${classes["payment-section-content-payment-options-details"]}`}
            >
              <Input
                className={`${classes["payment-section-content-payment-options-details-input-half-1"]} ${classes["payment-section-content-payment-options-details-input-top-row"]}`}
                label="Card Number"
                id="Card Number"
                placeholder={"0000   0000   0000   0000"}
                type="text"
                icon={<MasterCardIcon />}
                half
              />
              <Input
                className={`${classes["payment-section-content-payment-options-details-input-half-2"]} ${classes["payment-section-content-payment-options-details-input-top-row"]}`}
                label="Name On Card"
                id="Name On Card"
                placeholder={"ENTER YOUR NAME"}
                type="text"
                // icon={<MasterCardIcon />}
                half
              />
              <Input
                className={`${classes["payment-section-content-payment-options-details-input-one-forth-1"]} ${classes["payment-section-content-payment-options-details-input-bottom-row"]}`}
                label="expiry Date"
                id="Expiry Date"
                placeholder={"MM/YY"}
                type="text"
                // icon={<MasterCardIcon />}
                oneForth
              />
              <Input
                className={`${classes["payment-section-content-payment-options-details-input-one-forth-2"]} ${classes["payment-section-content-payment-options-details-input-bottom-row"]}`}
                label="CVV"
                id="CVV"
                placeholder={"---"}
                type="password"
                icon={<AlertCircleIcon />}
                oneForth
              />
            </div>
          </form>
        </div>
      </div>

      <div
        className={`margin-top-5 ${classes["payment-section-action"]} ${classes["payment-section-center-padding"]}`}
      >
        <UnderLine className={classes["payment-section-remove-tab-land"]} />
        <div
          className={`margin-top-3 margin-bottom-4 w-100 flex-align-between ${classes["payment-section-action-container"]}`}
        >
          <Button
            className={`flex-align-between ${classes["payment-section-action-button"]} ${classes["payment-section-action-button-go-back"]} ${classes["payment-section-remove-tab-land"]}`}
            primary
            transparent
          >
            <ArrowLeftIcon />
            <span>Back To Personal Details</span>
          </Button>

          <Button
            className={`flex-center ${classes["payment-section-action-button"]}`}
            primary
            colored
          >
            <NewPaymentSvgIcon />
          </Button>
        </div>
      </div>
    </Fragment>
  );
}

export default PaymentSectionMain;
