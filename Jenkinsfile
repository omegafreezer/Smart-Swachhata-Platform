pipeline {
    agent any

    stages {

        stage('Checkout') {
            steps {
                checkout scm
            }
        }

        stage('Install Dependencies') {
            steps {
                echo 'Installing dependencies...'
            }
        }

        stage('Build') {
            steps {
                echo 'Building Smart Swachhata Platform...'
            }
        }

        stage('Test') {
            steps {
                echo 'Running test cases...'
            }
        }

        stage('Docker Build') {
            steps {
                echo 'Building Docker Image...'
            }
        }

        stage('Deploy') {
            steps {
                echo 'Deploying application to Cloud...'
            }
        }
    }
}
