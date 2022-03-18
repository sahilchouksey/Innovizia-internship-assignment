import Button from "../button/button";
import SearchIcon from "../../icons/search";

import classes from "./search.module.scss";

function Search(props) {
  return (
    <form className={classes.container}>
      <input
        dir="auto"
        role="combobox"
        className={classes["search_input"]}
        placeholder="SEARCH A SKILL"
        aria-expanded="true"
        aria-controls="search-box"
      />
      <Button type="submit" className={classes["search_btn"]}>
        <SearchIcon />
      </Button>
    </form>
  );
}
export default Search;
