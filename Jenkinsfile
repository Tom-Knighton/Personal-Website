pipeline {
  agent any

  stages {
    stage("Build") {
        steps {
            script {
                nodejs(nodeJSInstallationName: 'v20') {
                    sh 'npm i'
                    sh 'npm build'
                }
            }
        }
    }

    stage ("Docker") {
        steps {
            script {
                echo "Building docker image"
                sh "docker build -t tomkwebsite:latest -f Dockerfile . --progress=plain"
                sh "docker save -o tomkwebsite.tar tomkwebsite:latest"
            }
        }
    }

    stage("Publish") {
        steps {
            script {
                sshPublisher(
                        publishers: [
                            sshPublisherDesc(
                                configName: 'VPS',
                                verbose: true,
                                transfers: [
                                    sshTransfer(
                                        sourceFiles: "tomkwebsite.tar",
                                        remoteDirectory: 'TomKWebsite',
                                        execTimeout: 600000,
                                        execCommand: './_scripts/tomksite.sh'
                                    )
                                ]
                            )
                        ]
                    )
            }
        }
    }
  }
}