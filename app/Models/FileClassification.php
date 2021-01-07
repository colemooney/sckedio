<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class FileClassification extends Model
{
    use HasFactory;
    protected $table = 'file_classifications';

    protected $fillable = [
        'file_classification'
    ];
}
