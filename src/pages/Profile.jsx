import React, { useState, useEffect } from 'react';
import ExpenseData from '../ExpenseData';
import ExpenseChart from '../components/ExpenseChart';

const ProfilePage = () => {
    const [expenses, setExpenses] = useState(ExpenseData);
    const [monthlyTotal, setMonthlyTotal] = useState(0);
    const [expenseForm, setExpenseForm] = useState({
        amount: '',
        category: '',
        date: '',
        description: ''
    });

    // Separate temporary budget state for input handling
    const [tempBudget, setTempBudget] = useState({
        food: 0,
        travel: 0,
        bills: 0,
        entertainment: 0,
        other: 0
    });

    const [totalBudget, setTotalBudget] = useState(0);
    const [isEditMode, setIsEditMode] = useState(false);
    const [currentEditIndex, setCurrentEditIndex] = useState(null);

    // Calculate total monthly expenses whenever expenses change
    useEffect(() => {
        const total = expenses.reduce((sum, expense) => sum + parseFloat(expense.amount || 0), 0);
        setMonthlyTotal(total);
    }, [expenses]);

    // Handle changes for expense form
    const handleChange = (e) => {
        const { id, value } = e.target;
        setExpenseForm((prevData) => ({
            ...prevData,
            [id]: value
        }));
    };

    // Handle changes for budget input
    const handleBudgetChange = (e) => {
        const { name, value } = e.target;
        setTempBudget((prevBudget) => ({
            ...prevBudget,
            [name]: value
        }));
    };

    // Handle expense form submission
    const handleSubmit = (e) => {
        e.preventDefault();
        if (isEditMode) {
            setExpenses((prev) => {
                const updatedExpenses = [...prev];
                updatedExpenses[currentEditIndex] = expenseForm; // Update the selected expense
                return updatedExpenses;
            });
        } else {
            setExpenses((prev) => [...prev, expenseForm]); // Add new expense
        }
        resetForm(); // Reset form after submission
        window.alert("Expense updated successfully!");
    };

    // Reset form fields
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

    // Handle editing an expense
    const handleEditClick = (index) => {
        const expenseToEdit = expenses[index];
        setExpenseForm(expenseToEdit); // Set the selected expense data to the form
        setIsEditMode(true);
        setCurrentEditIndex(index);
    };

    // Handle deleting an expense
    const handleDelete = (index) => {
        setExpenses((prev) => prev.filter((_, i) => i !== index)); // Remove selected expense
    };

    // Handle saving budget
    const handleSaveBudget = (e) => {
        e.preventDefault();
        // Update total budget only when saving
        const total = Object.values(tempBudget).reduce((sum, value) => sum + parseFloat(value), 0);
        setTotalBudget(total);
        console.log("Budget saved:", tempBudget);
        // Optionally, reset the temporary budget after saving
        setTempBudget({
            food: 0,
            travel: 0,
            bills: 0,
            entertainment: 0,
            other: 0
        });
        setIsEditMode(false);
    };

    // Calculate remaining budget
    const remainingBudget = totalBudget - monthlyTotal;

    return (
        <div>
            <header className="hero text-center py-4">
                <div className="container">
                    <h2 className="text-center my-3">Welcome, [Username]</h2>
                    <p className="lead">Manage your expenses and track your budget!</p>
                </div>
            </header>
            <section>
                <div className="container">
                    {/* Budget Summary */}
                    <div className="row text-center my-5">
                        <div className="col-12 col-sm-6 col-md-4 mb-3">
                            <h4 className="text-success bg-success-subtle rounded p-2">Total Monthly Expenses: ₹{monthlyTotal}</h4>
                        </div>
                        <div className="col-12 col-sm-6 col-md-4 mb-3">
                            <h4 className="text-primary bg-primary-subtle rounded p-2">Total Budget: ₹{totalBudget}</h4>
                        </div>
                        <div className="col-12 col-sm-6 col-md-4 mb-3">
                            <h4 className="text-danger bg-danger-subtle rounded p-2">Remaining Budget: ₹{remainingBudget}</h4>
                        </div>
                    </div>


                    <ul className="nav nav-tabs justify-content-center" id="myTab" role="tablist">
                        <li className="nav-item" role="presentation">
                            <a className="nav-link active" id="budget-tab" data-bs-toggle="tab" href="#budget" role="tab" aria-controls="budget" aria-selected="true">Manage Budget</a>
                        </li>
                        <li className="nav-item" role="presentation">
                            <a className="nav-link" id="add-expense-tab" data-bs-toggle="tab" href="#add-expense" role="tab" aria-controls="add-expense" aria-selected="false">Add Expense</a>
                        </li>
                        <li className="nav-item" role="presentation">
                            <a className="nav-link" id="track-expense-tab" data-bs-toggle="tab" href="#track-expense" role="tab" aria-controls="track-expense" aria-selected="false">Track Expense</a>
                        </li>
                        <li className="nav-item" role="presentation">
                            <a className="nav-link" id="reports-tab" data-bs-toggle="tab" href="#reports" role="tab" aria-controls="reports" aria-selected="false">Monthly Reports</a>
                        </li>
                    </ul>

                    <div className="tab-content mt-3" id="myTabContent">
                        {/* Manage Budget Tab */}
                        <div className="tab-pane fade show active" id="budget" role="tabpanel" aria-labelledby="budget-tab">
                            <h3 className="text-center">Budget Management</h3>
                            <form onSubmit={handleSaveBudget}>
                                <div className="row">
                                    <div className="col-12 col-sm-6 col-md-4 mb-3">
                                        <label htmlFor="food" className="form-label">Food</label>
                                        <input
                                            type="number"
                                            className="form-control"
                                            name="food"
                                            value={tempBudget.food}
                                            onChange={handleBudgetChange}
                                            required
                                        />
                                    </div>
                                    <div className="col-12 col-sm-6 col-md-4 mb-3">
                                        <label htmlFor="travel" className="form-label">Travel</label>
                                        <input
                                            type="number"
                                            className="form-control"
                                            name="travel"
                                            value={tempBudget.travel}
                                            onChange={handleBudgetChange}
                                            required
                                        />
                                    </div>
                                    <div className="col-12 col-sm-6 col-md-4 mb-3">
                                        <label htmlFor="bills" className="form-label">Bills</label>
                                        <input
                                            type="number"
                                            className="form-control"
                                            name="bills"
                                            value={tempBudget.bills}
                                            onChange={handleBudgetChange}
                                            required
                                        />
                                    </div>
                                    <div className="col-12 col-sm-6 col-md-4 mb-3">
                                        <label htmlFor="entertainment" className="form-label">Entertainment</label>
                                        <input
                                            type="number"
                                            className="form-control"
                                            name="entertainment"
                                            value={tempBudget.entertainment}
                                            onChange={handleBudgetChange}
                                            required
                                        />
                                    </div>
                                    <div className="col-12 col-sm-6 col-md-4 mb-3">
                                        <label htmlFor="other" className="form-label">Other</label>
                                        <input
                                            type="number"
                                            className="form-control"
                                            name="other"
                                            value={tempBudget.other}
                                            onChange={handleBudgetChange}
                                        />
                                    </div>
                                </div>
                                <button type="submit" className="btn btn-primary w-100">
                                    Save Budget
                                </button>
                            </form>
                        </div>


                        {/* Add Expense Tab */}
                        <div className="tab-pane fade" id="add-expense" role="tabpanel" aria-labelledby="add-expense-tab">
                            <h3 className="text-center">Add a New Expense</h3>
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
                                        <input
                                            type="text"
                                            className="form-control"
                                            id="category"
                                            value={expenseForm.category}
                                            onChange={handleChange}
                                            required
                                        />
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
                                    <div className="col-md-12 mb-3">
                                        <label htmlFor="description" className="form-label">Description</label>
                                        <textarea
                                            className="form-control"
                                            id="description"
                                            value={expenseForm.description}
                                            onChange={handleChange}
                                            required
                                        ></textarea>
                                    </div>
                                </div>
                                <button type="submit" className="btn btn-success w-100">
                                    {isEditMode ? 'Update Expense' : 'Add Expense'}
                                </button>
                            </form>
                        </div>

                        {/* Track Expense Tab */}
                        <div className="tab-pane fade" id="track-expense" role="tabpanel" aria-labelledby="track-expense-tab">
                            <h3 className="text-center">Track Your Expenses</h3>
                            <div className="table-responsive">
                                <table className="table table-striped">
                                    <thead>
                                        <tr>
                                            <th>Amount</th>
                                            <th>Category</th>
                                            <th>Date</th>
                                            <th>Description</th>
                                            <th>Actions</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {expenses.map((expense, index) => (
                                            <tr key={index}>
                                                <td>₹{expense.amount}</td>
                                                <td>{expense.category}</td>
                                                <td>{new Date(expense.date).toLocaleDateString()}</td>
                                                <td>{expense.description}</td>
                                                <td>
                                                    <button onClick={() => handleEditClick(index)} className="btn btn-warning me-2 my-2" type="button" data-bs-toggle="modal" data-bs-target="#staticBackdrop">Edit</button>
                                                    <button className="btn btn-danger my-2" onClick={() => handleDelete(index)}>Delete</button>
                                                </td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                        </div>


                        {/* Monthly Reports Tab */}
                        <div className="tab-pane fade" id="reports" role="tabpanel" aria-labelledby="reports-tab">
                            <h3 className="text-center">Monthly Reports</h3>
                            <ExpenseChart />
                        </div>
                    </div>
                </div>
            </section>

            {/* Modal for Editing Expense */}
            <div className="modal fade" id="editExpenseModal" tabIndex="-1" aria-labelledby="editExpenseModalLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="editExpenseModalLabel">Edit Expense</h5>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" onClick={resetForm}></button>
                        </div>
                        <div className="modal-body">
                            <form onSubmit={handleSubmit}>
                                <div className="row">
                                    <div className="col-md-4 mb-3">
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
                                    <div className="col-md-4 mb-3">
                                        <label htmlFor="category" className="form-label">Category</label>
                                        <input
                                            type="text"
                                            className="form-control"
                                            id="category"
                                            value={expenseForm.category}
                                            onChange={handleChange}
                                            required
                                        />
                                    </div>
                                    <div className="col-md-4 mb-3">
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
                                    <div className="col-md-12 mb-3">
                                        <label htmlFor="description" className="form-label">Description</label>
                                        <textarea
                                            className="form-control"
                                            id="description"
                                            value={expenseForm.description}
                                            onChange={handleChange}
                                            required
                                        ></textarea>
                                    </div>
                                </div>
                                <button type="submit" className="btn btn-success w-100">
                                    Update Expense
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
            <>
                {/* Edit Modal */}
                <div
                    className="modal fade modal-lg"
                    id="staticBackdrop"
                    data-bs-backdrop="static"
                    data-bs-keyboard="false"
                    tabIndex={-1}
                    aria-labelledby="staticBackdropLabel"
                    aria-hidden="true"
                >
                    <div className="modal-dialog">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h1 className="modal-title fs-5" id="staticBackdropLabel">
                                    Modal title
                                </h1>
                                <button
                                    type="button"
                                    className="btn-close"
                                    data-bs-dismiss="modal"
                                    aria-label="Close"
                                />
                            </div>
                            <div className="modal-body">

                                <form onSubmit={handleSubmit}>
                                    <div className="row">
                                        <div className="col-md-4 mb-3">
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
                                        <div className="col-md-4 mb-3">
                                            <label htmlFor="category" className="form-label">Category</label>
                                            <input
                                                type="text"
                                                className="form-control"
                                                id="category"
                                                value={expenseForm.category}
                                                onChange={handleChange}
                                                required
                                            />
                                        </div>
                                        <div className="col-md-4 mb-3">
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
                                        <div className="col-md-12 mb-3">
                                            <label htmlFor="description" className="form-label">Description</label>
                                            <textarea
                                                className="form-control"
                                                id="description"
                                                value={expenseForm.description}
                                                onChange={handleChange}
                                                required
                                            ></textarea>
                                        </div>
                                    </div>
                                    <button type="submit" className="btn btn-success w-100" data-bs-dismiss="modal">
                                        Update Expense
                                    </button>
                                </form>
                            </div>
                            <div className="modal-footer">
                                <button
                                    type="button"
                                    className="btn btn-secondary"
                                    data-bs-dismiss="modal"
                                >
                                    Close
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </>

        </div>
    );
};

export default ProfilePage;
