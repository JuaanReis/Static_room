<?php
$path = parse_url($_SERVER["REQUEST_URI"], PHP_URL_PATH);

if ($_SERVER['REQUEST_METHOD'] === 'POST' && $path === '/message') {
    $body = file_get_contents('php://input');
    $data = json_decode($body, true);

    error_log("Body received: " . $body);

    $message = trim($data['message'] ?? '');
    $name = trim($data['name'] ?? 'Anônimo');

    if ($message === '') {
        http_response_code(400);
        echo json_encode(["error" => "Message empty"]);
        exit;
    }

    $name = str_replace('|||', '', $name);
    $message = str_replace('|||', '', $message);

    file_put_contents("messages.txt", "$name|||$message\n", FILE_APPEND | LOCK_EX);

    echo json_encode(["status" => "ok"]);
    exit;
}

if (file_exists(__DIR__ . $path) && !is_dir(__DIR__ . $path)) {
    return false; 
}

switch($path) {
    case '/':
        include 'template/index.html';
        break;
    case '/NotFound':
        include 'template/p81s5_St5.html';
        break;
    default:
        http_response_code(404);
        echo "Page not found";
        break;
}
?>
