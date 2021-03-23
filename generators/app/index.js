const Generator = require('yeoman-generator');
const chalk = require('chalk');
const yosay = require('yosay');

module.exports = class extends Generator {
  prompting() {
    // Have Yeoman greet the user.
    this.log(
      yosay(
        `Welcome to the  ${chalk.yellow('Pitman')} generator!`
      )
    );


  this.projectTypes = [
      'maven-java8',
      'maven-java-junit5-surefire',
    ];

    const prompts = [
      {
        type: 'list',
        name: 'userAnswer',
        message: `Select project type:`,
        choices: this.projectTypes,
        default: undefined
      }
    ];

    return this.prompt(prompts).then(props => {
      // To access props later use this.props.someAnswer;
      this.props = props;
    });
  }

  writing() {
    this.fs.copy(
      this.templatePath('dummyfile.txt'),
      this.destinationPath('dummyfile.txt')
    );
  }
};
