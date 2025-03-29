<?php
use Firebase\JWT\JWT;
use Firebase\JWT\Key;

if (!function_exists('generate_jwt')) {
    function generate_jwt($data)
    {
        $key = getenv('JWT_SECRET'); 
        $payload = [
            'iat' => time(),
            'exp' => time() + 3600, 
            'data' => $data
        ];
        return JWT::encode($payload, $key, 'HS256');
    }
}

if (!function_exists('validate_jwt')) {
    function validate_jwt($token)
    {
        $key = getenv('JWT_SECRET');
        try {
            return JWT::decode($token, new Key($key, 'HS256'));
        } catch (Exception $e) {
            return null;
        }
    }
}