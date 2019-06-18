<?php
    session_start();
if(empty($_SESSION['loggedin'])) 
{   header("location: index.php/../..");    }  
include_once('assets/models/simpatizantes.php');
$Objeto_simpatizantes = new simpatizantes();
$result = $Objeto_simpatizantes->lista();
?>
<!DOCTYPE html>
<html lang="es">
<head>
    <title>Estudiantes</title>
  <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <link rel="Shortcut Icon" type="image/x-icon" href="assets/icons/book.ico" />
    <script src="js/sweet-alert.min.js"></script>
    <link rel="stylesheet" href="css/sweet-alert.css">
    <link rel="stylesheet" href="css/material-design-iconic-font.min.css">
    <link rel="stylesheet" href="css/normalize.css">
    <link rel="stylesheet" href="css/bootstrap.min.css">
    <link rel="stylesheet" href="css/jquery.mCustomScrollbar.css">
    <link rel="stylesheet" href="css/style.css">
    <script src="//ajax.googleapis.com/ajax/libs/jquery/1.11.2/jquery.min.js"></script>
    <script>window.jQuery || document.write('<script src="js/jquery-1.11.2.min.js"><\/script>')</script>
    <script src="js/modernizr.js"></script>
    <script src="js/bootstrap.min.js"></script>
    <script src="js/jquery.mCustomScrollbar.concat.min.js"></script>
    <script src="js/main.js"></script>
</head>
<body>
    
<?php
include('menu.php');
?>
    <div class="content-page-container full-reset custom-scroll-containers">
        <nav class="navbar-user-top full-reset">
            <ul class="list-unstyled full-reset">
                <figure>
                   <img src="assets/img/user01.png" alt="user-picture" class="img-responsive img-circle center-box">
                </figure>
                <li style="color:#fff; cursor:default;">
                    <span class="all-tittles">Admin Name</span>
                </li>
                <li  class="tooltips-general exit-system-button" data-href="index.html" data-placement="bottom" title="Salir del sistema">
                    <i class="zmdi zmdi-power"></i>
                </li>
                <li  class="tooltips-general search-book-button" data-href="searchbook.html" data-placement="bottom" title="Buscar libro">
                    <i class="zmdi zmdi-search"></i>
                </li>
                <li  class="tooltips-general btn-help" data-placement="bottom" title="Ayuda">
                    <i class="zmdi zmdi-help-outline zmdi-hc-fw"></i>
                </li>
                <li class="mobile-menu-button visible-xs" style="float: left !important;">
                    <i class="zmdi zmdi-menu"></i>
                </li>
            </ul>
        </nav>

       

        <div class="container-fluid">
            <div class="container-flat-form">
                <div class="title-flat-form title-flat-blue">Lista de Simpatizantes</div>
                <form autocomplete="off">                
<table class="table table-bordered">
              <thead>
                <tr>
                  <th WIDTH="">N°</th>
                  <th WIDTH="">Nombre Completo</th>
                  <th WIDTH="">Telefono</th>
                  <th  WIDTH="">E-mail</th>
                  <th  WIDTH="">Cometario</th>
                  <th WIDTH=""> Fecha - Registro</th>
                  <th WIDTH=""> Eliminar</th>
                </tr>
            </thead>
<?php while ($fila = $Objeto_simpatizantes->fetch_array($result)){ ?>
                <tr>
                  <th WIDTH=""></th>
                  <th WIDTH=""><?php echo utf8_encode($fila[1]); ?></th>
                  <th WIDTH=""><?php echo $fila[2]; ?></th>
                  <th  WIDTH=""><?php echo $fila[3]; ?></th>
                  <th  WIDTH=""><?php echo utf8_encode($fila[4]); ?></th>
                  <th WIDTH=""><?php echo $fila[5]; ?></th>
                  <th WIDTH=""> 
<?php echo '<a href="javascript:delete_('.$fila['id'].');"><img src="assets/icons/icons8_Delete_1.ico " title="Eliminar"> </a>' ?>
                  </th>
                </tr>
<?php } ?>
            <tbody></tbody>
            </table>
                </form>
            </div>
        </div>                
    </div>
</body>
</html>
<script type="text/javascript">
  

  function delete_($id){
//alert('see');
        var mensaje = confirm("Desea Eliminar la publicación");
        if(mensaje){
            var parametros = {
                    'id' : $id,
                };
            $.ajax({
                url:"assets/dt/registro_delete.php",                
                type:"POST",
                data: parametros,
                success: function(data){            
                alert(data);
location.reload();
//                load(); 
               }
            });
        }else{alert("Haz denegado la Eliminación !!!");} 
}

</script>