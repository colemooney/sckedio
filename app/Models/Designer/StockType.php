<?php

namespace App\Models\Designer;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class StockType extends Model
{
    use HasFactory;
    
    protected $table = 'stock_types';

    protected $fillable = [
        'stock_type',
    ];
}
