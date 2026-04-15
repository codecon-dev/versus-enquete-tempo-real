<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Poll;
use App\Models\PollOptionUser;
use App\Models\User;

class PollController extends Controller
{
    public function index() {
        return view('home');
    }

    public function startVoting(Request $request) {
        
        $request->validate([
            'email' => 'required|email'
        ]);

        $user = User::firstOrCreate(
            ['email' => $request->input('email')],
            ['name' => explode('@', $request->input('email'))[0]]
        );
        
        return redirect()->route('voting.show', ['email' => $user->email]);
    }

    public function voting(Request $request) {
        $email = $request->query('email');
        
        $poll = Poll::with(['options' => function($query) {
            $query->withCount('votes');
        }])->find(1);
        
        return view('voting', ['poll' => $poll, 'email' => $email]);
    }

    public function vote(Request $request) {
        $user = User::where('email', $request->input('email'))->first();
        
        if (!$user)
            return redirect()->route('home')->with('error', 'Usuário não encontrado');
        

        $existingVote = PollOptionUser::where('poll_id', $request->input('poll_id'))->where('user_id', $user->id)->first();

        if ($existingVote)
            return redirect()->route('voting.show', ['email' => $user->email])->with('error', 'Você já votou nesta enquete!');
        
        PollOptionUser::create([
            'poll_id' => $request->input('poll_id'),
            'poll_option_id' => $request->input('poll_option_id'),
            'user_id' => $user->id
        ]);

        return redirect()->route('voting.show', ['email' => $user->email])->with('success', 'Voto registrado com sucesso!');
    }
}
