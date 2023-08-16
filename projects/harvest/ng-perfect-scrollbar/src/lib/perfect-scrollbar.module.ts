import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { ForceNativeScrollDirective } from './perfect-scrollbar-force-native-scroll.directive';
import { PerfectScrollbarComponent } from './perfect-scrollbar.component';
import { PerfectScrollbarDirective } from './perfect-scrollbar.directive';

@NgModule({
    imports: [CommonModule],
    declarations: [PerfectScrollbarComponent, PerfectScrollbarDirective, ForceNativeScrollDirective],
    exports: [CommonModule, PerfectScrollbarComponent, PerfectScrollbarDirective, ForceNativeScrollDirective],
})
export class PerfectScrollbarModule {}
