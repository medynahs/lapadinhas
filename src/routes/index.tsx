import { Add, Clientes, Update } from 'pages';
import Caixa from 'pages/Caixa';
import Painel from 'pages/Painel';
import { StockPage } from 'pages/Stock';
import { ComponentType } from 'react';
// import { NotAuthorized } from 'pages/NotAuthorized/NotAuthorized';
// import { NotFound } from 'pages/NotFound/NotFound';

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

export const SECURE_ROUTES: {
  AUTHORIZED: IRoute[];
  NOT_AUTHORIZED: IRoute[];
} = {
  AUTHORIZED: [
    {
      path: ['/painel'],
      exact: true,
      title: 'Painel',
      component: Painel,
      permissions: [Permissions.Admin, Permissions.Collaborator],
    },
    {
      path: ['/caixa'],
      exact: true,
      title: 'Caixa',
      component: Caixa,
      permissions: [Permissions.Admin, Permissions.Collaborator],
    },
    {
      path: '/carteira',
      exact: true,
      title: 'Clientes',
      component: Clientes,
      routes: [],
      permissions: [Permissions.Admin, Permissions.Collaborator],
    },
    {
      path: '/estoque',
      exact: true,
      title: 'Estoque',
      component: StockPage,
      routes: [],
      permissions: [Permissions.Admin, Permissions.Collaborator],
    },
    {
      path: 'clientes/update/${cliente.id}`',
      exact: true,
      title: 'Update',
      component: Update,
      routes: [],
      permissions: [Permissions.Admin, Permissions.Collaborator],
    },
  ],
  NOT_AUTHORIZED: [
    //todo
  ],
};
