import { Component, OnInit, Input } from "@angular/core";

@Component({
  selector: "loading-spinner",
  styles:[''],
  template: `
    <ngx-loading [show]="loading" [template]="customLoadingTemplate">
    </ngx-loading>
  `
})
export class LoadingSpinnerComponent implements OnInit {
  @Input() loading = false;

  ngOnInit() {}
}