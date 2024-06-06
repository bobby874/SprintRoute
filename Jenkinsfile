pipeline {
    agent any
    stages {
        stage('Checkout') {
            steps {
                git 'https://github.com/your-username/your-repo.git'
            }
        }
        stage('Build') {
            steps {
                sh 'make'  // Replace with your build command
            }
        }
        stage('Test') {
            steps {
                sh 'make test'  // Replace with your test command
            }
        }
    }
}
