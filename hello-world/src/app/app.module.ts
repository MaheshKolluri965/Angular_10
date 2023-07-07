import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { StudentComponent } from './firstdemo/student.component';
import { ThirddemoComponent } from './thirddemo/thirddemo.component';
import { SeconddemoComponent } from './seconddemo/seconddemo.component';
import { TestInpComponent } from './test-inp/test-inp.component';
import { TestPbComponent } from './test-pb/test-pb.component';
import { TestClassbindingComponent } from './test-classbinding/test-classbinding.component';
import { TestStylebindingComponent } from './test-stylebinding/test-stylebinding.component';
import { TestEventbindingComponent } from './test-eventbinding/test-eventbinding.component';
import { TestTemplaterefvariablesComponent } from './test-templaterefvariables/test-templaterefvariables.component';
import { TestTwowaybindingComponent } from './test-twowaybinding/test-twowaybinding.component';

import { FormsModule } from '@angular/forms';
import { TestNgifComponent } from './test-ngif/test-ngif.component';
import { TestNgswitchComponent } from './test-ngswitch/test-ngswitch.component';
import { TestNgforComponent } from './test-ngfor/test-ngfor.component';
import { TestComponentinteractionComponent } from './test-componentinteraction/test-componentinteraction.component';
import { Test16PipesComponent } from './test16-pipes/test16-pipes.component';
import { Test17ServicesComponent } from './test17-services/test17-services.component';
import { Test17StudentListComponent } from './test17-student-list/test17-student-list.component';
import { Test17StudentDetailsComponent } from './test17-student-details/test17-student-details.component';

import { HttpClientModule} from '@angular/common/http';

//Services
import { StudentService } from './student.service';
import { Test23RoutingComponent } from './test23-routing/test23-routing.component';

//import { Test23StudentListComponent } from './test23-student-list/test23-student-list.component';
//import { Test23CourseListComponent } from './test23-course-list/test23-course-list.component';

//Routing
import { myRouting } from './app-routing.module';
import { AppRoutingModule } from "./app-routing.module";
import { AdminHomeComponent } from './admin-home/admin-home.component';
import { AdminAccessGuard } from './admin-access.guard';

@NgModule({
  declarations: [
    AppComponent,
    StudentComponent,
    ThirddemoComponent,
    SeconddemoComponent,
    TestInpComponent,
    TestPbComponent,
    TestClassbindingComponent,
    TestStylebindingComponent,
    TestEventbindingComponent,
    TestTemplaterefvariablesComponent,
    TestTwowaybindingComponent,
    TestNgifComponent,
    TestNgswitchComponent,
    TestNgforComponent,
    TestComponentinteractionComponent,
    Test16PipesComponent,
    Test17ServicesComponent,
    Test17StudentListComponent,
    Test17StudentDetailsComponent,
    Test23RoutingComponent,
    myRouting,
    AdminHomeComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule

  ],
  providers: [StudentService, AdminAccessGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
