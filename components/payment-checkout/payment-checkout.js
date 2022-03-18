import PaymentSection from "./payment-section/payment-section";
import classes from "./payment-checkout.module.scss";
import OrderSummary from "./order-summary/order-summary";

function PaymentCheckout(props) {
  return (
    <div className={classes["main-section"]}>
      <PaymentSection />
      <OrderSummary />
    </div>
  );
}

export default PaymentCheckout;
