import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ValueService } from '../value.service';

@Component({
  selector: 'app-ajout',
  templateUrl: './ajout.component.html',
  styleUrls: ['./ajout.component.css']
})
export class AjoutComponent implements OnInit {

  


  constructor(private route: ActivatedRoute, private service: ValueService) { }


  ngOnInit(): void {
  
  }

}

