import PaymentSectionHeader from "./header/payment-section-header";
import PaymentSectionMain from "./main/payment-section-main";
import classes from "./payment-section.module.scss";

function PaymentSection(props) {
  return (
    <div className={classes["payment-section"]}>
      <PaymentSectionHeader />
      <PaymentSectionMain />
    </div>
  );
}

export default PaymentSection;
