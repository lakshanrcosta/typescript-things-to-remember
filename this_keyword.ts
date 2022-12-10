class Department {
  name: string;

  constructor(name: string) {
    this.name = name;
  }

  describe(this: Department) {
    console.log("Department: " + this.name)
  }
}

export const ThisKeyWordExample = (): void => {
  const accounting = new Department('Accountring');
  accounting.describe()

  const accountingCopy = { name: "IT Department", describe: accounting.describe }
  accountingCopy.describe();
}

