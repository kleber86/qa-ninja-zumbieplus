pipeline{
    agent any
    stages{
        stage('Build'){
            sh "nom install"
        }
        stage('Tests'){
            sh "npm test"
        }
    }
}