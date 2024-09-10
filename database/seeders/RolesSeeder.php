<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class RolesSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        DB::table('roles')->insert([
            'name' => 'admin',
            'guard_name' => 'web'
        ]);
        DB::table('roles')->insert([
            'name' => 'moderator',
            'guard_name' => 'web'
        ]);
        DB::table('roles')->insert([
            'name' => 'client',
            'guard_name' => 'web'
        ]);
        DB::table('roles')->insert([
            'name' => 'lawyer',
            'guard_name' => 'web'
        ]);
    }
}
