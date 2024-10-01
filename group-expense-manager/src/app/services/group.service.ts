import { Injectable } from '@angular/core';

interface Group {
  groupName: string;
  description: string;
}


@Injectable({
  providedIn: 'root'
})
export class GroupService {
  private groups:Group[] = [];

  constructor() { }

  createGroup(groupName: string, description: string) {
    this.groups.push({ groupName, description });
  }

  getGroups():Group[] {
    return this.groups;
  }
}
