<?php
$server = "localhost";
$username = "root";
$password = "";
$dbname = "login";


$conn = mysqli_connect($server, $username, $password, $dbname);

if (mysqli_connect_errno()) {
  echo "Failed to connect to MySQL: " . mysqli_connect_error();
  exit();
}

if(isset($_POST['username'])){
  $InputUsername = $_POST['username'];
  $InputPassword = $_POST['password'];
  $sql = "INSERT INTO `registration` (`username`, `password`) VALUES ('$InputUsername', '$InputPassword')";
  echo $InputUsername;
  echo " ";
  echo $InputPassword;
  mysqli_query($conn, $sql);
}

?>