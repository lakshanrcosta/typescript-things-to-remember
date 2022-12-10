var __defProp = Object.defineProperty;
var __markAsModule = (target) => __defProp(target, "__esModule", { value: true });
var __export = (target, all) => {
  __markAsModule(target);
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
__export(exports, {
  AccessModifiersExample: () => AccessModifiersExample
});
class Department {
  name;
  employees = [];
  constructor(name) {
    this.name = name;
  }
  describe() {
    console.log("Department: " + this.name);
  }
  addEmployee(employee) {
    this.employees.push(employee);
  }
  printEmployeeInformation() {
    console.log(`Total ${this.employees.length} employees are working in this ${this.name} department. And they are ${this.employees}`);
  }
}
const AccessModifiersExample = () => {
  const department = new Department("Internal R&D");
  department.addEmployee("Lakshan");
  department.addEmployee("Kimmo");
  department.addEmployee("Tuomo");
  department.printEmployeeInformation();
};
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  AccessModifiersExample
});
//# sourceMappingURL=access_modifiers.js.map
