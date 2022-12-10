import { v4 as uuidv4 } from 'uuid';

interface Employee {
  id: string;
  name: string;
  isAdmin: boolean;
}

class Department {

  protected employees = [] as Employee[];

  constructor(private readonly name: string) {
    this.name = name;
  }

  describe(this: Department) {
    console.log("Department: " + this.name)
  }

  addEmployee(employee: string, isAdmin: boolean) {
    const employeeData = { id: uuidv4(), name: employee, isAdmin: isAdmin } as Employee
    this.employees.push(employeeData)

  }

  printEmployeeInformation() {
    console.log(`Total ${this.employees.length} employees are working in this ${this.name} department. And they are =>`);
    for (const employee of this.employees) {
      console.log(`Employee Id: ${employee.id}, Name: ${employee.name}`);
    }
  }
}

class ITDepartment extends Department {

  constructor() {
    super('IT Department');
  }

  public getAdmins() {
    const admins = [] as Employee[];
    for (const employee of this.employees) {
      if (employee.isAdmin) {
        admins.push(employee);
      }
    }
    return admins;
  }
}

export const InheritanceExample = (): void => {
  const department = new Department('Internal R&D');
  department.addEmployee('Lakshan', true);
  department.addEmployee('Kimmo', true);
  department.addEmployee('Tuomo', false);
  department.printEmployeeInformation();


  const it = new ITDepartment();
  it.addEmployee('Riina', false);
  it.addEmployee('Kai', true);
  it.addEmployee('Bishwo', true);
  it.printEmployeeInformation();

  const admins = it.getAdmins();
  admins.forEach((admin) => console.log(`Admins : ${admin.name}, ${admin.id}`));

}
