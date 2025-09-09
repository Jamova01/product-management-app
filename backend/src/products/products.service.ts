import { Injectable, NotFoundException } from '@nestjs/common';
import { Product } from '@prisma/client';
import { PrismaService } from 'src/database/prisma.service';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';

function transformProduct(
  product: Product,
): Omit<Product, 'price'> & { price: number } {
  return {
    ...product,
    price: Number(product.price),
  };
}

@Injectable()
export class ProductsService {
  constructor(private readonly prisma: PrismaService) {}

  async create(createProductDto: CreateProductDto) {
    const product = await this.prisma.product.create({
      data: createProductDto,
    });
    return transformProduct(product);
  }

  async findAll() {
    const products = await this.prisma.product.findMany();
    return products.map(transformProduct);
  }

  async findOne(id: string) {
    const product = await this.prisma.product.findUnique({
      where: { id },
    });
    if (!product) {
      throw new NotFoundException(`Product with ID ${id} not found`);
    }
    return transformProduct(product);
  }

  async update(id: string, updateProductDto: UpdateProductDto) {
    await this.findOne(id);
    const product = await this.prisma.product.update({
      where: { id },
      data: updateProductDto,
    });
    return transformProduct(product);
  }

  async remove(id: string) {
    await this.findOne(id);
    const product = await this.prisma.product.delete({
      where: { id },
    });
    return transformProduct(product);
  }
}
