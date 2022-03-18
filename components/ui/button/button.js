import Link from "next/link";

import classes from "./button.module.scss";

function Button({
  link,
  children,
  className,
  primary,
  secondary,
  tertiary,
  colored,
  widthAuto,
  transparent,
  onClick,
  ...props
}) {
  let classNames = [classes.btn, className];
  if (primary) classNames.push(classes["btn-primary"]);
  if (secondary) classNames.push(classes["btn-secondary"]);
  if (tertiary) classNames.push(`${classes["btn-tertiary"]} link-x-small`);
  if (colored) classNames.push(classes["btn-colored"]);
  if (transparent) classNames.push(classes["btn-transparent"]);
  if (widthAuto) classNames.push(classes["btn-widthAuto"]);
  console.log(primary);

  classNames = classNames.join(" ");

  if (link) {
    return (
      <Link href={link}>
        <a className={classNames} {...props}>
          {children}
        </a>
      </Link>
    );
  }
  return (
    <button
      onClick={(e) => {
        e.preventDefault();
        if (onClick) onClick();
      }}
      className={classNames}
      {...props}
    >
      {children}
    </button>
  );
}

export default Button;
