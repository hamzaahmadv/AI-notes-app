# New Schema instructions 

Use this guide for creating a new schema in the project.

Write the complete code for every step. Do not get lazy. Write everything that is needed.

Your goal is to completely finish whatever the user asks for.

## Steps

1. Create a new schema file in '/db/schema' like 'schema-name.ts'
2. export any new schemas in '/db/schema/index.ts'
3. add the new schema to the '/db/db.ts' file
4. add the queries for the new schema in '/db/queries/schema-name-queries.ts'
5. add the actions for the new schema in '/db/actions/schema-name-actions.ts'
6. generate the new schema with 'db:generate'
7. migrate the new schema with 'db:migrate'

## requirements

- for revalidatepath use the path '/'.
- in schema for user_id use text('user_id').notNull()




