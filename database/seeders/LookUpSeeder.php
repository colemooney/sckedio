<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use App\Models\IdeaType;
use App\Models\FileClassification;
use App\Models\Category;

class LookUpSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        // Idea types values
        IdeaType::create(['idea_type' => 'Just an idea']);
        IdeaType::create(['idea_type' => 'A few sketches']);
        IdeaType::create(['idea_type' => 'Some detailed drawings']);
        IdeaType::create(['idea_type' => 'Factory-ready design']);
        IdeaType::create(['idea_type' => 'I\'ll make my idea myself!']);

        // File classification values
        FileClassification::create(['file_classification' => 'public']);
        FileClassification::create(['file_classification' => 'private']);

        // Category values
        Category::create(['category' => 'Fashion']);
        Category::create(['category' => 'Art']);
        Category::create(['category' => 'Technology']);
        Category::create(['category' => 'Toy']);
        Category::create(['category' => 'Other']);
    }
}
