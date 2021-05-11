import React from 'react';
import {
    Switch,
    Route,
} from 'react-router-dom';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import BrandingWatermarkIcon from '@material-ui/icons/BrandingWatermark';

import ViewAll from '../components/catalog/ViewAll';
import Download from '../components/generate/Index';
import NotFound from '../components/404/Index';

export const Routes = [
    {
        path: '/',
        sidebarName: 'Catalog',
        component: ViewAll,
        iconComponent: BrandingWatermarkIcon,
    },
    {
        path: '/download',
        sidebarName: 'Generate',
        component: Download,
        iconComponent: InboxIcon,
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
