begin;

create table
    if not exists public.authors (
        id integer generated always as identity primary key,
        name varchar not null,
        "birthdate" date not null,
        biography text
    );

create table
    if not exists public.books (
        id integer generated always as identity primary key,
        title varchar not null,
        summery text,
        "authorId" integer not null,
        constraint fk_author foreign key ("authorId") references public.authors (id) on delete cascade
    );

commit;