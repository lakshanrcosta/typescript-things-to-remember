class Department {
  private name: string;
  private employees: string[] = [];

  constructor(name: string) {
    this.name = name;
  }

  describe(this: Department) {
    console.log("Department: " + this.name)
  }

  addEmployee(employee: string) {
    this.employees.push(employee)
  }

  printEmployeeInformation() {
    console.log(`Total ${this.employees.length} employees are working in this ${this.name} department. And they are ${this.employees}`)
  }
}

export const AccessModifiersExample = (): void => {
  const department = new Department('Internal R&D');
  department.addEmployee('Lakshan');
  department.addEmployee('Kimmo');
  department.addEmployee('Tuomo');
  department.printEmployeeInformation();
}

