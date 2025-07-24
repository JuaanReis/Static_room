<?php
if (preg_match('/^\/message$/', $_SERVER["REQUEST_URI"])) {
    require 'index.php';
} else {
    return false; 
}
