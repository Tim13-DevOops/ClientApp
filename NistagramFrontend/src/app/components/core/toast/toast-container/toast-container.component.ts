import { Component, OnInit, TemplateRef } from '@angular/core';
import { ToastService } from 'src/app/services/toast.service';

@Component({
  selector: 'app-toasts',
  templateUrl: './toast-container.component.html',
  styleUrls: ['./toast-container.component.css']
})
export class ToastContainerComponent implements OnInit {

  constructor(public toastService: ToastService) { }

  isTemplate(toast: any) { return toast.textOrTpl instanceof TemplateRef; }

  ngOnInit(): void {
  }

}
