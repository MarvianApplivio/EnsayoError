module "vpc" {
  source = "terraform-aws-modules/vpc/aws"
  version = "3.11.3"

  name = "nh-staging"
  cidr = "200.0.0.0/16"

  azs             = ["us-east-1a", "us-east-1b", "us-east-1c"]
  private_subnets = ["200.0.1.0/24", "200.0.2.0/24", "200.0.3.0/24"]
  public_subnets  = ["200.0.101.0/24", "200.0.102.0/24", "200.0.103.0/24"]

  enable_nat_gateway = true
  single_nat_gateway = true
  one_nat_gateway_per_az = false
  enable_dns_hostnames = true
  enable_dns_support   = true

  tags = {
    environment = "staging",
    terraform = "yes",
    project = "nursing-home"
  }

}