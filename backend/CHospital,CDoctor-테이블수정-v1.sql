--
-- Table structure for table `cdoctor`
--

DROP TABLE IF EXISTS `cdoctor`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `cdoctor` (
  `id` int NOT NULL AUTO_INCREMENT COMMENT '협력의사 id',
  `CDoctorName` varchar(30) NOT NULL COMMENT '협력의사 이름',
  `regDate` datetime NOT NULL COMMENT '등록일시',
  `editDate` datetime DEFAULT NULL COMMENT '변경일시',
  `cooperation_id` int NOT NULL COMMENT '협력병원 id FK',
  PRIMARY KEY (`id`),
  KEY `fk_cooperationdoctor_cooperation1_idx` (`cooperation_id`),
  CONSTRAINT `fk_cooperationdoctor_cooperation1` FOREIGN KEY (`cooperation_id`) REFERENCES `chospital` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Table structure for table `chospital`
--

DROP TABLE IF EXISTS `chospital`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `chospital` (
  `id` int NOT NULL AUTO_INCREMENT COMMENT '협력병원  id',
  `CHospitalArea` varchar(30) NOT NULL COMMENT '협력병원 지역',
  `CHospitalIntroduction` varchar(30) NOT NULL COMMENT '협력병원 소개',
  `CHospitalAddress` varchar(255) NOT NULL COMMENT '협력병원 주소',
  `CHospitalZipCode` char(5) NOT NULL COMMENT '협력병원 우편번호',
  `CHospitalTel` varchar(30) NOT NULL COMMENT '협력병원 전화번호',
  `CHospitalName` varchar(30) NOT NULL COMMENT '협력병원 이름',
  `CMedicalDepartment` varchar(30) NOT NULL COMMENT '협력병원 진료과',
  `CHospitalURL` varchar(255) DEFAULT NULL COMMENT '협력병원 URL',
  `regDate` datetime NOT NULL COMMENT '등록일시',
  `editDate` datetime DEFAULT NULL COMMENT '변경일시',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=743 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;
