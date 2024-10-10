

import React, { useState } from 'react';
import ExpenseData from '../ExpenseData';

const ProfilePage = () => {
    const [expenses, setExpenses] = useState(ExpenseData);
    const [expenseForm, setExpenseForm] = useState({
        amount: '',
        category: '',
        date: '',
        description: ''
    });
    const [isEditMode, setIsEditMode] = useState(false);
    const [currentEditIndex, setCurrentEditIndex] = useState(null);

    const handleChange = (e) => {
        const { id, value } = e.target;
        setExpenseForm((prevData) => ({
            ...prevData,
            [id]: value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (isEditMode) {
            // Update existing expense
            setExpenses((prev) => {
                const updatedExpenses = [...prev];
                updatedExpenses[currentEditIndex] = expenseForm;
                return updatedExpenses;
            });
        } else {
            // Add new expense
            setExpenses((prev) => [...prev, expenseForm]);
        }

        // Reset form
        resetForm();
    };

    const resetForm = () => {
        setExpenseForm({
            amount: '',
            category: '',
            date: '',
            description: ''
        });
        setIsEditMode(false);
        setCurrentEditIndex(null);
    };

    const handleEditClick = (index) => {
        const expenseToEdit = expenses[index];
        setExpenseForm(expenseToEdit);
        setIsEditMode(true);
        setCurrentEditIndex(index);
    };

    const handleUpdate = () => {
        // Call the update logic here
        setExpenses((prev) => {
            const updatedExpenses = [...prev];
            updatedExpenses[currentEditIndex] = expenseForm;
            return updatedExpenses;
        });

        // Close modal after updating
        resetForm();
        const modal = document.getElementById('editExpenseModal');
        const bootstrapModal = bootstrap.Modal.getInstance(modal);
        bootstrapModal.hide();
    };

    return (
        <div>
            <header className="hero text-center py-5">
                <div className="container">
                    <h1 className="display-4">User Profile</h1>
                    <p className="lead">Manage your expenses and track your budget!</p>
                </div>
            </header>
            <section className="">
                <div className="container">
                    <h2 className="text-center my-5">Welcome, [Username]</h2>
                    <ul className="nav nav-tabs justify-content-center" id="myTab" role="tablist">
                        <li className="nav-item" role="presentation">
                            <a className="nav-link active" id="expense-tab" data-bs-toggle="tab" href="#expense" role="tab" aria-controls="expense" aria-selected="true">Expense Tracking</a>
                        </li>
                        <li className="nav-item" role="presentation">
                            <a className="nav-link" id="budget-tab" data-bs-toggle="tab" href="#budget" role="tab" aria-controls="budget" aria-selected="false">Budget Management</a>
                        </li>
                        <li className="nav-item" role="presentation">
                            <a className="nav-link" id="reports-tab" data-bs-toggle="tab" href="#reports" role="tab" aria-controls="reports" aria-selected="false">Monthly Reports</a>
                        </li>
                    </ul>

                    <div className="tab-content mt-3" id="myTabContent">
                        {/* Expense Tracking Tab */}
                        <div className="tab-pane fade show active" id="expense" role="tabpanel" aria-labelledby="expense-tab">
                            <h3 className="text-center">Expense Tracking</h3>
                            <div className="mb-4">
                                <h4>Add Expense</h4>
                                <form onSubmit={handleSubmit}>
                                    <div className="row">
                                        <div className="col-md-4 col-sm-12 mb-3">
                                            <label htmlFor="amount" className="form-label">Amount</label>
                                            <input
                                                type="number"
                                                className="form-control"
                                                id="amount"
                                                value={expenseForm.amount}
                                                onChange={handleChange}
                                                required
                                            />
                                        </div>
                                        <div className="col-md-4 col-sm-12 mb-3">
                                            <label htmlFor="category" className="form-label">Category</label>
                                            <select
                                                className="form-select"
                                                id="category"
                                                value={expenseForm.category}
                                                onChange={handleChange}
                                                required
                                            >
                                                <option value="">Select Category</option>
                                                <option value="food">Food</option>
                                                <option value="travel">Travel</option>
                                                <option value="bills">Bills</option>
                                                <option value="entertainment">Entertainment</option>
                                            </select>
                                        </div>
                                        <div className="col-md-4 col-sm-12 mb-3">
                                            <label htmlFor="date" className="form-label">Date</label>
                                            <input
                                                type="date"
                                                className="form-control"
                                                id="date"
                                                value={expenseForm.date}
                                                onChange={handleChange}
                                                required
                                            />
                                        </div>
                                    </div>
                                    <div className="mb-3">
                                        <label htmlFor="description" className="form-label">Description</label>
                                        <textarea
                                            className="form-control"
                                            id="description"
                                            rows="3"
                                            value={expenseForm.description}
                                            onChange={handleChange}
                                            required
                                        ></textarea>
                                    </div>
                                    <button type="submit" className="btn btn-success w-100">Add Expense</button>
                                </form>
                            </div>
                            <div>
                                <h4>View Expenses</h4>
                                <div className="table-responsive">
                                    <table className="table table-hover">
                                        <thead>
                                            <tr>
                                                <th scope="col">Date</th>
                                                <th scope="col">Category</th>
                                                <th scope="col">Description</th>
                                                <th scope="col">Amount</th>
                                                <th scope="col">Actions</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {
                                                expenses.map((exp, i) => {
                                                    return (
                                                        <tr key={i}>
                                                            <td>{exp.date}</td>
                                                            <td>{exp.category}</td>
                                                            <td>{exp.description}</td>
                                                            <td>${exp.amount}</td>
                                                            <td>
                                                                <button 
                                                                    type="button" 
                                                                    className="btn btn-warning btn-sm me-2 my-2" 
                                                                    onClick={() => handleEditClick(i)} 
                                                                    data-bs-toggle="modal" 
                                                                    data-bs-target="#editExpenseModal"
                                                                >
                                                                    Edit
                                                                </button>
                                                                <button className="btn btn-danger btn-sm my-2">Delete</button>
                                                            </td>
                                                        </tr>
                                                    )
                                                })
                                            }
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>

                        {/* Budget Management Tab */}
                        <div className="tab-pane fade" id="budget" role="tabpanel" aria-labelledby="budget-tab">
                            <h3 className="text-center">Budget Management</h3>
                            <div className="mb-4">
                                <h4>Set Budgets</h4>
                                <form>
                                    <div className="row">
                                        <div className="col-md-6 col-sm-12 mb-3">
                                            <label htmlFor="budgetCategory" className="form-label">Category</label>
                                            <select className="form-select" id="budgetCategory" required>
                                                <option value="">Select Category</option>
                                                <option value="food">Food</option>
                                                <option value="entertainment">Entertainment</option>
                                                <option value="bills">Bills</option>
                                            </select>
                                        </div>
                                        <div className="col-md-6 col-sm-12 mb-3">
                                            <label htmlFor="budgetAmount" className="form-label">Budget Amount</label>
                                            <input type="number" className="form-control" id="budgetAmount" required />
                                        </div>
                                    </div>
                                    <button type="submit" className="btn btn-success w-100">Set Budget</button>
                                </form>
                            </div>
                            <div>
                                <h4>Track Spending Against Budgets</h4>
                                <div className="table-responsive">
                                    <table className="table table-hover">
                                        <thead>
                                            <tr>
                                                <th scope="col">Category</th>
                                                <th scope="col">Budget</th>
                                                <th scope="col">Spent</th>
                                                <th scope="col">Remaining</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {/* Example row, replace with dynamic content */}
                                            <tr>
                                                <td>Food</td>
                                                <td>$300</td>
                                                <td>$150</td>
                                                <td>$150</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>

                        {/* Monthly Reports Tab */}
                        {/* Monthly Reports Tab */}
                        <div className="tab-pane fade" id="reports" role="tabpanel" aria-labelledby="reports-tab">
                            <h3 className="text-center">Monthly Reports</h3>
                            <div>
                                <h4>Generate Reports</h4>
                                <form>
                                    <div className="mb-3">
                                        <label htmlFor="reportMonth" className="form-label">Select Month</label>
                                        <input type="month" className="form-control" id="reportMonth" required />
                                    </div>
                                    <button type="submit" className="btn btn-success w-100">Generate Report</button>
                                </form>
                            </div>
                            <div className="mt-4">
                                <h4>Visualizations</h4>
                                {/* Placeholder for graphs/charts */}
                                <p className="text-center">Here you can add graphs and charts representing your expenses.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Edit Expense Modal */}
            <div className="modal fade" id="editExpenseModal" tabIndex="-1" aria-labelledby="editExpenseModalLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="editExpenseModalLabel">Edit Expense</h5>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            <form onSubmit={(e) => { e.preventDefault(); handleUpdate(); }}>
                                <div className="mb-3">
                                    <label htmlFor="amount" className="form-label">Amount</label>
                                    <input
                                        type="number"
                                        className="form-control"
                                        id="amount"
                                        value={expenseForm.amount}
                                        onChange={handleChange}
                                        required
                                    />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="category" className="form-label">Category</label>
                                    <select
                                        className="form-select"
                                        id="category"
                                        value={expenseForm.category}
                                        onChange={handleChange}
                                        required
                                    >
                                        <option value="">Select Category</option>
                                        <option value="food">Food</option>
                                        <option value="travel">Travel</option>
                                        <option value="bills">Bills</option>
                                        <option value="entertainment">Entertainment</option>
                                    </select>
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="date" className="form-label">Date</label>
                                    <input
                                        type="date"
                                        className="form-control"
                                        id="date"
                                        value={expenseForm.date}
                                        onChange={handleChange}
                                        required
                                    />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="description" className="form-label">Description</label>
                                    <textarea
                                        className="form-control"
                                        id="description"
                                        rows="3"
                                        value={expenseForm.description}
                                        onChange={handleChange}
                                        required
                                    ></textarea>
                                </div>
                                <div className="modal-footer">
                                    {/* <button type="button" className="btn btn-secondary" data-bs-dismiss="modal" >Close</button> */}
                                    <button type="submit" className="btn btn-primary" data-bs-dismiss="modal">Save changes</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProfilePage;
