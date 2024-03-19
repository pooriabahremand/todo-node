import { TaskInterface } from "./task";

export default class TaskList {
  private list: TaskInterface[];

  constructor() {
    this.list = [];
  }

  public addTask(task: TaskInterface): void {
    this.list.push(task);
    console.log(
      "done! your task has been added to the task list successfuly\n\n"
    );
  }

  public removeTask(uuid: string): void {
    this.list = this.list.filter((task) => {
      return task.UUID != uuid;
    });

    console.log(
      "done ! the task that you wanted has been deleted successfuly."
    );
  }

  public watchTasks(): void {
    console.log(this.list);
  }
}
