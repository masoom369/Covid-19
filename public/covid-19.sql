-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1:3306
-- Generation Time: Jul 06, 2024 at 05:42 PM
-- Server version: 8.3.0
-- PHP Version: 8.3.6

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `covid-19`
--

-- --------------------------------------------------------

--
-- Table structure for table `appointments`
--

DROP TABLE IF EXISTS `appointments`;
CREATE TABLE IF NOT EXISTS `appointments` (
  `id` bigint UNSIGNED NOT NULL AUTO_INCREMENT,
  `user_id` bigint UNSIGNED NOT NULL,
  `username` varchar(161) COLLATE utf8mb4_unicode_ci NOT NULL,
  `gender` enum('Male','Female','Other') COLLATE utf8mb4_unicode_ci NOT NULL,
  `nic` varchar(161) COLLATE utf8mb4_unicode_ci NOT NULL,
  `hospitalname` varchar(161) COLLATE utf8mb4_unicode_ci NOT NULL,
  `appointment_type` enum('covid19-test','vaccination','vaccination and covid19-test') COLLATE utf8mb4_unicode_ci NOT NULL,
  `vaccinename` varchar(161) COLLATE utf8mb4_unicode_ci NOT NULL,
  `datetime` datetime NOT NULL,
  `result` enum('positive','negative','pending') COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT 'pending',
  `vaccination` enum('done','not done') COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT 'not done',
  `status` enum('pending','approved','rejected') COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT 'pending',
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `appointments_user_id_foreign` (`user_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `cache`
--

DROP TABLE IF EXISTS `cache`;
CREATE TABLE IF NOT EXISTS `cache` (
  `key` varchar(161) COLLATE utf8mb4_unicode_ci NOT NULL,
  `value` mediumtext COLLATE utf8mb4_unicode_ci NOT NULL,
  `expiration` int NOT NULL,
  PRIMARY KEY (`key`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `cache`
--

INSERT INTO `cache` (`key`, `value`, `expiration`) VALUES
('356a192b7913b04c54574d18c28d46e6395428ab:timer', 'i:1720273354;', 1720273354),
('356a192b7913b04c54574d18c28d46e6395428ab', 'i:1;', 1720273354),
('eb038d84467a33fbdee679d4f8828454:timer', 'i:1720273416;', 1720273416),
('eb038d84467a33fbdee679d4f8828454', 'i:1;', 1720273416),
('77de68daecd823babbb58edb1c8e14d7106e83bb:timer', 'i:1720273474;', 1720273474),
('77de68daecd823babbb58edb1c8e14d7106e83bb', 'i:1;', 1720273474),
('c525a5357e97fef8d3db25841c86da1a:timer', 'i:1720285352;', 1720285352),
('c525a5357e97fef8d3db25841c86da1a', 'i:1;', 1720285352),
('1b6453892473a467d07372d45eb05abc2031647a:timer', 'i:1720285379;', 1720285379),
('1b6453892473a467d07372d45eb05abc2031647a', 'i:1;', 1720285379),
('03c0e9534316819fe84a550d8c6b2f8d:timer', 'i:1720285440;', 1720285440),
('03c0e9534316819fe84a550d8c6b2f8d', 'i:1;', 1720285440),
('03c5907e7619ef49a4794f6d82743ae3:timer', 'i:1720287335;', 1720287335),
('03c5907e7619ef49a4794f6d82743ae3', 'i:1;', 1720287335),
('579580778faea5842d6d7b58f75e4d55:timer', 'i:1720287752;', 1720287752),
('579580778faea5842d6d7b58f75e4d55', 'i:1;', 1720287752);

-- --------------------------------------------------------

--
-- Table structure for table `cache_locks`
--

DROP TABLE IF EXISTS `cache_locks`;
CREATE TABLE IF NOT EXISTS `cache_locks` (
  `key` varchar(161) COLLATE utf8mb4_unicode_ci NOT NULL,
  `owner` varchar(161) COLLATE utf8mb4_unicode_ci NOT NULL,
  `expiration` int NOT NULL,
  PRIMARY KEY (`key`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `failed_jobs`
--

DROP TABLE IF EXISTS `failed_jobs`;
CREATE TABLE IF NOT EXISTS `failed_jobs` (
  `id` bigint UNSIGNED NOT NULL AUTO_INCREMENT,
  `uuid` varchar(161) COLLATE utf8mb4_unicode_ci NOT NULL,
  `connection` text COLLATE utf8mb4_unicode_ci NOT NULL,
  `queue` text COLLATE utf8mb4_unicode_ci NOT NULL,
  `payload` longtext COLLATE utf8mb4_unicode_ci NOT NULL,
  `exception` longtext COLLATE utf8mb4_unicode_ci NOT NULL,
  `failed_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`),
  UNIQUE KEY `failed_jobs_uuid_unique` (`uuid`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `jobs`
--

DROP TABLE IF EXISTS `jobs`;
CREATE TABLE IF NOT EXISTS `jobs` (
  `id` bigint UNSIGNED NOT NULL AUTO_INCREMENT,
  `queue` varchar(161) COLLATE utf8mb4_unicode_ci NOT NULL,
  `payload` longtext COLLATE utf8mb4_unicode_ci NOT NULL,
  `attempts` tinyint UNSIGNED NOT NULL,
  `reserved_at` int UNSIGNED DEFAULT NULL,
  `available_at` int UNSIGNED NOT NULL,
  `created_at` int UNSIGNED NOT NULL,
  PRIMARY KEY (`id`),
  KEY `jobs_queue_index` (`queue`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `job_batches`
--

DROP TABLE IF EXISTS `job_batches`;
CREATE TABLE IF NOT EXISTS `job_batches` (
  `id` varchar(161) COLLATE utf8mb4_unicode_ci NOT NULL,
  `name` varchar(161) COLLATE utf8mb4_unicode_ci NOT NULL,
  `total_jobs` int NOT NULL,
  `pending_jobs` int NOT NULL,
  `failed_jobs` int NOT NULL,
  `failed_job_ids` longtext COLLATE utf8mb4_unicode_ci NOT NULL,
  `options` mediumtext COLLATE utf8mb4_unicode_ci,
  `cancelled_at` int DEFAULT NULL,
  `created_at` int NOT NULL,
  `finished_at` int DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `migrations`
--

DROP TABLE IF EXISTS `migrations`;
CREATE TABLE IF NOT EXISTS `migrations` (
  `id` int UNSIGNED NOT NULL AUTO_INCREMENT,
  `migration` varchar(161) COLLATE utf8mb4_unicode_ci NOT NULL,
  `batch` int NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=8 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `migrations`
--

INSERT INTO `migrations` (`id`, `migration`, `batch`) VALUES
(1, '0001_01_01_000000_create_users_table', 1),
(2, '0001_01_01_000001_create_cache_table', 1),
(3, '0001_01_01_000002_create_jobs_table', 1),
(4, '2024_07_04_173749_add_two_factor_columns_to_users_table', 1),
(5, '2024_07_04_173859_create_personal_access_tokens_table', 1),
(6, '2024_07_04_180425_create_appointments_table', 1),
(7, '2024_07_04_180426_create_vaccines_table', 1);

-- --------------------------------------------------------

--
-- Table structure for table `password_reset_tokens`
--

DROP TABLE IF EXISTS `password_reset_tokens`;
CREATE TABLE IF NOT EXISTS `password_reset_tokens` (
  `email` varchar(161) COLLATE utf8mb4_unicode_ci NOT NULL,
  `token` varchar(161) COLLATE utf8mb4_unicode_ci NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`email`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `personal_access_tokens`
--

DROP TABLE IF EXISTS `personal_access_tokens`;
CREATE TABLE IF NOT EXISTS `personal_access_tokens` (
  `id` bigint UNSIGNED NOT NULL AUTO_INCREMENT,
  `tokenable_type` varchar(161) COLLATE utf8mb4_unicode_ci NOT NULL,
  `tokenable_id` bigint UNSIGNED NOT NULL,
  `name` varchar(161) COLLATE utf8mb4_unicode_ci NOT NULL,
  `token` varchar(64) COLLATE utf8mb4_unicode_ci NOT NULL,
  `abilities` text COLLATE utf8mb4_unicode_ci,
  `last_used_at` timestamp NULL DEFAULT NULL,
  `expires_at` timestamp NULL DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `personal_access_tokens_token_unique` (`token`),
  KEY `personal_access_tokens_tokenable_type_tokenable_id_index` (`tokenable_type`,`tokenable_id`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `sessions`
--

DROP TABLE IF EXISTS `sessions`;
CREATE TABLE IF NOT EXISTS `sessions` (
  `id` varchar(161) COLLATE utf8mb4_unicode_ci NOT NULL,
  `user_id` bigint UNSIGNED DEFAULT NULL,
  `ip_address` varchar(45) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `user_agent` text COLLATE utf8mb4_unicode_ci,
  `payload` longtext COLLATE utf8mb4_unicode_ci NOT NULL,
  `last_activity` int NOT NULL,
  PRIMARY KEY (`id`),
  KEY `sessions_user_id_index` (`user_id`),
  KEY `sessions_last_activity_index` (`last_activity`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `sessions`
--

INSERT INTO `sessions` (`id`, `user_id`, `ip_address`, `user_agent`, `payload`, `last_activity`) VALUES
('GNBUE9iP0uKitXTy5cbnWatHEENW0W37ieVZ6vPb', 5, '127.0.0.1', 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/126.0.0.0 Safari/537.36', 'YTo0OntzOjY6Il90b2tlbiI7czo0MDoiVkU5MVl0dmNSVm9JWVgyZHR1dFNpeTU1bXVUTUdWbG56RnVOM09lYyI7czo5OiJfcHJldmlvdXMiO2E6MTp7czozOiJ1cmwiO3M6MzY6Imh0dHA6Ly8xMjcuMC4wLjE6ODAwMC9wYXRpZW50L3JlcG9ydCI7fXM6NjoiX2ZsYXNoIjthOjI6e3M6Mzoib2xkIjthOjA6e31zOjM6Im5ldyI7YTowOnt9fXM6NTA6ImxvZ2luX3dlYl81OWJhMzZhZGRjMmIyZjk0MDE1ODBmMDE0YzdmNThlYTRlMzA5ODlkIjtpOjU7fQ==', 1720280455),
('i9HovlcpE3c4wQCxjdSCKWhGJPrfbm06jtUF1UaK', 4, '127.0.0.1', 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/126.0.0.0 Safari/537.36', 'YTo0OntzOjY6Il90b2tlbiI7czo0MDoiUUpacUZ5bFFIbk44ckVyYVZ0cGhIRGQxQ0RDbGtPTURKV2NsQjIxTyI7czo2OiJfZmxhc2giO2E6Mjp7czozOiJvbGQiO2E6MDp7fXM6MzoibmV3IjthOjA6e319czo5OiJfcHJldmlvdXMiO2E6MTp7czozOiJ1cmwiO3M6NDQ6Imh0dHA6Ly8xMjcuMC4wLjE6ODAwMC9hZG1pbi9hcHBvaW50bWVudC1saXN0Ijt9czo1MDoibG9naW5fd2ViXzU5YmEzNmFkZGMyYjJmOTQwMTU4MGYwMTRjN2Y1OGVhNGUzMDk4OWQiO2k6NDt9', 1720283459),
('eCL72576oSERbiTIIWs47CjLqosBORfwhzDYf0tB', 1, '127.0.0.1', 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/126.0.0.0 Safari/537.36', 'YTo0OntzOjY6Il90b2tlbiI7czo0MDoiNzNKdGRuZmREczczSHVnMGcwczFoRkNjR2xhQmtiSWFSMVhiWGUwVCI7czo2OiJfZmxhc2giO2E6Mjp7czozOiJvbGQiO2E6MDp7fXM6MzoibmV3IjthOjA6e319czo5OiJfcHJldmlvdXMiO2E6MTp7czozOiJ1cmwiO3M6MjY6Imh0dHA6Ly8xMjcuMC4wLjE6ODAwMC9ob21lIjt9czo1MDoibG9naW5fd2ViXzU5YmEzNmFkZGMyYjJmOTQwMTU4MGYwMTRjN2Y1OGVhNGUzMDk4OWQiO2k6MTt9', 1720287693),
('1uJ6nBFSbomk2GaBi5vWVcqv9jbYkZhDKpwI2uSn', 6, '127.0.0.1', 'Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:127.0) Gecko/20100101 Firefox/127.0', 'YTo1OntzOjY6Il90b2tlbiI7czo0MDoiRHphQjRLRjNkWUY3Tjd0ZWFiNWtoNkpoNmFEWTZwc1hHQ1NmZm9BcSI7czo5OiJfcHJldmlvdXMiO2E6MTp7czozOiJ1cmwiO3M6NDE6Imh0dHA6Ly8xMjcuMC4wLjE6ODAwMC9wYXRpZW50L2FwcG9pbnRtZW50Ijt9czo2OiJfZmxhc2giO2E6Mjp7czozOiJvbGQiO2E6MDp7fXM6MzoibmV3IjthOjA6e319czo1MDoibG9naW5fd2ViXzU5YmEzNmFkZGMyYjJmOTQwMTU4MGYwMTRjN2Y1OGVhNGUzMDk4OWQiO2k6NjtzOjIxOiJwYXNzd29yZF9oYXNoX3NhbmN0dW0iO3M6NjA6IiQyeSQxMiQydzdZbzN5MXp6VnA0TmNnM0pFbWoucG1BRVMva0guREU4YUYxSXV4alUvbjRhaEkwZXdlbSI7fQ==', 1720284021),
('ec6xsjpLX37KPXwt7Ohi4aIljSQKqqX6KVJkRfWc', NULL, '127.0.0.1', 'Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:127.0) Gecko/20100101 Firefox/127.0', 'YTozOntzOjY6Il90b2tlbiI7czo0MDoiVVRwTUJCWDNzSVBNQWo4bDNLY2x2aW1YWmdkYlVhVzU1ZG1mSHJVNSI7czo5OiJfcHJldmlvdXMiO2E6MTp7czozOiJ1cmwiO3M6NDE6Imh0dHA6Ly8xMjcuMC4wLjE6ODAwMC9wYXRpZW50L2FwcG9pbnRtZW50Ijt9czo2OiJfZmxhc2giO2E6Mjp7czozOiJvbGQiO2E6MDp7fXM6MzoibmV3IjthOjA6e319fQ==', 1720283780);

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

DROP TABLE IF EXISTS `users`;
CREATE TABLE IF NOT EXISTS `users` (
  `id` bigint UNSIGNED NOT NULL AUTO_INCREMENT,
  `name` varchar(161) COLLATE utf8mb4_unicode_ci NOT NULL,
  `email` varchar(161) COLLATE utf8mb4_unicode_ci NOT NULL,
  `role` varchar(161) COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT '0',
  `user_type` enum('patient','hospital','admin') COLLATE utf8mb4_unicode_ci NOT NULL,
  `is_approved` varchar(161) COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT 'nope',
  `dob` date NOT NULL,
  `phone` varchar(161) COLLATE utf8mb4_unicode_ci NOT NULL,
  `address` varchar(161) COLLATE utf8mb4_unicode_ci NOT NULL,
  `password` varchar(161) COLLATE utf8mb4_unicode_ci NOT NULL,
  `two_factor_secret` text COLLATE utf8mb4_unicode_ci,
  `two_factor_recovery_codes` text COLLATE utf8mb4_unicode_ci,
  `two_factor_confirmed_at` timestamp NULL DEFAULT NULL,
  `email_verified_at` timestamp NULL DEFAULT NULL,
  `remember_token` varchar(100) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `current_team_id` bigint UNSIGNED DEFAULT NULL,
  `profile_photo_path` varchar(2048) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `users_email_unique` (`email`)
) ENGINE=InnoDB AUTO_INCREMENT=11 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`id`, `name`, `email`, `role`, `user_type`, `is_approved`, `dob`, `phone`, `address`, `password`, `two_factor_secret`, `two_factor_recovery_codes`, `two_factor_confirmed_at`, `email_verified_at`, `remember_token`, `current_team_id`, `profile_photo_path`, `created_at`, `updated_at`) VALUES
(1, 'Evercare Hospital, Lahore', 'hospital1@gmail.com', '2', 'hospital', 'yes', '2019-01-06', '03111222398', 'Nespak Society', '$2y$12$53zIdEiDnL5GP.5F5Q8.Cuk9.VKZy6DTl/FZelRcBknKa2MW6E4Sy', NULL, NULL, NULL, NULL, 'E8QpPdEMmhiagwgAmldnhJODpy7wk8cm2ve4zqZFQdGHFtHmER40XGMFKjIn', NULL, 'profile-photos/HitGYKvZ6FplvCZvYyWPHDHM9MyuvYxZl26RNf2Y.jpg', '2024-07-06 08:16:31', '2024-07-06 08:41:38'),
(2, 'Pak International Hospital, Karachi\r\n', 'hospital2@gmail.com', '2', 'hospital', 'yes', '2019-01-06', '03111222398', '39-C, 22nd, East St, D.H.A. Phase 1 Sector A\r\n', '$2y$12$53zIdEiDnL5GP.5F5Q8.Cuk9.VKZy6DTl/FZelRcBknKa2MW6E4Sy', NULL, NULL, NULL, NULL, '9uX7Gygk9OnoDUsyl0Y6H08rZBPHSLYcRtKEK4lWZ7h6DkO4ta3uEvijePOW', NULL, 'profile-photos/kWGOJZoZJ1fwOSJq7D1wsaMNPE69CJH6vXkg5AVF.jpg', '2024-07-06 08:16:31', '2024-07-06 08:33:32'),
(3, 'Advanced International Hospital, Islamabad\r\n', 'hospital3@gmail.com', '2', 'hospital', 'yes', '2019-01-06', '03111222398', '12-G\r\n', '$2y$12$53zIdEiDnL5GP.5F5Q8.Cuk9.VKZy6DTl/FZelRcBknKa2MW6E4Sy', NULL, NULL, NULL, NULL, 'qbXTdU7jcBr8mMgjQECtBxk3ECgKBV3S8bL6z21rUSmVeJtjmpkIiAgs7p6F', NULL, 'profile-photos/fFNu17wdr0SKmlkeA2OeS2QKFJ9Ga1zQ91wOQKE9.jpg', '2024-07-06 08:16:31', '2024-07-06 08:43:36'),
(4, 'admin', 'admin@gmail.com', '1', 'admin', 'yes', '2005-01-03', '12345678901', '123 road', '$2y$12$Vr3DVDNxB5nBXks8kGo8Rey1OEPogASsxHzw0vG/iEOosGwBInRby', NULL, NULL, NULL, NULL, 'Au5rd2XbjlkkwV8zGn81Du8XsjC00RyJvBT5VoBhp2uiWRREhrN16TNoaBfR', NULL, 'profile-photos/K9Md6ChLdYen6omoFwYakjvzW888Ayjttmasuwlj.png', '2024-07-06 09:43:18', '2024-07-06 12:02:10'),
(9, 'masoom', 'masoom@gmail.com', '0', 'patient', 'nope', '2024-07-03', '12345678910', '123 road', '$2y$12$BOtoD3H3.fddav.RnaP.Oe9Sl6ZMywCMJR.kbqBsRlEhSFDvGB2O6', NULL, NULL, NULL, NULL, NULL, NULL, NULL, '2024-07-06 12:22:25', '2024-07-06 12:22:25'),
(10, 'zaid', 'zaid@gmail.com', '0', 'patient', 'nope', '2024-07-03', '12345678910', '123 road', '$2y$12$BOtoD3H3.fddav.RnaP.Oe9Sl6ZMywCMJR.kbqBsRlEhSFDvGB2O6', NULL, NULL, NULL, NULL, 'PeT0sXw0ZmRj1GM4gKmpbU8XkOavyYUebXggxDspgevxVgrz30Hv8ydbSIPU', NULL, NULL, '2024-07-06 12:22:25', '2024-07-06 12:22:25');

-- --------------------------------------------------------

--
-- Table structure for table `vaccines`
--

DROP TABLE IF EXISTS `vaccines`;
CREATE TABLE IF NOT EXISTS `vaccines` (
  `id` bigint UNSIGNED NOT NULL AUTO_INCREMENT,
  `vaccine_name` varchar(161) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `vaccine_availability` varchar(161) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=11 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `vaccines`
--

INSERT INTO `vaccines` (`id`, `vaccine_name`, `vaccine_availability`, `created_at`, `updated_at`) VALUES
(1, 'Pfizer–BioNTech', 'yes', '2024-07-06 06:37:18', '2024-07-06 06:37:18'),
(2, 'Oxford–AstraZeneca', 'yes', '2024-07-06 06:37:18', '2024-07-06 06:37:18'),
(3, 'Sinopharm BIBP', 'yes', '2024-07-06 06:37:18', '2024-07-06 06:37:18'),
(4, 'Moderna', 'yes', '2024-07-06 06:37:18', '2024-07-06 06:37:18'),
(5, 'Janssen', 'yes', '2024-07-06 06:37:18', '2024-07-06 06:37:18'),
(6, 'CoronaVac', 'yes', '2024-07-06 06:37:18', '2024-07-06 06:37:18'),
(7, 'Covaxin', 'yes', '2024-07-06 06:37:18', '2024-07-06 06:37:18'),
(8, 'Novavax', 'yes', '2024-07-06 06:37:18', '2024-07-06 06:37:18'),
(9, 'Convidecia', 'yes', '2024-07-06 06:37:18', '2024-07-06 06:37:18'),
(10, 'Sanofi–GSK', 'yes', '2024-07-06 06:37:18', '2024-07-06 06:37:18');

--
-- Constraints for dumped tables
--

--
-- Constraints for table `appointments`
--
ALTER TABLE `appointments`
  ADD CONSTRAINT `appointments_user_id_foreign` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
