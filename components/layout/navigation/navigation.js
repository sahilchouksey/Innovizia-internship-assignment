import SearchBox from "../../ui/search/search";
import Button from "../../ui/button/button";

import LogoIcon from "../../icons/logo";
import MoreOptionsIcon from "../../icons/more-options";

import classes from "./navigation.module.scss";

function Navigation(props) {
  return (
    <nav className={classes.navigation}>
      <h1 className={classes.logo}>
        <LogoIcon />
      </h1>
      <ul className={classes["navigation-list"]}>
        <li className={classes["navigation-item-search"]}>
          <SearchBox />
        </li>
        <li className={classes["navigation-item-more-options"]}>
          <MoreOptionsIcon />
        </li>
        <li className={classes["navigation-item-login"]}>
          <Button primary transparent>
            Log In
          </Button>
        </li>
        <li className={classes["navigation-item-signin"]}>
          <Button primary colored>
            Sign in
          </Button>
        </li>
      </ul>
    </nav>
  );
}

export default Navigation;
