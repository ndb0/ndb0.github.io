<?php
              
if(isset($_POST['fname']))
{
$data=$_POST['fname'];
$fp = fopen('data.txt', 'a');
fwrite($fp, $data);
fclose($fp);
}
if(isset($_POST['lname']))
{
$data=$_POST['fname'];
$fp = fopen('data1.txt', 'a');
fwrite($fp, $data);
fclose($fp);
}
?> 
