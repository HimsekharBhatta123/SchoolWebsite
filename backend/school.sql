-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Jun 03, 2024 at 06:55 PM
-- Server version: 10.4.32-MariaDB
-- PHP Version: 8.2.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `school`
--

-- --------------------------------------------------------

--
-- Table structure for table `class_subject`
--

CREATE TABLE `class_subject` (
  `id` int(11) NOT NULL,
  `subjects` varchar(255) NOT NULL,
  `classes` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `class_subject`
--

INSERT INTO `class_subject` (`id`, `subjects`, `classes`) VALUES
(24, 'English', 14),
(25, 'Maths', 11),
(26, 'Science', 14),
(27, 'Social Science', 14),
(28, 'Hindi', 14);

-- --------------------------------------------------------

--
-- Table structure for table `fees_structure`
--

CREATE TABLE `fees_structure` (
  `id` int(11) NOT NULL,
  `fees_class` varchar(50) NOT NULL,
  `amount` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `fees_structure`
--

INSERT INTO `fees_structure` (`id`, `fees_class`, `amount`) VALUES
(9, 'Class 2', 8000),
(12, 'Class 3', 8000),
(13, 'Class 10', 15000);

-- --------------------------------------------------------

--
-- Table structure for table `login`
--

CREATE TABLE `login` (
  `id` int(11) NOT NULL,
  `email` varchar(20) NOT NULL,
  `password` varchar(20) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `login`
--

INSERT INTO `login` (`id`, `email`, `password`) VALUES
(2, 'himsekhar@gmail.com', 'Himsekhar123');

-- --------------------------------------------------------

--
-- Table structure for table `notices`
--

CREATE TABLE `notices` (
  `nid` int(11) NOT NULL,
  `description` text NOT NULL,
  `timing` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `notices`
--

INSERT INTO `notices` (`nid`, `description`, `timing`) VALUES
(6, 'Your Class schedule has been changed. ', '7:30 AM - 12:30 PM');

-- --------------------------------------------------------

--
-- Table structure for table `school_hours`
--

CREATE TABLE `school_hours` (
  `id` int(11) NOT NULL,
  `day` varchar(100) NOT NULL,
  `time` varchar(30) NOT NULL,
  `clas` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `school_hours`
--

INSERT INTO `school_hours` (`id`, `day`, `time`, `clas`) VALUES
(9, 'Saturday', '9:15 AM - 12:30 PM', 'class6'),
(11, 'Monday - Friday', '9:15 AM - 2:45 PM ', 'class-9 to class-10'),
(12, 'Sunday', '11:00 AM - 1:00 PM ', 'class-9 to class-10'),
(14, 'Monday - Friday', '9:15 AM - 2:45 PM ', 'class-1 to class-10');

-- --------------------------------------------------------

--
-- Table structure for table `students`
--

CREATE TABLE `students` (
  `id` int(11) NOT NULL,
  `name` varchar(20) NOT NULL,
  `email` varchar(30) NOT NULL,
  `classes` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `students`
--

INSERT INTO `students` (`id`, `name`, `email`, `classes`) VALUES
(45, 'Jimmy', 'jimmy@yahoo.com', 13);

-- --------------------------------------------------------

--
-- Table structure for table `teachers`
--

CREATE TABLE `teachers` (
  `id` int(11) NOT NULL,
  `name` varchar(30) NOT NULL,
  `qualification` varchar(100) NOT NULL,
  `t_subject` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `teachers`
--

INSERT INTO `teachers` (`id`, `name`, `qualification`, `t_subject`) VALUES
(3, 'Chandana Kalita', 'B.A, D.El.Ed', 24),
(4, 'Banti Bhagawati', 'B.A, D.El.Ed', 28),
(5, 'Minoti Bora', 'MA, B.ED, DCS', 27),
(7, 'Lakhi Kalita', 'HS, D.El.Ed', NULL),
(8, 'Pinky Bhagawati Goswami', 'BA, D.El.Ed', NULL),
(9, 'Juri Saikia', 'MA, D.El.Ed', NULL),
(10, 'Niroma Talukdar', 'HS pass', NULL),
(11, 'Laxmi Sharma', 'HS pass', NULL),
(12, 'Puspanjali Goswami', 'BSc, D.El.Ed', NULL),
(13, 'Mitali Sarkar Das', 'BSc, D.El.Ed', NULL),
(14, 'Tulika Kalita', 'M.Com, PGDCA', NULL),
(15, 'Nisha Singh', 'MA, B.ED', NULL),
(16, 'Kajal Sah', 'MD', NULL),
(17, 'Dhanashree Das', 'BA', NULL),
(18, 'Esterlin Chelse S Changma', 'BA', NULL),
(26, 'Kabindra Kant Jha', 'BSc', 25),
(46, 'Chandana Mahanta', 'BSC ,D.El.Ed', 26);

--
-- Indexes for dumped tables
--

--
-- Indexes for table `class_subject`
--
ALTER TABLE `class_subject`
  ADD PRIMARY KEY (`id`),
  ADD KEY `classes` (`classes`);

--
-- Indexes for table `fees_structure`
--
ALTER TABLE `fees_structure`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `login`
--
ALTER TABLE `login`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `notices`
--
ALTER TABLE `notices`
  ADD PRIMARY KEY (`nid`);

--
-- Indexes for table `school_hours`
--
ALTER TABLE `school_hours`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `students`
--
ALTER TABLE `students`
  ADD PRIMARY KEY (`id`),
  ADD KEY `classes` (`classes`);

--
-- Indexes for table `teachers`
--
ALTER TABLE `teachers`
  ADD PRIMARY KEY (`id`),
  ADD KEY `t_subject` (`t_subject`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `class_subject`
--
ALTER TABLE `class_subject`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=29;

--
-- AUTO_INCREMENT for table `fees_structure`
--
ALTER TABLE `fees_structure`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=14;

--
-- AUTO_INCREMENT for table `login`
--
ALTER TABLE `login`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT for table `notices`
--
ALTER TABLE `notices`
  MODIFY `nid` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- AUTO_INCREMENT for table `school_hours`
--
ALTER TABLE `school_hours`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=15;

--
-- AUTO_INCREMENT for table `students`
--
ALTER TABLE `students`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=46;

--
-- AUTO_INCREMENT for table `teachers`
--
ALTER TABLE `teachers`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=47;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `class_subject`
--
ALTER TABLE `class_subject`
  ADD CONSTRAINT `class_subject_ibfk_1` FOREIGN KEY (`classes`) REFERENCES `school_hours` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints for table `students`
--
ALTER TABLE `students`
  ADD CONSTRAINT `students_ibfk_1` FOREIGN KEY (`classes`) REFERENCES `fees_structure` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints for table `teachers`
--
ALTER TABLE `teachers`
  ADD CONSTRAINT `teachers_ibfk_1` FOREIGN KEY (`t_subject`) REFERENCES `class_subject` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
