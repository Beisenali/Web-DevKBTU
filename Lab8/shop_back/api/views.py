from django.http import JsonResponse, Http404
from .models import Product, Category


def products_list(request):
    products = Product.objects.all()
    data = [
        {
            "id": product.id,
            "name": product.name,
            "price": product.price,
            "description": product.description,
            "count": product.count,
            "is_active": product.is_active,
            "category": product.category.id if product.category else None,
        }
        for product in products
    ]
    return JsonResponse(data, safe=False)


def product_detail(request, id: int):
    try:
        product = Product.objects.get(pk=id)
    except Product.DoesNotExist:
        raise Http404("Product not found")

    data = {
        "id": product.id,
        "name": product.name,
        "price": product.price,
        "description": product.description,
        "count": product.count,
        "is_active": product.is_active,
        "category": product.category.id if product.category else None,
    }
    return JsonResponse(data)


def categories_list(request):
    categories = Category.objects.all()
    data = [
        {
            "id": category.id,
            "name": category.name,
        }
        for category in categories
    ]
    return JsonResponse(data, safe=False)


def category_detail(request, id: int):
    try:
        category = Category.objects.get(pk=id)
    except Category.DoesNotExist:
        raise Http404("Category not found")

    data = {
        "id": category.id,
        "name": category.name,
    }
    return JsonResponse(data)


def category_products(request, id: int):
    try:
        category = Category.objects.get(pk=id)
    except Category.DoesNotExist:
        raise Http404("Category not found")

    products = category.products.all()
    data = [
        {
            "id": product.id,
            "name": product.name,
            "price": product.price,
            "description": product.description,
            "count": product.count,
            "is_active": product.is_active,
            "category": category.id,
        }
        for product in products
    ]
    return JsonResponse(data, safe=False)
