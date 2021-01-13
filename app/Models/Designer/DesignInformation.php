<?php

namespace App\Models\Designer;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class DesignInformation extends Model
{
    use HasFactory;

    protected $table = 'designs_information';

    protected $fillable = [
        'design_id',
        'category',
        'total_cost',
        'stock_type_id',
        'idea_type_id',
    ];

    public function design()
    {
        return $this->belongsTo(Design::class);
    }

    public function ideaType()
    {
        return $this->hasOne(IdeaType::class);
    }

    public function stockType()
    {
        return $this->hasOne(StockType::class);
    }
}
