<?php
namespace App\Filters;

use CodeIgniter\HTTP\RequestInterface;
use CodeIgniter\HTTP\ResponseInterface;
use CodeIgniter\Filters\FilterInterface;
use Firebase\JWT\JWT;
use Firebase\JWT\Key;
use CodeIgniter\HTTP\Response;

class JWTAuth implements FilterInterface
{
    public function before(RequestInterface $request, $arguments = null)
    {
        helper('jwt_helper'); 

        $header = $request->getHeaderLine('Authorization');

        if (!$header) {
            return service('response')->setJSON(['error' => 'Token no proporcionado'])->setStatusCode(401);
        }

       
        $token = explode(' ', $header)[1] ?? null;

        if (!$token) {
            return service('response')->setJSON(['error' => 'Token inválido'])->setStatusCode(401);
        }

        $decoded = validate_jwt($token); 

        if (!$decoded) {
            return service('response')->setJSON(['error' => 'Token expirado o no válido'])->setStatusCode(401);
        }

       
        $request->user = $decoded->data;
    }

    public function after(RequestInterface $request, ResponseInterface $response, $arguments = null)
    {
        
    }
}