import { v4 as uuidv4 } from "uuid";

let users = [];

export const getAlluser = (req, res) => {
  res.send(users);
};

export const createUser = (req, res) => {
  const user = req.body;
  const userId = uuidv4();
  const userWithId = { ...user, id: userId };
  users.push(userWithId);

  res.send(`User with the name ${user.firstName} added!`);
};

export const getUserId = (req, res) => {
  const { id } = req.params;
  const foundUser = users.find((user) => user.id === id);

  res.send(foundUser);
};

export const deleteUser = (req, res) => {
  const { id } = req.params;
  users = users.filter((user) => user.id != id);

  res.send(`User with the ${id} deleted. `);
};

export const updateUser = (req, res) => {
  const { id } = req.params;
  const { firstName, lastName, age } = req.body;
  const userUpdate = users.find((user) => user.id === id);

  if (firstName) {
    userUpdate.firstName = firstName;
  }
  if (lastName) {
    userUpdate.lastName = lastName;
  }
  if (age) {
    userUpdate.age = age;
  }

  res.send(`User with the id ${id}`);
};
