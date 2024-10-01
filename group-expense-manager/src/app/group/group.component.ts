import { Component } from '@angular/core';
import { GroupService } from '../services/group.service';
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
  groups:Group[]= [];
  constructor(private groupService:GroupService){

  }
  createGroup() {
    if (this.groupName) {
      this.groupService.createGroup(this.groupName, this.description);
      this.groupName = '';
      this.description = '';
      this.groups = this.groupService.getGroups();
    }
  }

}
