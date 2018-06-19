import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-pessoa-filter',
  templateUrl: './pessoa-filter.component.html',
  styleUrls: ['./pessoa-filter.component.css']
})
export class PessoaFilterComponent implements OnInit {

  constructor(private route: Router) { }

  ngOnInit() {
  }

}
