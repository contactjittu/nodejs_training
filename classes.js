class User {
  constructor(name) {
    this._name = name;
  }

  // An important part of encapsulation is that data (object properties) should not be directly accessed or modified from outside the object. to access or modify a property we would use a getter (access) or a setter (modify)
  get name() {
    return this._name;
  }

  set name(newName) {
    return this._name = newName;
  }
}

let user = new User('Ram');

console.log(user.name);

user.name = 'Shyam';

console.log(user.name);


// Classes can also inherit from other classes. The class being inherited from is called the parent, and the class inheriting from the parent is called the child
class Adminstrator extends User {
  constructor(name, role) {
    super(name);
    this._role = role;
  }
  get role() {
    return this._role;
  }

  set role(newRole) {
    return this._role = newRole;
  }

  // A static method is a function that is bound to the class, not an object. A static method cannot be called from an instance of the class.
  static staticMethod() {
    console.log('I am a static method');
  }
}

let admin = new Adminstrator('John', 'Admin');

console.log(admin.name);
console.log(admin.role);

Adminstrator.staticMethod();
