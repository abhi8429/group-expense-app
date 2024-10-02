import { Component } from '@angular/core';
import { GroupService } from '../services/group.service';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

interface Group {
  groupName: string;
  description: string;
}

@Component({
  selector: 'app-group',
  templateUrl: './group.component.html',
  styleUrls: ['./group.component.css']
})
export class GroupComponent {

  groupName = '';
  description = '';
  groups: Group[] = [];

  constructor(private groupService: GroupService,private router:Router,private authService:AuthService) {}

  createGroup(form: any) {
    // Manually trigger validation by checking form validity
    if (form.invalid) {
      return;
    }

    // If valid, create group
    this.groupService.createGroup(this.groupName, this.description);
    this.groupName = '';
    this.description = '';
    this.groups = this.groupService.getGroups();
    form.resetForm();
  }

  // Navigate to Add Expense page for a particular group
  goToExpense(groupName: string) {
    // Pass the group name as a parameter while navigating to the ExpenseComponent
    this.router.navigate(['/expenses'], { queryParams: { group: groupName } });
  }


  // Logout function
  logout() {
    this.authService.logout();
    this.router.navigate(['auth']); // Navigate back to the authentication page
  }
}
