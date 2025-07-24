<?php
try {
    $db = new PDO('sqlite:messages.db');
    $db->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);

    $db->exec("CREATE TABLE IF NOT EXISTS messages (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        name TEXT DEFAULT 'Anônimo',
        message TEXT NOT NULL,
        created_at DATETIME DEFAULT CURRENT_TIMESTAMP
    )");

    echo "Banco criado com sucesso!";
} catch (PDOException $e) {
    echo "Erro ao criar o banco: " . $e->getMessage();
}
?>
