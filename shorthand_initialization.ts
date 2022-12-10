import { uuid } from 'uuidv4';

interface Employee {
  id: string;
  name: string;
}

class Department {

  private employees = [] as Employee[]

  constructor(private name: string) {
    this.name = name;
  }

  describe(this: Department) {
    console.log("Department: " + this.name)
  }

  addEmployee(employee: string) {
    const employeeData = { id: uuid(), name: employee } as Employee
    this.employees.push(employeeData)
  }

  printEmployeeInformation() {
    console.log(`Total ${this.employees.length} employees are working in this ${this.name} department. And they are =>`);
    for (const employee of this.employees) {
      console.log(`Employee Id: ${employee.id}, Name: ${employee.name}`);
    }
  }
}

export const ShortHandInitializationExample = (): void => {
  const department = new Department('Internal R&D');
  department.addEmployee('Lakshan');
  department.addEmployee('Kimmo');
  department.addEmployee('Tuomo');
  department.printEmployeeInformation();
}
