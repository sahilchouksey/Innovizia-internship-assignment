import classes from "./card.module.scss";

import CircleIcon from "../../icons/circle";
import VisaCardIcon from "../../icons/visa-card";
import MastercardIcon from "../../icons/mastercard";
function CardCircle() {
  return (
    <svg
      width="78"
      height="78"
      viewBox="0 0 78 78"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M45.4086 1.07213C66.3878 4.81041 80.3643 24.8478 76.626 45.827C72.8877 66.8062 52.8503 80.7826 31.8711 77.0444C10.892 73.3061 -3.08452 53.2687 0.653751 32.2895C4.39202 11.3104 24.4295 -2.66614 45.4086 1.07213Z"
        fill="url(#paint0_linear_2_52)"
      />
      <defs>
        <linearGradient
          id="paint0_linear_2_52"
          x1="-35.6714"
          y1="55.4757"
          x2="17.0169"
          y2="-27.4389"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0.279057" stopColor="#FC4D6D" />
          <stop offset="1" stopColor="#FDA02F" />
        </linearGradient>
      </defs>
    </svg>
  );
}

function Card({ type, number, ...props }) {
  return (
    <div className={classes.container}>
      <span
        className={`${classes["container-background-icon"]} ${classes["container-background-icon-top"]}`}
      >
        <CardCircle />
      </span>
      <span
        className={`${classes["container-background-icon"]} ${classes["container-background-icon-bottom"]}`}
      >
        <CardCircle />
      </span>

      <div className={classes.card}>
        <CircleIcon className={classes["card-icon"]} />
        <p className={classes["card-number"]}>{number}</p>
        {type === "visa" ? (
          <VisaCardIcon className={classes["card-icon"]} />
        ) : (
          <MastercardIcon className={classes["card-icon"]} />
        )}
      </div>
    </div>
  );
}

export default Card;
