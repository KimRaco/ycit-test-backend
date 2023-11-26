import { Employee } from '../models/employees.model.js';

const getAllEmployees = () => {
  return Employee.find();
};

const getEmployeeById = (userId) => {
  return Employee.findById(userId);
};

const createEmployee = async (userData) => {
  const { email } = userData;
  const EmployeeExist = await Employee.findOne( { email: email} );

  if (EmployeeExist) throw new Error('A user already exists with that email');

  return Employee.create({ ...userData } );
};

const updateEmployeeById = (userId, dataToUpdate) => {
  return Employee.findByIdAndUpdate(
    userId, 
    dataToUpdate, 
    { new: true }
    );
};

const deleteEmployeeById = (userId) => {
  return Employee.findByIdAndDelete(userId);
};

export {
  getAllEmployees,
  getEmployeeById,
  createEmployee,
  updateEmployeeById,
  deleteEmployeeById
};