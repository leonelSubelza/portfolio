import { Project } from "./entities";
import { getTechnology } from "./entities.mock";
import { v4 as uuidv4 } from "uuid";

export const projects: Project[] = [
  {
    id: uuidv4(),
    title: "Chat App",
    description:
      "Chat virtual realizado con React y Spring Boot, permite crear salas de chat y enviar mensajes en tiempo real entre los usuarios conectados.",
    image: "/projects-images/chat-app.jpg",
    url: "https://github.com/leonelSubelza/chat-app-v2",
    technologies: [
      getTechnology("html"),
      getTechnology("css"),
      getTechnology("javascript"),
      getTechnology("react"),
      getTechnology("spring"),
      getTechnology("jwt"),
    ],
  },
  {
    id: uuidv4(),
    title: "Encriptador de Texto",
    description:
      "Encriptador de Texto es un proyecto realizado para el primer desafío del programa de formación de Oracle ONE, consiste en una aplicación web que permite encriptar y desencriptar mensajes utilizando un conjunto de reglas específicas.",
    image: "/projects-images/encriptador-de-texto.png",
    url: "https://github.com/leonelSubelza/Challenge-Oracle-ONE-Encriptador-de-Texto",
    technologies: [
      getTechnology("html"),
      getTechnology("css"),
      getTechnology("javascript"),
    ],
  },
  {
    id: uuidv4(),
    title: "War Game",
    description:
      "Proyecto realizado para la materia Organización del Computador, consiste en un juego de guerra por turnos, donde cada jugador debe destruir la base secreta del oponente oculta en un mapa hecho en texto plano.",
    image: "/projects-images/war-games.png",
    url: "https://github.com/leonelSubelza/War-Games-Assembler",
    technologies: [getTechnology("assembly")],
  },
  {
    id: uuidv4(),
    title: "Sistema Empresa de Calzado",
    description:
      "Proyecto final realizado para la materia Laboratorio de Construcción de Software, última materia de la carrera Tecnicatura Universitaria en Informática de la Universidad Nacional de General Sarmiento.",
    image: "/projects-images/sistema-zapateria.png",
    url: "https://github.com/leonelSubelza/TP-Empresa-De-Calzado",
    technologies: [
      getTechnology("java"),
      getTechnology("mysql"),
      getTechnology("jasper-reports"),
    ],
  },
];
