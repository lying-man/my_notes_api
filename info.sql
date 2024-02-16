create table folders (
    id serial unique,
    title text not null,
    countNotes int
);

create table note (
    id serial unique,
    content text not null,
    color text not null,
    folder_id int,
    foreign key (folder_id) references folders (id) on delete cascade
);

create table pass (
    passText text not null
);