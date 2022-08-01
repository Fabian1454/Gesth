CREATE DATABASE gesth;

USE gesth;

CREATE TABLE users (
    id INT(11) NOT NULL AUTO_INCREMENT PRIMARY KEY,
    tipo_documento bigint,
    numero_documento INT(15),
    correo VARCHAR(30),
    contrasena VARCHAR(30),
    confirmacion_contrasena VARCHAR(30),
    primer_nombre VARCHAR(30),
    segundo_nombre VARCHAR(30),
    primer_apellido VARCHAR(30),
    segundo_apellido VARCHAR(30),
    fecha_nacimiento, TIMESTAMP,
    sexo VARCHAR(10),
    telefono INT(10),
    pais VARCHAR(20),
    departamento VARCHAR(20),
    municipio VARCHAR(20),
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    deleted_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

DESCRIBE gesth;