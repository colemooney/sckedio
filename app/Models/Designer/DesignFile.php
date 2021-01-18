<?php

namespace App\Models\Designer;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use App\Models\Designer\Design;
class DesignFile extends Model
{
    use HasFactory;
    protected $table = 'design_files';
    
    protected $fillable = [
        'file_route',
        'is_private',
    ];

    public function design()
    {
        return $this->belongsTo(Design::class);
    }
}
