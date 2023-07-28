<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Http\Response;
use Inertia\Inertia;

class TaskController extends Controller
{
    public function __invoke(Request $request)
    {
        return Inertia::render('Task/Task');
    }
}
