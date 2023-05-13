import { Controller, Get, Render, Param } from '@nestjs/common';
@Controller('/products')
export class ProductsController {
  static products = [
    {
      id: '1',
      name: 'TV',
      description: 'Best tv',
      image: 'game.png',
      price: '1000',
    },
    {
      id: '2',
      name: 'iPhone',
      description: 'Best iPhone',
      image: 'safe.png',
      price: '999',
    },
    {
      id: '3',
      name: 'Chromecast',
      description: 'Best Chromecast',
      image: 'submarine.png',
      price: '30',
    },
    {
      id: '4',
      name: 'Glasses',
      description: 'Best Glasses',
      image: 'game.png',
      price: '100',
    },
  ];

  @Get('/')
  @Render('products/index')
  index()
  {
    const viewData =[];
    viewData['title'] = 'Productos - Tienda Online';
    viewData['subtitle'] = 'Lista de Productos';
    viewData['products'] = ProductsController.products;
    return {
        viewData:viewData
    }
  }

  @Get('/:id')
  @Render('products/show')
  show(@Param() params){
    const product = ProductsController.products[params.id -1];
    const viewData = [];
    viewData['title'] = product.name +'- Tienda Online';
    viewData['subtitle'] =  product.name + 'Informacion del Producto';
    viewData['product'] = product
    return {
        viewData: viewData
    };
  }

}
