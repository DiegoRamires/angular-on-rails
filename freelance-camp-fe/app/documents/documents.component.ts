import { Component } from "@angular/core";
import { Document } from './document';

@Component({
  moduleId: module.id,
  selector: 'documents',
  templateUrl: 'documents.component.html'
})
export class DocumentsComponent {
  pageTitle: string = "Document Dashboard"

  documents: Document[] = [
    {
      title: "My first Doc",
      description: "lorem sajdhashdalk",
      file_url: "http://google.com",
      updated_at: '04/08/18',
      image_url: "http://google.com",
    },
    {
      title: "My second Doc",
      description: "lorem sajdhashdalk",
      file_url: "http://google.com",
      updated_at: '04/08/18',
      image_url: "http://google.com",
    },
    {
      title: "My last Doc",
      description: "lorem sajdhashdalk",
      file_url: "http://google.com",
      updated_at: '04/08/18',
      image_url: "http://google.com",
    }
  ]
}