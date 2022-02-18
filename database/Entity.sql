create table country (
country_id int not null,
cou_name varchar,
cou_short_name varchar,
cou_country_code varchar,
CONSTRAINT PK_country PRIMARY KEY(country_id)
);


create table address (
address_id int not null,
add_state varchar,
add_fisrt_line varchar,
add_second_line varchar,
add_zip_code varchar,
add_country_fk int,
constraint PK_address primary key (address_id),
constraint FK_country foreign key (add_country_fk) references country (country_id)
);



CREATE TABLE trust (
trust_id int not null ,
tru_name varchar ,
tru_web_page varchar ,
tru_email varchar unique ,
tru_create_at int ,
tru_deleted_at int ,
tru_deleted_by_fk int ,
tru_created_by_fk int ,
tru_address_fk int,
CONSTRAINT PK_trust PRIMARY KEY(trust_id),
constraint FK_address foreign key (tru_address_fk) references address(address_id)
);


CREATE TABLE project (
project_id int not null ,
pro_name varchar ,
pro_web_page varchar ,
pro_created_at int ,
pro_deleted_at int ,
pro_deleted_by_fk int ,
pro_created_by_fk int ,
pro_address_fk int,
pro_trust_fk int,
CONSTRAINT PK_project PRIMARY KEY(project_id),
constraint FK_address foreign key (pro_address_fk) references address(address_id),
constraint FK_trust foreign key (pro_trust_fk) references trust (trust_id)
);

CREATE TABLE nursing_home (
nursing_home_id int not null,
nur_legal_name varchar ,
nur_comercial_name varchar ,
nur_web_page varchar ,
nur_email varchar ,
nur_NPI varchar, 
nur_create_at int,
nur_deleted_at int,
nur_deleted_by_fk int,
nur_created_by_fk int,
nur_address_fk int, 
nur_project_fk int,
CONSTRAINT PK_nursing_home PRIMARY KEY(nursing_home_id),
constraint FK_address foreign key (nur_address_fk) references address(address_id),
constraint FK_project foreign key (nur_project_fk ) references project (project_id)
);

CREATE TABLE clinic (
clinic_id int not null,
cli_legal_name varchar,
cli_comercial_name varchar ,
cli_NPI varchar ,
cli_web_page varchar ,
cli_email varchar ,
cli_created_at int,
cli_deleted_at int,
cli_deleted_by_fk int,
cli_created_by_fk int,
cli_project_fk int,
cli_address_fk int,
CONSTRAINT PK_clinic PRIMARY KEY(clinic_id),
constraint FK_address foreign key (cli_address_fk) references address(address_id),
constraint FK_project foreign key (cli_project_fk ) references project (project_id)
);

CREATE TABLE nursing_home_clinic (
nursing_home_clinic_id int not null ,
nhc_nursing_home_fk int,
nhc_clinic_fk int,
CONSTRAINT PK_nursing_home_clinic PRIMARY KEY(nursing_home_clinic_id),
constraint FK_nursing_home foreign key (nhc_nursing_home_fk) references nursing_home (nursing_home_id),
constraint FK_clinic foreign key (nhc_clinic_fk) references clinic (clinic_id)
);

CREATE TABLE phone (
phone_id int not null, 
pho_number varchar ,
pho_extension int ,
pho_is_mobile bool,
pho_nursing_home_fk int , 
pho_project_fk int , 
pho_clinic_fk int, 
CONSTRAINT PK_phone PRIMARY KEY(phone_id),
constraint FK_nursing_home foreign key (pho_nursing_home_fk) references nursing_home (nursing_home_id),
constraint FK_project foreign key (pho_project_fk) references project (project_id),
constraint FK_clinic foreign key (pho_clinic_fk) references clinic (clinic_id)
);


CREATE TABLE action_logs (
action_logs_id int ,
act_action_name varchar ,
act_metadata varchar ,
act_old_value varchar ,
act_new_value varchar ,
act_created_at int, 
act_user_entity_fk int,
CONSTRAINT PK_action_logs PRIMARY KEY(action_logs_id)
);

