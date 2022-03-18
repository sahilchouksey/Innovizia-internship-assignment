import classes from "./underline.module.scss";

function UnderLine({ className }) {
  return <hr className={`${classes.underline} ${className || ""} `} />;
}

export default UnderLine;
