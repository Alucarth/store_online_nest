import { Controller, Get, Render, Param, Res } from '@nestjs/common';
import { response } from 'express';
import { ProductsService } from './models/products.service';
@Controller('/products')
export class ProductsController {
  constructor(private readonly productsService: ProductsService){}
 
  @Get('/')
  @Render('products/index')
  async index()
  {
    const viewData =[];
    viewData['title'] = 'Productos - Tienda Online';
    viewData['subtitle'] = 'Lista de Productos';
    // viewData['products'] = ProductsController.products;
    viewData['products'] = await this.productsService.findAll();
    return {
        viewData:viewData
    }
  }

  @Get('/:id')
  // @Render('products/show')
  async show(@Param() params,@Res() response){
    // const product = ProductsController.products[params.id -1];
    console.log('hasta aqui ok')
    const product = await this.productsService.findOne(params.id);
    console.log(product)
    if (product === null) {
      return response.redirect('/products');
    }

    const viewData = [];
    viewData['title'] = product.getName() +'- Tienda Online';
    viewData['subtitle'] =  product.getName() + 'Informacion del Producto';
    viewData['product'] = product;
    // return {
    //     viewData: viewData
    // };
    return response.render('products/show',{ viewData: viewData});
  }

}
