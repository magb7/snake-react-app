import React, { Component } from "react";
import SnakeDot from "./SnakeDot";
import Food from "./Food";
import "./Game.css";

// méthode qui permet de donner des coordonnées aléatoires à food
const getRandomCoordinates = () => {
  let min = 1;
  let max = 98;
  let x = Math.floor((Math.random() * (max - min + 1) + min) / 2) * 2;
  let y = Math.floor((Math.random() * (max - min + 1) + min) / 2) * 2;
  return [x, y];
};

//Condition de départ, au lancement du jeu
const initialeState = {
  direction: "RIGHT",
  speed: 200,
  score: 0,
  food: getRandomCoordinates(),
  snakeDots: [
    [0, 0],
    [2, 0],
  ],
};

class Game extends Component {
  // State
  constructor(props) {
    super(props);
    this.state = initialeState;
  }

  // state = initialeState;

  // Méthode pour le mouvement du snake
  componentDidMount() {
    setInterval(this.moveSnake, this.state.speed);
    document.onkeydown = this.onKeyDown;
  }
  //Méthode pour vérifier si le snake a été mis à jour
  componentDidUpdate() {
    this.checkIfOutOfBorders();
    this.checkIfCollapsed();
    this.checkIfEat();
  }

  // Méthode pour donner des directions en fonction de la touche appuyée
  onKeyDown = (e) => {
    e.preventDefault();
    const direction = e.code.replace("Arrow", "").toUpperCase();
    switch (direction) {
      case "UP":
        this.setState({ direction: "UP" }); // modif de la src d'un img + décalage d'une case.
        break;
      case "DOWN":
        this.setState({ direction: "DOWN" });
        break;
      case "LEFT":
        this.setState({ direction: "LEFT" });
        break;
      case "RIGHT":
        this.setState({ direction: "RIGHT" });
        break;
      default:
        return;
    }
  };

  //Méthode pour faire bouger le snake
  moveSnake = () => {
    let dots = [...this.state.snakeDots]; // récupère les coordonnées sur snake
    let head = dots[dots.length - 1]; // récupère la tête du snake qui sont les dernières coordonnées du snake

    // check la direction avec un switch

    switch (this.state.direction) {
      case "RIGHT":
        head = [head[0] + 2, head[1]];
        break;
      case "LEFT":
        head = [head[0] - 2, head[1]];
        break;
      case "UP":
        head = [head[0], head[1] - 2];
        break;
      case "DOWN":
        head = [head[0], head[1] + 2];
        break;
      default:
        return "Invalid Direction";
    }
    //ajoute la nouvelle tête au snake
    dots.push(head); // dots = [[0, 0], [2,0], [4,0]]
    //retirer les premières coordonnées = queue du snake = premier élément d'un tableau
    dots.shift(); //dots = [[2,0], [4,0]]
    //change le state
    this.setState({
      snakeDots: dots,
    });
  };

  //Méthode pour contraindre le snake dans la game-area
  checkIfOutOfBorders() {
    let head = this.state.snakeDots[this.state.snakeDots.length - 1];
    if (head[0] >= 100 || head[1] >= 100 || head[0] < 0 || head[1] < 0) {
      this.onGameOver();
    }
  }

  //Méthode pour savoir si le snake s'est mangé lui-même
  checkIfCollapsed() {
    let snake = [...this.state.snakeDots];
    let head = snake[snake.length - 1];
    snake.pop(); //retire la tête du snake
    snake.forEach((dot) => {
      if (head[0] === dot[0] && head[1] === dot[1]) {
        this.onGameOver();
      }
    });
  }

  //Méthode le snake mange la nourriture
  checkIfEat() {
    let head = this.state.snakeDots[this.state.snakeDots.length - 1];
    let food = this.state.food;
    if (head[0] === food[0] && head[1] === food[1]) {
      //on met à jour la position de la nourriture avant sinon boucle infinie !
      let newScore = this.state.score + 1;
      this.setState({
        food: getRandomCoordinates(),
        score: newScore,
      });
      this.enlargeSnake();
      this.increaseSpeed();
    }
  }

  //Méthode pour faire grandir le snake lorsqu'il mange
  enlargeSnake() {
    let newSnake = [...this.state.snakeDots];
    newSnake.unshift([]); // ajoute une case vide au début du tableau = à la fin du serpent
    this.setState({
      snakeDots: newSnake,
    });
  }

  //Méthode pour augmenter la vitesse du snake
  increaseSpeed() {
    if (this.state.speed > 10) {
      this.setState({
        speed: this.state.speed - 10, // on enlève 10 car la vitesse est déterminé par un intervalle
      });
    }
  }

  //Méthode game over
  onGameOver() {
    alert(`Game Over !`);
    this.setState(initialeState);
  }

  render() {
    return (
      <div className="game-area">
        <SnakeDot snakeDot={this.state.snakeDots} />
        <Food foodDot={this.state.food} />
        <h3>Score: {this.state.score}</h3>
      </div>
    );
  }
}

export default Game;
