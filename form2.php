<?php
error_reporting(0);
include('conn2.php');
if(isset($_REQUEST['submit']))
{
	$name=$_REQUEST['name'];
	$email=$_REQUEST['email'];
	$feedback=$_REQUEST['feedback'];

	$sq="insert into reg (name,email,feedback) values ('$name','$email','$feedback')";
	$res=$conn2->query($sq);

	if($res){
		?>
        <script type="text/javascript">
            alert('insert sucess');
        </script>
        <?php
	}
	else{
		echo "ins not sucess";
	}

}
?>

<!DOCTYPE html>
<html>
<head>
	<title></title>
</head>
<body>
	<form action="" method="POST">
		<table border="2" align="center">
			<tr>
				<td>Name</td>
				<td><input type="text" name="name"></td>
			</tr>
			<tr>
				<td>Email</td>
				<td><input type="email" name="email"></td>
			</tr>
			<tr>
				<td>Feedback</td>
				<td><input type="text" name="feedback"></td>
			</tr>
			<tr>
				<td>
					<input type="submit" name="submit" value="submit">
				</td>
			</tr>
		</table>
	</form>
</body>
</html>