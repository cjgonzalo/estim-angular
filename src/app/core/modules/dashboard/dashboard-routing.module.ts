import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GendersListComponent } from './components/pages/genres/genders-list/genders-list.component';
import { AddGenderComponent } from './components/pages/genres/add-gender/add-gender.component';
import { EditGenderComponent } from './components/pages/genres/edit-gender/edit-gender.component';
import { GamesListComponent } from './components/pages/games/games-list/games-list.component';
import { GameDetailComponent } from './components/pages/games/game-detail/game-detail.component';
import { EditGameComponent } from './components/pages/games/edit-game/edit-game.component';
import { AddGameComponent } from './components/pages/games/add-game/add-game.component';
import { RoleGuard } from '../../guards/role.guard';
import { Role } from 'src/app/shared/types/users.types';
import { DlcsListComponent } from './components/pages/dlcs/dlcs-list/dlcs-list.component';
import { AddDlcComponent } from './components/pages/dlcs/add-dlc/add-dlc.component';
import { EditDlcComponent } from './components/pages/dlcs/edit-dlc/edit-dlc.component';
import { DlcDetailComponent } from './components/pages/dlcs/dlc-detail/dlc-detail.component';

const routes: Routes = [
  {
    path: 'genres',
    component: GendersListComponent,
    canActivate: [RoleGuard],
    data: {
      roles: [Role.admin]
    }
  },
  {
    path: 'genres/add',
    component: AddGenderComponent,
    canActivate: [RoleGuard],
    data: {
      roles: [Role.admin]
    }
  },
  {
    path: 'genres/edit/:id',
    component: EditGenderComponent,
    canActivate: [RoleGuard],
    data: {
      roles: [Role.admin]
    }
  },
  {
    path: 'games',
    component: GamesListComponent,
    canActivate: [RoleGuard],
    data: {
      roles: [Role.user, Role.agent, Role.admin]
    }
  },
  {
    path: 'games/add',
    component: AddGameComponent,
    canActivate: [RoleGuard],
    data: {
      roles: [Role.agent]
    }
  },
  {
    path: 'games/edit/:id',
    component: EditGameComponent,
    canActivate: [RoleGuard],
    data: {
      roles: [Role.agent]
    }
  },
  {
    path: 'games/:id',
    component: GameDetailComponent,
    canActivate: [RoleGuard],
    data: {
      roles: [Role.user, Role.agent, Role.admin]
    }
  },
  {
    path: 'dlcs',
    component: DlcsListComponent,
    canActivate: [RoleGuard],
    data: {
      roles: [Role.user, Role.agent, Role.admin]
    }
  },
  {
    path: 'dlcs/add',
    component: AddDlcComponent,
    canActivate: [RoleGuard],
    data: {
      roles: [Role.agent]
    }
  },
  {
    path: 'dlcs/edit/:id',
    component: EditDlcComponent,
    canActivate: [RoleGuard],
    data: {
      roles: [Role.agent]
    }
  },
  {
    path: 'dlcs/:id',
    component: DlcDetailComponent,
    canActivate: [RoleGuard],
    data: {
      roles: [Role.user, Role.agent, Role.admin]
    }
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
