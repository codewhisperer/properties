
CREATE TABLE IF NOT EXISTS `direct_debit` (
  `direct_debit_id` int(11) NOT NULL,
  `lease_id` int(11) NOT NULL,
  `name` varchar(500) NOT NULL,
  `sort_code` bigint(20) NOT NULL,
  `bank` varchar(100) NOT NULL,
  `account_number` varchar(100) NOT NULL,
  `iban` varchar(50) DEFAULT NULL,
  `bic` varchar(50) DEFAULT NULL,
  PRIMARY KEY (`direct_debit_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

CREATE TABLE IF NOT EXISTS `user` (
  `user_id` int(11) NOT NULL AUTO_INCREMENT,
  `user_name` varchar(30) NOT NULL DEFAULT '',
  `password` varchar(32) NOT NULL DEFAULT '',
  `sessionID` varchar(32) DEFAULT NULL,
  `email` varchar(150) NOT NULL DEFAULT '',
  PRIMARY KEY (`user_id`),
  UNIQUE KEY `username` (`username`),
  UNIQUE KEY `email` (`email`)
) ENGINE=InnoDB  DEFAULT CHARSET=utf8;

CREATE TABLE IF NOT EXISTS `utility_bill` (
  `utility_bill_id` int(11) NOT NULL,
  `buildung_id` int(11) NOT NULL,
  `month` varchar(50) NOT NULL,
  `year` int(11) NOT NULL,
  `amount` decimal(10,2) NOT NULL,
  PRIMARY KEY (`utility_bill_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

CREATE TABLE IF NOT EXISTS `building` (
  `building_id` int(11) NOT NULL AUTO_INCREMENT,
  `address` varchar(150) NOT NULL,
  `owner` varchar(100) NOT NULL,
  `bank` varchar(100) NOT NULL,
  `bank_account_number` varchar(100) NOT NULL,
  `bank_sort_Code` bigint(20) NOT NULL,
  `vat_number` varchar(20) DEFAULT NULL,
  `post_code` varchar(50) DEFAULT NULL,
  `city` varchar(50) DEFAULT NULL,
  `fixed_utility_rate` decimal(10,2) NOT NULL DEFAULT '0.00',
  PRIMARY KEY (`building_id`)
) ENGINE=InnoDB  DEFAULT CHARSET=utf8;

CREATE TABLE IF NOT EXISTS `tenant` (
  `tenant_id` int(11) NOT NULL AUTO_INCREMENT,
  `title` varchar(100) DEFAULT NULL,
  `firstname` varchar(100) NOT NULL,
  `last_name` varchar(100) NOT NULL,
  `email` varchar(100) DEFAULT NULL,
  `phone` varchar(255) DEFAULT NULL,
  `description` text,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB  DEFAULT CHARSET=utf8;

CREATE TABLE IF NOT EXISTS `lease` (
  `lease_id` int(11) NOT NULL,
  `flat` int(11) NOT NULL,
  `tax_rate` decimal(10,2) NOT NULL,
  `rent` decimal(10,2) NOT NULL,
  `zahlung` varchar(100) NOT NULL,
  `base_month` varchar(100) NULL DEFAULT NULL,
  `schwelle` int(11) NULL DEFAULT NULL,
  `start_of_lease` int(11) DEFAULT NULL,
  `deposit` decimal(10,2) NOT NULL DEFAULT '0.00',
  `description` text,
  PRIMARY KEY (`id`),
  KEY `Zahlungen_ibfk_1` (`zahlung`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

CREATE TABLE IF NOT EXISTS `month` (
  `month_id` int(11) NOT NULL,
  `name` varchar(255) NOT NULL,
  PRIMARY KEY (`month_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

CREATE TABLE IF NOT EXISTS `flat` (
  `flat_id` int(11) NOT NULL,
  `building_id` int(11) NOT NULL,
  `utility_percentage` decimal(10,2) NOT NULL,
  `tax_rate` decimal(10,2) NOT NULL DEFAULT '0.00',
  `size` decimal(10,2) NOT NULL,
  `description` text,
  `category` varchar(10) NOT NULL,
  PRIMARY KEY (`flat_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;


CREATE TABLE IF NOT EXISTS `rent_list` (
  `rent_list_id` int(11) NOT NULL AUTO_INCREMENT,
  `building_id` varchar(3) NOT NULL,
  `month` int(11) NOT NULL,
  `year` int(11) NOT NULL,
  `utilities_sum` decimal(10,2) NOT NULL,
  PRIMARY KEY (`rent_list_id`)
) ENGINE=InnoDB  DEFAULT CHARSET=utf8;


CREATE TABLE IF NOT EXISTS `rent_list_row` (
  `rent_list_row_id` int(11) NOT NULL,
  `rent_list_id` int(11) NOT NULL,
  `flat_id` int(11) NOT NULL,
  `tenant_id` varchar(100) NOT NULL,
  `utility_percentage` decimal(10,2) NOT NULL,
  `rent` decimal(10,2) NOT NULL,
  `tax_rate` decimal(10,2) NOT NULL,
  PRIMARY KEY (`rent_list_row_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
