pipeline {
    agent any

    stages {
        stage('Checkout') {
            steps {
                script {
                    // Scripted pipeline block with Groovy sandbox enabled
                    git url: 'https://github.com/bscott-007/SprintRoute.git', branch: 'main'
                }
            }
        }
        stage('Install Dependencies') {
            steps {
                sh 'npm install'
            }
        }
        stage('Build') {
            steps {
                sh 'npm run build'
            }
        }
        stage('Test') {
            steps {
                sh 'npm test'
            }
        }
    }
}
