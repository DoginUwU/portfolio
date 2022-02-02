import { Switch, Route } from "react-router-dom";
import Home from "../pages/Home";
import Portfolio from "../pages/Portfolio";
import Blog from "../pages/Blog";
import Project from "../pages/Project";

const Routes = () => (
  <Switch>
    <Route path="/" exact component={Home} />
    <Route path="/projects" exact component={Portfolio} />
    <Route path="/project/:uid" exact component={Project} />

    <Route path="/blog" exact component={Blog} />
  </Switch>
);

export default Routes;
