import { Fragment } from "react";
import classes from "../order-summary.module.scss";

import EducationIcon from "../../../icons/education";
import VerifiedIcon from "../../../icons/verified";
import Input from "../../../ui/input/input";
import UnderLine from "../../../ui/underline/underline";

function getTimezoneOffset() {
  function z(n) {
    return (n < 10 ? "0" : "") + n;
  }
  let offset = new Date().getTimezoneOffset();
  let sign = offset < 0 ? "+" : "-";
  offset = Math.abs(offset);
  let gmttimeZone = sign + z((offset / 60) | 0) + z(offset % 60);
  gmttimeZone = gmttimeZone.trim();
  if (gmttimeZone.length <= 4)
    return gmttimeZone.substr(0, 2) + ":" + gmttimeZone.substr(2, 4);
  return gmttimeZone.substr(0, 3) + ":" + gmttimeZone.substr(3, 45);
}

function OrderSummaryMain(props) {
  const time = new Date().toLocaleDateString("en-US", {
    weekday: "long",
    month: "long",
    day: "numeric",
    hour: "2-digit",
    minute: "2-digit",
  });
  return (
    <Fragment>
      <div
        className={`margin-top-4 flex-align ${classes["order-summary-center-padding"]} ${classes["order-summary-profile"]}`}
      >
        <img
          className={`${classes["order-summary-profile-image"]}`}
          src="/assets/images/profile.png"
          alt="Ella. H"
        />
        <div
          className={`margin-left-2 ${classes["order-summary-profile-details"]}`}
        >
          <p className={`flex-align ${classes["order-summary-profile-text"]}`}>
            <span className="link-large"> Ella. H</span>
            <VerifiedIcon className="margin-left-1" />
            <img
              className="margin-left-1"
              src="/assets/images/uk-flag.png"
              alt="uk flag"
            />
          </p>
          <p
            className={`flex-align ${classes["order-summary-profile-languages"]}`}
          >
            <EducationIcon />
            <span className="text-x-small margin-left-1">English</span>
          </p>
        </div>
      </div>

      <UnderLine className="margin-top-3" />

      <div className={`margin-top-3 ${classes["order-summary-content"]}`}>
        <div
          className={`${classes["order-summary-center-padding"]} ${classes["order-summary-content-time-date"]}`}
        >
          <p
            className={`link-x-small ${classes["order-summary-content-time-date-title"]}`}
          >
            Date and Time
          </p>
          <p
            className={`link-medium margin-top-1 ${classes["order-summary-content-time-date-date"]}`}
          >
            {time}
          </p>

          <p
            className={`link-x-small ${classes["order-summary-content-time-date-timezone"]}`}
          >
            GMT {getTimezoneOffset()}
          </p>
        </div>
        <UnderLine className="margin-top-3" />
        <div
          className={` flex-align-between ${classes["order-summary-center-padding"]} ${classes["order-summary-content-apply-coupon"]}`}
        >
          <p className="link-x-small">Apply Coupon</p>
          <input
            className={classes["order-summary-content-apply-coupon-input"]}
          />
        </div>
        <UnderLine />

        <div
          className={`flex-column margin-top-3 ${classes["order-summary-center-padding"]} ${classes["order-summary-content-services-price"]}`}
        >
          <div className="flex-align-between w-100 ">
            <p
              className={`link-x-small ${classes["order-summary-content-services-price-light-text"]}`}
            >
              Service details
            </p>
            <p
              className={`link-x-small ${classes["order-summary-content-services-price-light-text"]}`}
            >
              Price per hour
            </p>
          </div>

          <div className="flex-align-between w-100 margin-top-1">
            <p
              className={`link-x-small ${classes["order-summary-content-services-price-light-text"]}`}
            >
              1 hour lesson
            </p>
            <p
              className={`link-x-small ${classes["order-summary-content-services-price-gray-text"]}`}
            >
              ₹3,000.80
            </p>
          </div>

          <div className="flex-align-between w-100 margin-top-1">
            <p
              className={`link-x-small ${classes["order-summary-content-services-price-light-text"]}`}
            >
              Transaction fee
            </p>
            <p
              className={`link-x-small ${classes["order-summary-content-services-price-gray-text"]}`}
            >
              ₹22.51
            </p>
          </div>

          <div className="flex-align-between w-100 margin-top-1">
            <p
              className={`link-x-small ${classes["order-summary-content-services-price-light-text"]}`}
            >
              Lesson cancellation
            </p>
            <p
              className={`link-x-small ${classes["order-summary-content-services-price-green-text"]}`}
            >
              Free
            </p>
          </div>
        </div>

        <UnderLine className="margin-top-4" />

        <div
          className={`margin-top-2 flex-align-between w-100 ${classes["order-summary-center-padding"]} ${classes["order-summary-content-services-price-text"]}`}
        >
          <p
            className={`link-medium ${classes["order-summary-content-services-price-light-text"]}`}
          >
            Total
          </p>
          <p
            className={`link-medium ${classes["order-summary-content-services-price-gray-text"]}`}
          >
            Rs: 3496.00
          </p>
        </div>

        <div
          className={`margin-top-7 ${classes["order-summary-center-padding"]}`}
        >
          <Input
            label={
              <span className="margin-left-1 link-x-small">
                I want a{" "}
                <span
                  className={
                    classes["order-summary-content-services-price-green-text"]
                  }
                >
                  free lesson
                </span>{" "}
                or a refund if the tutor doesn’t meet my needs
              </span>
            }
            id={"form-submittion"}
            type="checkbox"
          />
        </div>
      </div>
    </Fragment>
  );
}

export default OrderSummaryMain;
