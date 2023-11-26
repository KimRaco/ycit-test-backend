import express from 'express';
import {
    getAllEmployees,
    getEmployeeById,
    createEmployee,
    updateEmployeeById,
    deleteEmployeeById
} from '../usecases/employees.usecases.js';


const routerEmployees = express.Router();

//Get all Users
routerEmployees.get('/', async (req, res) => {
  try {
    const employeesFound = await getAllEmployees();

    res.json({
      success: true,
      data: employeesFound
    });

  } catch (error) {
    res
    .status(400)
    .json({
      success: false,
      message: error.message
    });
  }
});

//Get User by id
routerEmployees.get('/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const employeeFound = await getEmployeeById(id);

    res.json({
      success: true,
      data: employeeFound
    });

  } catch (error) {
    res
    .status(400)
    .json({
      success: false,
      message: error.message
    });
  }
});

//Create User
routerEmployees.post('/create', async (req, res) => {
  try {
    const { body } = req;
    const employeeCreated = await createEmployee( body );
    
    res.json({
      success: true,
      data: employeeCreated,
    });

  } catch (error) {
    res
    .status(400)
    .json({
      success: false,
      message: error.message
    });
  }
});

//Update User by Id
routerEmployees.patch('/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const dataToUpdate = req.body;
    const employeeUpdated = await updateEmployeeById(id, dataToUpdate);
    res.json({
      success: true,
      data: employeeUpdated
    });

  } catch (error) {
    res
    .status(400)
    .json({
      success: false,
      message: error.message
    });
  }
});

routerEmployees.delete('/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const employeeDeleted = await deleteEmployeeById(id);

    if (!employeeDeleted) throw new Error('Id not found');

    res.json({
      success: true,
      message: 'Employee deleted'
    });

  } catch (error) {
    res
    .status(400)
    .json({
      success: false,
      message: error.message
    });
  }
});

export default routerEmployees;