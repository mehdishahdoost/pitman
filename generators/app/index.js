const Generator = require("yeoman-generator");
const chalk = require("chalk");
const yosay = require("yosay");
const fs = require("fs");

module.exports = class extends Generator {
  prompting() {
    this.log(yosay(`Welcome to the  ${chalk.yellow("Pitman")} generator!`));

    this.projectTypes = [
      "maven-java8",
      "maven-java8-junit4-surefire",
      "maven-java8-junit5-surefire",
      "maven-java8-junit4-junit5-surefire",
      "maven-java8-junit5-mockito-surefire",
      "docker-compose:mysql"
    ];

    const prompts = [
      {
        type: "list",
        name: "pTypeAnswer",
        message: `Select project type:`,
        choices: this.projectTypes,
        default: undefined
      },
      {
        type: "input",
        name: "pNameAnswer",
        message: `Select project name:`,
        default: undefined
      }
    ];

    return this.prompt(prompts).then(props => {
      this.props = props;
    });
  }

  writing() {
    switch (this.props.pTypeAnswer) {
      case "maven-java8":
        this.fs.copy(
          this.templatePath("maven-java8"),
          this.destinationPath(this.props.pNameAnswer)
        );

        this._copyDir(this.props.pNameAnswer + "/src/main/java");
        this._copyDir(this.props.pNameAnswer + "/src/main/resources");
        this._copyDir(this.props.pNameAnswer + "/src/test/java");
        break;
      case "maven-java8-junit5-surefire":
        this.fs.copy(
          this.templatePath("maven-java8-junit5-surefire"),
          this.destinationPath(this.props.pNameAnswer)
        );
        this._copyDir(this.props.pNameAnswer + "/src/main/java");
        this._copyDir(this.props.pNameAnswer + "/src/main/resources");
        this._copyDir(this.props.pNameAnswer + "/src/test/java");
        break;
      case "maven-java8-junit4-surefire":
        this.fs.copy(
          this.templatePath("maven-java8-junit4-surefire"),
          this.destinationPath(this.props.pNameAnswer)
        );
        this._copyDir(this.props.pNameAnswer + "/src/main/java");
        this._copyDir(this.props.pNameAnswer + "/src/main/resources");
        this._copyDir(this.props.pNameAnswer + "/src/test/java");
        break;
      case "maven-java8-junit4-junit5-surefire":
        this.fs.copy(
          this.templatePath("maven-java8-junit4-junit5-surefire"),
          this.destinationPath(this.props.pNameAnswer)
        );
        this._copyDir(this.props.pNameAnswer + "/src/main/java");
        this._copyDir(this.props.pNameAnswer + "/src/main/resources");
        this._copyDir(this.props.pNameAnswer + "/src/test/java");
        break;
      case "maven-java8-junit5-mockito-surefire":
        this.fs.copy(
          this.templatePath("maven-java8-junit5-mockito-surefire"),
          this.destinationPath(this.props.pNameAnswer)
        );
        this._copyDir(this.props.pNameAnswer + "/src/main/java");
        this._copyDir(this.props.pNameAnswer + "/src/main/resources");
        this._copyDir(this.props.pNameAnswer + "/src/test/java");
        break;
      case "docker-compose:mysql":
        this.fs.copy(
          this.templatePath("docker-compose-mysql"),
          this.destinationPath(this.props.pNameAnswer)
        );
        break;
      default:
        console.log("Error! Can't find suitable template.");
    }
  }

  _copyDir(path) {
    fs.mkdir(path, { recursive: true }, err => {
      if (err) {
        throw err;
      }

      console.log("Directory is created.");
    });
  }
};
