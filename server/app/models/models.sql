CREATE TABLE Usuarios( 
	id INT PRIMARY KEY IDENTITY,
	nombre_usuario VARCHAR(100),
	password VARCHAR(100),
	tipo_usuario VARCHAR(50) 
);

CREATE TABLE PedidoDiario (
    id INT PRIMARY KEY IDENTITY,
    fecha varchar(100),
    codigo_sap VARCHAR(50),
    farmacia VARCHAR(100),
    codigo_articulo VARCHAR(50),
    descripcion VARCHAR(255),
    pasillo VARCHAR(50),
    laboratorio VARCHAR(100),
    ubicacion VARCHAR(100),
);