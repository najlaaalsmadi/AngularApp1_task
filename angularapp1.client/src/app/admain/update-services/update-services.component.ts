import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductService } from '../../services/product.service';

// Define the ServiceData interface to structure the service data
interface ServiceData {
  serviceName: string;
  serviceDescription: string;
  // Add other fields as needed
}

@Component({
  selector: 'app-update-services',
  templateUrl: './update-services.component.html',
  styleUrls: ['./update-services.component.css']
})
export class UpdateServicesComponent implements OnInit {
  serviceId!: number;  // Declare serviceId to store the id of the service
  serviceData: ServiceData = { serviceName: '', serviceDescription: '' };  // Initialize serviceData with the expected structure
  imageFile: any;  // To store the selected image file

  constructor(
    private route: ActivatedRoute,  // To fetch parameters from the route
    private _ser: ProductService,   // Injecting the ProductService to make HTTP requests
    private router: Router          // Injecting Router for navigation
  ) { }

  ngOnInit(): void {
    // Fetch serviceId from the route parameters
    this.serviceId = +this.route.snapshot.paramMap.get('serviceId')!;

    // Fetch service data by id
    this._ser.getServiceById(this.serviceId).subscribe(
      (data: ServiceData) => {
        this.serviceData = data;  // Assign fetched data to serviceData
      },
      (error: any) => {
        console.error('Error fetching service data', error);  // Log error if data fetching fails
      }
    );
  }

  // Method to handle image file change
  changeImage(event: any): void {
    this.imageFile = event.target.files[0];  // Store the selected image file
  }

  // Method to update the service
  updateService(): void {
    const formData = new FormData();  // Create a new FormData object to handle form data
    formData.append('serviceName', this.serviceData.serviceName);  // Append the service name
    formData.append('serviceDescription', this.serviceData.serviceDescription);  // Append the service description

    // If an image is selected, append it to the form data
    if (this.imageFile) {
      formData.append('ServiceImage', this.imageFile);
    }

    // Make the service update request
    this._ser.updateService(this.serviceId, formData).subscribe(
      () => {
        console.log('Service updated successfully');
        this.router.navigate(['/dashboard/get-services']);  // Redirect after a successful update
      },
      (error: any) => {
        console.error('Error updating service', error);  // Log error if update fails
      }
    );
  }
}
