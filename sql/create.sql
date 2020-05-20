-- MySQL Workbench Forward Engineering

SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION';

-- -----------------------------------------------------
-- Schema thewall
-- -----------------------------------------------------

-- -----------------------------------------------------
-- Schema thewall
-- -----------------------------------------------------
CREATE SCHEMA IF NOT EXISTS `thewall` DEFAULT CHARACTER SET utf8 ;
USE `thewall` ;

-- -----------------------------------------------------
-- Table `thewall`.`bricks`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `thewall`.`bricks` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `content` TEXT NOT NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB;


SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;

-- -----------------------------------------------------
-- Data for table `thewall`.`bricks`
-- -----------------------------------------------------
START TRANSACTION;
USE `thewall`;
INSERT INTO `thewall`.`bricks` (`id`, `content`) VALUES (1, 'We don\'t need no education');
INSERT INTO `thewall`.`bricks` (`id`, `content`) VALUES (2, 'We don\'t need no thought control');
INSERT INTO `thewall`.`bricks` (`id`, `content`) VALUES (3, 'No dark sarcasm in the classroom');
INSERT INTO `thewall`.`bricks` (`id`, `content`) VALUES (4, 'Teacher, leave them kids alone');
INSERT INTO `thewall`.`bricks` (`id`, `content`) VALUES (5, 'Hey! Teacher! Leave them kids alone!');

COMMIT;
