import UI from "./ui";
import Task, { TaskInterface } from "./task";
import TaskList from "./taskList";
import Validation from "./validation";

export default class App {
  private ui: UI;
  private task?: TaskInterface;
  private taskList: TaskList;
  private validation: Validation;

  constructor() {
    this.ui = new UI();
    this.taskList = new TaskList();
    this.validation = new Validation();
  }

  public async run() {
    const input = await this.ui.getMenuInput(
      "\nPlease choose what you want to do base on this menu :\n1- Create a task.\n2- Remove a task(with UUID code).\n3- watching task list.\nEnter a number:"
    );

    await this.handleControl(Number(input));
    this.reStart();
  }

  private async handleControl(input: number) {
    switch (input) {
      case 1:
        // handling the situation when user want to add a task to the list
        const taskContent = this.ui.handleCreateTask(
          "what do you want to be the content of your task ?",
          "what do you want to be the name of your task ? "
        );
        this.task = new Task(
          (await taskContent).name,
          (await taskContent).content
        );
        this.taskList.addTask(this.task);
        break;

      case 2:
        // handling the situation that user want to remove one of the tasks
        console.log("please copy the UUID of the task you want to delete \n\n");
        this.taskList.watchTasks();
        const taskUUID = this.ui.getTaskInput(
          "Enter UUID that you want to delete: "
        );
        this.taskList.removeTask(await taskUUID);
        break;

      case 3:
        // handling the situation that user want to see the list of tasks
        this.taskList.watchTasks();
        break;
      default:
        console.log(
          "you have entered wrong input , it must be between 1 and 3 \n"
        );
        this.reStart();
        break;
    }
  }

  private async reStart() {
    await this.run();
  }
}
