pipeline {
    agent {
        docker { image 'maven:3.6.3-jdk-8' }
    }
    stages {
        stage('Checkout') {
            steps {
                git url: 'https://github.com/your-username/your-repo.git', branch: 'main'
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
                    docker.build('BobbyDocker')
                }
            }
        }
        stage('Deploy') {
            steps {
                script {
                    docker.image('BobbyDocker').inside {
                        sh 'java -jar target/your-app.jar'
                    }
                }
            }
        }
    }
    post {
        success {
            mail to: 'rs4391397@gmail.com',
                 subject: "SUCCESS: Job '${env.JOB_NAME} [${env.BUILD_NUMBER}]'",
                 body: "Job '${env.JOB_NAME} [${env.BUILD_NUMBER}]' completed successfully."
        }
        failure {
            mail to: 'rs4391397@gmail.com',
                 subject: "FAILURE: Job '${env.JOB_NAME} [${env.BUILD_NUMBER}]'",
                 body: "Job '${env.JOB_NAME} [${env.BUILD_NUMBER}]' failed. Check Jenkins for details."
        }
    }
}
