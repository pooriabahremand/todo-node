import * as readline from "readline";

export default class UI {
  private rl: readline.Interface;
  constructor() {
    this.rl = readline.createInterface({
      input: process.stdin,
      output: process.stdout,
      terminal: false, // Set this to false
    });
  }

  public async getMenuInput(message: string): Promise<number> {
    return await new Promise((resolve) => {
      this.rl.question(message, (input: string) => {
        resolve(Number(input));
      });
    });
  }

  public async getTaskInput(message: string): Promise<string> {
    return await new Promise((resolve) => {
      this.rl.question(message, (input: string) => {
        resolve(input);
      });
    });
  }

  public async handleCreateTask(content: string, name: string) {
    const enteredContentPromise = await new Promise<string>((resolve) => {
      this.rl.question(content, (input: string) => {
        resolve(input);
      });
    });

    const enteredNamePromise = await new Promise<string>((resolve) => {
      this.rl.question(name, (input: string) => {
        resolve(input);
      });
    });

    return { content: enteredContentPromise, name: enteredNamePromise };
  }
}
