-- phpMyAdmin SQL Dump
-- version 4.8.3
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: May 16, 2019 at 10:19 AM
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
-- Database: `contacts`
--

-- --------------------------------------------------------

--
-- Table structure for table `applications`
--

CREATE TABLE `applications` (
  `id` int(11) NOT NULL,
  `userid` int(11) NOT NULL,
  `name` varchar(50) NOT NULL,
  `cape` int(11) NOT NULL,
  `mask` int(11) NOT NULL,
  `costume` int(11) NOT NULL,
  `superpower` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `contacts`
--

CREATE TABLE `contacts` (
  `id` int(11) NOT NULL,
  `name` varchar(150) NOT NULL,
  `email` varchar(250) NOT NULL,
  `mobileno` varchar(15) NOT NULL,
  `photo` varchar(150) NOT NULL DEFAULT 'default.png',
  `ownerlogin` varchar(50) NOT NULL,
  `addeddate` datetime NOT NULL,
  `status` int(11) NOT NULL DEFAULT '0'
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `contacts`
--

INSERT INTO `contacts` (`id`, `name`, `email`, `mobileno`, `photo`, `ownerlogin`, `addeddate`, `status`) VALUES
(1, 'asdasd', 'asdas@awdqawe', '123123123', 'default.png', 'baba', '2019-05-15 23:24:02', 1),
(2, 'ss', 'naimbob95@gmail.com', '312313', 'default.png', 'baba', '2019-05-16 01:13:30', 0),
(3, 'asdasd', 'adasd@asdasd', '123123123', 'default.png', 'lasis', '2019-05-16 01:14:40', 0),
(4, 'ass', 'asdas@asdas', '23123', 'default.png', 'baba', '2019-05-16 01:15:38', 0),
(5, 'asdasd', '123123@asdasd', '3123123', 'default.png', 'lasis', '2019-05-16 01:16:09', 0),
(6, 'asdasd', '23123123@123413', '123123', 'default.png', 'baba', '2019-05-16 15:45:34', 0);

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
  `mobileno` varchar(15) NOT NULL,
  `photo` varchar(150) NOT NULL DEFAULT 'default.png',
  `addeddate` datetime NOT NULL,
  `roles` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`id`, `login`, `password`, `name`, `email`, `mobileno`, `photo`, `addeddate`, `roles`) VALUES
(2, 'baba', 'b42a6d93d7969152e0f18f0e41c0f4f2bc9625f06c43dcbc22f6ffb2ffdd6137d93c1cdbb16', 'ali', 'ali@gmail.com', '', 'default.png', '2018-11-25 10:24:14', 'admin'),
(3, 'abu', '40bd001563085fdcd6e363f90bc81930ecb705fba15d03f3f167dfc35165329ea1ff5c5ecbdbbeefn14', 'aa', 'abu@gmail.com', '', 'default.png', '2019-05-16 00:12:13', ''),
(5, 'ahmad', '7110eda4d09e062aadcd6e363f90bc81930ecb705fba15d03f3f167df5e4a390b0a572ac0d2c0220n17', 'samad', 'ahmad@gmail.com', '', 'default.png', '2019-05-16 00:35:03', ''),
(6, 'naqib', '7110eda4d09e062aa5e4a390b0a572ac0d2c02dcd6e363f90bc81930ecb705fba15d03f3f167df20n38', 'naqib', 'naqib@gmail.com', '', 'default.png', '2019-05-16 00:41:22', ''),
(7, 'smith', '7110eda4d09e062dcd6e363f90bc81930ecb705fba15d03f3f167dfaa5e4a390b0a572ac0d2c0220n15', 'Smith', 'Smith@gmail.com', '', 'default.png', '2019-05-16 00:50:40', ''),
(8, 'saudara7', '2a7805b6c2d6a53674dcd6e363f90bc81930ecb705fba15d03f3f167df3c4e040229dbee38b465b6n18', 'Hail', 'rasis_isz@yahoo.com', '', 'default.png', '2019-05-16 00:55:06', ''),
(9, 'lasis', 'b8b868cd185d23c6afbbdcd6e363f90bc81930ecb705fba15d03f3f167df94f7ba7b9c56c45532dbn20', 'rasis', 'rasis@gmail.com', '', 'default.png', '2019-05-16 00:56:51', '');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `applications`
--
ALTER TABLE `applications`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `contacts`
--
ALTER TABLE `contacts`
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
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `contacts`
--
ALTER TABLE `contacts`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=10;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
