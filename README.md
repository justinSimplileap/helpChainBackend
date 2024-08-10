### Create database

```
npx sequelize-cli db:create

```

### FOR MIGRATION

```
creating migration file
npx sequelize-cli migration:generate --name demo-migration-name


Sync table to database
npx sequelize-cli db:migrate


Drop latest table
npx sequelize-cli db:migrate:undo


Drop particular file
npx sequelize-cli db:migrate:undo:all --to 2023122610534-add-columns-to-user-assets.js


add column and drop column
npx sequelize-cli migration:create --name modify_users_add_new_fields

```

### FOR SEEDER

```
1. Running Seeds (npx sequelize-cli db:seed:all)
2. Undoing Seeds
  a. undo the most recent seed: (npx sequelize-cli db:seed:undo)
  b. undo a specific seed: (npx sequelize-cli db:seed:undo --seed name-of-seed-as-in-data)
  c. undo all seeds: (npx sequelize-cli db:seed:undo:all)

```
