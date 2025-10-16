pipeline {
  agent any
  environment {
    IMAGE = "yourdockerhubusername/revision"
  }
  stages {
    stage('Checkout') {
      steps { checkout scm }
    }
    stage('Install') {
      steps { sh 'npm install' }
    }
    stage('Test') {
      steps { sh 'npm test || true' }
    }
    stage('Build Image') {
      steps {
        sh "docker build -t ${IMAGE}:$BUILD_NUMBER ."
      }
    }
    stage('Push Image') {
      when {
        expression { env.BRANCH_NAME == 'main' || env.BRANCH_NAME == 'master' }
      }
      steps {
        withCredentials([usernamePassword(credentialsId: 'dockerhub-creds', usernameVariable: 'DOCKER_USER', passwordVariable: 'DOCKER_PASS')]) {
          sh 'echo $DOCKER_PASS | docker login -u $DOCKER_USER --password-stdin'
          sh "docker push ${IMAGE}:$BUILD_NUMBER"
        }
      }
    }
  }
  post {
    success { echo 'Pipeline succeeded' }
    failure { echo 'Pipeline failed' }
  }
}
