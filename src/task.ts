import * as crypto from "crypto";
export interface TaskInterface {
  name: string;
  content: string;
  createdAt: string;
  UUID: string;
  completed: boolean;
}

export default class Task implements TaskInterface {
  name: string;
  content: string;
  createdAt: string;
  UUID: string;
  completed: boolean;
  constructor(name: string, content: string) {
    this.name = name;
    this.content = content;
    this.createdAt = new Date().toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
    this.UUID = crypto.randomUUID();
    this.completed = false;
  }
}
