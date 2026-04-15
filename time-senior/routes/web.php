<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\PollController;

Route::get('/', function () {
    return view('welcome');
});

Route::get('/home', [PollController::class, 'index'])->name('home');
Route::post('/voting/start', [PollController::class, 'startVoting'])->name('voting.start');
Route::get('/voting', [PollController::class, 'voting'])->name('voting.show');
Route::post('/voting/vote', [PollController::class, 'vote'])->name('voting.vote');
