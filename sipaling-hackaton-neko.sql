-- MariaDB dump 10.19  Distrib 10.4.21-MariaDB, for Win64 (AMD64)
--
-- Host: server.itshiroto.my.id    Database: sph_dev
-- ------------------------------------------------------
-- Server version	10.5.16-MariaDB

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `account_product`
--

DROP TABLE IF EXISTS `account_product`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `account_product` (
  `account_id` bigint(20) unsigned NOT NULL,
  `merchant_product_id` char(36) COLLATE utf8mb4_unicode_ci NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`account_id`,`merchant_product_id`),
  KEY `account_product_merchant_product_id_foreign` (`merchant_product_id`),
  CONSTRAINT `account_product_account_id_foreign` FOREIGN KEY (`account_id`) REFERENCES `accounts` (`id`),
  CONSTRAINT `account_product_merchant_product_id_foreign` FOREIGN KEY (`merchant_product_id`) REFERENCES `merchant_products` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `account_product`
--

LOCK TABLES `account_product` WRITE;
/*!40000 ALTER TABLE `account_product` DISABLE KEYS */;
INSERT INTO `account_product` VALUES (5859455693053699,'7f55d5b9-2deb-11ee-8df0-22039135ebb3','2023-07-29 08:39:56','2023-07-29 08:39:56');
/*!40000 ALTER TABLE `account_product` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `accounts`
--

DROP TABLE IF EXISTS `accounts`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `accounts` (
  `id` bigint(20) unsigned NOT NULL AUTO_INCREMENT,
  `name` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `gender` enum('0','1') COLLATE utf8mb4_unicode_ci NOT NULL,
  `birthdate` date NOT NULL,
  `exp` double(8,2) NOT NULL,
  `user_id` bigint(20) unsigned NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `accounts_user_id_foreign` (`user_id`),
  CONSTRAINT `accounts_user_id_foreign` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=5859459012452329 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `accounts`
--

LOCK TABLES `accounts` WRITE;
/*!40000 ALTER TABLE `accounts` DISABLE KEYS */;
INSERT INTO `accounts` VALUES (5859455693053699,'Rivo Juicer Wowor','0','2002-06-05',5000.00,1,'2023-07-29 08:39:56','2023-07-29 12:46:38'),(5859456789399920,'Gisela Anindita','1','2023-04-01',0.00,2,'2023-07-29 11:49:09','2023-07-29 11:49:09'),(5859457577201480,'Rafael Mahendra','0','2023-03-01',0.00,2,'2023-07-29 10:51:46','2023-07-29 10:51:46'),(5859459012452328,'Rafael Mahendra','0','2023-03-01',0.00,2,'2023-07-29 10:52:10','2023-07-29 10:52:10');
/*!40000 ALTER TABLE `accounts` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `avatar_attrs`
--

DROP TABLE IF EXISTS `avatar_attrs`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `avatar_attrs` (
  `id` bigint(20) unsigned NOT NULL AUTO_INCREMENT,
  `type` enum('hat','ribbon') COLLATE utf8mb4_unicode_ci NOT NULL,
  `asset_url` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=11 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `avatar_attrs`
--

LOCK TABLES `avatar_attrs` WRITE;
/*!40000 ALTER TABLE `avatar_attrs` DISABLE KEYS */;
INSERT INTO `avatar_attrs` VALUES (1,'hat','https://www.svgrepo.com/show/530597/hat.svg','2023-07-29 08:39:55','2023-07-29 08:39:55'),(2,'hat','https://www.svgrepo.com/show/514354/hat.svg','2023-07-29 08:39:55','2023-07-29 08:39:55'),(3,'hat','https://www.svgrepo.com/show/410455/hat-iv.svg','2023-07-29 08:39:55','2023-07-29 08:39:55'),(4,'hat','https://www.svgrepo.com/show/423850/hat-origami-paper.svg','2023-07-29 08:39:55','2023-07-29 08:39:55'),(5,'hat','https://www.svgrepo.com/show/300317/hat-birthday.svg','2023-07-29 08:39:55','2023-07-29 08:39:55'),(6,'ribbon','https://www.svgrepo.com/show/484156/ribbon.svg','2023-07-29 08:39:55','2023-07-29 08:39:55'),(7,'ribbon','https://www.svgrepo.com/show/423813/ribbon-origami-paper.svg','2023-07-29 08:39:55','2023-07-29 08:39:55'),(8,'ribbon','https://www.svgrepo.com/show/262012/ribbon.svg','2023-07-29 08:39:56','2023-07-29 08:39:56'),(9,'ribbon','https://www.svgrepo.com/show/201313/ribbon.svg','2023-07-29 08:39:56','2023-07-29 08:39:56'),(10,'ribbon','https://www.svgrepo.com/show/122480/ribbon.svg','2023-07-29 08:39:56','2023-07-29 08:39:56');
/*!40000 ALTER TABLE `avatar_attrs` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `avatars`
--

DROP TABLE IF EXISTS `avatars`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `avatars` (
  `id` bigint(20) unsigned NOT NULL AUTO_INCREMENT,
  `hat_id` bigint(20) unsigned DEFAULT NULL,
  `ribbon_id` bigint(20) unsigned DEFAULT NULL,
  `account_id` bigint(20) unsigned NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `avatars_hat_id_foreign` (`hat_id`),
  KEY `avatars_ribbon_id_foreign` (`ribbon_id`),
  KEY `avatars_account_id_foreign` (`account_id`),
  CONSTRAINT `avatars_account_id_foreign` FOREIGN KEY (`account_id`) REFERENCES `accounts` (`id`),
  CONSTRAINT `avatars_hat_id_foreign` FOREIGN KEY (`hat_id`) REFERENCES `avatar_attrs` (`id`),
  CONSTRAINT `avatars_ribbon_id_foreign` FOREIGN KEY (`ribbon_id`) REFERENCES `avatar_attrs` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `avatars`
--

LOCK TABLES `avatars` WRITE;
/*!40000 ALTER TABLE `avatars` DISABLE KEYS */;
INSERT INTO `avatars` VALUES (1,4,10,5859455693053699,'2023-07-29 08:39:56','2023-07-29 13:32:36'),(2,NULL,NULL,5859457577201480,'2023-07-29 10:51:46','2023-07-29 10:51:46'),(3,NULL,NULL,5859459012452328,'2023-07-29 10:52:10','2023-07-29 10:52:10'),(4,NULL,NULL,5859456789399920,'2023-07-29 11:49:09','2023-07-29 11:49:09');
/*!40000 ALTER TABLE `avatars` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `failed_jobs`
--

DROP TABLE IF EXISTS `failed_jobs`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `failed_jobs` (
  `id` bigint(20) unsigned NOT NULL AUTO_INCREMENT,
  `uuid` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `connection` text COLLATE utf8mb4_unicode_ci NOT NULL,
  `queue` text COLLATE utf8mb4_unicode_ci NOT NULL,
  `payload` longtext COLLATE utf8mb4_unicode_ci NOT NULL,
  `exception` longtext COLLATE utf8mb4_unicode_ci NOT NULL,
  `failed_at` timestamp NOT NULL DEFAULT current_timestamp(),
  PRIMARY KEY (`id`),
  UNIQUE KEY `failed_jobs_uuid_unique` (`uuid`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `failed_jobs`
--

LOCK TABLES `failed_jobs` WRITE;
/*!40000 ALTER TABLE `failed_jobs` DISABLE KEYS */;
/*!40000 ALTER TABLE `failed_jobs` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `merchant_partners`
--

DROP TABLE IF EXISTS `merchant_partners`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `merchant_partners` (
  `id` bigint(20) unsigned NOT NULL AUTO_INCREMENT,
  `name` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `description` text COLLATE utf8mb4_unicode_ci NOT NULL,
  `logo` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `merchant_partners`
--

LOCK TABLES `merchant_partners` WRITE;
/*!40000 ALTER TABLE `merchant_partners` DISABLE KEYS */;
INSERT INTO `merchant_partners` VALUES (1,'Bukalapak','Bukalapak adalah salah satu perusahaan e-commerce terbesar di Indonesia. Bukalapak didirikan oleh Achmad Zaky, Nugroho Herucahyono, dan Fajrin Rasyid pada tahun 2010. Bukalapak memiliki lebih dari 100 juta pengguna terdaftar dan lebih dari 4 juta mitra usaha.','https://iconlogovector.com/uploads/images/2023/02/lg-40647590fdc8ecf73e94b8c156b8f41451.jpg','2023-07-29 08:39:56','2023-07-29 08:39:56'),(2,'Chatime','Chatime adalah jaringan kedai minuman teh terbesar di dunia. Chatime didirikan pada tahun 2005 oleh Henry Wang Yao-Hui di Hsinchu, Taiwan. Chatime memiliki lebih dari 1.000 kedai di seluruh dunia.','https://upload.wikimedia.org/wikipedia/commons/thumb/0/0e/Chatime_logo.svg/1200px-Chatime_logo.svg.png','2023-07-29 08:39:56','2023-07-29 08:39:56');
/*!40000 ALTER TABLE `merchant_partners` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `merchant_products`
--

DROP TABLE IF EXISTS `merchant_products`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `merchant_products` (
  `id` char(36) COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT uuid(),
  `name` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `description` text COLLATE utf8mb4_unicode_ci NOT NULL,
  `image` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `stock` int(11) NOT NULL,
  `xp_price` int(11) NOT NULL,
  `start_date` date NOT NULL,
  `end_date` date NOT NULL,
  `merchant_partner_id` bigint(20) unsigned NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `merchant_products_merchant_partner_id_foreign` (`merchant_partner_id`),
  CONSTRAINT `merchant_products_merchant_partner_id_foreign` FOREIGN KEY (`merchant_partner_id`) REFERENCES `merchant_partners` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `merchant_products`
--

LOCK TABLES `merchant_products` WRITE;
/*!40000 ALTER TABLE `merchant_products` DISABLE KEYS */;
INSERT INTO `merchant_products` VALUES ('7f55d5b9-2deb-11ee-8df0-22039135ebb3','Gratis Ongkir Rp 20.000','Dapatkan gratis ongkir hingga Rp 20.000 untuk pembelian produk di Bukalapak','https://s0.bukalapak.com/athena/microsite-lite/original/3045e220-eb7e-fbc0-d4c9-66d3551fca5e.webp.webp',50,1000,'2023-07-28','2023-09-28',1,'2023-07-29 08:39:56','2023-07-29 08:39:56'),('7f5bc4de-2deb-11ee-8df0-22039135ebb3','Gratis Ongkir Rp 10.000','Dapatkan gratis ongkir hingga Rp 20.000 untuk pembelian produk di Bukalapak','https://s0.bukalapak.com/athena/microsite-lite/original/3045e220-eb7e-fbc0-d4c9-66d3551fca5e.webp.webp',100,1000,'2023-07-28','2023-09-28',1,'2023-07-29 08:39:56','2023-07-29 08:39:56'),('7f7738ff-2deb-11ee-8df0-22039135ebb3','Chatime Milk Tea','Chatime Milk Tea','https://cdn.discordapp.com/attachments/1134526928834015253/1134543368517603439/chatime.jpg',50,1000,'2023-07-28','2023-09-28',2,'2023-07-29 08:39:56','2023-07-29 08:39:56');
/*!40000 ALTER TABLE `merchant_products` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `migrations`
--

DROP TABLE IF EXISTS `migrations`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `migrations` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `migration` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `batch` int(11) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=12 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `migrations`
--

LOCK TABLES `migrations` WRITE;
/*!40000 ALTER TABLE `migrations` DISABLE KEYS */;
INSERT INTO `migrations` VALUES (1,'2014_10_12_000000_create_users_table',1),(2,'2014_10_12_100000_create_password_reset_tokens_table',1),(3,'2019_08_19_000000_create_failed_jobs_table',1),(4,'2019_12_14_000001_create_personal_access_tokens_table',1),(5,'2023_07_28_093930_create_accounts_table',1),(6,'2023_07_28_100902_create_terms_savings_table',1),(7,'2023_07_28_103547_create_merchant_partners_table',1),(8,'2023_07_28_104415_create_merchant_products_table',1),(9,'2023_07_28_122711_account_product',1),(10,'2023_07_29_033620_create_avatar_attrs_table',1),(11,'2023_07_29_034240_create_avatars_table',1);
/*!40000 ALTER TABLE `migrations` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `password_reset_tokens`
--

DROP TABLE IF EXISTS `password_reset_tokens`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `password_reset_tokens` (
  `email` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `token` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`email`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `password_reset_tokens`
--

LOCK TABLES `password_reset_tokens` WRITE;
/*!40000 ALTER TABLE `password_reset_tokens` DISABLE KEYS */;
/*!40000 ALTER TABLE `password_reset_tokens` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `personal_access_tokens`
--

DROP TABLE IF EXISTS `personal_access_tokens`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `personal_access_tokens` (
  `id` bigint(20) unsigned NOT NULL AUTO_INCREMENT,
  `tokenable_type` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `tokenable_id` bigint(20) unsigned NOT NULL,
  `name` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `token` varchar(64) COLLATE utf8mb4_unicode_ci NOT NULL,
  `abilities` text COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `last_used_at` timestamp NULL DEFAULT NULL,
  `expires_at` timestamp NULL DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `personal_access_tokens_token_unique` (`token`),
  KEY `personal_access_tokens_tokenable_type_tokenable_id_index` (`tokenable_type`,`tokenable_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `personal_access_tokens`
--

LOCK TABLES `personal_access_tokens` WRITE;
/*!40000 ALTER TABLE `personal_access_tokens` DISABLE KEYS */;
/*!40000 ALTER TABLE `personal_access_tokens` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `terms_savings`
--

DROP TABLE IF EXISTS `terms_savings`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `terms_savings` (
  `id` char(36) COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT uuid(),
  `target_amount` decimal(12,2) NOT NULL COMMENT 'in IDR',
  `time_period` int(11) NOT NULL COMMENT 'in months',
  `start_date` date NOT NULL DEFAULT '2023-07-29',
  `end_date` date DEFAULT NULL,
  `is_active` tinyint(1) NOT NULL DEFAULT 1 COMMENT 'is active or not, only one term savings can be active at a time',
  `account_id` bigint(20) unsigned NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `terms_savings_account_id_foreign` (`account_id`),
  CONSTRAINT `terms_savings_account_id_foreign` FOREIGN KEY (`account_id`) REFERENCES `accounts` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `terms_savings`
--

LOCK TABLES `terms_savings` WRITE;
/*!40000 ALTER TABLE `terms_savings` DISABLE KEYS */;
INSERT INTO `terms_savings` VALUES ('7f496a42-2deb-11ee-8df0-22039135ebb3',100000000.00,36,'2023-07-29',NULL,1,5859455693053699,'2023-07-29 08:39:56','2023-07-29 08:39:56'),('ee36e755-2e05-11ee-8df0-22039135ebb3',50000000.00,18,'2023-07-29',NULL,1,5859456789399920,'2023-07-29 11:49:09','2023-07-29 11:49:09');
/*!40000 ALTER TABLE `terms_savings` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `users`
--

DROP TABLE IF EXISTS `users`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `users` (
  `id` bigint(20) unsigned NOT NULL AUTO_INCREMENT,
  `ktp_id` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `username` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `phone_number` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `birthdate` date NOT NULL,
  `gender` enum('0','1') COLLATE utf8mb4_unicode_ci NOT NULL,
  `email` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `password` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `remember_token` varchar(100) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `users_ktp_id_unique` (`ktp_id`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `users`
--

LOCK TABLES `users` WRITE;
/*!40000 ALTER TABLE `users` DISABLE KEYS */;
INSERT INTO `users` VALUES (1,'172812672','NINOKLEKSONO','081296867118','2002-12-15','1','suga.gmail@gmail.com','$2y$10$.Pn6j7zf0g.LEWFmLuZDS.bYw7mPsi84joYKshh9QA4sSpogbPBhC','nRX6zzeJw55yL7bXL97MuBtAWIkAekjwaVVJKLyUuUrd8FEVrmeNgb1jeqOs','2023-07-29 08:39:56','2023-07-29 08:39:56'),(2,'3674092009120002','ADRIANFINANTYO','082114188134','2023-07-31','0','adrianfinantyo@gmail.com','$2y$10$Ev6SwXDblGjGNtU8PKgpCeV24nrTxCG/4sHUkcjBxpja.mG0fKnle',NULL,'2023-07-29 08:39:56','2023-07-29 08:39:56'),(3,'098320894','KOONGH','92348304','2003-11-11','0','koonghiap123@gmail.com','$2y$10$11yCysIjwvjbF2Y.cp/hLuFHPhRDq/blpkBazPhJ.LramqHPF.G1W',NULL,'2023-07-29 08:39:56','2023-07-29 08:39:56');
/*!40000 ALTER TABLE `users` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2023-07-29 20:47:48
