const ancestor = {
    name: "Paul",
    age: 83,
    surname: "Dawson",
    heritage: "Irish",
  };
  // Change code below this line
  
  const parent = Object.create(ancestor);
  parent.name = "Stacey";
  parent.surname = "Moore";
  parent.age = 54;
  parent.heritage ="Busy";
  
  const child = Object.create(parent);
  child.name = "Jason";
  child.age = 27;

  console.log(child);
  console.log(ancestor.heritage);
