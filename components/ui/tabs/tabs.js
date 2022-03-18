import classes from "./tabs.module.scss";

function Tabs({ id, label, className, button, name, ...props }) {
  return (
    <div className={`${classes["tabs"]} ${className}`}>
      <input
        type="radio"
        className={classes["tabs-input"]}
        id={id}
        name={name}
        {...props}
      />
      <label
        htmlFor={id}
        style={button && { padding: " 0 " }}
        className={classes["tabs-label"]}
      >
        {!button && <span className={classes["tabs-button"]}></span>}
        {button || label}
        {button && (
          <span
            style={{
              height: "4.5rem",
              width: "100%",
              position: "relative",
              zIndex: 5,
            }}
          ></span>
        )}
      </label>
      {!button && <span className={classes["tabs-selected"]}></span>}
    </div>
  );
}

export default Tabs;
