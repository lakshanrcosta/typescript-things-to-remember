var __defProp = Object.defineProperty;
var __markAsModule = (target) => __defProp(target, "__esModule", { value: true });
var __export = (target, all) => {
  __markAsModule(target);
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
__export(exports, {
  ThisKeyWordExample: () => ThisKeyWordExample
});
class Department {
  name;
  constructor(name) {
    this.name = name;
  }
  describe() {
    console.log("Department: " + this.name);
  }
}
const ThisKeyWordExample = () => {
  const accounting = new Department("Accountring");
  accounting.describe();
  const accountingCopy = { name: "IT Department", describe: accounting.describe };
  accountingCopy.describe();
};
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  ThisKeyWordExample
});
//# sourceMappingURL=this_keyword.js.map
