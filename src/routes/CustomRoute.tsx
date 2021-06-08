import React from "react";
import { Switch, Route } from "react-router-dom";

import ViewListIcon from "@material-ui/icons/ViewList";
import InboxIcon from "@material-ui/icons/MoveToInbox";
import PeopleAltIcon from "@material-ui/icons/PeopleAlt";
import BackupIcon from "@material-ui/icons/Backup";

import CatalogViewAll from "../components/catalog/ViewAll";
import Download from "../components/generate/Index";
import UserView from "../components/user";
import Backup from "../components/backup/Index";
import NotFound from "../components/404/Index";

export const Routes = [
  {
    path: "/",
    sidebarName: "Catalog",
    component: CatalogViewAll,
    iconComponent: ViewListIcon,
  },
  {
    path: "/download",
    sidebarName: "Template",
    component: Download,
    iconComponent: InboxIcon,
  },
  {
    path: "/user",
    sidebarName: "User",
    component: UserView,
    iconComponent: PeopleAltIcon,
  },
  {
    path: "/backup",
    sidebarName: "Back Up",
    component: Backup,
    iconComponent: BackupIcon,
  },
];

const CustomRoute = () => {
  return (
    <Switch>
      {Routes.map((route: any) => (
        <Route exact path={route.path} key={route.path}>
          <route.component />
        </Route>
      ))}
      <Route path="*" component={NotFound} />
    </Switch>
  );
};

export default CustomRoute;
