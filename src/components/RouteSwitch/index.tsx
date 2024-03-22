import { Stack } from '@mui/material';
// import { SecureRoute } from '@okta/okta-react';
// import useCurrentUser from 'hooks/useCurrentUser';
// import { IRoute, Permissions } from 'interfaces';
import { Dashboard } from 'layouts/Dashboard';
// import { NotFound } from 'pages/NotFound/NotFound';
import { Route, Redirect, Switch } from 'react-router-dom';
import { SECURE_ROUTES } from 'routes';
// import { AnimatePresence } from 'framer-motion';
// import CookiesConsent from 'components/CookiesConsent';
// import { disableRUM, initializeRUM } from 'services/datadog';
import { ComponentType } from 'react';

enum Permissions {
  Admin = 0,
  Collaborator = 1,
  MarketAdmin = 2,
}

interface IRoute {
  path: string | string[];
  key?: string;
  title: string;
  component: ComponentType<any>;
  exact?: boolean;
  routes?: this[];
  permissions?: Permissions[];
}

export const RouteSwitch = () => {
  //   const { user } = useCurrentUser();
    const userIsAuthorized = true;
    return userIsAuthorized ? <AuthorizedRoutes /> : <NotAuthorizedRoutes />;
  // return true;
};

const AuthorizedRoutes = () => {
  //   const { isUserAdmin, isMarketAdmin } = useCurrentUser();
  const isUserAdmin = true;

  //   const marketAdminRoutes = SECURE_ROUTES.AUTHORIZED.filter((route) =>
  //     route.permissions?.includes(Permissions.MarketAdmin)
  //   );

  const adminRoutes = SECURE_ROUTES.AUTHORIZED.filter((route: any) =>
    route.permissions?.includes(Permissions.Admin)
  );

  const otherRoutes = SECURE_ROUTES.AUTHORIZED.filter((route: any) =>
    route.permissions?.includes(Permissions.Collaborator)
  );

  let routes = otherRoutes;

  //   if (isMarketAdmin) routes = marketAdminRoutes;

  if (isUserAdmin) routes = adminRoutes;

  return (
    <Dashboard>
      <Route
        render={({ location }) => (
          //   <AnimatePresence mode="sync" initial={false}>
          <Switch location={location} key={location.pathname}>
            {routes.map((route: IRoute, index: number) => (
              <route.component title={route.title} routes={route.routes} />
            ))}
            <Redirect exact from="/" to="/" />
            {/* <SecureRoute path="*" component={NotFound} /> */}
          </Switch>
          //   </AnimatePresence>
        )}
      />
    </Dashboard>
  );
};

// render 403 page
const NotAuthorizedRoutes = () => {
  return (
    <Stack>
      {/* {SECURE_ROUTES.NOT_AUTHORIZED.map((route: IRoute, key: number) => (
        <SecureRoute
          key={key}
          exact={route.exact}
          path={route.path}
          component={() => <route.component title={route.title} />}
        />
      ))} */}
    </Stack>
  );
};
