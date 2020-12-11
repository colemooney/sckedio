<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use App\Models;

class UserInformation extends Model
{
    use HasFactory;

    protected $table = "users_information";

    protected $fillable = [
        'user_id',
        'first_name',
        'last_name',
        'state',
        'city',
        'street',
        'postal_code',
        'country'
    ];

    public function user(){
        return $this->belongsTo(User::class);
    }
}
