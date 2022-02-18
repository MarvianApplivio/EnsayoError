resource "aws_ssm_parameter" "nh_private_subnets_id" {
  name        = "/nh/vpc/staging/private_subnets_id"
  description = "Id of privates subnets of vpc nh-staging"
  type        = "StringList"
  value       = join(",", module.vpc.private_subnets)
}

resource "aws_ssm_parameter" "nh_vpc_id" {
  name        = "/nh/vpc/staging/id"
  description = "Id of vpc nh-staging"
  type        = "String"
  value       = module.vpc.vpc_id
}


resource "aws_ssm_parameter" "sg_ids" {
  name        = "/nh/sg/staging/self_access"
  description = "Id of security group to allow self access"
  type        = "StringList"
  value       = module.self_access_sg.security_group_id
}