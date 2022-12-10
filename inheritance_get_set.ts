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

  public getEmployeeByName(name: string) {
    return this.employees.find(emp => emp.name === name);
  }

  public getEmployeesByNames(names: string[]) {
    const employees = [] as Employee[];
    for (const name of names) {
      const employee = this.employees.find(emp => emp.name === name);
      if (employee) {
        employees.push(employee);
      }
    }
    return employees;
  }
}

class ITDepartment extends Department {

  constructor() {
    super('IT Department');
  }

  // Getter method for admins
  public get admins(): Employee[] {
    const admins = [] as Employee[];
    for (const employee of this.employees) {
      if (employee.isAdmin) {
        admins.push(employee);
      }
    }
    return admins;
  }

  // Setter method for admins
  public set admins(admins: Employee[]) {
    for (const admin of admins) {
      const employee = this.employees.find(emp => emp.id === admin.id);
      if (employee) {
        employee.isAdmin = true
      }
    }
  }

  // Setter method
  public set admin(id: string) {
    const employee = this.employees.find(emp => emp.id === id);
    if (employee) {
      employee.isAdmin = true;
    }
  }
}

export const InheritanceGetSetExample = (): void => {
  const department = new Department('Internal R&D');
  department.addEmployee('Lakshan', true);
  department.addEmployee('Kimmo', true);
  department.addEmployee('Tuomo', false);
  department.printEmployeeInformation();


  const it = new ITDepartment();
  it.addEmployee('Riina', false);
  it.addEmployee('Kai', false);
  it.addEmployee('Bishwo', false);
  it.addEmployee('Sriram', true);
  it.printEmployeeInformation();

  const admins = it.admins;
  admins.forEach((admin) => console.log(`Admins : ${admin.name}, ${admin.id}`));

  // Adding new admin
  console.log("Adding Riina as an Admin")
  const empId = it.getEmployeeByName('Riina')?.id;
  if (empId) {
    it.admin = empId;
    console.log("New Admins");
    it.admins.forEach((admin) => console.log(`Admins : ${admin.name}, ${admin.id}`));
  }



  // Adding multiple admins
  console.log("Adding Kai & Bishwo as an Admins");
  const newAdmins = it.getEmployeesByNames(['Kai', 'Bishwo']);
  if (newAdmins.length > 0) {
    it.admins = newAdmins;
    console.log('New Admins');
    it.admins.forEach((admin) => console.log(`Admins : ${admin.name}, ${admin.id}`));
  }



}
