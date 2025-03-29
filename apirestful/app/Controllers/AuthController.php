<?php
namespace App\Controllers;

use CodeIgniter\RESTful\ResourceController;
use App\Models\UserModel;

class AuthController extends ResourceController
{
    public function __construct()
    {
        helper('jwt_helper'); // Cargar el helper
    }

    public function login()
    {
        $model = new UserModel();
        $data = $this->request->getJSON();

        $user = $model->where('email', $data->email)->first();

        if (!$user || !password_verify($data->password, $user['password'])) {
            return $this->failUnauthorized('Credenciales inválidas');
        }

        $token = generate_jwt(['id' => $user['id'], 'email' => $user['email']]);

        return $this->respond(['token' => $token]);
    }
}