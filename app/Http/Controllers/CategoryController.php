<?php

namespace App\Http\Controllers;

use App\Models\Category;
use App\Models\Products;
use Illuminate\Http\Request;

class CategoryController extends Controller
{

    public function index()
    {

        $category = Category::tree();  

        return response()->json($category, 200);
    }

}
