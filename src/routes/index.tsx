import React from "react";
import { Route, Switch } from "react-router-dom";

import Backup from "../pages/Backup";
import Dashboard from "../pages/Dashboard";
import ScheduleBackup from "../pages/ScheduleBackup";

const Routes: React.FC = () => (
  <Switch>
    <Route path="/" exact component={Dashboard} />
    <Route path="/backup" exact component={Backup} />
    <Route path="/schedulebackup" exact component={ScheduleBackup} />
  </Switch>
);

export default Routes;
