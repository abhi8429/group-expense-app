import { Component } from '@angular/core';
import { ExpenseService } from '../services/expense.service';

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
export class ExpenseComponent {

  amount = 0;
  description = '';
  date: string = new Date().toISOString().split('T')[0]; // Default to current date
  category = '';
  groupId = ''; // Selected group
  expenses:Expense[] = [];
  constructor(private expenseService:ExpenseService){

  }
  addExpense() {
    if (this.amount > 0 && this.description && this.groupId) {
      this.expenseService.addExpense(this.groupId, this.amount, this.description, this.date, this.category);
      this.expenses = this.expenseService.getExpenses(this.groupId);
    }
  }


}
