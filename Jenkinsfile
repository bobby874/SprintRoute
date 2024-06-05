
pipeline {
    agent any

    environment {
        // Define any environment variables here
        SOME_VAR = 'some_value'
    }

    stages {
        stage('Checkout') {
            steps {
                git url: 'https://github.com/your-username/your-repo.git', branch: 'main'
            }
        }
        stage('Build') {
            steps {
                // Replace with your build command
                sh 'make'
            }
        }
        stage('Test') {
            steps {
                // Replace with your test command
                sh 'make test'
            }
        }
        stage('Deploy') {
            when {
                branch 'main'
            }
            steps {
                // Replace with your deploy command
                sh 'make deploy'
            }
        }
    }

    post {
        success {
            echo 'Build and tests succeeded!'
        }
        failure {
            echo 'Build or tests failed.'
        }
    }
}
