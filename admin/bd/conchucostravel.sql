-- phpMyAdmin SQL Dump
-- version 4.6.5.2
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 19-06-2019 a las 00:28:23
-- Versión del servidor: 10.1.21-MariaDB
-- Versión de PHP: 5.6.30

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `conchucostravel`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `acceso`
--

CREATE TABLE `acceso` (
  `usuario` char(10) DEFAULT NULL,
  `clave` char(50) DEFAULT NULL,
  `rol` char(10) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Volcado de datos para la tabla `acceso`
--

INSERT INTO `acceso` (`usuario`, `clave`, `rol`) VALUES
('admin', '**2015**wasap', 'A'),
('samu', 'samu', 'A');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `banner`
--

CREATE TABLE `banner` (
  `id` int(11) NOT NULL,
  `idpersona` char(10) DEFAULT NULL,
  `titulo` varchar(20) DEFAULT NULL,
  `detalle` longtext,
  `fecha` datetime DEFAULT NULL,
  `estado` int(11) DEFAULT NULL,
  `calificacion` int(11) DEFAULT NULL,
  `categoria` varchar(50) DEFAULT NULL,
  `fecha_act` datetime DEFAULT NULL,
  `area` char(10) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `contador`
--

CREATE TABLE `contador` (
  `idpk` int(11) NOT NULL,
  `noticia` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Volcado de datos para la tabla `contador`
--

INSERT INTO `contador` (`idpk`, `noticia`) VALUES
(1, 27);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `detalle`
--

CREATE TABLE `detalle` (
  `id` int(11) NOT NULL,
  `noticia` int(11) DEFAULT NULL,
  `rutafoto` longtext,
  `orden` varchar(200) DEFAULT NULL,
  `estado_foto` varchar(50) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Volcado de datos para la tabla `detalle`
--

INSERT INTO `detalle` (`id`, `noticia`, `rutafoto`, `orden`, `estado_foto`) VALUES
(1, 1, 'subidas/24-2019.jpg', '1', '1'),
(2, 2, 'subidas/25-2019.jpg', '1', '1'),
(3, 3, 'subidas/26-2019.jpg', '1', '1'),
(4, 4, 'subidas/27-2019.jpg', '1', '1');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `noticia`
--

CREATE TABLE `noticia` (
  `id` int(11) NOT NULL,
  `idpersona` char(10) DEFAULT NULL,
  `titulo` varchar(20) DEFAULT NULL,
  `detalle` longtext,
  `fecha` datetime DEFAULT NULL,
  `estado` int(11) DEFAULT NULL,
  `calificacion` int(11) DEFAULT NULL,
  `categoria` varchar(50) DEFAULT NULL,
  `fecha_act` datetime DEFAULT NULL,
  `area` char(10) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Volcado de datos para la tabla `noticia`
--

INSERT INTO `noticia` (`id`, `idpersona`, `titulo`, `detalle`, `fecha`, `estado`, `calificacion`, `categoria`, `fecha_act`, `area`) VALUES
(1, NULL, 'paisaje arco iris co', 'paisaje arco iris conchucano', '2019-06-18 01:17:52', 1, NULL, NULL, NULL, NULL),
(2, NULL, 'conchucos', 'conchucos', '2019-06-18 10:25:53', 1, NULL, NULL, NULL, NULL),
(3, NULL, 'rt76768678', 'h', '2019-06-18 11:39:55', 1, NULL, NULL, '2019-06-18 11:04:23', NULL),
(4, NULL, 'conchucos', 'f', '2019-06-18 04:03:53', 1, NULL, NULL, NULL, NULL);

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `contador`
--
ALTER TABLE `contador`
  ADD PRIMARY KEY (`idpk`);

--
-- Indices de la tabla `detalle`
--
ALTER TABLE `detalle`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `noticia`
--
ALTER TABLE `noticia`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `contador`
--
ALTER TABLE `contador`
  MODIFY `idpk` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;
--
-- AUTO_INCREMENT de la tabla `detalle`
--
ALTER TABLE `detalle`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;
--
-- AUTO_INCREMENT de la tabla `noticia`
--
ALTER TABLE `noticia`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
