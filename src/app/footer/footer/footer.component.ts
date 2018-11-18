import {Component} from '@angular/core';
import {ModalComponent} from '../../common/modal/modal.component';
import {MatDialog, MatDialogConfig} from '@angular/material';
import {ShippingDataServiceService} from '../../services/shipping-data-service.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css'],
  providers: [ShippingDataServiceService]

})
export class FooterComponent {

  constructor(private dialog: MatDialog, private shipping: ShippingDataServiceService) {
  }

  openDialog(title, data) {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.data = {
      title: title,
      content: '<div class="modal-content">' + data + '</div>'
    };
    this.dialog.open(ModalComponent, dialogConfig);
  }

  public getShippingData() {
    return this.shipping.getShippingContent();
  }

  public start() {
    window.open(location.origin + '/chat', 'Online chat', 'width=700,height=800,center=true,resizable=false,frame=true,transparent=false');
  }
}
