<?php

namespace App\Controllers;

use CodeIgniter\RESTful\ResourceController;
use CodeIgniter\HTTP\ResponseInterface;

class Productos extends ResourceController
{

    protected $modelName = 'App\\Models\\ProductoModel';
    protected $format    = 'json';

    public function index()
    {
        return $this->respond($this->model->findAll());
    }

    public function show($id = null)
    {
        $producto = $this->model->find($id);
        if ($producto) {
            return $this->respond($producto);
        }
        return $this->failNotFound('Producto no encontrado');
    }

    public function create()
    {
        $data = $this->request->getJSON(true);
        if ($this->model->insert($data)) {
            return $this->respondCreated($data);
        }
        return $this->failValidationErrors($this->model->errors());
    }

    public function update($id = null)
    {
        $data = $this->request->getJSON(true);
        if ($this->model->update($id, $data)) {
            return $this->respond($data);
        }
        return $this->failNotFound('Producto no encontrado');
    }

    public function delete($id = null)
    {
        if ($this->model->delete($id)) {
            return $this->respondDeleted(['id' => $id]);
        }
        return $this->failNotFound('Producto no encontrado');
    }
}
