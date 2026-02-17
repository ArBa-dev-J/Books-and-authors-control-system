BEGIN;


CREATE TABLE IF NOT EXISTS public.authors
(
    id integer NOT NULL DEFAULT nextval('authors_id_seq'::regclass),
    name character varying COLLATE pg_catalog."default" NOT NULL,
    "birthDate" date NOT NULL,
    biography text COLLATE pg_catalog."default",
    CONSTRAINT authors_pkey PRIMARY KEY (id)
);

CREATE TABLE IF NOT EXISTS public.books
(
    id integer NOT NULL DEFAULT nextval('books_id_seq'::regclass),
    title character varying COLLATE pg_catalog."default" NOT NULL,
    summary text COLLATE pg_catalog."default",
    "authorId" integer NOT NULL DEFAULT nextval('"books_authorId_seq"'::regclass),
    CONSTRAINT books_pkey PRIMARY KEY (id)
);

ALTER TABLE IF EXISTS public.books
    ADD FOREIGN KEY ("authorId")
    REFERENCES public.authors (id) MATCH SIMPLE
    ON UPDATE NO ACTION
    ON DELETE CASCADE
    NOT VALID;

END;