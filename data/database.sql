CREATE TABLE `person` (
	`id` INT NOT NULL AUTO_INCREMENT,
	`name` varchar(255) NOT NULL,
	`phone` INT NOT NULL,
	`mail` varchar(255) NOT NULL,
	`sex` TEXT NOT NULL,
	`role` varchar(255) NOT NULL,
	`address` varchar(255) NOT NULL,
	PRIMARY KEY (`id`)
);

CREATE TABLE `inventory_person` (
	`id_person` INT NOT NULL,
	`id_inventory` INT NOT NULL,
	PRIMARY KEY (`id_person`,`id_inventory`)
);

CREATE TABLE `inventory` (
	`id` INT NOT NULL AUTO_INCREMENT,
	`name` varchar(255) NOT NULL,
	PRIMARY KEY (`id`)
);

CREATE TABLE `product` (
	`id` INT NOT NULL AUTO_INCREMENT,
	`name` varchar(255) NOT NULL,
	`brand` varchar(255) NOT NULL,
	`quantity` INT NOT NULL,
	`price` INT NOT NULL,
	PRIMARY KEY (`id`)
);

CREATE TABLE `inventory_product` (
	`id_inventory` INT NOT NULL,
	`id_product` INT NOT NULL,
	PRIMARY KEY (`id_inventory`,`id_product`)
);

ALTER TABLE `inventory_person` ADD CONSTRAINT `inventory_person_fk0` FOREIGN KEY (`id_person`) REFERENCES `person`(`id`);

ALTER TABLE `inventory_person` ADD CONSTRAINT `inventory_person_fk1` FOREIGN KEY (`id_inventory`) REFERENCES `inventory`(`id`);

ALTER TABLE `inventory_product` ADD CONSTRAINT `inventory_product_fk0` FOREIGN KEY (`id_inventory`) REFERENCES `inventory`(`id`);

ALTER TABLE `inventory_product` ADD CONSTRAINT `inventory_product_fk1` FOREIGN KEY (`id_product`) REFERENCES `product`(`id`);