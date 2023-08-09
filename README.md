# myapp

The project aims to create a deployment pipeline to deploy a Hello world app in Node using GitHub Actions.

Two different jobs, Build and Deploy, are associated with the action workflow.

Inorder to be exempted from the payment procedures of any third party vendors, the express app is not deployed into any PaaS options such as Heroku or Elastic Beanstalk. Instead, the repository is deployed as a Github page artifact.

The jobs Build and Deploy are made dependant on each other such that Github Page is generated only after successful completion of the pipeline execution. On deployment, a simple html text is displayed at the page url, marking the success of the deployment.
