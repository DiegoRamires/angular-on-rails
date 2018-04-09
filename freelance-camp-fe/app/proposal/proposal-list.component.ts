import { Component } from '@angular/core';
import { Proposal } from './proposal';

@Component({
  moduleId: module.id,
  selector: 'proposal-list',
  templateUrl: 'proposal-list.component.html'
})
export class ProposalListComponent {
  proposalOne: Proposal = new Proposal(15, 'ABC Company', 'http://dgportfolio.com', 'Ruby on Rails', 150, 120, 15, 'diego@teste.com')
  proposalTwo: Proposal = new Proposal(99, 'XYZ Company', 'http://dgportfolio.com', 'Ruby on Rails', 150, 120, 15, 'diego@teste.com')
  proposalThree: Proposal = new Proposal(300, 'ZZZ Company', 'http://dgportfolio.com', 'Ruby on Rails', 150, 120, 15, 'diego@teste.com')

  proposals: Proposal[] = [
    this.proposalOne,
    this.proposalTwo,
    this.proposalThree
  ]
}
