<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class IdeaType extends Model
{
    use HasFactory;
    protected $table = 'idea_types';

    protected $fillable = [
        'idea_type',
    ];
}
