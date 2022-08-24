DROP TABLE IF EXISTS `back_test`;

CREATE TABLE `oneto100`.`back_test` (
                                        `type_id`	VARCHAR(20)	NOT NULL,
                                        `type_name`	VARCHAR(50)	NOT NULL,
                                        `type_from` 	VARCHAR(50)	NOT NULL,
                                        `type_desc`	VARCHAR(500) NOT NULL,
                                        `type_program`	VARCHAR(500) NOT NULL,
                                        `type_img`	VARCHAR(5000) NOT	NULL,
                                        `type_program_img`	VARCHAR(5000) NOT	NULL,
                                        `type_like`	VARCHAR(20) NOT	NULL,
                                        `type_like_sub`	VARCHAR(100) NOT	NULL,
                                        `type_dislike`	VARCHAR(20) NOT	NULL,
                                        `type_dislike_sub`	VARCHAR(100) NOT	NULL,
                                        `type_attend`	INT	NOT NULL DEFAULT 0,
                                        PRIMARY KEY (type_id)
);


DROP TABLE IF EXISTS `back_diary`;

CREATE TABLE `back_diary` (
                              `diary_id`	INT UNSIGNED AUTO_INCREMENT	NOT NULL,
                              `diary_writter`	VARCHAR(20) NOT	NULL,
                              `diary_content`	VARCHAR(500) NOT NULL,
                              `diary_like`	INT	NOT NULL DEFAULT 0,
                              `diary_date`	DATE	NOT NULL,
                              PRIMARY KEY (diary_id)
);

DROP TABLE IF EXISTS `back_diary_check`;

CREATE TABLE `back_diary_check` (
                                    `diary_id`	INT UNSIGNED NOT NULL,
                                    `check_diary`	INT UNSIGNED AUTO_INCREMENT	NOT NULL,
                                    `diary_checked`	VARCHAR(2)	NOT NULL,
                                    `diary_name`	VARCHAR(10)	NULL,
                                    `diary_phone`	VARCHAR(20)	NULL,
                                    FOREIGN KEY (diary_id) REFERENCES back_diary (diary_id) ON DELETE RESTRICT,
                                    PRIMARY KEY (check_diary)

);

DROP TABLE IF EXISTS `back_diary_like`;

CREATE TABLE `back_diary_like` (
                                   `dlike_id`	INT UNSIGNED AUTO_INCREMENT	NOT NULL,
                                   `diary_id`	INT UNSIGNED NOT NULL,
                                   `dlike_name`	VARCHAR(20)	NULL,
                                   `dlike_ip`	VARCHAR(20)	NOT NULL,
                                   `dlike_date`	DATE	NULL,
                                   `dlike_browser`	VARCHAR(20)	NOT NULL,
                                   `dlike_use` VARCHAR(2) NOT NULL,
                                   FOREIGN KEY (diary_id) REFERENCES back_diary (diary_id) ON DELETE RESTRICT ON UPDATE RESTRICT,
                                   PRIMARY KEY (dlike_id)
);

DROP TABLE IF EXISTS `back_item`;

CREATE TABLE `back_item` (
                             `item_id`	VARCHAR(20)	NOT NULL,
                             `item_name`	VARCHAR(50) NOT NULL,
                             `item_desc`	VARCHAR(200) NOT NULL,
                             `item_img`	VARCHAR(50)	NOT NULL,
                             `item_voted`	INT	NOT NULL DEFAULT 0,
                             PRIMARY KEY (item_id)
);

DROP TABLE IF EXISTS `back_item_vote`;

CREATE TABLE `back_item_vote` (
                                  `bvote_id`	INT UNSIGNED AUTO_INCREMENT	NOT NULL,
                                  `item_id`	VARCHAR(20)	NOT NULL,
                                  `bvote_name`	VARCHAR(20)	NULL,
                                  `bvote_ip`	VARCHAR(20)	NOT NULL,
                                  `bvote_date`	DATE NOT	NULL,
                                  `bvote_browser`	VARCHAR(20) NOT	NULL,
                                  FOREIGN KEY (item_id) REFERENCES back_item (item_id) ON DELETE RESTRICT ON UPDATE RESTRICT,
                                  PRIMARY KEY (bvote_id)
);

DROP TABLE IF EXISTS `back_balance`;

CREATE TABLE `back_balance` (
                                `balance_id`	INT UNSIGNED AUTO_INCREMENT	NOT NULL,
                                `balance_name`	VARCHAR(20)	NOT NULL,
                                `balance_content`	VARCHAR(200) NOT NULL,
                                `balance_date`	DATE NOT NULL,
                                `balance_like`	INT	NOT NULL DEFAULT 0,
                                `balance_type`	VARCHAR(2)	NOT NULL,
                                `balance_ip`	VARCHAR(20)	NOT NULL,
                                `balance_browser`	VARCHAR(20) NOT	NULL,
                                PRIMARY KEY (balance_id)
);

DROP TABLE IF EXISTS `back_balance_like`;

CREATE TABLE `back_balance_like` (
                                     `blike_id`	INT UNSIGNED AUTO_INCREMENT	NOT NULL,
                                     `balance_id`	INT UNSIGNED NOT NULL,
                                     `blike_name`	VARCHAR(20)	NULL,
                                     `blike_ip`	VARCHAR(20)	NOT NULL,
                                     `blike_date`	DATE	NOT NULL,
                                     `blike_browser`	VARCHAR(20)	NOT NULL,
                                     `blike_use`  VARCHAR(2) NOT NULL,
                                     FOREIGN KEY (balance_id) REFERENCES back_balance (balance_id) ON DELETE RESTRICT,
                                     PRIMARY KEY (blike_id)
);

DROP TABLE IF EXISTS `back_balance_count`;

CREATE TABLE `back_balance_count` (
                                      `balance_type`	VARCHAR(2)	NOT NULL,
                                      `balance_selected` INT UNSIGNED NOT NULL DEFAULT 0,
                                      PRIMARY KEY (balance_type)
);

ALTER TABLE `oneto100`.`back_item_vote`
    CHANGE COLUMN `bvote_date` `bvote_date` DATETIME NOT NULL ;

ALTER TABLE `oneto100`.`back_balance_like`
    CHANGE COLUMN `blike_date` `blike_date` DATETIME NOT NULL ;

ALTER TABLE `oneto100`.`back_balance`
    CHANGE COLUMN `balance_date` `balance_date` DATETIME NOT NULL ;

ALTER TABLE `oneto100`.`back_diary_like`
    CHANGE COLUMN `dlike_date` `dlike_date` DATETIME NOT NULL ;

ALTER TABLE `oneto100`.`back_diary`
    CHANGE COLUMN `diary_date` `diary_date` DATETIME NOT NULL ;

show tables;



