import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../services/product.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-get-services',
  templateUrl: './get-services.component.html',
  styleUrls: ['./get-services.component.css']
})
export class GetServicesComponent implements OnInit {

  services: any[] = [];

  constructor(private _ser: ProductService, private _router: Router) { }

  navigateToUpdate(serviceId: number): void {
    this._router.navigate(['/dashboard/update-service', serviceId]);
  }

  ngOnInit(): void {
    this._ser.getServices().subscribe((data: any[]) => {
      this.services = data;
    }, (error: any) => {
      console.error('Error fetching services', error);
    });
  }
}
