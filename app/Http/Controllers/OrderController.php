<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Order;
use Validator;

class OrderController extends Controller
{
    public function index(){

        return response()->json(Order::get(), 200);
    }

    public function create(Request $request){

        $user = $request->email;
        $cart = $request->cart;

        foreach($cart as $item){
            Order::create([
               'name' => $item['name'],
               'category' => $item['category']['title'],
               'qty' => $item['qty'],
               'price' => $item['price'],
               'email' => $user,
            ]);
        }

        return response()->json(Order::get(), 201);

    }
    
}
