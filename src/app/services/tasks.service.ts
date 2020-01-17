import { Injectable } from '@angular/core';
import { Task } from '../interfaces/task';

@Injectable({
  providedIn: 'root'
})
export class TasksService {

  tasks : Array<Task>=[{
    title:'1',
    description :'Hello'
  }]
  constructor() { 
    let savedTasks = localStorage.getItem('tasks')
    if(savedTasks)  this.tasks =  JSON.parse( savedTasks) ;
    else this.tasks = []

  }

  deleteTask(i){
  
    this.tasks.splice(i ,1)
    this.saveAll()
  }

  saveTask(title ,description){
    this.tasks.push({
     title,
     description
    })
    this.saveAll()
  }


  editTask(id,data){
   this.tasks[id] = data
   this.saveAll()
  }

  saveAll(){
    localStorage.setItem('tasks',JSON.stringify(this.tasks))
  }
}
