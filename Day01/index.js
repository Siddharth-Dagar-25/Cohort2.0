const allUsers = [
  {
    firstName: "Siddharth",
    gender: "Male",
  },
  {
    firstName: "Ricky",
    gender: "Male",
  },
  {
    firstName: "Itachi",
    gender: "Male",
  },
  {
    firstName: "Makima",
    gender: "Female",
  },
];

for (let i = 0; i < allUsers.length; i++){
    if (allUsers[i]["gender"] == "Male") {
        console.log(allUsers[i].firstName)
    }
}