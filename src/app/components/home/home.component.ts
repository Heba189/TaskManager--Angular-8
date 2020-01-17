import { Component, OnInit } from '@angular/core';
import { TasksService } from 'src/app/services/tasks.service';
import { Title } from '@angular/platform-browser';
import { Task } from 'src/app/interfaces/task';
// import { DH_NOT_SUITABLE_GENERATOR } from 'constants';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  tasks :Array<Task> =[]
  constructor( private tasksSer : TasksService ,
     private title :Title) { 

    this.title.setTitle ('Task Manager')
  }

  ngOnInit() {
     this.tasks = this.tasksSer.tasks
  }

  deleteTask(i){
      this.tasksSer.deleteTask(i);
  }

}
