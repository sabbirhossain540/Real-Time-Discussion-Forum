<?php

namespace App\Http\Controllers;

use App\Model\Like;
use Illuminate\Http\Request;

class LikeController extends Controller
{
    /**
     * Create a new AuthController instance.
     *
     * @return void
     */
    public function __construct()
    {
        //Default Middleware
        //$this->middleware('auth:api', ['except' => ['login', 'signup']]);

        //JWT Middleware
        $this->middleware('JWT');
    }


    public function likeIt(Reply $reply){
        $reply->like()->create([
            'user_id' => '1'
        ]);
    }


    public function unlikeIt(Reply $reply){
        $reply->like()->where(['user_id',auth()->id()])->first()->delete();
    }
}
