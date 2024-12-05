export class MyClass {
    private x: number = 0;
  
    add(val: number): void {
      if (val < 1 || val > 10000) {
        throw new Error('Invalid input: val must be between 1 and 10,000');
      }
      this.x += val;
    }
  
    getX(): number {
      return this.x;
    }
  }