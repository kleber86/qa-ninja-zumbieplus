pipeline{
    agent {
        docker{ 
            image "papitoio/node-wd"
            args "--network=zombie"
        }
    }
    stages{
        stage('Build'){
            steps{
                sh "npm install"
            }
        }
        stage('Tests'){
            steps{
                sh "npm run test:ci"
            }
            post{
                always{
                    junit testResults: "tests_output/**/*.xml"
                }
            }
        }
    }
}