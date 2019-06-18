<?php

include('../models/publicidad.php');
$Objeto_publicidad = new publicidad();


$valor= $_POST['vl'];
	
if($valor==1){
	$result = $Objeto_publicidad->buscar_Evento($_POST["id"]);
		if($result==true){

			while ($fila = $Objeto_publicidad->fetch_array($result)) {
				echo $fila[0].'-'.$fila[1].'-'.$fila[2];
			}
		}else{
			echo "Error !!!";}

}else if($valor==2){	
		$id=trim($_POST['cu']);
		$titulo=trim($_POST['title']);
		$detalle=trim($_POST['detail']);

		if($id=='' || $titulo =='' || $detalle == ''){
			echo "Verificar la Información Ingresada !!!";
		}else{
			$result = $Objeto_publicidad->Editando_Evento($id,$titulo,$detalle);			
			
			if($result==true){
				echo "Se edito Correctamente";
			}else{
				echo "Error Intente de Nuevo !!!";
			}
		}
}else{
	echo "Error !!";
}

?>