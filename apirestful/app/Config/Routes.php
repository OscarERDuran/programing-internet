<?php

use CodeIgniter\Router\RouteCollection;

/**
 * @var RouteCollection $routes
 */
$routes->get('/', 'Home::index');


$routes->post('login', 'AuthController::login');
$routes->resource('productos', ['filter' => 'jwt']); 
$routes->resource('clientes', ['filter' => 'jwt']); 
$routes->resource('pedidos', ['filter' => 'jwt']);  