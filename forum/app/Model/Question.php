<?php

namespace App\Model;

use Illuminate\Database\Eloquent\Model;
use App\User;
use App\Model\Reply;
use App\Model\Category;

class Question extends Model
{

	//protected $fillable = ['title', 'slug', 'body', 'category_id', 'user_id'];
	protected $guarded = [];

	//For passing Parameter
	public function getRouteKeyName(){
		return 'slug';
	}

	//For get url. Its using in Question Resource File
	public function getPathAttribute(){
		return asset("api/question/$this->slug");
	}

    public function user(){
    	return $this->belongsTo(User::class);
    }

    public function replies(){
    	return $this->hasMany(Reply::class);
    }

    public function category(){
    	return $this->belongsTo(Category::class);
    }



}
