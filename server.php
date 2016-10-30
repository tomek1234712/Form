<?php 

	$to_save = '';
	foreach($_POST as $key=>$val){
		$to_save .= "{$key}: {$val}\n";
	}
	$to_save .= "\n\n";
	
	file_put_contents('data.txt', $to_save);
	
	$response = array(
		'status' => 'ok',
		'message' => 'Serwer zapisał dane. Oczekuj na kontakt administratora'
	);
	
	
	$response = array(
		'status' => 'error',
		'message' => 'Błędne dane formularza. Danie nie zostały zapisane'
	);
	
	echo json_encode($response);

?>