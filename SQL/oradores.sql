-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 15-11-2023 a las 21:55:13
-- Versión del servidor: 10.4.28-MariaDB
-- Versión de PHP: 8.2.4

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `integrador_cac`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `oradores`
--

CREATE TABLE `oradores` (
  `id_orador` int(11) NOT NULL,
  `Nombre` varchar(25) DEFAULT NULL,
  `Apellido` varchar(25) DEFAULT NULL,
  `Mail` varchar(25) DEFAULT NULL,
  `Tema` varchar(25) DEFAULT NULL,
  `Fecha_Alta` date DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `oradores`
--

INSERT INTO `oradores` (`id_orador`, `Nombre`, `Apellido`, `Mail`, `Tema`, `Fecha_Alta`) VALUES
(4, 'Nombre1', 'Apellido1', 'mail1@example.com', 'Tema1', '2023-01-01'),
(5, 'Nombre2', 'Apellido2', 'mail3@example.com', 'Tema2', '2023-02-02'),
(6, 'Nombre3', 'Apellido3', 'mail4@example.com', 'Tema3', '2023-01-01'),
(7, 'Nombre4', 'Apellido4', 'mail5@example.com', 'Tema4', '2023-02-02'),
(8, 'Nombre5', 'Apellido5', 'mail6@example.com', 'Tema5', '2023-01-01'),
(9, 'Nombre6', 'Apellido6', 'mail7@example.com', 'Tema6', '2023-02-02'),
(10, 'Nombre7', 'Apellido7', 'mail8@example.com', 'Tema7', '2023-01-01'),
(11, 'Nombre8', 'Apellido8', 'mail9@example.com', 'Tema8', '2023-02-02'),
(12, 'Nombre9', 'Apellido9', 'mail10@example.com', 'Tema9', '2023-01-01'),
(13, 'Nombre10', 'Apellido10', 'mail2@example.com', 'Tema10', '2023-02-02');

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `oradores`
--
ALTER TABLE `oradores`
  ADD PRIMARY KEY (`id_orador`),
  ADD UNIQUE KEY `Mail` (`Mail`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `oradores`
--
ALTER TABLE `oradores`
  MODIFY `id_orador` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=14;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
