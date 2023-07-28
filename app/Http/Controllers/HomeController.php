<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Database\Eloquent\Model;
use Inertia\Inertia;

class HomeController extends Model
{
    public function __invoke(Request $request)
    {
        return Inertia::render("Home/Home");
    }
}
