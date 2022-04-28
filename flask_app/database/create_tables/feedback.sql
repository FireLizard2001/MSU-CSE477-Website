CREATE TABLE IF NOT EXISTS `feedback` (
`comment_id`         int(100)      NOT NULL AUTO_INCREMENT	COMMENT 'The comment id',
`name`               varchar(100)  NOT NULL					COMMENT 'The name of the commentor',
`email`				 varchar(100)  NOT NULL					COMMENT 'The email of the commentor',
`comment`			 varchar(100)  NOT NULL					COMMENT 'The comment left by the user',
PRIMARY KEY (`comment_id`)
) ENGINE=InnoDB AUTO_INCREMENT=1 DEFAULT CHARSET=utf8mb4 COMMENT="Feedback given and user that left it";