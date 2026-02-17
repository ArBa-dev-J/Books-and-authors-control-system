import { sql } from "../serverConnection.js";

// post new author

export const postNewAuthorM = async (newAuthor) => {
  const { name, birthdate, biography } = newAuthor;

  const author = { name, birthdate, biography };

  const authorPost = await sql`
    insert into "authors" ${sql(author, "name", "birthdate", "biography")}
    returning *
    `;
  return authorPost[0];
};

// get authors with their books

export const authorGetM = async () => {
  return await sql`
  select authors.*, books.title
  from "authors"
  left join "books"
  on authors.id = books."authorId"
  `;
};

// get authors and their book titles by their ids

export const getTopicsByIdM = async ({ id }) => {
  return await sql`
select authors.*, books.title
from "authors"
left join "books"
on authors.id = books."authorId"
where authors.id = ${id}
`;
};
