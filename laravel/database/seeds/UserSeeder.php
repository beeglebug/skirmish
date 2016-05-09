<?php

use App\User;
use Illuminate\Database\Seeder;

class UserSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $users = [
            [
                'name' => 'Test User 1',
                'email' => 'test1@example.com',
                'password' => bcrypt('password')
            ],
            [
                'name' => 'Test User 2',
                'email' => 'test2@example.com',
                'password' => bcrypt('password')
            ]
        ];

        foreach($users as $user) {
            User::create($user);
        }
    }
}
