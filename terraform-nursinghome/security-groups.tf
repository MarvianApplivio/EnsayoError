module "self_access_sg" {
  source  = "terraform-aws-modules/security-group/aws"
  version = "4.8.0"
  
  name        = "nh-self-access"
  description = "Security group to enable access through self rules"
  vpc_id      = module.vpc.vpc_id

  ingress_with_self = [
    {
      rule = "all-all"
    }
  ]
  egress_rules = ["all-all"]

  tags = {
    environment = "staging",
    terraform = "yes",
    project = "nursing-home"
  }

}