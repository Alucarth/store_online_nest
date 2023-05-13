import { Controller, Get, Render } from '@nestjs/common';

@Controller()
export class AppController {
  @Get('/')
  @Render('index')
  index() {
    return {
      title: 'Pagina principal - Tienda en Linea',
    };
  }

  @Get('/about')
  @Render('about')
  about() {
    const viewData = [];
    viewData['description'] = 'Esta es una pagina de Aserca de';
    viewData['author'] = 'Desarrollado por: David Torrez';
    const data1 = 'Aserca de Tienda Online';
    return {
      title: data1,
      subtile: 'Acerca de nosotros',
      viewData: viewData,
    };
  }
}
