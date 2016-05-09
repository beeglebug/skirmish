<?php

namespace App\Console\Commands;

use Illuminate\Console\Command;

class Setup extends Command
{
    protected $signature = 'setup';

    protected $description = 'Setup';

    public function handle()
    {
        $this->call('migrate:refresh');
        $this->call('db:seed');
    }
}
