<?php

Route::auth();

Route::get('/', [
    'uses' => 'HomeController@index',
    'as' => 'index'
]);