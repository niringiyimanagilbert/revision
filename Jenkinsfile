pipeline {
    agent any
    stages {
        stage('Checkout') {
            steps {
                // Clone the repo
                git 'https://github.com/YOUR_USERNAME/revision.git'
            }
        }
        stage('Install Dependencies') {
            steps {
                sh 'npm install'
            }
        }
        stage('Run Application') {
            steps {
                sh 'node index.js &'
            }
        }
    }
}
