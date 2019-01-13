import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
    path: 'tabs',
    component: TabsPage,
    children: [
      {
        path: 'tab1',
        children: [
          {
            path: '',
            loadChildren: '../tab1/tab1.module#Tab1PageModule'
          }
        ]
      },
      {
        path: 'conciertos',
        children: [
          {
            path: '',
            loadChildren: './../conciertos/conciertos.module#ConciertosPageModule'
          }
        ]
      },
      {
        path: 'actividades',
        children: [
          {
            path: '',
            loadChildren: './../actividades/actividades.module#ActividadesPageModule'
          }
        ]
      },
      {
        path: 'club-lectura',
        children: [
          {
            path: '',
            loadChildren: './../club-lectura/club-lectura.module#ClubLecturaPageModule'
          }
        ]
      },
      {
        path: 'bar-info',
        children: [
          {
            path: '',
            loadChildren: './../bar-info/bar-info.module#BarInfoPageModule'          }
        ]
      },

      {
        path: 'tab2',
        children: [
          {
            path: '',
            loadChildren: '../tab2/tab2.module#Tab2PageModule'
          }
        ]
      },
      {
        path: 'tab3',
        children: [
          {
            path: '',
            loadChildren: '../tab3/tab3.module#Tab3PageModule'
          }
        ]
      }
    ]
  }
  //     ,{
  //       path: '',
  //       redirectTo: '/tabs/tab1',
  //       pathMatch: 'full'
  //     }
  //   ]
  // },
  // {
  //   path: '',
  //   redirectTo: '/tabs/tab1',
  //   pathMatch: 'full'
  // }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TabsPageRoutingModule {}
