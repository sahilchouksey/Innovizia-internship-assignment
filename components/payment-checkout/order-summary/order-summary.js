import OrderSummaryHeader from "./header/order-summary-header";
import OrderSummaryMain from "./main/order-summary-main";
import classes from "./order-summary.module.scss";

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

function OrderSummary(props) {
  const time = new Date().toLocaleDateString("en-US", {
    weekday: "long",
    month: "long",
    day: "numeric",
    hour: "2-digit",
    minute: "2-digit",
  });
  return (
    <div className={classes["order-summary"]}>
      <OrderSummaryHeader />
      <OrderSummaryMain />
    </div>
  );
}
new Date().toLocaleDateString();
export default OrderSummary;
