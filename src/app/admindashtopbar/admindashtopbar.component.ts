import { TokenStorageService } from './../_services/token-storage.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-admindashtopbar',
  templateUrl: './admindashtopbar.component.html',
  styleUrls: ['./admindashtopbar.component.css']
})
export class AdmindashtopbarComponent implements OnInit {

  name

  constructor(
    private tokenStorage: TokenStorageService
  ) { }

  ngOnInit(): void {
    this.name = this.tokenStorage.getUser().username
  }

}
