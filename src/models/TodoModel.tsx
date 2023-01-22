export class TodoModel {
  static autoincremrent: number = 0;
  id: number = 0;
  content: string;

  constructor(content: string) {
    this.id = TodoModel.autoincremrent++;
    this.content = content;
  }
}
