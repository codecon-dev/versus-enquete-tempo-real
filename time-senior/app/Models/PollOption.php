<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class PollOption extends Model
{

    protected $table = 'poll_options';


    public function poll()
    {
        return $this->belongsTo(Poll::class);
    }

    public function votes()
    {
        return $this->hasMany(PollOptionUser::class, 'poll_option_id');
    }

    public function users()
    {
        return $this->belongsToMany(User::class, 'poll_option_users', 'poll_option_id', 'user_id');
    }
}
