import { Injectable } from '@angular/core';
interface Expense {
  amount: number;
  description: string;
  date: string;
  category: string;
}

@Injectable({
  providedIn: 'root'
})
export class ExpenseService {
  private expenses: { [groupId: string]: Expense[] } = {};
  constructor() { }
  addExpense(groupId: string, amount: number, description: string, date: string, category: string) {
    if (!this.expenses[groupId]) {
      this.expenses[groupId] = [];
    }
    this.expenses[groupId].push({ amount, description, date, category });
  }

  getExpenses(groupId: string) {
    return this.expenses[groupId] || [];
  }
}
