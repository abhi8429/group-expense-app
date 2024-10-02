import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router'; // Import ActivatedRoute
import { ExpenseService } from '../services/expense.service';
import { AuthService } from '../services/auth.service';

interface Expense {
  description: string;
  amount: number;
  date: string;
  category: string;
}

@Component({
  selector: 'app-expense',
  templateUrl: './expense.component.html',
  styleUrls: ['./expense.component.css']
})
export class ExpenseComponent implements OnInit {

  amount: number = 0;
  description = '';
  date: string = new Date().toISOString().split('T')[0]; // Default to current date
  category = '';
  groupId!: string; // Selected group
  expenses: Expense[] = [];

  constructor(private expenseService: ExpenseService, private route: ActivatedRoute,private router:Router,private authService:AuthService) { }

  ngOnInit() {
    // Subscribe to query params to get the group name
    this.route.queryParams.subscribe(params => {
      this.groupId = params['group']; // Retrieve the group parameter
      this.loadExpenses(); // Load expenses for the group
    });
  }

  addExpense(form: any) {
    // Check if form is valid
    if (form.invalid || this.amount <= 0) {
      return; // Prevent submission if form is invalid
    }

    // Add the expense
    this.expenseService.addExpense(this.groupId, this.amount, this.description, this.date, this.category);

    // Refresh the expense list
    this.loadExpenses();

    // Reset form after successful submission
    form.resetForm();
    this.amount = 0; // Reset amount
    this.description = ''; // Reset description
    this.date = new Date().toISOString().split('T')[0]; // Reset date to current date
    this.category = ''; // Reset category
  }

  loadExpenses() {
    // Load expenses for the selected group
    if (this.groupId) {
      this.expenses = this.expenseService.getExpenses(this.groupId);
    }
  }


  logout() {
    this.authService.logout();
    this.router.navigate(['auth']); // Navigate back to the authentication page
  }
}
