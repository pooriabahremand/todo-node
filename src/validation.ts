export default class Validation {
  public validateInput(input: number) : boolean {
    if (input >= 1 && input <= 3) {
      return true;
    } else {
      return false;
    }
  }
}
