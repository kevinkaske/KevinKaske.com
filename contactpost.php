<?php
@extract($_POST);
$name = stripslashes($name);
$email = stripslashes($email);
$text = stripslashes($text);
mail("kevinkaske@gmail.com","kevinkaske.com feedback from $name",$text,"From: $name <$email>");
header("location:contactfinished.html");
?>