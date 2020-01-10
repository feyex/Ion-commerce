import { Component, OnInit } from '@angular/core';
import { GlobalsProvider } from 'src/app/providers/core/globals';
import { SpinnerDialog } from '@ionic-native/spinner-dialog/ngx';

@Component({
  selector: 'app-tab-menu',
  templateUrl: './tab-menu.page.html',
  styleUrls: ['./tab-menu.page.scss'],
})
export class TabMenuPage implements OnInit {

  hideTabs: boolean = true;
  tabsPlacement: string = 'top';
  tabsLayout: string = 'icon-top';
  constructor(
    private globals: GlobalsProvider,
    private spinnerDialog: SpinnerDialog
  ) {
    this.globals.fullScreen = true;
    this.spinnerDialog.show();
    setTimeout(() => {
      this.spinnerDialog.hide();
    }, 5000);
  }

  ngOnInit() {
    if (!this.globals.platform.is('mobile')) {
      this.tabsPlacement = 'top';
      this.tabsLayout = 'icon-start';
      this.hideTabs = true;
      this.globals.router.navigateByUrl("overview")
    } 
  }

}
