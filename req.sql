COMMIT;

CREATE DATABASE IF NOT EXISTS assomanage;



CREATE TABLE IF NOT EXISTS membres (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nom VARCHAR(255) NOT NULL,
    prenoms VARCHAR(255) NOT NULL,
    surnom VARCHAR(255),
    date_naissance DATE NOT NULL,
    situation ENUM('celibataire', 'marie') NOT NULL,
    enfants INT,
    profession VARCHAR(255),
    taille DECIMAL(5,2),
    pointure DECIMAL(4,1),
    adresse VARCHAR(255),
    telephone VARCHAR(20),
    facebook VARCHAR(255),
    whatsapp VARCHAR(255),
    photo VARCHAR(255)
);

CREATE TABLE IF NOT EXISTS transactions (
    `date` DATETIME PRIMARY KEY,
    `type` VARCHAR(255) NOT NULL,
    `description` VARCHAR(255) NOT NULL,
    `montant` DECIMAL(10, 2) NOT NULL,
    `expediteur` VARCHAR(255) NOT NULL
);
ALTER TABLE transactions ADD COLUMN date_modification DATETIME DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP;
