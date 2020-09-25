<?php

namespace App\Model;

use Illuminate\Database\Eloquent\Model;
use App\Model\Question;
use App\Model\Like;
use App\User;


class Reply extends Model
{
    public function question(){
    	return $this->belongsTo(Question::class);
    }


    public function user(){
    	return $this->belongsTo(User::class);
    }

    public function likes(){
    	return $this->hasMany(Like::class);
    }
}
