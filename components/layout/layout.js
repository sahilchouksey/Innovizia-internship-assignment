import Navigation from "./navigation/navigation";

import classes from "./layout.module.scss";

function Layout({ children }) {
  return (
    <div className={classes.container}>
      <header className={classes.header}>
        <Navigation />
      </header>
      <div className={classes["header-background"]}></div>
      <main className={classes.main}>{children}</main>
    </div>
  );
}

export default Layout;
