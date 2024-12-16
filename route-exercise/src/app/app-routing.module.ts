import { PageNotFoundComponent } from "./page-not-found/page-not-found.component";
import { LoginComponent } from "./login/login.component";
import { NgModule } from "@angular/core";
import {
  Routes,
  RouterModule,
  PreloadAllModules,
  UrlSerializer,
} from "@angular/router";
import { AboutComponent } from "./about/about.component";
import { HomeComponent } from "./courses/home/home.component";
import { CanLoadAuthGuard } from "./services/can-load-outh.guard";
import { CustomPrelodinStrategy } from "./services/custom-preloading.strategy";
import { ChatComponent } from "./chat/chat.component";

const routes: Routes = [
  {
    path: "",
    redirectTo: "/courses",
    pathMatch: "full",
  },
  {
    path: "courses",
    loadChildren: () =>
      import("./courses/courses.module").then((m) => m.CoursesModule),
    //canLoad: [CanLoadAuthGuard],
    data: {
      //preload: true,
      preload: false,
    },
  },
  {
    path: "login",
    component: LoginComponent,
  },
  {
    path: "about",
    component: AboutComponent,
  },
  {
    path: "helpdesk-chat",
    component: ChatComponent,
    outlet: "chat",
  },
  {
    path: "**",
    component: PageNotFoundComponent,
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      preloadingStrategy: PreloadAllModules,
      //enableTracing: true, //to log information on the console
      enableTracing: false,
      useHash: false, //activate # fragment part of url
      scrollPositionRestoration: "enabled", // activate scroll position
      paramsInheritanceStrategy: "always", // activate top level parameter in route
    }),
  ],
  exports: [RouterModule],
  providers: [CanLoadAuthGuard, CustomPrelodinStrategy],
})
export class AppRoutingModule {}
