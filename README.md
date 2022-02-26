# Proyecto _SKILLS_ 
### Primer proyecto completo desarrollado en NODE JS, EXPRESS, MONGODB.
###### Implementando operaciones basicas de un CRUD con interaccion con un usuario final.

**_Capturas del proyecto real_**

- Página principal:
![Pagina principal](/detail/cap1.jpeg "Pagina index")

- Página de editar y borrar:
![Pagina detalle](/detail/cap1.jpeg "Pagina de editar y borrar")

**_Implementaciones del proyecto_**

- Conexión a base de datos _MONGODB ATLAS_. Se accedió mediante el navegador y **NO** en local.
- Se implementó el _Schema_ de la coleccion en un _model_.
- Un controlador donde se van desarrollando los verbos GET, POST, PUT, DELETE.
- Interaccion con eventos del DOM donde se asigna el evento _click_ al boton eliminar y con `fetch()` obtener el _id_ del registro y poder eliminarlo.
- Interaccion con eventos del DOM donde se asigna el evento _submit_ del formulario y así poder actualizar el dato que necesitamos, para eso también se usó `fetch()` para obtener el _id_ del registro a actualizar. 
- Se implementó _EJS_ para inyectar codigo javascript en documento html.
- Se implementó dos vistas, una página index donde se muestran los datos en una tabla y un formulario para guardar nuevo registro. Una página _detalle_ para mostrar los datos en un formulario con opcion de eliminar o actualizar.
