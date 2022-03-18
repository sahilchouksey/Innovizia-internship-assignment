import classes from "./input.module.scss";
function Input({
  label,
  id,
  placeholder,
  icon,
  oneForth,
  half,
  className,
  type = "radio",
  ...props
}) {
  return (
    <div
      className={`${
        type === "checkbox"
          ? classes["form__group-checkbox"]
          : classes["form__group"]
      } ${className}`}
    >
      {type !== "checkbox" && (
        <label
          className={`link-v-small ${classes["form__label"]}`}
          htmlFor={id}
        >
          {label}
        </label>
      )}

      {type === "checkbox" ? (
        <input
          className={` link-x-small`}
          id={id}
          type={type}
          {...props}
          style={{
            padding: 0,
            height: "initial",
            width: "initial",
            marginBottom: 0,
            display: "none",
            cursor: "pointer",
            border: "none",
          }}
        />
      ) : (
        <div className={classes["form__input-container"]}>
          <input
            className={`${classes["form__input"]} link-x-small`}
            placeholder={placeholder}
            id={id}
            type={type}
            {...props}
            style={!icon ? { paddingRight: "0" } : {}}
          />

          {icon && <span className={classes["form__icon"]}>{icon}</span>}
        </div>
      )}

      {type === "checkbox" && (
        <label
          className={`link-v-small ${classes["form__label"]}`}
          htmlFor={id}
        >
          {label}
        </label>
      )}
    </div>
  );
}

export default Input;
