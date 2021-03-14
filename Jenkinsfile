pipeline{
    agent any
    stages{
        stage('Build'){
            steps{
                sh "nom install"
            }
        }
        stage('Tests'){
            steps{
                sh "npm test"
            }
        }
    }
}