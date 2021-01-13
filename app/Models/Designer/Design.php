<?php

namespace App\Models\Designer;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use App\Models\User;

class Design extends Model
{
    use HasFactory;
    
    protected $table = 'designs';

    protected $fillable = [
        'owner_id',
        'idea_name',
    ];

    public function user()
    {
        return $this->belongsTo(User::class, 'owner_id');
    }

    public function design_information()
    {
        return $this->hasMany(DesignInformation::class);
    }
}
