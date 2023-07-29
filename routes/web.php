<?php

use App\Http\Controllers\ProfileController;
// Controller
use App\Http\Controllers\GameController;
use App\Http\Controllers\TaskController;
use App\Http\Controllers\HomeController;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get("first", function () {
    return Inertia::render("Home/First");
})->name("first");

// Route::get("game", GameController::class)->name("game"); //pasge game
// Route::get("game/minigames", [GameController::class, "Minigames"]); //page minigames
// Route::get("game/minigames/eat", [GameController::class, "EatMiniGame"]); //page minigames
// Route::get("game/minigames/run", [GameController::class, "EndlessRun"]); //page minigames
// Route::get("game/wardrobe", [GameController::class, "Wardrobe"]); //page minigames

Route::get("/quest/detail/{id}", [TaskController::class, "QuestDetail"])->name(
    "quest.detail"
);

Route::get("quest", [TaskController::class, "QuestRewards"])->name("quest");

Route::get("task", TaskController::class)->name("task"); //page task

Route::middleware(["auth"])->group(function () {
    Route::middleware("auth.hasAccount")->group(function () {
        Route::get("game", GameController::class)->name("game"); //page game
        Route::get("game/minigames", [GameController::class, "Minigames"]); //page minigames
        Route::get("game/minigames/eat", [
            GameController::class,
            "EatMiniGame",
        ]); //page minigames
        Route::get("game/minigames/run", [GameController::class, "EndlessRun"]); //page minigames
        Route::get("game/wardrobe", [GameController::class, "Wardrobe"]); //page minigames
        Route::post("game/wardrobe", [
            GameController::class,
            "WardrobeStore",
        ])->name("wardrobe.update");
        Route::get("profile", ProfileController::class)->name("profile"); //page profile
        Route::get("profile/edit", [ProfileController::class, "edit"])->name(
            "profile.edit"
        ); //page profile
        Route::get("profile/delete", [
            ProfileController::class,
            "destroy",
        ])->name("profile.destroy"); //page profile
        Route::get("profile/update", [
            ProfileController::class,
            "update",
        ])->name("profile.update"); //page profile
        Route::get("profile/destroy", [
            ProfileController::class,
            "destroy",
        ])->name("profile.destroy"); //page profile
        Route::get("task", TaskController::class)->name("task"); //page task
        Route::get("quest", [TaskController::class, "QuestRewards"])->name(
            "quest"
        );
        Route::post("quest", [TaskController::class, "ReduseExp"])->name(
            "quest.reduce"
        );

        Route::get("/top-up", [TaskController::class, "TopUp"])->name("topUP");
        Route::post("/top-up", [TaskController::class, "PostTopUp"])->name(
            "topUP"
        );
    });

    // Route to handle account
    Route::controller(HomeController::class)->group(function () {
        Route::middleware("auth.hasAccount")->group(function () {
            Route::get("/", "index")->name("home");
        });
        Route::post("/", "store")->name("home.store");
        Route::prefix("/daftar-rekening")->group(function () {
            Route::get("/", "ViewCreateRekening")->name("daftarRek");
            Route::post("/", "CreateRekening")->name("daftarRek.store");
            Route::get("/select-account", "DaftarAccount")->name("daftarRek");
        });
    });

    Route::get("task", TaskController::class)->name("task"); //page task
});

// Route::get("/", function () {
//     return Inertia::render("Welcome", [
//         "canLogin" => Route::has("login"),
//         "canRegister" => Route::has("register"),
//         "laravelVersion" => Application::VERSION,
//         "phpVersion" => PHP_VERSION,
//     ]);
// });

Route::get("/dashboard", function () {
    return Inertia::render("Dashboard");
})
    ->middleware(["auth", "verified"])
    ->name("dashboard");

// Route::middleware("auth")->group(function () {
//     Route::get("/profile", [ProfileController::class, "edit"])->name(
//         "profile.edit"
//     );
//     Route::patch("/profile", [ProfileController::class, "update"])->name(
//         "profile.update"
//     );
//     Route::delete("/profile", [ProfileController::class, "destroy"])->name(
//         "profile.destroy"
//     );
// });

require __DIR__ . "/auth.php";
