pipeline {
    agent {
        docker { image 'maven:3.6.3-jdk-8' }
    }
    stages {
        stage('Checkout') {
            steps {
                git url: 'https://github.com/bscott-007/SprintRoute.git', branch: 'main'
            }
        }
        stage('Build') {
            steps {
                sh 'mvn clean package'
            }
        }
        stage('Test') {
            steps {
                sh 'mvn test'
            }
        }
        stage('Build Docker Image') {
            steps {
                script {
                    docker.build('BobbyDock')
                }
            }
        }
        stage('Deploy') {
            steps {
                script {
                    docker.image('BobbyDock').inside {
                        sh 'java -jar target/your-app.jar'
                    }
                }
            }
        }
    }
}
