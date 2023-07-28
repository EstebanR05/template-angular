import {OnInit} from '@angular/core';
import {Component} from '@angular/core';
import {LayoutService} from '../../service/app.layout.service';

@Component({
    selector: 'app-menu',
    templateUrl: './app.menu.component.html'
})
export class AppMenuComponent implements OnInit {

    model: any[] = [];

    constructor(public layoutService: LayoutService) {
    }

    ngOnInit() {
        this.model = [
            {
                label: 'Contabilidad',
                items: [
                    {label: 'Dashboard', icon: 'pi pi-fw pi-home', routerLink: ['/layout/dashboard']},
                    {label: 'Cuentas Contables', icon: 'pi pi-fw pi-briefcase'},
                    {label: 'Comprobantes contables', icon: 'pi pi-fw pi-sitemap'},
                    {label: 'Automatizacion', icon: 'pi pi-fw pi-upload'},
                    {label: 'Parametros', icon: 'pi pi-fw pi-chart-pie'},
                    {label: 'Contacto', icon: 'pi pi-fw pi-id-card'},
                    {
                        label: 'Reporte',
                        icon: 'pi pi-fw pi-file',
                        items: [
                            {label: 'Auxiliar cuenta terceros', icon: 'pi pi-fw pi-file-pdf'},
                            {label: 'Auxiliar cuenta', icon: 'pi pi-fw pi-file-pdf'},
                            {label: 'Balance de prueba cuenta', icon: 'pi pi-fw pi-file-pdf'},
                            {label: 'Balance de prueba tercero', icon: 'pi pi-fw pi-file-pdf'},
                            {label: 'Estado situación financiera', icon: 'pi pi-fw pi-file-pdf'},
                            {label: 'Estado del resultado integral', icon: 'pi pi-fw pi-file-pdf'},
                            {label: 'Exógena', icon: 'pi pi-fw pi-file-pdf'}
                        ]
                    }
                ]
            },
        ];
    }
}
