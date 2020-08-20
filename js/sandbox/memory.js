let string = ""

class Memory {
  constructor() {
    this.memory = []
  }

  fillUp() {
    for (var i = 0; i < rows; i++) {
      this.memory.push([])
      for (var j = 0; j < columns; j++) {
        this.memory[i].push(0)
      }
    }
  }
  show() {
    string = "";
    for (var i = 0; i < rows; i++) {
      for (var j = 0; j < columns; j++) {
        string += this.memory[i][j] + ",";
      }
     string += "\n";
    }
    print(string);
  }
}