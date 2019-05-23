-- phpMyAdmin SQL Dump
-- version 4.8.3
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: May 23, 2019 at 06:39 AM
-- Server version: 10.1.35-MariaDB
-- PHP Version: 7.2.9

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `superhero`
--

-- --------------------------------------------------------

--
-- Table structure for table `applications`
--

CREATE TABLE `applications` (
  `id` int(11) NOT NULL,
  `name` varchar(50) NOT NULL,
  `cape` varchar(10) NOT NULL,
  `mask` varchar(10) NOT NULL,
  `costume` varchar(10) NOT NULL,
  `superpower` varchar(50) NOT NULL,
  `ownerlogin` varchar(50) NOT NULL,
  `addeddate` datetime NOT NULL,
  `verify` int(11) NOT NULL,
  `status` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `applications`
--

INSERT INTO `applications` (`id`, `name`, `cape`, `mask`, `costume`, `superpower`, `ownerlogin`, `addeddate`, `verify`, `status`) VALUES
(9, 'book', 'Yes', 'No', 'Yes', 'book', 'ss', '2019-05-18 09:17:27', 1, 0),
(10, 'aa', 'Yes', 'No', 'No', 'aaa', 'baba', '2019-05-18 09:17:54', 1, 0),
(11, 'asdasd', 'Yes', 'No', 'Yes', 'asdasd', 'ss', '2019-05-23 01:49:37', 1, 0),
(14, 'Master rubik cube', 'Yes', 'No', 'Yes', 'Kill you with a rubik cube', 'amirul', '2019-05-23 06:13:59', 1, 0),
(15, 'aaa', 'Yes', 'No', 'Yes', 'sss', 'ss', '2019-05-23 12:02:47', 0, 0),
(16, 'asd', 'No', 'Yes', 'No', 'asd', 'ss', '2019-05-23 12:03:50', 0, 0),
(17, 'ACAP KILLER', 'Yes', 'No', 'Yes', 'KILL ACAP IN MOBILE LEGEND', 'ss', '2019-05-23 12:12:19', 0, 0);

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `id` int(11) NOT NULL,
  `login` varchar(50) NOT NULL,
  `password` varchar(250) NOT NULL,
  `name` varchar(150) NOT NULL,
  `email` varchar(250) NOT NULL,
  `photo` varchar(150) NOT NULL DEFAULT 'default.png',
  `addeddate` datetime NOT NULL,
  `roles` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`id`, `login`, `password`, `name`, `email`, `photo`, `addeddate`, `roles`) VALUES
(2, 'baba', 'b42a6d93d7969152e0f18f0e41c0f4f2bc9625f06c43dcbc22f6ffb2ffdd6137d93c1cdbb16', 'ali', 'ali@gmail.com', 'default.png', '2018-11-25 10:24:14', 'admin'),
(11, 'aa', '11d2bfc1014008053febd018f2897078c878dcd6e363f90bc81930ecb705fba15d03f3f167df60e4n36', 'aa', 'aa@aa', 'default.png', '2019-05-16 16:56:56', 'superhero'),
(13, 'user', '40bd001563e0f18f0e41c0f4f2bc9625f06c43dcbc085fc35165329ea1ff5c5ecbdbbeefb10', 'user', 'user@user', 'default.png', '2019-05-16 17:12:29', 'superhero'),
(14, 'ss', 'c1c93f88d273660be5358cd4ee2df2c2f3f0e8dcd6e363f90bc81930ecb705fba15d03f3f167dfe7n38', 'ss', 'ss@ss', 'default.png', '2019-05-17 23:07:20', 'superhero'),
(17, 'amirul', '6c574e1738fb2a8652dcd6e363f90bc81930ecb705fba15d03f3f167df2290bce2dd055a68a167aen18', 'amirul', 'amirul@amirul', 'default.png', '2019-05-23 06:02:37', 'superhero'),
(18, 'admin', 'd033e22ae348aeb56dcd6e363f90bc81930ecb705fba15d03f3f167df60fc2140aec35850c4da997n17', 'admin', 'admin@admin.com', 'default.png', '2019-05-23 06:04:53', 'admin');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `applications`
--
ALTER TABLE `applications`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `applications`
--
ALTER TABLE `applications`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=18;

--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=19;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
