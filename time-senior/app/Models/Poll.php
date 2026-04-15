<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Poll extends Model
{
    protected $table = 'polls';

    public function options()
    {
        return $this->hasMany(PollOption::class);
    }
   
}
