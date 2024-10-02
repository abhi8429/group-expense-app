import { Injectable } from '@angular/core';

interface Expense {
  description: string;
  amount: number;
  date: string;
  category: string;
}

@Injectable({
  providedIn: 'root'
})
export class ExpenseService {
  private expenses: { [groupId: string]: Expense[] } = {};

  addExpense(groupId: string, amount: number, description: string, date: string, category: string) {
    if (!this.expenses[groupId]) {
      this.expenses[groupId] = []; // Initialize if not exists
    }
    this.expenses[groupId].push({ description, amount, date, category });
  }

  getExpenses(groupId: string): Expense[] {
    return this.expenses[groupId] || []; // Return empty array if no expenses
  }
}
