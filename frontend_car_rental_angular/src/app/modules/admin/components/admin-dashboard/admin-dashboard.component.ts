import { Component } from '@angular/core';
import { AdminService } from '../../services/admin.service';
import { NzMessageService } from 'ng-zorro-antd/message';

@Component({
  selector: 'app-admin-dashboard',
  templateUrl: './admin-dashboard.component.html',
  styleUrl: './admin-dashboard.component.scss'
})
export class AdminDashboardComponent {

  cars:any = [];

  constructor(private adminService: AdminService,
    private message: NzMessageService
  ) {
  }

  ngOnInit() {
    this.getAllCars();
  }

  getAllCars(){
    this.adminService.getAllCars().subscribe((res)=>{
      console.log(res);
      res.forEach((element: { processedImg: string; returnedImage: string; }) => {
        element.processedImg = 'data:image/jpeg;base64,'+element.returnedImage;
        this.cars.push(element)
      });
    });
  }

  deleteCar(id:number){
    console.log(id);
    this.adminService.deleteCar(id).subscribe((res) => {
      this.message.success("Car deleted successfully", {nzDuration:5000});
      this.getAllCars();
    })
  }

}
