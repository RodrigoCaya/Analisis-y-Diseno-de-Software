$(document).ready(function() {
        $.ajax({				
            type: "GET",
            url: "http://localhost:8000/v1/consulta/getAll",
            success: function(data) {
                console.log("consulta");
                for (let i = 0; i < data.length; i++){    
                    $("#consultas").append('                                                     \
                    <div class="card" style="width: 18rem;">                                                       \
                        <div class="card-body">                                              \
                            <h5 class="card-title">Consulta '+data[i].titulo+' Hecha por el usuario de ID '+data[i].cliente+'</h5>         \
                            <h6 class="card-subtitle mb-2 text-muted">Categoria: '+ data[i].categoria +'</h6>    \
                            <p class="card-text">Descripción: '+ data[i].descripcion +'</p>    \
                            <a href="#" class="btn btn-success text-light">Aceptar Consulta</a>                            \
                            <a href="#" class="btn btn-danger text-light">Another link</a>                         \
                        </div>                                                               \
                    </div>                                                                   \
                ');    
                }
            },
            error: function() {
                console.log("No se ha podido obtener la información");
            }
        });
});

